import { useState,useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Content, Form } from "./styles.js";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DishTag } from "../../components/DishTag";

import {api} from "../../services/api.js";

import BackArrow from "../../assets/left.svg";
import UploadImg from "../../assets/UploadSimple.svg";


export function ManageDishes() {

const params = useParams();
const [dishname, setDishName] = useState('');
const [dishcategory, setDishCategory] = useState('');
const [dishprice, setDishPrice] = useState('');
const [description,setDescription]= useState('');
const [tags, setTags] = useState([]); 
const [image,setImage]=useState('');
const [charCount, setCharCount] = useState(0);


/* role is to define if the dish have an id,
 and if it has, we know that it can be edited. */
let role = params.id ? true : false;  
    
const navigate = useNavigate();
    
    function handleBack() {
    navigate("/");
}


useEffect(() => {
  const fetchData = async () => {

        api.get('/dishes/details/'+params.id)  .then((res) => {
            
            setDishName(res.data.dishname);
            setDishCategory(res.data.dishcategory);
            setDishPrice(res.data.dishprice);
            setDescription(res.data.description);
            
            setImage(res.data.image);
            setTags(JSON.parse(res.data.tags))
        }).catch(error => {
            console.log(error)
            });

    }
    if(params.id){
    fetchData();
    }

},[])


useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    };

    const form = document.getElementById('form');
    form.addEventListener('keydown', handleKeyDown);

    return () => {
      form.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


const handleDescriptionChange =(e) => {
    const text = e.target.value;
    setDescription(text);
    setCharCount(text.length);
  };


const handleDelete=() => {
  const confirmDelete = window.confirm('Tem certeza que deseja excluir o prato?');
        
  if (confirmDelete) {
    api
      .delete('/dishes/' + params.id)
      .then((res) => {
        alert(res.data.message);
  
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}


const handleSubmit=(e) => {
    e.preventDefault();
     
    const formData = new FormData();
    formData.append('dishname', dishname);
    formData.append('dishcategory', dishcategory);
    formData.append('dishprice', dishprice);
    formData.append('description', description);
    formData.append('tags', JSON.stringify(tags));
    if (image.name){
    formData.append('image', image);
    }

    if(params.id){
        api.put('/dishes/'+params.id, formData)  .then((res) => {
            
            alert(res.data.message)
            handleBack();
            
        }).catch(error => {
            console.log(error)
            });

          
    } else {

    
    api.post('/dishes', formData) .then((res) => {
        
        alert(res.data.message)
        navigate('/');
    }).catch(error => {
        console.log(error)
        });
        }      
}


  return (
    <Container>
      <Header />
      <div className="header">
        <button onClick={handleBack}>
          <img src={BackArrow} style={{ marginRight: "10px" }} />
          <p>voltar</p>
        </button>
      </div>
      <Content>

        {role ? 
        <h1>Editar prato</h1>
         : 
         <>
         <h1 className="desktopTitle">Adicionar prato</h1>
         <h1 className="mobileTitle">Novo prato</h1>
         </>
         }
 


<Form id='form' onSubmit={handleSubmit}>
      
      <div className="container">
        <div className="dishImage">
           <span>Imagem do Prato </span>
          <label htmlFor="image" className={(image?'':'image-required')}>
           <img src={UploadImg} />
             {image? image.name? image.name : image : "Selecione imagem" }
          </label>
              
         <input
             id="image"
             type="file"
             accept="image/*"
             name="image"
             onChange={e => setImage(e.target.files[0])}
             required={!role}
          />
        </div>

        <div className="dishName">
           <span>Nome</span>
           <input
             type="text"
             value={dishname}
             onChange={(e) => setDishName(e.target.value)}
             placeholder="Ex.: Salada Ceasar"
             required
           />
        </div>

        <div className="dishCategory">
           <span>Categoria</span>
           <select
             value={dishcategory}
             onChange={(e) => setDishCategory(e.target.value)}
             required
           >
            <option value="">Escolha uma</option>
            <option value="1">Pratos</option>
            <option value="2">Sobremesas</option>
            <option value="3">Bebidas</option>
            </select>
            </div>
        </div>



          <div className="container">
            <div className="dishIngredients">
              <span>Ingredientes</span>
              
              <div className="tagsWrapper">
                <DishTag sentTags={tags} handleTags={receivedTags => setTags(receivedTags)}  />
              </div>
            </div>

            <div className="dishPrice">
              <span>Preço</span>

              <input
                type="number"
                value={dishprice}
                onChange={(e) => setDishPrice(e.target.value)}
                placeholder="R$ 00,00"
                required
              />
            </div>
          </div>



          <div className="container">
            <div className="dishDescription">
              <span>Descrição</span>
              
              <textarea 
              required  
              onChange={handleDescriptionChange} 
              value={description} 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              maxLength="250"
              />
             
              <span>{charCount}/250</span>
            </div>
          </div>



          <div className="container">
            <div className="dishButtons">
              {role && <Button title="Excluir prato"  onClick={handleDelete}  className="delete" />}
              
              <Button type='submit' disabled={image ? false : true} title="Salvar alterações" className="save" />
            </div>
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}

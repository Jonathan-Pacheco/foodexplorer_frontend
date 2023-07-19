import { useState,useEffect } from "react";
import { Container, Content, ContentWrapper } from "./styles.js";
import { useNavigate, useParams } from 'react-router-dom';

import { api } from "../../services/api.js";
import { useAuth } from '../../hooks/auth';


import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import BackArrow from "../../assets/left.svg";
import Receipt from "../../assets/receipt.svg";

export function Details() {

// userRole === 1 (user) | userRole === 2 (admin)
const { role } = useAuth();
const userRole = parseInt(role);
 
const params = useParams();
const [dishname, setDishName] = useState('');
const [dishprice, setDishPrice] = useState('');
const [description,setDescription]= useState('');
const [tags, setTags] = useState([]); 
const [image,setImage]=useState('');  
const [quantity,setQuantity]=useState(1);


const dishImage = `${api.defaults.baseURL}/files/${image}`;

const formatCurrency = (value) => {   
  return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
};

  
useEffect(() => {
    const fetchData = async () => {

        api.get('/dishes/details/'+params.id)  .then((res) => {
     
            setDishName(res.data.dishname);
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

},[params.id])
  

  
const navigate = useNavigate();

function handleBack() {
     navigate("/");
}    

function edit(){
    navigate('/managedishes/'+params.id);
}
   


return (
        <Container>
          <Header  />

            <div className="header">
  <button onClick={handleBack}>
  <img src={BackArrow} style={{ marginRight: "10px"}} /><p>voltar</p>
  </button>
           </div>

           <ContentWrapper>
            <Content>

<div className="detailsImage">
{image!=='' &&
<img src={dishImage} />
}
</div>

<div className="detailsContent">

<div className="detailsTexts">
  <h1>{dishname}</h1>
  <p>{description}</p>  
</div>

<div className="detailsTags" >
{tags.map((tag, i) => (
  <div key={i}>{tag}</div>
))}
</div>

<div className="detailsButtons">
  
  {userRole===1 &&
  <>
   <Counter className="counter" sentQuantity={quantity} handleQuantity={receivedQuantity => setQuantity(receivedQuantity)}/>
  <button className="userBtn desktop">
  <p>incluir ∙ {formatCurrency(dishprice * quantity)}</p>
  </button>

  <button className="userBtn mobile">
  <p><img style={{ width: "21px", height: "21px", marginRight: "5px"}} src={Receipt}/> pedir ∙ {formatCurrency(dishprice * quantity)}</p>
  </button>
  </>
} 

{userRole===2 &&
    <Button className="editBtn" title='Editar prato' onClick={edit}/>
  } 
</div>

</div>

            </Content>
            </ContentWrapper>

            <Footer />
        </Container>
    )

}
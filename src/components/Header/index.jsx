import { useNavigate } from 'react-router-dom';
import React,{useState,useEffect} from 'react';

import { Container, Button, ButtonMobile, Input, Logout } from './styles';

import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api.js";

import SideBar from "../SideBar" 
 
import Receipt from "../../assets/receipt.svg";
import LogoHeader from "../../assets/Polygon_Header.svg";
import LogoutImg from "../../assets/logout.svg";

export function Header() {

// userRole === 1 (user) | userRole === 2 (admin)
const { role } = useAuth();
const userRole = parseInt(role);


const [search, setSearch] = useState("") 
const [dishes,setDishes]=useState([]); 

useEffect(() => {
  const fetchData = async () => {
    if (search !== '') {
      api.get('/dishes/' + search)
        .then((res) => {
          setDishes(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setDishes([]); 
    }
  };

  fetchData();
}, [search]);



const navigate = useNavigate();

function handleBack() {
    navigate("/");
  }  
  
  
function detail(id){
    navigate(`/details/${id}`);
 }


const newDish = () => {
    navigate("/managedishes");
    
    window.location.reload();
  };

 
const { signOut } = useAuth();
const handleSignOut = () => {
      const confirm = window.confirm("Tem certeza que deseja sair?")
      if(confirm) {
        
      signOut();
      window.location.href = '/';
    }
      };

    
return (
    <Container>

    <SideBar />
 
    <div className="logoHeader" onClick={handleBack}>
     <img src={LogoHeader}/>

     {userRole===1 && 
      <span>Food explorer</span>
     }

     {userRole===2 && 
     <div className='admin'>
      <span>Food explorer</span>
      <small>admin</small>
     </div>
     }
     </div>
              
          <div className='searchBar'>
          <Input 
          placeholder="Busque por pratos ou ingredientes" 
          type="text"
          value={search}
          onChange={e => {setSearch(e.target.value)}}
          />


         <ul className='list'>
        {dishes.map((dish, index) => (
           <li  key={index} onClick={()=>detail(dish.id)}> 
              <button >
              <p className="dishList">{dish.dishname}</p>
              </button> 
           </li>
        ))}
        </ul>

          </div>
      

{userRole===1 && 
   <Button>
    <img src={Receipt}/> <p>Pedidos (0)</p>
   </Button>
}

{userRole===1 && 
   <ButtonMobile>
    <img src={Receipt}/> <p>0</p>
   </ButtonMobile>
}

{userRole===2 && 
   <Button onClick={newDish} style={{ height: 48}}>
    <p>Novo prato</p>
   </Button>
}

  <Logout onClick={handleSignOut}>
  <img src={LogoutImg}/>
  </Logout>
 
    </Container>
);
}
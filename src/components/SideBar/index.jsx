import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { SidebarContainer, ToggleButton, SidebarContent, Input } from "./styles";

import { useAuth } from '../../hooks/auth';
import {api} from "../../services/api.js";

import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const SideBar = () => {

// userRole === 1 (user) | userRole === 2 (admin)
const { role } = useAuth();
const userRole = parseInt(role);

const [collapsed, setCollapsed] = useState(true);
const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  
const toggleCollapse = () => {
    setCollapsed(!collapsed);
    setIsMenuOpen(!isMenuOpen);
  };


const { signOut } = useAuth();
const handleSignOut = () => {
    const confirm = window.confirm("Tem certeza que deseja sair?")
    if(confirm) {
      
    signOut();
    window.location.href = '/';
  }
    };


const navigate = useNavigate();
    
function detail(id){
    setCollapsed(true);
    setIsMenuOpen(false);
    navigate(`/details/${id}`);
};


function newDish() {
    navigate("/managedishes");
    setCollapsed(true);
    setIsMenuOpen(false);
};


 return (
    <SidebarContainer  className={collapsed ? "collapsed" : ""}>
    
      <ToggleButton onClick={toggleCollapse}>
        <button style={{ background: "transparent", border: "none", padding: "0" }}>
        {isMenuOpen ? (
            <img src={Close} alt="Fechar" />
          ) : (
            <img src={Menu} alt="Menu" />
          )}
          </button> 
      </ToggleButton>

      {!collapsed && (
        <SidebarContent>
          <div className="sidebarHeader">
            <p>Menu</p>
          </div>

          <Input 
          placeholder="Busque por pratos ou ingredientes" 
          type="text"
          value={search}
          onChange={e => {setSearch(e.target.value)}}
          >
          </Input>

        <div className="list">
      <ul>
        {dishes.map((dish, index) => (
           <li  key={index} onClick={()=>detail(dish.id)}> 
              <button >
              <p className="dishList">{dish.dishname}</p>
              </button> 
           </li>
        ))}
     
       { userRole===2 &&
      <li>
          <button onClick={newDish}>
          <p>Novo Prato</p>
          </button>
       </li>
           }

       <li>
          <button onClick={handleSignOut}>
            <p>Sair</p>
          </button>
       </li>

      </ul>
      </div>
        </SidebarContent>
      )}

    </SidebarContainer>
  );
};

export default SideBar;

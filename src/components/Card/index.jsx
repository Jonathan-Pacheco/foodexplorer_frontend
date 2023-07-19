import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Content, UserCard } from './styles.js'

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api.js';

import { Button } from "../Button";
import { Counter } from "../Counter";

import Pencil from "../../assets/pencil.svg";
import Heart from "../../assets/heart.svg";
 

export function Card  ({ data }) {

  // userRole === 1 (user) | userRole === 2 (admin)
  const { role } = useAuth();
  const userRole = parseInt(role);

  const [quantity,setQuantity]=useState(1);

  const dishImage = `${api.defaults.baseURL}/files/${data.image}`;

  
  const formatCurrency = (value) => {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        });
      };


  const navigate = useNavigate();

  function detail(id){
        navigate(`/details/${id}`, { state: { data } });
    }

  function edit(id){
      navigate('/managedishes/'+id);
    }
    


  return (
    <Container>
      <Content>
        <div className="container">

        {userRole===1 ? 
        <button className="top-btn">
            <img src={Heart} />
        </button>
         :
        <button className="top-btn" onClick={()=>edit(data.id)}>
            <img src={Pencil} />
        </button>
         }

            <img src={dishImage} alt="Imagem do prato" />

            <h3 className="product-name" onClick={()=>detail(data.id)}>{data.dishname}{' >'}</h3>

            <p className="desc">{data.description}</p>

            <h1 className="price">{formatCurrency(data.dishprice * quantity)}</h1>

        {userRole===1 && 
          <UserCard>
            <div className="user-btns" >    
            <Counter sentQuantity={quantity} handleQuantity={receivedQuantity => setQuantity(receivedQuantity)}/>
                  
              <Button 
                className="insert-btn"
                title="incluir"
                />
            </div>
          </UserCard>
        }
         
        </div>
    </Content>
    </Container>
  );
};


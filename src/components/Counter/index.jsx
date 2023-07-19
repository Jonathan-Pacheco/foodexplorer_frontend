import React, { useState, useEffect } from 'react';

import { Container } from './styles.js';

import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";

export function Counter ({ sentQuantity, handleQuantity}) {
const [quantity, setQuantity] = useState(1);

useEffect(() => {
    setQuantity(sentQuantity);
      
}, [sentQuantity]);
    

   
const increase = () => {
    setQuantity(count => count + 1);
    handleQuantity(count => count + 1);
};
      
const decrease = () => {
    if (quantity < 2) {
        return;
    }
    setQuantity(count => count - 1);
    handleQuantity(count => count - 1);
         
};

return (
    <Container>
             
          <button className="minus-btn" onClick={decrease}>
          <img src={Minus}/>
          </button>
              
    <span>{quantity.toString().padStart(2, '0')}</span>
              
          <button className="plus-btn" onClick={increase}>
          <img src={Plus}/>
          </button>
          
    </Container>
);

};
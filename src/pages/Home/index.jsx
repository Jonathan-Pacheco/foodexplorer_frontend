import React,{useState,useEffect} from 'react';

import { Container, Banner, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";

import {api} from "../../services/api.js";

import Flavors from "../../assets/flavors.png";
import FlavorsMobile from "../../assets/Flavors_2.png";


export function Home() {
   
    const [search, setSearch] = useState("") 
    const [dishes,setDishes]=useState([]); 
    useEffect(() => {
        const fetchData = async () => { 
            api.get('/dishes/'+search ) .then((res) => { 
                setDishes(res.data) 
            }).catch(error => {
                console.log(error)
                }) 
        } 
        fetchData(); 
    },[search])
 
    return(
        <Container> 
            <Header  search={setSearch}/>

<Content>
          <Banner>
<img className='mobile' src={FlavorsMobile} />
<img className='desktop' src={Flavors} />
<div className="bannerText">
<h1>Sabores inigualáveis</h1>
<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
</div>
         </Banner>

       <div>
       
        {dishes.length>0 &&
        <>
      <Carousel slides={dishes.filter(item => item.dishcategory ==='1')} title={"Pratos"} />
      <Carousel slides={dishes.filter(item => item.dishcategory ==='2')} title={"Sobremesas"}/>
      <Carousel slides={dishes.filter(item => item.dishcategory ==='3')} title={"Bebidas"}/>
      </>
      }


       </div>
</Content>

            <Footer />
        </Container>
    );
}
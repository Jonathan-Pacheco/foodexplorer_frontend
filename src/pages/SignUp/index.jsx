import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Container, Form, Logo } from "./styles";

import { api } from "../../services/api";

import { Button } from "../../components/Button";

import LogoExplorer from "../../assets/Polygon_Header.svg";


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function validatePassword() {
    var senhaInput = document.getElementById("senha");
    var senha = senhaInput.value;
    
    if (senha.length < 6) {
      senhaInput.setCustomValidity("A senha deve ter no mínimo 6 caracteres");
    } else {
      senhaInput.setCustomValidity(""); 
    }
  }


  function handleSignUp(e) {
     e.preventDefault();


    api.post("/users", { name, email, password})
    .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    })
    .catch(error => {
        if(error.response) {
            alert(error.response.data.message);
        } else {
            alert("Não foi possível realizar o cadastro")
        }

    });
}


    return ( 
      <Container>

   <Logo>
   <img src={LogoExplorer}/>
   <span>Food explorer</span>
   </Logo>

     <Form id='form_base' onSubmit={handleSignUp}>
    <h1>Crie sua conta</h1>
   
<label htmlFor="nome">Seu nome</label> 
<input 
id="nome"
placeholder="Exemplo: Maria da Silva"
type="text"
onChange={e => setName(e.target.value)}
required
>

</input>

<label htmlFor="senha">Email</label> 
<input 
id="email"
placeholder="Exemplo: exemplo@exemplo.com.br"
type="email"
onChange={e => setEmail(e.target.value)}
required
>
</input>

<label htmlFor="senha">Senha</label> 
<input 
id="senha"
placeholder="No mínimo 6 caracteres"
type="password"
onChange={e => setPassword(e.target.value)}
onInput={validatePassword}
required
>
</input>

<Button title="Criar conta" type="submit"  form='form_base' />

<Link to="/">
    Já tenho uma conta
</Link>
            </Form>
    
     </Container>
    )
  }
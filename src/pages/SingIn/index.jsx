import { useState } from 'react';
import { Link } from 'react-router-dom';

import {Container, Form, Logo } from "./styles";

import { Button } from "../../components/Button";

import { useAuth } from '../../hooks/auth';

import LogoExplorer from "../../assets/Polygon_Header.svg";

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { signIn } = useAuth();
  function handleSignIn(e){
        
            e.preventDefault();

        signIn({ email, password });

    }

    
    return ( 
      <Container>
        
     <Logo>
   <img src={LogoExplorer}/>
   <span>Food explorer</span>
   </Logo>

     <Form id='form_base' onSubmit={handleSignIn}>
    <h1>Faça login</h1>
   

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
required
>
</input>

<Button title="Entrar" type="submit"  form='form_base' />

<Link to="/register">
    Criar uma conta
</Link>
            </Form>
    
     </Container>
    )
  }
import { Container } from './styles';

import LogoFooter from "../../assets/Polygon_Footer.svg";


export function Footer() {
    return (
        <Container>
     
     <div className="logoFooter">
     <img src={LogoFooter}/>
     <span>Food explorer</span>
     </div>
 
     <p>© 2023 - Todos os direitos reservados.</p>
    
        </Container>
    );
    }
import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;


@media (max-width: 992px) {
flex-direction: column;   
 }
`;



export const Logo = styled.div`
display: flex;
align-items: center;
margin-left: 10%;

> img {
    width: 4.9rem;
    margin-right: 1.9rem;
}

> span {
    font-family: 'Roboto', sans-serif;
    font-size:clamp(3.7rem, 3vw, 4.2rem);
    font-weight: 700;
}


@media (max-width: 992px) {
justify-content: center;
margin-left: 0;
margin-right: 0;
margin-top: 4rem;
 }


 @media (max-width: 555px) {
    margin-top: 8rem;

    > img {
        width: 3rem;
        margin-right: 1rem;
    }

    > span {
    font-size: 3rem;
   }
 }
`;



export const Form = styled.form`
padding: 6.4rem;

width: 47.6rem;
margin: auto;
margin-right: 10rem;

border-radius: 1.6rem;

display: flex;
flex-direction: column;

background-color: ${( { theme }) => theme.COLORS.DARK_700};

> h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
}


> label {
    font-family: 'Roboto', sans-serif;
    color: ${( { theme }) => theme.COLORS.LIGHT_400};
    font-weight: 100;
    font-size: 1.6rem;
    margin-top: 3.2rem;
    margin-bottom: .8rem;
}

> input {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1.6rem;
    color: ${( { theme }) => theme.COLORS.LIGHT_100};
    background-color: ${( { theme }) => theme.COLORS.DARK_900};

    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;

    border-radius: .5rem;
    border: none;
}


> a {
    text-align: center;
    margin-top: 3.2rem;
    color: ${( { theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 1.4rem;
}

> button {
    margin-top: 3.2rem;
}

@media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 7rem;
    width: 47.6rem;
    padding-top: 2rem;
}

@media (max-width: 555px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    padding: 0 4rem 4rem;
    width: 100%;

    > h1 {
        display: none;
    }
}

@media (max-width: 360px) {
    padding: 0 2rem 4rem;
}
`;

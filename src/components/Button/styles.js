import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
color: ${({ theme }) => theme.COLORS.LIGHT_100};

height: 4.8rem;
border: 0;
padding: 0 1.2rem;
border-radius: .5rem;
font-weight: 500;

font-family: 'Poppins', sans-serif;
font-weight: 100;
font-size: 1.4rem;

&:disabled {
    opacity: 0.5;
}

`;


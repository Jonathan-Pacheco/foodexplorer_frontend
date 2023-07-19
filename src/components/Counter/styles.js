import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
gap: 1.4rem;

> span {
font-family: 'Roboto', sans-serif;
font-size: 2rem;
font-weight: 700;
}

.minus-btn, .plus-btn {
    height: 2rem;
    max-width: 24.6rem;
    white-space: nowrap;
    background-color: transparent;
    border: none;
    transition: scale .1s;
    align-items: center;
    display: flex;
}

.minus-btn:hover, 
.plus-btn:hover {
    scale: 0.9;
}

@media (max-width: 993px) {
    > span {
        font-size: 1.6rem;
        font-weight: 400;
    }
}  
`;
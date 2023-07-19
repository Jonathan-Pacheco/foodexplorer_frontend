import styled from "styled-components";

import DownArrow from "../../assets/chevron-down.svg";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh; 

.header {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;
    margin-top: 12rem;
    margin-bottom: 2rem;
    padding: 0 12.3rem;
    


    > button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
    }  

@media (max-width: 600px) {
    padding: 0 3.2rem;

   
    
    > button {
        font-size: 1.6rem;

        > img {
        width: 8px;
        margin-right: .6rem !important;
    }
    }

}
    
}

`;

export const Content = styled.div`
padding: 0 12.3rem;
padding-bottom: 12rem;
overflow-x: auto;


> h1 { 
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
    }

.mobileTitle {
    display: none;
}

@media (max-width: 600px) {
    padding: 0 3.2rem;
    padding-bottom: 12rem;

    h1 {
        margin-bottom: 1rem;
    }

    .mobileTitle {
    display: inherit;
}

   .desktopTitle {
    display: none;
   }
}

`;

export const Form = styled.form`
display: flex;
flex-direction: column;


span {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
}

input {
        height: 4.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
        padding: 1.2rem 1.6rem;
        border-radius: .8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
}

.container {
   display: flex;
   margin-top: 3.2rem;
   gap: 3.2rem;
   
}

.image-required{
  border: 2px groove;
  border-color: ${({ theme }) => theme.COLORS.TOMATO_100};
}


.dishImage {
    width: 23.4rem;
    flex-shrink: 0;
    display:flex;
    flex-direction: column;
    
    > label {
        height: 4.8rem;
        display: flex;
        align-items: center;
        gap: .8rem;
        padding: 1.2rem 3.2rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: .8rem;
        cursor: pointer;
 
        font-size: 1.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        overflow: hidden;
    }

    > input[type='file'] {
        display: none;
        }
}

.dishName {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    > input {
        outline: none;
    }
}

.dishCategory {
    width: 60%;
    display: flex;
    flex-direction: column;

    > select {
        height: 4.8rem;
        border: none;
        border-radius: .5rem;
        padding: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', sans-serif;
        cursor: pointer;

        appearance:none;
        -webkit-appearance:none; 
        -moz-appearance:none; 
        -ms-appearance:none; 

        background-position: calc(100% - 12px) center !important;
        background: url(${DownArrow}) no-repeat;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
}


.dishIngredients {
    display: flex;
    flex-direction: column;
    width: 100%;

    .tagsWrapper {
        display: flex;
        flex-wrap: wrap;

        height: auto;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: .8rem;

        > div {
           margin-top: .8rem;
           margin-bottom: .8rem;
           margin-right: .8rem;
           margin-left: .8rem;
        }
    }
}

.dishPrice {
    display: flex;
    flex-direction: column;
    width: 20%;

    > input {
        outline: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    }
}

.dishDescription {
display: flex;
flex-direction: column;
width: 100%;

> textarea {
    resize: none;
    height: 17.2rem;
    border-radius: 0.8rem;
    padding: 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    border: none;
    outline: none;
}
}

.dishButtons {
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 3.2rem;
    margin-left: auto;

    .delete {
        width: 13.5rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    .save {
        width: 17.2rem;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
}

@media (max-width: 890px) {
    .container {
        flex-direction: column;
        gap: 2.4rem;
        margin-top: 2.4rem;
    }

    .dishImage,
    .dishPrice,
    .dishCategory {
        width: 100%;
    }

    .dishButtons {
        justify-content: center;

        .delete, .save {
            width: 100%;
        }
    }

    .dishCategory {
        > select {
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
        }
    }
}

`;
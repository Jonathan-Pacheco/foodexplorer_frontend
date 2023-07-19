import styled from "styled-components";

import Search  from "../../assets/search.svg";
import { Link } from "react-router-dom";

export const Container = styled.header`
  z-index: 999;
  height: 10.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
 
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  gap: 3.2rem;

  padding: 0 12.3rem;

.searchBar {
  width: 100%;
  position: relative;

.list::-webkit-scrollbar {
    width: .4rem;
  }

.list {
    position: absolute;
    width: 100%;
    max-height: 14.8rem;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > li:last-child {
      border-bottom: none;
    } 
    
    > li {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      display: block;
      border-bottom: 2px solid;
      border-color: ${({ theme }) => theme.COLORS.DARK_1000};

    > button {
      background-color: transparent;
      border: none;

      > p {
      margin-top: .6rem;
      margin-bottom: .6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.6rem;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 300;
    }
  }
}
    
}
}

.logoHeader {
    
    text-align: center;
    display: flex;
    align-items: center;
    width: 44rem;
    cursor: pointer;

.admin {
     display: flex;
     text-align: right;
     flex-direction: column;
     font-family: 'Roboto', sans-serif;
     margin-top: 1.5rem;

    > span {
        font-size: clamp(1.8rem, 2vw, 2.4rem);
        font-weight: 700;
    }

    > small {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1.2rem;
      
    }

    @media (max-width: 993px) {
      flex-direction: row;
      margin-top: 0;

      > small {
        align-self: center;
        margin-left: .8rem;
        margin-right: 1.8rem;
      }
    }
    }

    > img {
      margin-right: 1.1rem;
      width: clamp(2.2rem, 2vw, 3rem);
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: clamp(1.8rem, 2vw, 2.4rem);
        font-weight: 700;
    }
  }


  @media (max-width: 993px) {
    padding: 0 2.8rem;

  .searchBar {
      display: none;
    }

  .logoHeader {
    width: 100%;
    justify-content: center;
    margin-left: 5.4rem;
    
    }
  }
`;



export const Button = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  
  border: none;
  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 5.6rem;

  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  font-size: 1.4rem;

  > img {
    margin-right: 1.1rem;
  }

  @media (max-width: 993px) {
    display: none;
  }
`;



export const ButtonMobile = styled.button`
 display: none;

 @media (max-width: 993px) {
    display: inherit;
    border: none;
    background-color: transparent;
    position: relative;

    > p {
      position: absolute;
      right: -8px;
      top: -8px;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
`;



export const Input = styled.input`
  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: .5rem;

  outline: none;

  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: clamp(1.4rem, 1vw, 1.6rem);;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position:  5% center;

  @media (max-width: 993px) {
    display: none;
  }
`;



export const Logout = styled.button`
  background-color: transparent;
  border: none;

  @media (max-width: 993px) {
    display: none;
  }
`;


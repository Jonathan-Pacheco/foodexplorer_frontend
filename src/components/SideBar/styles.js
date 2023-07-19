import styled from "styled-components";

import Search  from "../../assets/search.svg";

export const SidebarContainer = styled.div`
  display: none;

  @media (max-width: 993px) {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  transition: width 0.2s;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  z-index: 1000;

  &.collapsed {
    width: 0;
  }

}
`;



export const ToggleButton = styled.div`
  position: absolute;
  top: 4.2rem;
  left: 2.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;



export const SidebarContent = styled.div`
  > .sidebarHeader {
  height: 10.4rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > p {
    margin-left: 6.2rem;
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
}

.list {
  width:90%;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  overflow-y: auto;
  flex-direction: column;
 
  > ul {
    margin-bottom: 100%;

    > li:nth-child(1) > button > p {
    margin-top: 4.6rem;
  }

  .dishList {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  }
}

.list > ul > li {
    
    display: block;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.COLORS.DARK_1000};

    > button {
      background-color: transparent;
      border: none;

      > p {
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 300;
    }
    }
  }

  @media (max-width: 993px) {
    .list::-webkit-scrollbar {
    width: 0rem;
  }
  }
`;



export const Input = styled.input`
  width: 90%;
  height: 4.8rem;
  margin-left: auto;
  margin-right: auto;
  display: block;

  margin-top: 3.6rem;

  border: none;
  border-radius: 5px;

  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position:  4% center;

  @media (max-width: 350px) {
    font-size: 1.4rem;
  }
  
`;


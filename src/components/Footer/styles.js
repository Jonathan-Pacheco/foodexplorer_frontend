import styled from "styled-components";

export const Container = styled.footer`
  z-index: 999;
  position: fixed;
  bottom: 0;

  height: 7.7rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  padding: 2.4rem 12.3rem;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1rem, 2vw, 1.4rem);
    font-style: normal;
    font-weight: 400;
  } 

  @media (max-width: 993px) {
    padding: 2.4rem;
  }

  @media (max-width : 355px) {
    > p {
      font-size: .9rem;
    }
  }

  @media (max-width: 330px) {
    height: 4.5rem;
  }


  .logoFooter {
    display: flex;
    align-items: center;

    > img {
      margin-right: 1.1rem;
      width: clamp(2.2rem, 2vw, 3rem);
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: clamp(1.5rem, 2vw, 2.4rem);
        font-weight: 700;
    }

@media (max-width : 355px) {
  > img {
    margin-right: .8rem;
    width: 1.8rem;
  }

  > span {
    font-size: 1.2rem;
  }

}
  }
`;
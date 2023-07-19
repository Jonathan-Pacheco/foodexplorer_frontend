import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  `;


export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;

  height: 12rem;
  width: 90%;
  border-radius: .3rem;
  margin: 15.8rem auto 0;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  .mobile {
    position: absolute;
    bottom: 0;
    left: -2.4rem;
    width: 19rem;
    height: 15rem;
  }

  .desktop {
    display: none;
    position: absolute;
    bottom: -1.3rem;
    left: -7rem;
    width: clamp(50rem, 50vw, 63.2rem);
  }

  .bannerText {
    max-width: 23rem;
    margin-right: 3%;
    z-index: 2;
    animation: slideIn 1s ease-in-out;


    > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: clamp(1.7rem, 4vw, 4rem);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 140%;
  }

  > P {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 140%; 
  }

  @keyframes slideIn {
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(0);
  }
}

  @media (min-width: 980px) {
   margin-right: 10rem;
  }
  
  @media (min-width: 540px) {
    max-width: 100%;
  }

  @media (max-width: 450px) {
    max-width: 19rem;
  }
  

  @media (max-width: 330px) {
    margin-right: 0%;
  }
  }


  @media (max-width: 1145px) {
    .desktop {
      bottom: -1rem;
    }
  }
 
  @media (min-width: 760px) {
    height: 26rem;
    width: 85%;
    border-radius: .8rem;
    margin: 26.8rem auto 0;

    .mobile {
      display: none;
    }

    .desktop {
      display: inherit;
    }
  }
`;


export const Content = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-bottom: 8rem;
  `;
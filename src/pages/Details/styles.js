import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh; 
font-family: 'Poppins', sans-serif;


.header {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
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
    
    @media (max-width: 993px) {
      padding: 0 3.5rem;
    }
}
`;


export const ContentWrapper = styled.div`
  overflow-x: auto;
`;


export const Content = styled.div`
padding: 0 12.1rem;
padding-bottom: 12rem;
padding-top: 2rem;
display: flex;

.detailsImage {

  > img {
    width: clamp(26rem, 30vw, 39rem);
    height: clamp(26rem, 30vw, 39rem) ;
    border-radius: 50%;
    object-fit: cover;
  }
}

.detailsContent {
  width: 100%;
  padding-left: 4.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;



  > .detailsTexts {
    
    > h1 {
      
      font-size: clamp(2.7rem, 3vw, 4rem);
      font-weight: 500;
      line-height: 140%;  
      margin-bottom: 2.4rem;
      
    }

    > p {
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      font-weight: 400;
      line-height: 140%;
     
    }

  }



  > .detailsTags {
    display: flex;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    flex-wrap: wrap;

    > div {
      font-size: 1.4rem;
      display: flex;
      align-items: center;

      height: 3.2rem;
      padding: 0 1.6rem;

      border-radius: .8rem;
      font-family: 'Roboto', sans-serif;
      background-color: ${({ theme })=> theme.COLORS.LIGHT_600};
      justify-content: space-between;

      margin-right: 1.2rem;
      margin-bottom: 1.2rem;
    }
  }



  > .detailsButtons {
    display: flex;
    align-items: center;
    gap: 3.3rem;

  > .editBtn {
    width: 13.1rem;
  }

  > .userBtn.mobile {
     display: none;
     width: 18.8rem;
     height: 3.7rem;
     font-size: 1rem;
     padding: 1.2rem 1.9rem;

     > p {
      align-items: center;
      display: flex;
     }

    }

    > .userBtn {
      display: flex ;
      justify-content: center;
      align-items: center !important;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border: none;
      border-radius: .5rem;

      padding: 1.2rem 2.4rem;
      width: 16.2rem;

      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
    }

  }
}

@media (max-width: 500px) {
  .detailsButtons {

  > .editBtn {
    width: 100% !important;
  }

 .userBtn.mobile {
  display: inherit !important;
}

.userBtn.desktop {
  display: none;
}
  }
}


@media (max-width: 993px) {
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 12rem;
  padding-top: 2rem;

  .detailsContent {
    padding-left: 0;
    margin-top: 1.6rem;
      }

  .detailsButtons {
    margin-top: 2.4rem;
    gap: 1.6rem !important;
    justify-content: center;
  }

  .detailsTags {
    justify-content: center;
  }
}

`;

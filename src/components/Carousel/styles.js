import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const CarouselContainer = styled.div`
  width: 85%;
  margin: 4.8rem auto;

  > h1 {
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2.3rem;
  }

  @media (max-width: 993px) {
    > h1 {
  font-size: 1.8rem;
  margin-bottom: 2.4rem;
  }
  }

  @media (max-width: 600px) {
    width: 100%;

  
    > h1 {
      margin-left: 2.4rem;
    }
  }

  @media (max-width: 500px) {
    .slick-slider {
    overflow: hidden;
}

    .slick-list {
      margin-right: -130px;
  }

  }
`;


export const Slide = styled.div`
 display: inline-flex;
  align-items: center;
  height: 100%;
  width: 304px !important;
  margin: 0 auto;

  @media (max-width: 993px) {
    width: 210px !important;
    margin: 0 auto;
  }
`;


export const StyledSlider = styled(Slider)`
  .slick-slide > div {
    display: flex;
  }
 
  .slick-next:before, .slick-prev:before {
  display: none !important;
}

.slick-next:before, .slick-prev:before {
  display: none !important;
}

.slick-prev,
.slick-next {
z-index: 10;
}
  
`;


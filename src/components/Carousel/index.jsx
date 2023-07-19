import React, { useState } from 'react';

import { CarouselContainer, Slide, StyledSlider } from './styles';

import { Card } from "../Card";

import RightArrow from "../../assets/right.svg";
import LeftArrow from "../../assets/left.svg"

export function Carousel ({ slides, title }) {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  const responsiveSettings = [
    {
      breakpoint: 600, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
       
      },
    },
    {
      breakpoint: 993, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       
      },
    },
    {
      breakpoint: 1120, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
       
      },
    },
    {
      breakpoint: 1500, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];

  
  const cards = slides;
  const totalCards = cards.length;

  const settings = {
    dots: false,
    infinite: totalCards>4?true:false,
    speed: 200,
    slidesToShow: Math.min(4, totalCards),
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }; 


  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (

      <div
        className={className}
        onClick={onClick}
        style={{ ...style, 
          display: window.innerWidth < 600 ? 'none' : 'block',
          background: "linear-gradient(to left, transparent 0%, #000A0F 100%)",
          height:"100%",
          width:"150px"
           }} 
      >
     <div
        style={{ 
          width: "100%",
          height: "100%",
          backgroundImage: `url(${LeftArrow})`,
          backgroundSize: '10%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '30%',
        }}
      />
        </div>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (

      <div
        className={className}
        style={{ ...style, 
          display: window.innerWidth < 600 ? 'none' : 'block',
          background: "linear-gradient(to right, transparent 0%,   #000A0F 100%)",
          height:"100%",
          width:"150px"
           }} 
        onClick={onClick}
      >
     <div
        style={{ 
          width: "100%",
          height: "100%",
          backgroundImage: `url(${RightArrow})`,
          backgroundSize: '10%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '70%',
        }}
      />
        </div>
    );
  }
 

  return (
    <CarouselContainer>
      <h1>{title}</h1>
    <StyledSlider {...settings} responsive={responsiveSettings}>
      {slides.map((slide, index) => (
     
       <Slide key={index}>
          <Card data={slide} />
        </Slide>
        
      ))}
    </StyledSlider>
  </CarouselContainer>
  );
};



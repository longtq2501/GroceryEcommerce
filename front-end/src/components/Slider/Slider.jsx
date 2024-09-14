import React from "react";
import styled from "styled-components";
import Image1 from "../../assets/slider/image-1.png";
import Image1Big from "../../assets/slider/image-1-big.png";

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = () => {
  const listSlider = [{ image: Image1, imageBig: Image1Big }];

  // console.log(listSlider);

  return (
    <SliderContainer className="max-w-[1280px] mx-[20px] lg:mx-auto lg:px-[25px] xl:px-[0px]">
      {Object.values(listSlider).map((item, index) => (
        <picture className="w-full object-cover" key={index}>
          <source media="(min-width: 1024px)" srcSet={item.imageBig} />
          <img
            key={index}
            src={item.image}
            alt="slider1"
            className="w-[100%] object-cover"
          />
        </picture>
      ))}
    </SliderContainer>
  );
};

export default Slider;

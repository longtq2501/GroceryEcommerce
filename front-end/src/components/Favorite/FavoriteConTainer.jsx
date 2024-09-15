import React, { useState } from "react";
import styled from "styled-components";
import FavoriteItemWrapper from "./FavoriteItemWrapper";
import NonTickIcon from "../../assets/favorite/nontick-icon.svg";
import TickedIcon from "../../assets/favorite/ticked-icon.svg";

const Container = styled.section`
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const Title = styled.h2`
  color: #1a162e;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
`;

const Desc = styled.span`
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 146.667%;
`;

export default function FavoriteConTainer(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((click) => !click);
  };

  return (
    <Container
      className="max-w-[1280px] lg:w-full mx-[20px] lg:mx-auto flex flex-col p-[16px] 
    md:p-[24px] lg:p-[30px] gap-[16px] lg:gap-[30px]"
    >
      <div className="flex flex-col gap-[6px]">
        <Title>Favourite List</Title>
        <Desc>3 items</Desc>
      </div>
      <div className="w-[18.5px] relative" onClick={handleClick}>
        <img
          src={NonTickIcon}
          alt="nontick"
          className={`${click ? "hidden" : "block"}`}
        />
        <img
          src={TickedIcon}
          alt="ticked"
          className={`${click ? "block" : "hidden"}`}
        />
      </div>
      <FavoriteItemWrapper clickAll={handleClick} />
    </Container>
  );
}

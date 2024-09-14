import React from "react";
import styled from "styled-components";

import PlusIcon from "../../assets/product/plus-icon.svg";

const Container = styled.button`
  border-radius: 1rem;
  border: 1px dashed #d2d1d6;
  padding: 5.6rem 8.9rem;

  &.active {
    opacity: 0.8;
  }
`;

const Desc = styled.span`
  color: #d2d1d6;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
`;

const ButtonAddNewCard = (props) => {
  return (
    <Container>
      <div className="flex flex-col gap-[14px] items-center">
        <img src={PlusIcon} alt="plus" className="w-[20px] h-[20px]" />
        <Desc>Add New Card</Desc>
      </div>
    </Container>
  );
};

export default ButtonAddNewCard;

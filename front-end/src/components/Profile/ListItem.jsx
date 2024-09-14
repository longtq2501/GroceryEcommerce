import React from "react";
import styled from "styled-components";

import Button from "../../components/Button/Button";

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const ListItem = (props) => {
  return (
    <Container>
      <div>
        <img
          src={props.image}
          alt={props.title}
          className="w-[130px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <h4 className="text-[14px] leading-[20px] font-[500] text-[#1A162E] lg:text-[15px] lg:leading-[22px]">
          {props.title}
        </h4>
        <div className="flex flex-col gap-[10px] md:flex-row md:items-center md:gap-[20px]">
          <span className="text-[#1A162E] text-[18px] leading-[26px] font-[500] lg:text-[22px] lg:leading-[32px]">
            {props.price}
          </span>
          <Button className="button--border-radius">Add to cart</Button>
        </div>
      </div>
    </Container>
  );
};

export default ListItem;

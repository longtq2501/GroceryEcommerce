import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";
import AddressItem from "./AddressItem";
import PlusIcon from "../../assets/product/plus-icon.svg";

const Separate = styled.div`
  height: 0.1rem;
  background: #9e9da8;
`;

const Title = styled.h3`
  color: #1a162e;
  font-weight: 500;
`;

const Text = styled.p`
  color: #1a162e;
  font-weight: 400;
`;

const ListAddress = (props) => {
  return (
    <article className="grid grid-cols-1 gap-[16px] lg:gap-[30px]">
      <Title className="text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[34px]">
        1. Shipping, arrives between Mon, May 16—Tue, May 24
      </Title>
      <Separate />
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[16px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-[4px]">
            <Title className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px]">Shipping address</Title>
            <Text className="text-[14px] leading-[20px] md:text-[15px] md:leading-[22px]">
              Where should we deliver your order?
            </Text>
          </div>
          <div className="flex flex-col gap-[30px]">
            <Button className="button--border-radius">
              <img src={PlusIcon} alt="plus-icon" />
              Add a new address
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          {props.children}
        </div>
      </div>
    </article>
  );
};

export default ListAddress;

import React from "react";
import styled from "styled-components";

import Image1 from "../../assets/product/image-1.png";
import HeartIconLight from "../../assets/product/heart-icon-light.svg";
import BinIcon from "../../assets/product/bin-icon.svg";
import MinusIcon from "../../assets/product/minus-icon.svg";
import PlusIcon from "../../assets/product/plus-icon.svg";

import Button from "../../components/Button/Button";

const SubSeparate = styled.div`
  width: 1px;
  height: 80%;
  background: #9e9da8;
`;

const Title = styled.h3`
  color: #1a162e;
  font-weight: 500;
`;

const TextPriceState = styled.span`
  color: #9e9da8;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.6rem;
  &.stock {
    color: #67b044;
  }
`;

const TextPrice = styled.span`
  color: #1a162e;
  font-weight: 700;
`;

const TextCount = styled.span`
  color: #1a162e;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  width: fit-content;
  border-radius: 1rem;
  border: 1px solid #d2d1d6;
`;

const ProductSelected = () => {
  const listProduct = [
    {
      image: Image1,
      title: "Coffee Beans - Espresso Arabica and Robusta Beans",
      owner: "Lavazza",
      price: "$47.00",
      state: "In Stock",
    },
    {
      image: Image1,
      title: "Coffee Beans - Espresso Arabica and Robusta Beans",
      owner: "Lavazza",
      price: "$47.00",
      state: "In Stock",
    },
    {
      image: Image1,
      title: "Coffee Beans - Espresso Arabica and Robusta Beans",
      owner: "Lavazza",
      price: "$47.00",
      state: "In Stock",
    },
    {
      image: Image1,
      title: "Coffee Beans - Espresso Arabica and Robusta Beans",
      owner: "Lavazza",
      price: "$47.00",
      state: "In Stock",
    },
  ];

  return Object.values(listProduct).map((item, index) => (
    <div
      key={index}
      className="flex flex-row gap-[16px] bg-[#fff]
       border-b-[1px] border-b-[#D2D1D6] pb-[16px] lg:gap-[30px]"
    >
      {/*  */}
      <div className="w-[60px] h-[60px]">
        <img src={item.image} alt={item.title} className="object-cover" />
      </div>
      {/*  */}
      <div className="flex flex-col gap-[16px] lg:flex-row lg:justify-between lg:items-end">
        <div className="flex flex-col gap-[16px]">
          <Title className="text-[14px] leading-[142.857%] lg:text-[18px] lg:leading-[144.444%]">
            {item.title}
          </Title>
          <div className="flex flex-row items-center gap-[10px]">
            <TextPriceState>{item.price}</TextPriceState>
            <SubSeparate />
            <TextPriceState className="stock">{item.state}</TextPriceState>
          </div>
          <div className="flex flex-col gap-[10px]">
            <TextCount>{item.owner}</TextCount>
            <CountContainer>
              <img src={MinusIcon} alt="minus-icon" />
              <TextCount>1</TextCount>
              <img src={PlusIcon} alt="plus-icon" />
            </CountContainer>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-[13px] lg:h-full lg:justify-between">
          <TextPrice className="text-[18px] leading-[26px] lg:text-[22px] lg:leading-[36px] lg:text-right">
            {item.price}
          </TextPrice>
          <div className="flex flex-row items-center gap-[20px]">
            <Button className="button--secondary">
              <img src={HeartIconLight} alt="heart-icon-light" />
              Save
            </Button>
            <Button className="button--secondary">
              <img src={BinIcon} alt="bin-icon" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  ));
};
export default ProductSelected;

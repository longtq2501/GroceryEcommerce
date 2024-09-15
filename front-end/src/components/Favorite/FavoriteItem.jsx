import { React, useState } from "react";
import styled from "styled-components";

import Image1 from "../../assets/product/image-1.png";
import HeartLikedIcon from "../../assets/product/heart-liked-icon.svg";
import BinIcon from "../../assets/product/bin-icon.svg";
import MinusIcon from "../../assets/product/minus-icon.svg";
import PlusIcon from "../../assets/product/plus-icon.svg";

import NonTickIcon from "../../assets/favorite/nontick-icon.svg";
import TickedIcon from "../../assets/favorite/ticked-icon.svg";

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

const FavoriteItem = ({ clickAll }) => {
  const [click, setClick] = useState(-1);

  const handleClick = (index) => {
    setClick((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

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
      className="grid grid-cols-12 gap-[14px] bg-[#fff]
       border-b-[1px] border-b-[#D2D1D6] pb-[16px] lg:gap-[30px]"
    >
      <div
        className="w-[18.5px] h-[18.5px] relative"
        onClick={() => handleClick(index)}
      >
        <img
          src={NonTickIcon}
          alt="nontick"
          className={`w-[18.5px] h-[18.5px] ${
            click[index] ? "hidden" : "block"
          }`}
        />
        <img
          src={TickedIcon}
          alt="ticked"
          className={`w-[18.5px] h-[18.5px] ${
            click[index] ? "block" : "hidden"
          }`}
        />
      </div>
      {/*  */}
      <div className="col-span-4 lg:col-span-3">
        <img src={item.image} alt={item.title} className="object-cover" />
      </div>
      {/*  */}
      <div className="col-span-7 lg:col-span-8 flex flex-col gap-[16px] lg:flex-row lg:justify-between lg:items-end">
        <div className="flex flex-col gap-[16px] lg:h-full lg:justify-evenly">
          <Title className="text-[14px] leading-[142.857%] lg:text-[18px] lg:leading-[144.444%]">
            {item.title}
          </Title>
          <div className="flex flex-row items-center gap-[10px]">
            <TextPriceState>{item.price}</TextPriceState>
            <SubSeparate />
            <TextPriceState className="stock">{item.state}</TextPriceState>
          </div>
          <div className="flex flex-col gap-[16px] lg:flex-row lg:items-center">
            <TextCount>{item.owner}</TextCount>
            <CountContainer>
              <img src={MinusIcon} alt="minus-icon" />
              <TextCount>1</TextCount>
              <img src={PlusIcon} alt="plus-icon" />
            </CountContainer>
            <div className="flex flex-col items-start gap-[16px] w-fit sm:flex-row">
              <Button className="button--secondary relative w-full p-[25px]">
                <img
                  src={HeartLikedIcon}
                  alt="heart-icon-light"
                  className="absolute top-[11px]"
                />
              </Button>
              <Button className="button--secondary">
                <img src={BinIcon} alt="bin-icon" />
                Delete
              </Button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-[13px] lg:h-full lg:justify-between">
          <TextPrice className="text-[18px] leading-[26px] lg:text-[22px] lg:leading-[36px] lg:text-right">
            {item.price}
          </TextPrice>
          <Button className="button--border-radius">Check Out</Button>
        </div>
      </div>
    </div>
  ));
};
export default FavoriteItem;

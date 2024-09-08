import React, { useState } from "react";
import styled from "styled-components";

import Image1 from "../../assets/product/image-1.png";
import Image2 from "../../assets/product/image-2.png";
import StarRate from "../../assets/product/star-rate.svg";
import HeartIcon from "../../assets/product/heart-icon.svg";
import HeartLikedIcon from "../../assets/product/heart-liked-icon.svg";

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;
  background: #fff;
  height: 100%;
  /* min-width: 31.2rem;
  width: 100%; */
  border-radius: 2rem;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const ProductImage = styled.img`
  width: 28rem;
  height: 28.4rem;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  color: #1a162e;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* width: 28rem; */
`;

const ProductOwner = styled.span`
  color: #9e9da8;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 146.667%;
`;

const ProductPriceAndRate = styled.span`
  color: #1a162e;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
`;

const ProductHeartContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  fill: #fff;
  box-shadow: 0px 20px 60px rgba(124, 124, 124, 0.2);
  right: 16px;
  top: 250px;
`;

const Product = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(clicked => !clicked);
  };

  const listProduct = [
    {
      image: Image1,
      title: "Coffee Beans - Espresso Arabica and Robusta Beans",
      owner: "Lavazza",
      price: "$47.00",
      rate: "4.3",
    },
    {
      image: Image2,
      title: "Lavazza Coffee Blends - Try the Italian Espresso",
      owner: "Lavazza",
      price: "$53.00",
      rate: "3.4",
    },
    {
      image: Image2,
      title: "Lavazza Coffee Blends - Try the Italian Espresso",
      owner: "Lavazza",
      price: "$53.00",
      rate: "3.4",
    },
    {
      image: Image2,
      title: "Lavazza Coffee Blends - Try the Italian Espresso",
      owner: "Lavazza",
      price: "$53.00",
      rate: "3.4",
    },
  ];

  return Object.values(listProduct).map((item, index) => (
    <ProductContainer key={index}>
      <ProductHeartContainer onClick={handleClick}>
        <img
          src={HeartIcon}
          alt="heart-icon"
          className={`${!clicked ? "block" : "hidden"}`}
        />
        <img
          src={HeartLikedIcon}
          alt="heart-liked-icon"
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-37%] 
            ${clicked ? "block" : "hidden"}`}
        />
      </ProductHeartContainer>
      <ProductImage src={item.image} alt="" />
      <div className="flex flex-col gap-[16px] flex-1 justify-between">
        <ProductTitle>{item.title}</ProductTitle>
        <div>
          <ProductOwner>{item.owner}</ProductOwner>
          <div className="flex flex-row justify-between items-center">
            <ProductPriceAndRate>{item.price}</ProductPriceAndRate>
            <div className="flex flex-row gap-[10px] items-center">
              <img src={StarRate} />
              <ProductPriceAndRate>{item.rate}</ProductPriceAndRate>
            </div>
          </div>
        </div>
      </div>
    </ProductContainer>
  ));
};

export default Product;

import React from "react";
import styled from "styled-components";

import Image1 from "../../assets/productshow/image-1.png";
import Star from "../../assets/product/star-rate.svg";
import BagIcon from "../../assets/productshow/bag-icon.svg";
import BuyIcon from "../../assets/productshow/buy-icon.svg";
import DocumentIcon from "../../assets/productshow/document-icon.svg";
import HeartIcon from "../../assets/product/heart-icon.svg";

import Button from "../Button/Button";

const FilterFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const FilterTitle = styled.h3`
  color: #1a162e;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
`;

const FilterFormSelectContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.4rem;
  border-radius: 0.6rem;
  border: 1px solid #d2d1d6;
  width: 27.2rem;
  height: 3.5em;
  background: #fff;
  gap: 1.4rem;
`;

const FilterFormSelect = styled.select`
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
  height: inherit;
  border-bottom: inherit;
  border-top: inherit;
  outline: none;
`;

const SmallSeparate = styled.div`
  width: 0.1rem;
  height: 100%;
  background: #d2d1d6;
`;

const FilterTagContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const FilterTag = styled.div`
  padding: 0.6rem 1.2rem;
  border-radius: 0.6rem;
  background: #f8f8fb;
  width: fit-content;
`;

const FilterTagText = styled.span`
  color: #9e9da8;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 142.857%;
`;

const ProductShowWrapper = styled.section`
  display: grid;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const ProductShowImage = styled.div`
  display: flex;
  justify-content: center;
  min-width: 30.3rem;
  width: 100%;
`;

const ProductShowTitle = styled.h3`
  color: #1a162e;
  font-feature-settings: "liga" off, "clig" off;
  font-weight: 700;
`;

const ProductShowRate = styled.span`
  color: #1a162e;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
`;

const ProductShowCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.6rem;
  border: 1px solid #b9babe;
`;

const ProductShowCardPrice = styled.h4`
  color: #000;
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 138.462%;
`;

const ProductShowCardSubPrice = styled.span`
  color: #1a162e;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
`;

const ProductShowCardDiscountContainer = styled.div`
  display: flex;
  padding: 0.2rem 0.8rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    #67b044;
`;

const ProductShowCardDiscount = styled.span`
  color: #67b044;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
`;

const ProductShow = () => {
  const listSize = ["Small", "Medium", "Large"];
  const listAction = [
    {
      icon: DocumentIcon,
      title: "Compare",
    },
    {
      icon: BuyIcon,
      title: "Delivery",
    },
    {
      icon: BagIcon,
      title: "PickUp",
    },
  ];

  return (
    <ProductShowWrapper className="max-w-[1280px] lg:mx-auto mx-[20px] p-[16px] lg:grid-cols-3 gap-[16px] items-center sm:p-[30px] lg:p-[0px] lg:flex-row lg:gap-[30px] lg:border-[5px] lg:rounded-[20px] border-[#F6F6F6]">
      <ProductShowImage>
        <img
          src={Image1}
          alt="image-1"
          className="object-cover lg:col-span-1"
        />
      </ProductShowImage>
      {/*  */}
      <article className="flex flex-col gap-[16px] w-full lg:bg-[#F6F6F6] lg:p-[60px] lg:col-span-2 lg:rounded-r-[15px]">
        <ProductShowTitle className="text-[18px] lg:text-[26px] leading-[144.444%] lg:leading-[138.462%]">
          Coffee Beans - Espresso Arabica and Robusta Beans
        </ProductShowTitle>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-[27px]">
          <FilterFormItem className="sm:col-span-2">
            <div className="flex flex-row gap-[16px] items-center mb-[10px]">
              <img src={Star} alt="star" />
              <ProductShowRate>(3.5) 1100 reviews</ProductShowRate>
            </div>
            <FilterTitle>Size/Weight</FilterTitle>
            <FilterFormSelectContainer>
              <FilterFormSelect className="flex-1">
                <option>500g</option>
              </FilterFormSelect>
              <SmallSeparate />
              <FilterFormSelect className="flex-1">
                <option>gram</option>
              </FilterFormSelect>
            </FilterFormSelectContainer>
            <FilterTagContainer>
              {listSize.map((item, index) => (
                <FilterTag>
                  <FilterTagText key={index}>{item}</FilterTagText>
                </FilterTag>
              ))}
            </FilterTagContainer>
          </FilterFormItem>
          {/*  */}
          <div className="flex flex-col gap-[27px] sm:col-span-2">
            {listAction.map((item, index) => (
              <div key={index} className="flex flex-row gap-[20px]">
                <img src={item.icon} />
                <ProductShowRate>{item.title}</ProductShowRate>
              </div>
            ))}
          </div>
          {/*  */}
          <ProductShowCard className="p-[20px] sm:col-span-4">
            <div className="flex flex-row gap-[10px] items-center">
              <ProductShowCardSubPrice>$500.00</ProductShowCardSubPrice>
              <ProductShowCardDiscountContainer>
                <ProductShowCardDiscount>10%</ProductShowCardDiscount>
              </ProductShowCardDiscountContainer>
            </div>
            <ProductShowCardPrice>$540.00</ProductShowCardPrice>
            <div className="flex flex-row gap-[20px] items-center">
              <Button className="flex-1">Add to cart</Button>
              <Button className="button--secondary">
                <img src={HeartIcon} alt="heart-icon" />
              </Button>
            </div>
          </ProductShowCard>
          {/*  */}
        </div>
      </article>
    </ProductShowWrapper>
  );
};

export default ProductShow;

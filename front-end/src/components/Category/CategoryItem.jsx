import React from "react";
import styled from "styled-components";

import Image1 from "../../assets/category/image-1.png";
import Image2 from "../../assets/category/image-2.png";
import Image3 from "../../assets/category/image-3.png";

const CategoryItemWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
`;

const CategoryItemImage = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  object-fit: cover;
  background: #fff;
  border-radius: 1rem;
`;

const CategoryItemTitle = styled.h3`
  color: #1a162e;
  font-feature-settings: "liga" off, "clig" off;
  font-weight: 700;
`;

const CategoryItemDesc = styled.p`
  color: #1a162e;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 142.857%;
`;

const CategoryItem = () => {
  const listItem = [
    {
      price: "$24 - $150",
      description: "New sumatra mandeling coffe blend",
      image: Image1,
    },
    {
      price: "$37 - $160",
      description: "Espresso Arabica and Robusta Beans",
      image: Image2,
    },
    {
      price: "$32 - $160",
      description: "Lavazza Top Class Whole Bean Coffee Blend",
      image: Image3,
    },

  ];

  return Object.values(listItem).map((item, index) => (
    <CategoryItemWrapper key={index} className="bg-[#fff] lg:bg-[#eee]">
      <CategoryItemImage src={item.image} alt={`${item.price}`} />
      <div className="flex flex-col justify-center">
        <CategoryItemTitle className="text-[18px] lg:text-[22px] leading-[26px] lg:leading-[32px]">
          {item.price}
        </CategoryItemTitle>
        <CategoryItemDesc className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px]">{item.description}</CategoryItemDesc>
      </div>
    </CategoryItemWrapper>
  ));
};

export default CategoryItem;

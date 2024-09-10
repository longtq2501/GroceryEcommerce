import { React, useState } from "react";
import styled from "styled-components";
import UserComment from "../../components/User/UserComment";
import UserCommentContainer from "../User/UserCommentContainer";

const ProductDetailedText = styled.li`
  &.test {
    color: #9e9da8;
    font-weight: 500;
    line-height: 142.857%;
  }

  &.active {
    color: #1a162e;
  }
`;

const ProductDetailsBar = () => {
  const listServices = ["Description", "Features", "Reviews"];
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setActiveIndex((activeIndex) => {
      return activeIndex;
    });
  };

  return (
    <div className="max-w-[1280px] lg:mx-auto flex flex-col gap-[30px] mx-[20px] lg:bg-[#fff]">
      <ul className="flex flex-row gap-[20px]">
        <ProductDetailedText
          onClick={handleClick}
          className={`test text-[14px] md:text-[18px] lg:text-[22px]`}
        >
          Description
        </ProductDetailedText>
        <ProductDetailedText
          onClick={handleClick}
          className={`test text-[14px] md:text-[18px] lg:text-[22px]`}
        >
          Features
        </ProductDetailedText>
        <ProductDetailedText
          onClick={handleClick}
          className={`test text-[14px] md:text-[18px] lg:text-[22px] active`}
        >
          Reviews
        </ProductDetailedText>
      </ul>
      <div>
        <UserCommentContainer>
          <UserComment />
        </UserCommentContainer>
      </div>
    </div>
  );
};

export default ProductDetailsBar;

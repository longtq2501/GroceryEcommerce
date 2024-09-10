import { React, useState } from "react";
import styled from "styled-components";
import UserComment from "../../components/User/UserComment";
import UserCommentContainer from "../User/UserCommentContainer";

const ProductDetailedText = styled.li`
  color: #9e9da8;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;

  &.active {
    color: #1a162e;
  }
`;

const ProductDetailsBar = () => {
  const listServices = ["Description", "Features", "Reviews"];
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-row gap-[20px]">
        {listServices.map((item, index) => (
          <div>
            <ul
              key={index}
              className="flex flex-row"
              onClick={() => handleClick(index)}
            >
              <ProductDetailedText
                className={`${activeIndex === index ? "active" : ""}`}
              >
                {item}
              </ProductDetailedText>
            </ul>
            {index === activeIndex && item === "Reviews" && (
              <UserCommentContainer>
                <UserComment />
              </UserCommentContainer>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsBar;

import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 20px;
`;

const CategoryTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryTitle = styled.h1`
  color: #1a162e;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 141.667%;
`;

const Category = (props) => {
  return (
    <CategoryContainer>
      <CategoryTitleContainer>
        <CategoryTitle>{props.title}</CategoryTitle>
      </CategoryTitleContainer>
      {props.children}
    </CategoryContainer>
  );
};

export default Category;

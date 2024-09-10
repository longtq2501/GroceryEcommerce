import React from "react";
import styled from "styled-components";

import FilterButton from "../Filter/FilterButton";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryTitle = styled.h1`
  color: #1a162e;
  font-weight: 700;
`;

const Category = (props) => {
  return (
    <CategoryContainer className="mx-[20px] lg:mx-auto lg:px-[25px] xl:px-[0px]">
      <CategoryTitleContainer>
        <CategoryTitle className="text-[22px] lg:text-[24px] leading-[145.455%] lg:leading-[141.667%]">
          {props.title}
        </CategoryTitle>
        {props.addFilter ? <FilterButton /> : null}
      </CategoryTitleContainer>
      {props.children}
    </CategoryContainer>
  );
};

export default Category;

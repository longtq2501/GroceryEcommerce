import React from "react";
import styled from "styled-components";

import HeaderNotLogin from "../../layouts/Header/HeaderNotLogin";
import Slider from "../../components/Slider/Slider";
import CategoryItem from "../../components/Category/CategoryItem";
import Category from "../../components/Category/Category";
import CategoryItemContainer from "../../components/Category/CategoryItemContainer";
import Product from "../../components/Category/Product";
import ProductContainer from "../../components/Category/ProductContainer";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1280px;
  margin-bottom: 3rem;
`;

const HomeNotLogin = () => {
  return (
    <div className="bg-[#f6f6f6] w-full flex flex-col gap-[30px] lg:gap-[40px]">
      <HeaderNotLogin />
      <HomeContainer className="lg:mx-auto lg:gap-[40px]">
        {/* slider show */}
        <Slider />
        {/* category */}
        <Category title="Browse Categories">
          <CategoryItemContainer>
            <CategoryItem />
          </CategoryItemContainer>
        </Category>
        {/* category product */}
        <Category title="Total LavAzza 1320" addFilter>
          <ProductContainer>
            <Product />
          </ProductContainer>
        </Category>
      </HomeContainer>
    </div>
  );
};

export default HomeNotLogin;

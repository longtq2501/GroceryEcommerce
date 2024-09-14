import React from "react";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import Slider from "../../components/Slider/Slider";
import CategoryItem from "../../components/Category/CategoryItem";
import Category from "../../components/Category/Category";
import CategoryItemContainer from "../../components/Category/CategoryItemContainer";
import Product from "../../components/Category/Product";
import ProductContainer from "../../components/Category/ProductContainer";

const Home = () => {
  return (
    <MainLayout>
      <Slider />
      <Category title="Browse Categories">
        <CategoryItemContainer>
          <CategoryItem />
        </CategoryItemContainer>
      </Category>
      <Category title="Total LavAzza 1320" addFilter>
        <ProductContainer>
          <Product />
        </ProductContainer>
      </Category>
    </MainLayout>
  );
};

export default Home;

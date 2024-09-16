import React from "react";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import CategoryItemContainer from "../../components/Category/CategoryItemContainer";
import ProductContainer from "../../components/Category/ProductContainer";

const Home = () => {
  return (
    <MainLayout>
      <Slider />
      <Category title="Browse Categories">
        <CategoryItemContainer />
      </Category>
      <Category title="Total LavAzza 1320" addFilter>
        <ProductContainer />
      </Category>
    </MainLayout>
  );
};

export default Home;

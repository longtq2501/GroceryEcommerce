import React from "react";

import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import CategoryItemContainer from "../../components/Category/CategoryItemContainer";
import ProductContainer from "../../components/Category/ProductContainer";
import LayoutNotLogin from "../../layouts/MainLayout/LayoutNotLogin";

const HomeNotLogin = () => {
  return (
    <LayoutNotLogin>
      <Slider />
      <Category title="Browse Categories">
        <CategoryItemContainer />
      </Category>
      <Category title="Total LavAzza 1320" addFilter>
        <ProductContainer />
      </Category>
    </LayoutNotLogin>
  );
};

export default HomeNotLogin;

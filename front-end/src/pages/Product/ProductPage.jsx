import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProductShow from "../../components/ProductShow/ProductShow";
import ProductDetailsBar from "../../components/ProductShow/ProductDetailsBar";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const ProductPage = () => {
  return (
    <MainLayout bgWhite>
      <NavBar />
      <ProductShow />
      <ProductDetailsBar />
    </MainLayout>
  );
};

export default ProductPage;

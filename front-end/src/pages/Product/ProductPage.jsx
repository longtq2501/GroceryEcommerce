import React from "react";
import Header from "../../layouts/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProductShow from "../../components/ProductShow/ProductShow";
import ProductDetailsBar from "../../components/ProductShow/ProductDetailsBar";

const ProductPage = () => {
  return (
    <div className="bg-[#EDEDF6] lg:bg-[#fff] w-full flex flex-col gap-[20px] lg:gap-[30px]">
      <Header />
      <div className="flex flex-col gap-[20px] lg:gap-[30px] lg:mx-[20px]">
        <NavBar />
        <ProductShow />
        <ProductDetailsBar />
      </div>
    </div>
  );
};

export default ProductPage;

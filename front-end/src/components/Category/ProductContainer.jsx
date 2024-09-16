import React from "react";
import Product from "./Product";

const ProductContainer = (props) => {
  return (
    <div
      className="grid grid-cols-1 gap-[30px] items-center 
    justify-center md:grid-cols-2 lg:grid-cols-4"
    >
      <Product />
    </div>
  );
};

export default ProductContainer;

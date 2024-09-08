import React from "react";

const ProductContainer = (props) => {
  return <div className="grid grid-cols-1 gap-[30px] items-center justify-center md:grid-cols-2 lg:grid-cols-4">{props.children}</div>;
};

export default ProductContainer;

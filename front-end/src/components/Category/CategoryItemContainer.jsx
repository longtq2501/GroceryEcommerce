import React from "react";

const CategoryItemContainer = (props) => {
  return <div className="grid gap-[20px] sm:grid-cols-2 
  lg:grid-cols-3">{props.children}</div>;
};

export default CategoryItemContainer;

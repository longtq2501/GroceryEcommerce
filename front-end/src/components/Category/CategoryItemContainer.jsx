import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryItemContainer = (props) => {
  return (
    <div
      className="grid gap-[20px] sm:grid-cols-2 
  lg:grid-cols-3"
    >
      <CategoryItem />
    </div>
  );
};

export default CategoryItemContainer;

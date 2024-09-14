import React from "react";
import ListItem from "./ListItem";
import Image1 from "../../assets/product/image-1.png";

const ListItemContainer = (props) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <ListItem
        title="Coffee Beans - Espresso Arabica and Robusta Beans"
        price="$47.00"
        image={Image1}
      />
      <ListItem
        title="Coffee Beans - Espresso Arabica and Robusta Beans"
        price="$47.00"
        image={Image1}
      />
    </div>
  );
};

export default ListItemContainer;

import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import TotalPrice from "../../components/CheckOut/TotalPrice";
import GiftTag from "../../components/CheckOut/GiftTag";
import ProductSelectedContainer from "../../components/CheckOut/ProductSelectedContainer";
import CheckOutBody from "../../components/CheckOut/CheckOutBody";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const Shipping = () => {
  return (
    <MainLayout>
      <NavBar bgWhite />
      <CheckOutBody>
        <ProductSelectedContainer address title />
        <div className="flex flex-col gap-[20px]">
          <TotalPrice />
          <GiftTag />
        </div>
      </CheckOutBody>
    </MainLayout>
  );
};

export default Shipping;

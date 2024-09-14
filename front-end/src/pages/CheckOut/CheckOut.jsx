import React from "react";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import NavBar from "../../components/NavBar/NavBar";
import TotalPrice from "../../components/CheckOut/TotalPrice";
import GiftTag from "../../components/CheckOut/GiftTag";
import ProductSelectedContainer from "../../components/CheckOut/ProductSelectedContainer";
import CheckOutBody from "../../components/CheckOut/CheckOutBody";

const CheckOut = () => {
  return (
    <MainLayout>
      <NavBar backGroundWhite />
      <CheckOutBody>
        <ProductSelectedContainer />
        <div className="flex flex-col gap-[20px]">
          <TotalPrice />
          <GiftTag />
        </div>
      </CheckOutBody>
    </MainLayout>
  );
};

export default CheckOut;

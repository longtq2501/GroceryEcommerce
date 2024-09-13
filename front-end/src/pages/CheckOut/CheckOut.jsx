import React from "react";

import Header from "../../layouts/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import TotalPrice from "../../components/CheckOut/TotalPrice";
import GiftTag from "../../components/CheckOut/GiftTag";
import ProductSelectedContainer from "../../components/CheckOut/ProductSelectedContainer";
import CheckOutBody from "../../components/CheckOut/CheckOutBody";
import PaymentForm from "../../components/Payment/PaymentForm";

const CheckOut = () => {
  return (
    <div className="bg-[#EDEDF6] lg:bg-[#f6f6f6] w-full flex flex-col gap-[20px] lg:gap-[30px]">
      <Header />
      <div className="flex flex-col gap-[20px] lg:gap-[30px] lg:mx-[20px] mb-[36px]">
        <NavBar backGroundWhite/>
        <CheckOutBody>
          <ProductSelectedContainer />
          <div className="flex flex-col gap-[20px]">
            <PaymentForm />
          </div>
        </CheckOutBody>
      </div>
    </div>
  );
};

export default CheckOut;

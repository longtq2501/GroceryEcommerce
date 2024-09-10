import React from "react";

import Header from "../../layouts/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import TotalPrice from "../../components/CheckOut/TotalPrice";
import CheckOutBody from "../../components/CheckOut/CheckOutBody";

const CheckOut = () => {
  return (
    <div className="bg-[#EDEDF6] lg:bg-[#fff] w-full flex flex-col gap-[20px] lg:gap-[30px]">
      <Header />
      <div className="flex flex-col gap-[20px] lg:gap-[30px] lg:mx-[20px] mb-[36px]">
        <NavBar />
        <CheckOutBody>
          <TotalPrice />
        </CheckOutBody>
      </div>
    </div>
  );
};

export default CheckOut;

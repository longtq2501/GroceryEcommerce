import React from "react";

import Header from "../../layouts/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import TotalPrice from "../../components/CheckOut/TotalPrice";
import GiftTag from "../../components/CheckOut/GiftTag";
import InformationContainer from "../../components/Payment/InformationContainer";
import TagAddressContainer from "../../components/Payment/TagAddressContainer";
import TagPayMethodContainer from "../../components/Payment/TagPayMethodContainer";
import PaymentBody from "../../components/Payment/PaymentBody";

import Brand1 from "../../assets/payment/brand-1.jpg";

const Payment = () => {
  return (
    <div className="bg-[#EDEDF6] lg:bg-[#f6f6f6] w-full flex flex-col gap-[20px] lg:gap-[30px]">
      <Header />
      <div className="flex flex-col gap-[20px] lg:gap-[30px] lg:mx-[20px] mb-[36px]">
        <NavBar backGroundWhite />
        <PaymentBody>
          <div className="col-span-2 grid gap-[20px]">
            <InformationContainer
              title="1. Shipping, arrives between Mon, May 16—Tue, May 24"
              buttonEditor
            >
              <TagAddressContainer
                title="Imran Khan"
                desc="Museum of Rajas, Sylhet Sadar, Sylhet 3100."
                ticked
              />
              <TagAddressContainer
                title="Items details"
                desc="2 items"
                detailed
              />
            </InformationContainer>
            <InformationContainer title="2. Shipping method">
              <TagPayMethodContainer />
            </InformationContainer>
          </div>
          <div className="flex flex-col gap-[20px]">
            <TotalPrice />
            <GiftTag />
          </div>
        </PaymentBody>
      </div>
    </div>
  );
};

export default Payment;

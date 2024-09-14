import React from "react";

import Header from "../../layouts/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import InformationContainer from "../../components/Payment/InformationContainer";
import TagAddressContainer from "../../components/Payment/TagAddressContainer";
import TagPayMethodContainer from "../../components/Payment/TagPayMethodContainer";
import PaymentBody from "../../components/Payment/PaymentBody";
import PaymentForm from "../../components/Payment/PaymentForm";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const Payment = () => {
  return (
    <MainLayout>
      <NavBar backGroundWhite />
      <PaymentBody>
        <div className="col-span-2 grid gap-[20px] h-fit">
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
        <div className="flex flex-col gap-[20px] col-span-1">
          <PaymentForm />
        </div>
      </PaymentBody>
    </MainLayout>
  );
};

export default Payment;

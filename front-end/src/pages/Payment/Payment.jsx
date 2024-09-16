import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import PaymentBody from "../../components/Payment/PaymentBody";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const Payment = () => {
  return (
    <MainLayout>
      <NavBar backGroundWhite />
      <PaymentBody />
    </MainLayout>
  );
};

export default Payment;

import React from "react";
import styled from "styled-components";
import InformationItemWrapper from "./InformationItemWrapper";
import BankCardContainer from "./BankCardContainer";

const Container = styled.section`
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const InformationContainer = (props) => {
  return (
    <Container className="bg-[#fff] max-w-[1280px] p-[16px] lg:p-[30px] flex flex-col gap-[20px] lg:gap-[30px] col-span-4">
      <InformationItemWrapper title="My Wallet" desc="Payment methods">
        <BankCardContainer />
      </InformationItemWrapper>
      <InformationItemWrapper
        title="Account info"
        desc="Addresses, contact information and password"
      ></InformationItemWrapper>
    </Container>
  );
};

export default InformationContainer;

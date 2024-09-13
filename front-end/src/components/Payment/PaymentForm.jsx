import React from "react";
import styled from "styled-components";
import TotalPrice from "../CheckOut/TotalPrice";

const Separate = styled.div``;

const Title = styled.h3`
  color: #1a162e;
  font-weight: 500;
`;

const Desc = styled.p`
  color: #1a162e;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #1a162e;
  font-weight: 500;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  padding: 1.2rem;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid #d2d1d6;
  outline: none;

  &::placeholder {
    color: #d2d1d6;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem; /* 142.857% */
  }
`;

const AnotherInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid #ededf6;
`;

const PaymentForm = () => {
  return (
    <Form className="p-[16px] lg:p-[30px] gap-[20px] lg:gap-[30px] bg-[#fff] rounded-[20px] shadow-[0px_20px_60px_10px_rgba(237, 237, 246, 0.20)]">
      <div className="flex flex-col gap-[6px]">
        <Title className="text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px]">
          Payment Details
        </Title>
        <Desc className="text-[14px] leading-[20px] lg:text-[15px] lg:leading-[22px]">
          Complete your purchase item by providing your payment details order.
        </Desc>
      </div>
      <InputContainer className="gap-[10px] lg:gap-[20px]">
        <Label
          htmlFor="email"
          className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[24px]"
        >
          Email Address
        </Label>
        <Input type="text" id="email" placeholder="example@gmail.com" />
      </InputContainer>
      <InputContainer className="gap-[10px] lg:gap-[20px]">
        <Label htmlFor="card-holder">Card Holder</Label>
        <Input type="text" id="card-holder" placeholder="Imran Khan" />
      </InputContainer>
      <InputContainer className="gap-[10px] lg:gap-[20px]">
        <Label htmlFor="card-details">Card Details</Label>
        <Input type="text" id="card-details" placeholder="Card Number" />
      </InputContainer>
      <AnotherInput>
        <input
          type="text"
          placeholder="MM/YY"
          className="w-[50%] border-r-[#D2D1D6] border-r-[1px] h-full 
          p-[12px] outline-none rounded-l-[10px] border-l-[0px] border-t-[0px] border-b-[0px]"
        />
        <Separate />
        <input
          type="text"
          placeholder="CVC"
          className="w-[50%] h-full p-[12px] outline-none rounded-r-[10px] border-0"
        />
      </AnotherInput>
      <TotalPrice noPaddingContainer />
    </Form>
  );
};

export default PaymentForm;

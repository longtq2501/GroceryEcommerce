import React from "react";
import styled from "styled-components";

import ProductSelected from "./ProductSelected";
import ArrowLeftIcon from "../../assets/checkout/arrow-left-icon.svg";

const Container = styled.article`
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const Separate = styled.div`
  height: 0.1rem;
  background: #d2d1d6;
`;

const Text = styled.div`
  color: #1a162e;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
`;

const AnotherTextTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AnotherTextType = styled.span`
  color: #1a162e;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
`;

const TotalText = styled.span`
  color: #1a162e;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 145.455%;
`;

const ProductSelectedContainer = () => {
  return (
    <Container className="p-[16px] bg-[#fff] grid grid-cols-1 gap-[16px] rounded-[20px] col-span-2">
      <ProductSelected />
      <div className="hidden lg:grid lg:grid-cols-3">
        <div className="flex flex-row items-end col-span-2">
          <a href="#" className="flex flex-row items-center gap-[10px]">
            <img src={ArrowLeftIcon} alt="ArrowLeftIcon" />
            <Text>Continue Shopping</Text>
          </a>
        </div>
        {/*  */}
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <AnotherTextTypeContainer>
              <AnotherTextType>Subtotal:</AnotherTextType>
              <AnotherTextType>$191.65</AnotherTextType>
            </AnotherTextTypeContainer>
            <AnotherTextTypeContainer>
              <AnotherTextType>Subtotal:</AnotherTextType>
              <AnotherTextType>$191.65</AnotherTextType>
            </AnotherTextTypeContainer>
          </div>
          <Separate />
          <div className="flex flex-row justify-between">
            <TotalText>Total:</TotalText>
            <TotalText>$201.65</TotalText>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductSelectedContainer;

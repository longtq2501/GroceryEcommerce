import React from "react";
import styled from "styled-components";

import Button from "../../components/Button/Button";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const Text = styled.span`
  color: #1a162e;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
`;

const SubText = styled.span`
  color: #1a162e;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const TextWeight = styled.span`
  color: #1a162e;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 150%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Separate = styled.div`
  height: 1px;
  background: #d2d1d6;
`;

const TotalPrice = () => {
  const listTotalPrice = [
    {
      subTotal: 3,
      price: "$191.65",
      shipping: "$10.00",
      estimatedTotal: "$201.65",
    },
  ];

  return (
    <Container className="p-[16px] md:p-[20px] lg:p-[30px]">
      {listTotalPrice.map((item, index) => (
        <div key={index} className="flex flex-col gap-[16px]">
          <Row>
            <Text>
              Subtotal <SubText>(items)</SubText>
            </Text>
            <TextWeight>{item.subTotal}</TextWeight>
          </Row>
          <Row>
            <Text>
              Price <SubText>(Total)</SubText>
            </Text>
            <TextWeight>{item.price}</TextWeight>
          </Row>
          <Row>
            <Text>Shipping</Text>
            <TextWeight>{item.shipping}</TextWeight>
          </Row>
          <Separate />
          <Row>
            <Text>Estimated Total</Text>
            <TextWeight>{item.estimatedTotal}</TextWeight>
          </Row>
        </div>
      ))}
      <Button>Continue to checkout</Button>
    </Container>
  );
};

export default TotalPrice;

import React from "react";
import styled from "styled-components";

import GiftImage from "../../assets/checkout/gift-image.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const GiftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 6rem;
  height: 6rem;
  border-radius: 0.6rem;
  background: var(
    --Purple-Purple-10,
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 100%
    ),
    #7644e1
  );
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const GiftTitle = styled.h4`
  color: #1a162e;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
`;

const GiftDesc = styled.p`
  color: #1a162e;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 142.857%;
`;

const GiftTag = () => {
  return (
    <Container className="p-[16px] md:p-[20px] lg:p-[30px] gap-[16px]">
      <GiftContainer className="">
        <img src={GiftImage} alt="gift-image" className="object-cover" />
      </GiftContainer>
      <div className="flex flex-col gap-[10px]">
        <GiftTitle>Send this order as a gift.</GiftTitle>
        <GiftDesc>
          Available items will be shipped to your gift recipient.
        </GiftDesc>
      </div>
    </Container>
  );
};

export default GiftTag;

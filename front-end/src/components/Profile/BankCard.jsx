import React from "react";
import styled from "styled-components";

import PlaneImageBg from "../../assets/profile/plane-image-bg.svg";
import OvalImageBg from "../../assets/profile/oval-image-bg.svg";
import PlaneIcon from "../../assets/profile/plane-icon.svg";

const Container = styled.div`
  position: relative;
  border-radius: 1rem;
  background: #1e2e69;
  padding: 2rem;
`;

const DetailText = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 175%;
`;

const BankCard = (props) => {
  const ListCard = [
    {
      number: "1234 4567 8901 2221",
      owner: "Imran Khan",
      expirationTime: "10/22",
    },
    {
      number: "1234 4567 8901 2221",
      owner: "Imran Khan",
      expirationTime: "10/22",
    },
  ];

  return Object.values(ListCard).map((item, index) => (
    <Container key={index} className="flex flex-col gap-[37px]">
      <img
        src={PlaneImageBg}
        alt="plane"
        className="absolute right-0 bottom-[34px]"
      />
      <img
        src={OvalImageBg}
        alt="oval"
        className="absolute bottom-[20px] right-[20px]"
      />
      <div className="flex flex-row gap-[6px] items-center">
        <img src={PlaneIcon} alt="plane-icon" />
        <span className="text-[#fff] text-[14px] font-[500] leading-[20px]">
          FeatherCard
        </span>
      </div>
      <div className="flex flex-col gap-[20px]">
        <span className="text-[#fff] text-[18px] leading-[26px] font-[500]">
          {item.number}
        </span>
        <div className="flex flex-row gap-[40px]">
          <div className="flex flex-col">
            <DetailText>Card Holder</DetailText>
            <DetailText>{item.owner}</DetailText>
          </div>
          <div className="flex flex-col">
            <DetailText>Expired</DetailText>
            <DetailText>{item.expirationTime}</DetailText>
          </div>
        </div>
      </div>
    </Container>
  ));
};

export default BankCard;

import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TickedIcon from "../../assets/shipping/ticked-icon.svg";
import Brand1 from "../../assets/payment/brand-1.jpg";

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
`;

const Title = styled.h3`
  color: #1a162e;
`;

const Desc = styled.p`
  color: #9e9da8;
  font-weight: 400;
`;

const BrandContainer = styled.img`
  border-radius: 1rem;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const PriceText = styled.span`
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 500; /* 144.444% */
  color: #9e9da8;
  &.active {
    color: #1a162e;
  }
`;

const TagPayMethodContainer = (props) => {
  const [isChecked, setIsChecked] = useState(-1);

  const ListPaymentMethod = [
    {
      brandImage: Brand1,
      title: "Fedex Delivery",
      desc: "elivery: 2-3 days work",
      price: "Free",
    },
    {
      brandImage: Brand1,
      title: "Fedex Delivery",
      desc: "elivery: 2-3 days work",
      price: "$12.00",
    },
  ];

  const handleCheckboxChange = (index) => {
    setIsChecked(isChecked === index ? -1 : index);
  };

  return Object.values(ListPaymentMethod).map((item, index) => (
    <Container
      key={index}
      className="bg-[#FAFAFD] lg:bg-[#f6f6f6] p-[16px] lg:p-[20px]"
      onClick={() => handleCheckboxChange(index)}
    >
      <div>
        <div className="flex flex-row gap-[16px] lg:gap-[20px]">
          <BrandContainer
            src={item.brandImage}
            alt={`${item.title}`}
            className="object-contain w-[70px] h-[54px]"
          />
          <div className="flex flex-col justify-center">
            <Title className="text-[15px] leading-[22px] md:text-[18px] md:leading-[26px] font-[500] lg:font-[700]">
              {item.title}
            </Title>
            <Desc className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
              {item.desc}
            </Desc>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-[14px] items-center">
          <PriceText className={`${isChecked === index ? "active" : ""}`}>
            {item.price}
          </PriceText>
          <div className="w-[24px] h-[24px] p-[2.75px] flex items-center justify-center relative">
            <div
              onClick={handleCheckboxChange}
              className={`w-[19px] h-[19px] border-[2px] border-[#000] rounded-[4px] absolute top-[3px] right-[1px] ${
                isChecked === index ? "hidden" : "block"
              }`}
            />
            <img
              src={TickedIcon}
              alt="ticked-icon"
              className={`absolute top-[3px] right-[1px] ${
                isChecked === index ? "block" : "hidden"
              }`}
              onClick={handleCheckboxChange}
            />
          </div>
        </div>
        {props.detailed && <Link to="/check-out">View details</Link>}
      </div>
    </Container>
  ));
};

export default TagPayMethodContainer;

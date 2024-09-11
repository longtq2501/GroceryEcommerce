import React from "react";
import styled from "styled-components";

import ArrowRight from "../../assets/navbar/arrow-right.svg";

const NavBarText = styled.span`
  color: #9e9da8;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
  &.active {
    color: #1a162e;
  }
`;
const NavBarIconContainer = styled.div`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  justify-content: center;
  align-items: center;
`;

const NavBar = (props) => {
  const listNav = [
    "Departments",
    "Electronics",
    "Wearable Technology",
    "Apple Watch",
  ];

  return (
    <div
      className={`max-w-[1280px] lg:w-full lg:mx-auto p-[20px] rounded-[20px] bg-[#fff] ${
        props.backGroundWhite ? "lg:bg-[#fff]" : "lg:bg-[#F6F6F6]"
      } flex flex-row flex-wrap mx-[20px] gap-[16px] lg:gap-[20px]`}
    >
      {listNav.map((item, index) => (
        <div key={index} className="flex flex-row gap-[8px] items-center">
          {index === listNav.length - 1 ? (
            <NavBarText className="active">{item}</NavBarText>
          ) : (
            <NavBarText>{item}</NavBarText>
          )}
          {index !== listNav.length - 1 && (
            <NavBarIconContainer>
              <img src={ArrowRight} alt="arrow-right" />
            </NavBarIconContainer>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBar;

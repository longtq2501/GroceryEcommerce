import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { FaArrowLeftLong } from "react-icons/fa6";
import ArrowDownIcon from "../../assets/header/arrow-down-icon.svg";

const MenuWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: #fff;
  width: calc(100% - 10rem);
  /* width: 100%; */
  height: 100vh;
  z-index: 100;
  border: 1px solid #dfd2fa;
  box-shadow: inset 0 0 0 1px #dfd2fa;
  padding: 2rem;
  transform: scale(0);
  transition: all 0.3s linear;

  &.active {
    transform: scale(1);
  }
`;

const NavItemMenu = styled.li`
  position: relative;
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
  padding: 2rem;
  border-bottom: 1px solid #d2d1d6;
  cursor: pointer;
  text-align: left;
  &::after {
    position: absolute;
    content: "";
    background: url("${ArrowDownIcon}") no-repeat;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    bottom: 0;
    top: 30px;
    right: 23px;
  }
`;

const NavTable = (props) => {
  const listNav = ["Departments", "Grocery", "Beauty"];
  return (
    <MenuWrapper className={`${!props.isOpenMenu ? "hidden" : "block active"}`}>
      <Logo />
      <ul className="flex flex-col mt-[20px]">
        {listNav.map((item, index) => (
          <NavItemMenu key={index}>{item}</NavItemMenu>
        ))}
      </ul>
      <button className="p-[30px] absolute bottom-0 right-0 cursor-pointer">
        <div>
          <FaArrowLeftLong />
        </div>
      </button>
    </MenuWrapper>
  );
};

export default NavTable;

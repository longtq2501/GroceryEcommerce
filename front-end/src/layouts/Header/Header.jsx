import React from "react";
import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import SearchIcon from "../../assets/header/search-icon.svg";
import HeartIcon from "../../assets/header/heart-icon.svg";
import ShoppingIcon from "../../assets/header/shopping-icon.svg";
import Avatar from "../../assets/header/avatar.jpg";
import MenuIcon from "../../assets/header/menu-icon.svg";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import ArrowDownIcon from "../../assets/header/arrow-down-icon.svg";

const AvatarHeader = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 0.8rem;
  background: #dfd2fa;
  box-shadow: 0px 4px 14px 2px rgba(0, 0, 0, 0.08);
`;

const NavContainer = styled.ul`
  align-items: center;
  gap: 4.6rem;
`;

const NavItem = styled.li`
  position: relative;
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    background: url("${ArrowDownIcon}") no-repeat;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    bottom: 0;
    right: -18px;
  }

  &::before {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #1a162e;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const SearchHeader = styled.button`
  padding: 1.3rem;
  gap: 1rem;
  border-radius: 0.8rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`;

const ActionContainer = styled.div`
  padding: 1rem 2rem;
  gap: 2rem;
  border-radius: 0.8rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const ActionItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
  cursor: pointer;
`;

const ActionSeparator = styled.div`
  width: 0.1rem;
  height: 3rem;
  background: #ededf6;
`;

const Header = () => {
  const listNav = ["Departments", "Grocery", "Beauty"];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((isOpenMenu) => {
      return !isOpenMenu;
    });
  };

  return (
    <header className="lg:bg-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto flex flex-row justify-between items-center px-[25px] py-[16px] bg-[#fff] lg:bg-[#EEEEEE] lg:px-[50px] lg:py-[30px]">
        <button className="lg:hidden cursor-pointer relative">
          <img src={MenuIcon} alt="menu-icon" onClick={toggleMenu} />
        </button>
        <NavBar isOpenMenu={isOpenMenu} />
        <Logo />
        <NavContainer className="hidden lg:flex">
          {listNav.map((item, index) => (
            <NavItem key={index} className="after:lg:right-[-18px]">
              {item}
            </NavItem>
          ))}
        </NavContainer>

        <div className="flex flex-row gap-[20px]">
          <SearchHeader className="hidden lg:flex">
            <img src={SearchIcon} alt="search-icon" />
          </SearchHeader>

          <ActionContainer className="hidden lg:flex lg:items-center">
            <ActionItem>
              <img src={HeartIcon} alt="heart-icon" />
              <span>03</span>
            </ActionItem>

            <ActionSeparator></ActionSeparator>

            <ActionItem>
              <img src={ShoppingIcon} alt="shopping-icon" />
              <span>$65.42</span>
            </ActionItem>
          </ActionContainer>

          <AvatarHeader>
            <img
              src={Avatar}
              alt="avatar"
              className="rounded-[8px] object-cover"
            />
          </AvatarHeader>
        </div>
      </div>
    </header>
  );
};

export default Header;

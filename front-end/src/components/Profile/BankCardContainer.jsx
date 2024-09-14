import React from "react";
import BankCard from "./BankCard";
import ButtonAddNewCard from "../Button/ButtonAddNewCard";

const BankCardContainer = (props) => {
  return (
    <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
      <BankCard />
      <ButtonAddNewCard />
    </div>
  );
};

export default BankCardContainer;

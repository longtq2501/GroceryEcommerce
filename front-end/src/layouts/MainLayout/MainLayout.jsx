import React from "react";
import Header from "../Header/Header";

const MainLayout = (props) => {
  return (
    <div className={`bg-[#EDEDF6] ${props.bgWhite ? "lg:bg-white" : "lg:bg-[#f6f6f6]"}
      w-full flex flex-col gap-[20px] lg:gap-[30px]`}>
      <Header />
      <div className="flex flex-col gap-[20px] lg:gap-[30px] lg:mx-[20px] mb-[36px]">
        {props.children}
      </div>
    </div>
  );
};
export default MainLayout;

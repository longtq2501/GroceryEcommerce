import React from "react";
import HeaderNotLogin from "../Header/HeaderNotLogin";

const MainLayout = (props) => {
  return (
    <div className="bg-[#EDEDF6] lg:bg-[#f6f6f6] w-full flex flex-col gap-[20px] lg:gap-[30px]">
      <HeaderNotLogin />
      <div className="flex flex-col gap-[20px] lg:gap-[30px] lg:mx-[20px] mb-[36px]">
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;

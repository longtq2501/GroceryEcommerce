import React from "react";

const PaymentBody = (props) => {
  return (
    <div className="mx-[20px] max-w-[1280px] lg:mx-auto xl:px-[0px]
     grid grid-cols-1 gap-y-[20px] md:gap-[20px] md:grid-cols-3">
      {props.children}
    </div>
  );
};

export default PaymentBody;

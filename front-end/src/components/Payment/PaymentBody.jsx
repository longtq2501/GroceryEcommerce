import React from "react";
import InformationContainer from "./InformationContainer";
import TagAddressContainer from "./TagAddressContainer";
import TagPayMethodContainer from "./TagPayMethodContainer";
import PaymentForm from "./PaymentForm";

const PaymentBody = (props) => {
  return (
    <div
      className="mx-[20px] max-w-[1280px] lg:mx-auto xl:px-[0px]
     grid grid-cols-1 gap-y-[20px] md:gap-[20px] md:grid-cols-3"
    >
      <div className="col-span-2 grid gap-[20px] h-fit">
        <InformationContainer
          title="1. Shipping, arrives between Mon, May 16—Tue, May 24"
          buttonEditor
        >
          <TagAddressContainer
            title="Imran Khan"
            desc="Museum of Rajas, Sylhet Sadar, Sylhet 3100."
            ticked
          />
          <TagAddressContainer title="Items details" desc="2 items" detailed />
        </InformationContainer>
        <InformationContainer title="2. Shipping method">
          <TagPayMethodContainer />
        </InformationContainer>
      </div>
      <div className="flex flex-col gap-[20px] col-span-1">
        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentBody;

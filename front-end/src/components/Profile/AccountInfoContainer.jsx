import React from "react";
import AccountInfo from "./AccountInfo";

import LetterIcon from "../../assets/profile/letter-icon.svg";
import PhoneIcon from "../../assets/profile/phone-icon.svg";
import AddressIcon from "../../assets/profile/address-icon.svg";

const AccountInfoContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
      <AccountInfo
        title="Email Address"
        desc="tarek97.ta@gmail.com"
        icon={LetterIcon}
      />
      <AccountInfo
        title="Phone number"
        desc="+000 11122 2345 657"
        icon={PhoneIcon}
      />
      <AccountInfo
        title="Add an address"
        desc="Bangladesh Embassy, Washington, DC 20008"
        icon={AddressIcon}
      />
    </div>
  );
};

export default AccountInfoContainer;

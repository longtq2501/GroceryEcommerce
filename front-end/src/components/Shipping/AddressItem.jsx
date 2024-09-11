import React, { useState } from "react";
import styled from "styled-components";

import EditIcon from "../../assets/shipping/edit-icon.svg";
import TickedIcon from "../../assets/shipping/ticked-icon.svg";

const Name = styled.h3`
  color: #1a162e;
  font-weight: 500;
`;

const Desc = styled.p`
  color: #1a162e;
  font-weight: 400;
`;

const ListStyled = styled.i`
  color: #1a162e;
  font-weight: 500;
`;

const EditButtonText = styled.span`
  color: #1a162e;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 144.444%;
`;

const AddressItem = (props) => {
  const [isChecked, setIsChecked] = useState(-1);
  const ListAddress = [
    {
      name: "Imran Khan",
      desc: "Museum of Rajas, Sylhet Sadar, Sylhet 3100.",
    },
    {
      name: "Imran Khan",
      desc: "Museum of Rajas, Sylhet Sadar, Sylhet 3200.",
    },
  ];

  const handleCheckboxChange = (index) => {
    setIsChecked(isChecked === index ? -1 : index);
  };

  return Object.values(ListAddress).map((item, index) => (
    <div
      className="flex flex-col gap-[16px]"
      key={index}
      onClick={() => handleCheckboxChange(index)}
    >
      <div>
        <div className="flex flex-row gap-[16px]">
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
          <div className="flex flex-col gap-[16px] items-start flex-1">
            <div>
              <Name className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px]">
                {item.name}
              </Name>
              <Desc className="text-[14px] leading-[20px] md:text-[15px] md:leading-[22px]">
                {item.desc}
              </Desc>
            </div>
            {/*  */}
            <div className="flex flex-col gap-[16px] sm:flex-row sm:items-center sm:justify-between sm:w-full">
              <ul className="flex flex-row gap-[16px]">
                <ListStyled>Shipping</ListStyled>
                <ListStyled>Delivery from store</ListStyled>
              </ul>
              <button className="flex flex-row gap-[10px] items-center">
                <img src={EditIcon} alt="edit-icon" />
                <EditButtonText>Edit</EditButtonText>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default AddressItem;

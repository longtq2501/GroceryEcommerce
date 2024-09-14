import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: #1a162e;
`;

const InformationItemWrapper = (props) => {
  return (
    <article className="grid grid-cols-1 gap-[16px]">
      <div>
        <Title className="text-[18px] font-[500] leading-[26px] lg:text-[24px] lg:font-[700] lg:leading-[34px]">
          {props.title}
        </Title>
        <p className="text-[14px] leading-[20px] font-[400] text-[#1A162E] lg:text-[15px] lg:leading-[22px]">
          {props.desc}
        </p>
      </div>
      <div>{props.children}</div>
    </article>
  );
};

export default InformationItemWrapper;

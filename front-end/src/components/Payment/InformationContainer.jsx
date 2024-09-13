import React from "react";
import styled from "styled-components";
import ButtonEdit from "../Button/ButtonEdit";

const Container = styled.article`
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const Separate = styled.div`
  height: 0.1rem;
  background: #9e9da8;
`;

const Title = styled.h3`
  color: #1a162e;
  font-weight: 500;
`;

const InformationContainer = (props) => {
  return (
    <Container className="p-[16px] lg:p-[30px] md:p-[24px] bg-[#fff]
     flex flex-col  gap-[16px] lg:gap-[30px] rounded-[20px] h-fit">
      <div className="flex flex-row items-center justify-between">
        <Title className="text-[16px] leading-[24px] 
        md:text-[20px] md:leading-[28px] lg:text-[24px]
         lg:leading-[34px] w-[80%] md:w-fit">
          {props.title}
        </Title>
        {props.buttonEditor && <ButtonEdit />}
      </div>
      {props.separate && <Separate />}
      {/* payment item */}
      <div className="flex flex-col gap-[30px]">{props.children}</div>
    </Container>
  );
};

export default InformationContainer;

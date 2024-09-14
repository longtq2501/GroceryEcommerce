import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background: #f6f6f6;
`;

const Title = styled.h4`
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
`;

const Desc = styled.span`
  color: #1a162e;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 142.857%;
`;

const AccountInfo = (props) => {
  return (
    <Container>
      <div className="p-[15px] rounded-[8px] bg-[#fff]">
        <img src={props.icon} alt={props.title} />
      </div>
      <div className="flex flex-col gap-[6px]">
        <Title>{props.title}</Title>
        <Desc>{props.desc}</Desc>
      </div>
    </Container>
  );
};

export default AccountInfo;

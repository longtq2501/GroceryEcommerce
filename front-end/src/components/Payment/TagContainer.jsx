import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TickedIcon from "../../assets/shipping/ticked-icon.svg";

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
`;

const Title = styled.h3`
  color: #1a162e;
  font-weight: 500;
`;

const Desc = styled.p`
  color: #1a162e;
  font-weight: 400;
`;

const TagContainer = (props) => {
  return (
    <Container className="bg-[#FAFAFD] lg:bg-[#f6f6f6] p-[16px] lg:p-[20px]">
      <div>
        <Title className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px]">
          {props.title}
        </Title>
        <Desc className="text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]">
          {props.desc}
        </Desc>
      </div>
      <div>
        {props.ticked && (
          <img
            src={TickedIcon}
            alt="ticked-icon"
            className="w-[40px] h-[40px] object-cover"
          />
        )}
        {props.detailed && <Link to="/check-out">View details</Link>}
      </div>
    </Container>
  );
};

export default TagContainer;

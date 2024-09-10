import React from "react";
import styled from "styled-components";

const UserCommentContainerTitle = styled.h3`
  color: #171c28;
  font-weight: 500;
  line-height: 144.444%;
`;

const UserCommentContainer = (props) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <UserCommentContainerTitle className="text-[18px] md:text-[20px] lg:text-[24px]">
        What our customers are saying
      </UserCommentContainerTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {props.children}
      </div>
    </div>
  );
};

export default UserCommentContainer;

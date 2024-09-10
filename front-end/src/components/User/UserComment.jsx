import React from "react";
import styled from "styled-components";

import StarRate from "../../assets/usercomment/star-rate.svg";
import Avatar from "../../assets/header/avatar.jpg";

const UserCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1.6rem;
  background: #fff;
`;

const UserCommentAvatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
`;

const UserCommentName = styled.h4`
  color: #1a162e;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
`;

const UserCommentDesc = styled.p`
  color: #1a162e;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
`;

const UserCommentReview = styled.span`
  color: #1a162e;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
`;

const UserComment = () => {
  return (
    <UserCommentContainer>
      <div className="flex flex-row gap-[20px]">
        <UserCommentAvatar src={Avatar} alt="avatar" />
        <div className="flex flex-col gap-[10px]">
          <UserCommentName>Jakir Hussen</UserCommentName>
          <UserCommentDesc>
            Great product, I love this Coffee Beans{" "}
          </UserCommentDesc>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <img src={StarRate} alt="star-rate" />
        <UserCommentReview>(3.5) Review</UserCommentReview>
      </div>
    </UserCommentContainer>
  );
};

export default UserComment;

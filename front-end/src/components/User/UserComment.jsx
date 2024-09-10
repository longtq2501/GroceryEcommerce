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
  const listComment = [
    {
      avatar: Avatar,
      name: "Jakir Hussen",
      desc: "Great product, I love this Coffee Beans",
      star: StarRate,
      review: "(3.5) Review",
    },
    {
      avatar: Avatar,
      name: "Jakir Hussen",
      desc: "Great product, I love this Coffee Beans",
      star: StarRate,
      review: "(3.5) Review",
    },
    {
      avatar: Avatar,
      name: "Jakir Hussen",
      desc: "Great product, I love this Coffee Beans",
      star: StarRate,
      review: "(3.5) Review",
    },
  ];

  return Object.values(listComment).map((item, index) => (
    <UserCommentContainer key={index} className="bg-[#fff] lg:bg-[#FAFAFD]">
      <div className="flex flex-row gap-[20px]">
        <UserCommentAvatar src={item.avatar} alt="avatar" />
        <div className="flex flex-col gap-[10px]">
          <UserCommentName>{item.name}</UserCommentName>
          <UserCommentDesc>{item.desc}</UserCommentDesc>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <img src={item.star} alt="star-rate" />
        <UserCommentReview>{item.review}</UserCommentReview>
      </div>
    </UserCommentContainer>
  ));
};

export default UserComment;

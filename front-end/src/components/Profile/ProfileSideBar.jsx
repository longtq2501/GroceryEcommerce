import React from "react";
import styled from "styled-components";

import AddressIcon from "../../assets/profile/address-icon.svg";
import AvatarIcon from "../../assets/profile/avatar-icon.svg";
import GiftIcon from "../../assets/profile/gift-icon.svg";
import HeartIcon from "../../assets/profile/heart-icon.svg";
import InformationIcon from "../../assets/profile/information-icon.svg";
import LetterIcon from "../../assets/profile/letter-icon.svg";
import ReorderIcon from "../../assets/profile/reorder-icon.svg";
import ShieldIcon from "../../assets/profile/shield-icon.svg";
import WarnIcon from "../../assets/profile/warn-icon.svg";
import Avatar from "../../assets/header/avatar.jpg";

const Container = styled.article`
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 24.6rem;
  border-radius: 2rem 2rem 0rem 0rem;
  background: linear-gradient(180deg, rgba(26, 22, 46, 0) 0%, #1a162e 100%);
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.2);
`;

const Name = styled.h4`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 144.444%;
`;

const Desc = styled.span`
  color: #fafafd;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
`;

const InformationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const InformationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InformationRow = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const InformationTitle = styled.h3`
  color: #1a162e;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const ProfileSideBar = (props) => {
  return (
    <Container className="col-span-2">
      <AvatarContainer>
        <img
          alt="icon"
          src={Avatar}
          className="w-[116px] h-[116px] rounded-[50%] object-cover border-[#ffffff33] border-[5px]"
        />
        <div className="flex flex-col items-center">
          <Name>Ton Quynh Long</Name>
          <Desc>Registered: 17th May 2022</Desc>
        </div>
      </AvatarContainer>

      <InformationContainer>
        <InformationItem>
          <InformationTitle>Manage Account</InformationTitle>
          <InformationList>
            <InformationRow>
              <Icon alt="icon" src={AvatarIcon} />
              <span>Personal Information</span>
            </InformationRow>
            <InformationRow>
              <Icon alt="icon" src={AddressIcon} />
              <span>Addresses</span>
            </InformationRow>
            <InformationRow>
              <Icon alt="icon" src={LetterIcon} />
              <span>Communications & privacy</span>
            </InformationRow>
          </InformationList>
        </InformationItem>

        <InformationItem>
          <InformationTitle>My items</InformationTitle>
          <InformationList>
            <InformationRow>
              <Icon alt="icon" src={ReorderIcon} />
              <span>Reorder</span>
            </InformationRow>
            <InformationRow>
              <Icon alt="icon" src={HeartIcon} />
              <span>InformationRowsts</span>
            </InformationRow>
            <InformationRow>
              <Icon alt="icon" src={GiftIcon} />
              <span>Registries</span>
            </InformationRow>
          </InformationList>
        </InformationItem>

        <InformationItem>
          <InformationTitle>Subscriptions & plans</InformationTitle>
          <InformationList>
            <InformationRow>
              <Icon alt="icon" src={ShieldIcon} />
              <span>Protection plans</span>
            </InformationRow>
          </InformationList>
        </InformationItem>

        <InformationItem>
          <InformationTitle>Customer Services</InformationTitle>
          <InformationList>
            <InformationRow>
              <Icon alt="icon" src={InformationIcon} />
              <span>Help</span>
            </InformationRow>
            <InformationRow>
              <Icon alt="icon" src={WarnIcon} />
              <span>Terms of Use</span>
            </InformationRow>
          </InformationList>
        </InformationItem>
      </InformationContainer>
    </Container>
  );
};

export default ProfileSideBar;

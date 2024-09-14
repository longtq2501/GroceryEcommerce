import React from "react";

import ProfileContainer from "../../components/Profile/ProfileContainer";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProfileSideBar from "../../components/Profile/ProfileSideBar";

const Profile = () => {
  return (
    <MainLayout>
      <ProfileContainer>
        <ProfileSideBar />
      </ProfileContainer>
    </MainLayout>
  );
};

export default Profile;

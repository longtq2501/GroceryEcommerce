import React from "react";

import ProfileContainer from "../../components/Profile/ProfileContainer";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProfileSideBar from "../../components/Profile/ProfileSideBar";
import InformationContainer from "../../components/Profile/InformationContainer";

const Profile = () => {
  return (
    <MainLayout>
      <ProfileContainer>
        <ProfileSideBar />
        <InformationContainer/>
      </ProfileContainer>
    </MainLayout>
  );
};

export default Profile;

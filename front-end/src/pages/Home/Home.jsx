import React from "react";
import styled from "styled-components";

import Header from "../../layouts/Header/Header";
import Slider from "../../components/Slider/Slider";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1280px;
  height: 100vh;
  /* margin: 0 auto; */
`;

const Home = () => {
  return (
    <div className="bg-[#f6f6f6] w-full flex flex-col gap-[30px] lg:gap-[40px]">
      <Header />
      <HomeContainer className="lg:mx-auto lg:gap-[40px]">
        <Slider />
      </HomeContainer>
    </div>
  );
};

export default Home;

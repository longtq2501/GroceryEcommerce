import React from "react";
import FavoriteItem from "./FavoriteItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function FavoriteItemWrapper() {
  return (
    <Container className="gap-[16px] lg:gap-[30px]">
      <FavoriteItem />
    </Container>
  );
}

import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import NavBar from "../../components/NavBar/NavBar";
import FavoriteConTainer from "../../components/Favorite/FavoriteConTainer";

export default function Favorite() {
  return (
    <MainLayout>
      <NavBar bgWhite />
      <FavoriteConTainer />
    </MainLayout>
  );
}

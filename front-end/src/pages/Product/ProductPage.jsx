import React from 'react';
import Header from "../../layouts/Header/Header";
import NavBar from '../../components/NavBar/NavBar';

const ProductPage = () => {
    return (
        <div className="bg-[#EDEDF6] lg:bg-[#fff] w-full flex flex-col gap-[20px] lg:gap-[30px]">
            <Header />
            <NavBar />
        </div>
    );
};

export default ProductPage;
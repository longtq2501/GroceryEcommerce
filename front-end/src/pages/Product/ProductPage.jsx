import React from 'react';
import Header from "../../layouts/Header/Header";
import NavBar from '../../components/NavBar/NavBar';
import ProductShow from '../../components/ProductShow/ProductShow';

const ProductPage = () => {
    return (
        <div className="bg-[#EDEDF6] lg:bg-[#fff] w-full flex flex-col gap-[20px] lg:gap-[30px]">
            <Header />
            <NavBar />
            <ProductShow />
        </div>
    );
};

export default ProductPage;
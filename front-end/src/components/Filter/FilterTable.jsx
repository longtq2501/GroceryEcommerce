import React from "react";
import styled from "styled-components";

import SearchIcon from "../../assets/filter/search-icon.svg";
import Button from "../../components/Button/Button.jsx";

const FilterContainer = styled.div`
  position: absolute;
  top: 56px;
  /* left: -216px; */
  z-index: 100;
  /* width: 31.2rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* padding: 2rem; */
  background: #fff;
  box-shadow: 0px 40px 90px rgba(200, 200, 200, 0.4);
  border-radius: 2rem;
  width: fit-content;
`;

const FilterTitle = styled.h3`
  color: #1a162e;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
`;

const FilterForm = styled.form`
  display: flex;
  gap: 2rem;
`;

const FilterFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const FilterFormText = styled.span`
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
`;

const FilterFormSelectContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.4rem;
  border-radius: 0.6rem;
  border: 1px solid #d2d1d6;
  width: 27.2rem;
  height: 3.5em;
  background: #fff;
  gap: 1.4rem;
`;

const FilterFormSelect = styled.select`
  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
  height: inherit;
  border-bottom: inherit;
  border-top: inherit;
  outline: none;
`;

const FilterInputText = styled.input`
  border-radius: 0.6rem;
  border: 1px solid #d2d1d6;
  padding: 0.8rem 1.2rem;

  color: #1a162e;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
  outline: none;
`;

const Separate = styled.div`
  background: #eee;
  height: 1px;
  width: 100%;
`;
const SmallSeparate = styled.div`
  width: 0.1rem;
  height: 100%;
  background: #d2d1d6;
`;

const FilterTagContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const FilterTag = styled.div`
  padding: 0.6rem 1.2rem;
  border-radius: 0.6rem;
  background: #f8f8fb;
  width: fit-content;
`;

const FilterTagText = styled.span`
  color: #9e9da8;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 142.857%;
`;

const FilterInputSearchName = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.6rem;
  border: 1px solid #d2d1d6;
`;

const FilterTable = () => {
  const listSize = ["Small", "Medium", "Large"];
  const listBrand = ["Lavazza", "Nescafe", "Starbucks"];

  return (
    <FilterContainer className="p-[20px] md:p-[40px] left-[-216px] md:left-[-257px] lg:left-[-866px]">
      <FilterTitle>Filter</FilterTitle>
      <FilterForm className="flex-col lg:flex-row">
        <FilterFormItem>
          <FilterTitle>Price</FilterTitle>
          <div className="flex flex-row gap-[30px]">
            <div className="flex flex-col gap-[10px] w-[121px]">
              <FilterFormText>Minimum</FilterFormText>
              <FilterInputText type="text" />
            </div>
            <div className="flex flex-col gap-[10px] w-[121px]">
              <FilterFormText>Maximum</FilterFormText>
              <FilterInputText type="text" />
            </div>
          </div>
        </FilterFormItem>

        <Separate></Separate>

        <FilterFormItem>
          <FilterTitle>Size/Weight</FilterTitle>
          <FilterFormSelectContainer>
            <FilterFormSelect className="flex-1">
              <option>500g</option>
            </FilterFormSelect>
            <SmallSeparate />
            <FilterFormSelect className="flex-1">
              <option>gram</option>
            </FilterFormSelect>
          </FilterFormSelectContainer>
          <FilterTagContainer>
            {listSize.map((item, index) => (
              <FilterTag>
                <FilterTagText key={index}>{item}</FilterTagText>
              </FilterTag>
            ))}
          </FilterTagContainer>
        </FilterFormItem>

        <Separate></Separate>

        <FilterFormItem>
          <FilterTitle>Brand</FilterTitle>
          <FilterInputSearchName>
            <input
              type="text"
              placeholder="Search brand name"
              className="w-full h-full outline-none py-[10px] px-[16px]"
            />
            <img
              src={SearchIcon}
              alt="search-icon"
              className="absolute right-[12px] top-[10px]"
            />
          </FilterInputSearchName>
          <FilterTagContainer>
            {listBrand.map((item, index) => (
              <FilterTag>
                <FilterTagText key={index}>{item}</FilterTagText>
              </FilterTag>
            ))}
          </FilterTagContainer>
        </FilterFormItem>
      </FilterForm>
      <div className="flex flex-row justify-end">
        <Button className="button--filter-cancel">Cancel</Button>
        <Button className="button--filter">Show Result</Button>
      </div>
    </FilterContainer>
  );
};

export default FilterTable;

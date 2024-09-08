import { React, useState } from "react";
import styled from "styled-components";
import FilterIcon from "../../assets/filter/filter-icon.svg";
import FilterTable from "./FilterTable";

const FilterButtonContainer = styled.div`
  display: flex;
  gap: 1.4rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.6rem;
  background: #fff;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
`;

const FilterButtonTitle = styled.h3`
  color: #1a162e;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
`;

const FilterButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((active) => !active);
  };

  return (
    <div className="relative">
      <FilterButtonContainer onClick={handleClick}>
        <FilterButtonTitle>Filter</FilterButtonTitle>
        <img src={FilterIcon} alt="filter-icon" />
      </FilterButtonContainer>
      {active && <FilterTable />}
    </div>
  );
};

export default FilterButton;

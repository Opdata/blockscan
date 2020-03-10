import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import FilterData from './FilterData';

const Search = styled.div`
  height: 109px;
  padding: 12px 20px 20px 20px;
  margin: 0px 0px 20px 0px;
  background-image: linear-gradient(to right, #1e83e5, #273ea7);
`;

const SearchDiv = styled.div`
  /* margin: 0px 0px 20px 0px; */
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border: solid 1px;
  margin-bottom: 8px;
`;

const SearchBarTitle = styled.h2``;

const QuickLinks = styled.h3`
  font-size: 0.8125rem;
  cursor: pointer;
  border-bottom: 1px dashed #97a4af;
`;

const SearchBox = styled.div`
  display: flex;
  border: solid 1px;
`;

const StyledSelect = styled(Select)`
  width: 116px;
  font-size: 0.8125rem;
`;

const StyledSearchBox = styled.input`
  width: 100%;
`;

const StyledButton = styled.button`
  width: 75px;
`;

const RenderSearchBar = () => {
  const [select, setSelect] = useState(FilterData[0]);

  const handleChange = select => {
    setSelect(select);
  };

  return (
    <Search>
      <SearchDiv>
        <TitleBox>
          <SearchBarTitle>Ethereum BlockChain Explorer</SearchBarTitle>
          <QuickLinks>Quick links: ERC-20 Quick links</QuickLinks>
        </TitleBox>
        <SearchBox>
          <StyledSelect
            defaultValue={select}
            value={select}
            onChange={handleChange}
            options={FilterData}
          />
          <StyledSearchBox />
          <StyledButton>Search</StyledButton>
        </SearchBox>
      </SearchDiv>
    </Search>
  );
};

export default RenderSearchBar;

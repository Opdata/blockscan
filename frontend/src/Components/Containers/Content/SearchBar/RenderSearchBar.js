import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FilterData from './FilterData';
import { InnerWidth } from '../../../../helper/CustomHook';
import Select from 'react-dropdown-select';

const Search = styled.div`
  height: 30%;
  padding: 12px 20px 20px 20px;
  margin: 0px 0px 20px 0px;
  background-image: linear-gradient(to right, #1e83e5, #273ea7);
  border-radius: 0.25rem;

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) {
    /*  */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    width: 820px;
  }
  @media only screen and (min-width: 1200px) {
    width: 910px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 1200px;
  }
`;

const SearchInner = styled.div``;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.background};
  margin-bottom: 8px;
`;

const SearchBarTitle = styled.h2``;

const QuickLinks = styled.h3`
  font-size: 0.8125rem;
  cursor: pointer;
  border-bottom: 1px dashed ${props => props.theme.subtitle};
  font-size: 70%;
  margin: 5px;
`;

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  font-size: 13px;
`;

const StyledSelect = styled(Select)`
  background-color: ${props => props.theme.background};
  font-size: 14px;
  .css-15e6jke-DropDown {
    border: none;
  }
  .react-dropdown-select-input {
    display: none;
  }
`;

const StyledSearchBox = styled.input`
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 12px 16px;

  :focus {
    outline: none;
  }
  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) {
    /*  */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    width: 820px;
  }
  @media only screen and (min-width: 1200px) {
    width: 741.5px;
    /* 910 의 85퍼 */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 1200px;
    /* 해야함 */
  }
`;

const StyledButton = styled.button`
  color: white;
  margin-left: -1px;
  background-color: ${props => props.theme.button};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 2;
  user-select: none;
  :focus {
    outline: none;
  }

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) {
    /*  */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    width: 820px;
  }
  @media only screen and (min-width: 1200px) {
    width: 45.5px;
    font-size: 10.5px;
    /* 910 의 5퍼 */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 1200px;
  }
`;

const RenderSearchBar = () => {
  const width = InnerWidth();

  let history = useHistory();
  const [option, setOption] = useState();
  const [text, setText] = useState();

  const onSelect = option => {
    setOption(option);
  };

  const onInput = Text => {
    setText(Text);
  };

  const subMitRouting = () => {
    /* 데모 라우팅 , 백엔드 API 필요함*/
    /*데이터 존재 유무에따라 Not Found 페이지 필요함*/
    const value = option[0].value;

    switch (value) {
      case 'All': {
        if (text.search('0x') === 0) {
          history.push(`/tx/${text}`);
        } else {
          history.push(`/block/${text}`);
        }
        break;
      }
      case 'Transaction': {
        history.push(`/tx/${text}`);
        break;
      }
      case 'Block': {
        history.push(`/block/${text}`);
        break;
      }
      default:
        break;
    }
  };

  return (
    <Search>
      <SearchInner>
        <TitleBox>
          <SearchBarTitle>Ethereum Blockchain Explorer</SearchBarTitle>
          <QuickLinks>Quick links: ERC-20 Quick links</QuickLinks>
        </TitleBox>
        <SearchBox>
          <StyledSelect
            dropdownGap={0}
            options={FilterData}
            values={[FilterData[0]]}
            onChange={value => {
              onSelect(value);
            }}
            style={
              width >= 1400
                ? { width: 240 }
                : width >= 1200
                ? {
                    width: 79,
                    fontSize: 10.5,
                  } //원하는폭에서 -12
                : width >= 1024
                ? { width: 240 }
                : width >= 768
                ? { width: 240 }
                : width >= 480
                ? { width: 240 }
                : { width: 240 }
            }
          />
          <StyledSearchBox
            placeholder={'Search by Address / Txn Hash / Block / Token / Ens'}
            onChange={e => {
              onInput(e.target.value);
            }}
          />
          <StyledButton onClick={() => subMitRouting()}>Search</StyledButton>
        </SearchBox>
      </SearchInner>
    </Search>
  );
};

export default RenderSearchBar;

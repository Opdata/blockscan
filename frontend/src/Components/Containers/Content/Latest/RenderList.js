import React from 'react';
import styled from 'styled-components';
import BlockItem from './BlockItems';

const StyledDiv = styled.div`
  height: 500px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 0.8125rem;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.5;
`;

const StyledListDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  align-items: center;
`;

const StyledTitleBox = styled.div`
  padding: 12px;
  border: 1px solid black;
  border-bottom: 1px solid #e7eaf3;
`;

const StyledListBox = styled.div`
  height: 376px;
  padding: 12px;
  /* display: block; */
`;

const ScrollDiv = styled.div`
  width: 16px;
  height: 455px;
  /* height: 100%; */
  /* height: auto; */
  position: absolute;
  display: block;
  border: 1px solid black;
  margin: 12px 0;
  opacity: 1;
  background-color: blue;
  align: right;
`;

const ScrollBox = styled.div`
  display: block;
  /* height: 100%; */
`;

const ScrollBarBox = styled.div`
  position: absolute;
  min-height: 50px;
  height: 224px;
  max-height: 366px;
  display: block;
  cursor: pointer;
  z-index: 1;
`;

const ScrollBar = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 4px;
  margin: 0 auto;
  border-radius: 16px;
  text-align: center;
  display: block;
`;

const ScrollRail = styled.div`
  width: 2px;
  margin: 0 auto;
  display: block;
`;
const ViewAllDiv = styled.div`
  padding: 12px;
  border-top: 1px solid #e7eaf3;
  display: block;
`;

const ViewAllButton = styled.button`
  background-color: #eaf4fb;
  border: 0px;
  color: #3498db;
`;

const ReturnList = () => {
  return (
    <StyledDiv>
      <StyledListDiv>
        <StyledTitleBox>Latest Blocks</StyledTitleBox>
        <ScrollDiv>
          <ScrollBox>
            <ScrollBarBox>
              <ScrollBar />
            </ScrollBarBox>
            <ScrollRail />
          </ScrollBox>
        </ScrollDiv>
        <StyledListBox>
          <BlockItem />
          <BlockItem />
          <BlockItem />
          <BlockItem />
          <BlockItem />
          <BlockItem />
        </StyledListBox>
        <ViewAllDiv>
          <ViewAllButton>View all blocks</ViewAllButton>
        </ViewAllDiv>
      </StyledListDiv>
      <StyledListDiv>
        <StyledTitleBox>Latest Transactions</StyledTitleBox>
        <StyledListBox></StyledListBox>
        <ViewAllDiv>
          <ViewAllButton>View all transactions</ViewAllButton>
        </ViewAllDiv>
      </StyledListDiv>
    </StyledDiv>
  );
};

export default ReturnList;

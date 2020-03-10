import React from 'react';
import styled from 'styled-components';
// 스크롤 hover href 남음
const BlockDiv = styled.div`
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const BlockBox = styled.div`
  /* padding-right: 27.5px; */
  display: flex;
`;

const BlockIconDiv = styled.div`
  margin-right: 8px;
  display: flex;
`;

const BlockIconBox = styled.div`
  cursor: default;
  width: 38.609px;
  height: 38.609px;
  background: rgba(119, 131, 143, 0.1);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const NumberElapseDiv = styled.div`
  width: 119.375px;
  display: block;
`;

const NumebrBox = styled.div`
  color: #3498db;
  cursor: pointer;
`;

const ElapseBox = styled.div`
  color: #77838f;
`;

const MinerTxEthDiv = styled.div`
  width: 391px;
  padding-left: 7.5px;
  /* padding-right: 7.5px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MinerTxDiv = styled.div`
  display: block;
`;

const MinerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MinerName = styled.a`
  max-width: 132px;
  color: #3498db;
  cursor: pointer;
`;

const TxBox = styled.div``;

const TxCount = styled.a`
  color: #3498db;
  cursor: pointer;
`;

const EthBox = styled.div`
  background-color: #f1f2f4;
  display: flex;
  border-radius: 6.1875rem;
  font-size: 0.60938rem;
  line-height: 1.7;
  letter-spacing: 0.8px;
  padding: 0 0.5rem;
  align-items: center;
`;

const StyledHr = styled.hr`
  border-top: 1px solid #e7eaf3;
  margin-top: 12px;
  margin-bottom: 12px;
  opacity: 0.75px;
`;

const BlockItems = () => {
  return (
    <BlockDiv>
      <BlockBox>
        <BlockIconDiv>
          <BlockIconBox>BK</BlockIconBox>
        </BlockIconDiv>
        <NumberElapseDiv>
          <NumebrBox>번호</NumebrBox>
          <ElapseBox>경과시간</ElapseBox>
        </NumberElapseDiv>
        <MinerTxEthDiv>
          <MinerTxDiv>
            <MinerBox>
              Miner
              <MinerName>Spark Pool</MinerName>
            </MinerBox>
            <TxBox>
              <TxCount>144 txns</TxCount>
              <a>?</a>
            </TxBox>
          </MinerTxDiv>
          <EthBox>2.19873 Eth</EthBox>
        </MinerTxEthDiv>
      </BlockBox>
      <StyledHr />
    </BlockDiv>
  );
};

export default BlockItems;

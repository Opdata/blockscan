import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TimeStamBox from './TimeItems';

const BlockItem = styled.div`
  width: 100%;
  display: flex;
`;

const BlockInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 0.5px solid ${props => props.theme.etherinfo};
  margin-right: 10px;
`;

const BlockBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const BlockIconDiv = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 8px;
  display: block;
`;

const BlockIconBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: default;
  background: ${props => props.theme.ethershadow};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 5px;
`;

const NumberElapseDiv = styled.div`
  display: block;
  width: 25%;
`;

const NumberBox = styled(Link)`
  color: ${props => props.theme.button};
  text-decoration: none;
  cursor: pointer;
`;

const MinerTxEthDiv = styled.div`
  width: 65%;
  padding-left: 7.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: grey; */
`;

const MinerTxDiv = styled.div`
  display: block;
  /* width: 100%; */
  height: 100%;

  /* border: 1px solid grey; */
`;

const MinerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MinerName = styled.a`
  display: block;
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* margin-left: 3px; */
  color: ${props => props.theme.button};
  cursor: pointer;

  /* border: 1px solid darkblue; */

  /* 반응형시 max-width 건드려야함 */
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
    /*  */
  }
  @media only screen and (min-width: 1200px) {
    max-width: 132px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    max-width: 200px;
  }
`;

const TxBox = styled.div``;

const TxCount = styled.a`
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const EthBox = styled.div`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${props => props.theme.etherbackgroundcolor};
  display: flex;
  border-radius: 6.1875rem;
  font-size: 0.60938rem;
  line-height: 1.7;
  letter-spacing: 0.8px;
  padding: 0 10px;
  align-items: center;
`;

const BlockItems = ({ index, number, timestamp, miner, txCount, blockReward }) => {
  blockReward = blockReward.toFixed(5);
  return (
    <BlockItem style={index !== 0 ? { marginTop: '12px' } : null}>
      <BlockInner>
        <BlockBox>
          <BlockIconDiv>
            <BlockIconBox>BK</BlockIconBox>
          </BlockIconDiv>
          <NumberElapseDiv>
            <NumberBox to={`/block/${number}`}>{number}</NumberBox>
            <TimeStamBox timestamp={timestamp} />
          </NumberElapseDiv>
          <MinerTxEthDiv>
            <MinerTxDiv>
              <MinerBox>
                Miner
                <MinerName>{miner}</MinerName>
              </MinerBox>
              <TxBox>
                <TxCount> {txCount} txns</TxCount>
              </TxBox>
            </MinerTxDiv>
            <EthBox> {blockReward}Eth</EthBox>
          </MinerTxEthDiv>
        </BlockBox>
      </BlockInner>
    </BlockItem>
  );
};

export default BlockItems;

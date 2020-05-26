import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TimeStamBox from './TimeItems';

const TxsItem = styled.div`
  width: 100%;
  display: flex;
`;

const TxsInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 0.5px solid ${props => props.theme.etherinfo};
  margin-right: 10px;
`;

const TxsBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const TxsIconDiv = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 8px;
  display: block;
`;

const TxsIconBox = styled.div`
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

const HashTimestampBox = styled.div`
  display: block;
  width: 25%;
`;

const HashBox = styled(Link)`
  display: block;
  max-width: 132px;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const FromToDiv = styled.div`
  width: 65%;
  padding-left: 7.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TxDiv = styled.div`
  display: block;
`;

const FromBox = styled.div`
  display: flex;
`;

const From = styled.a`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 3px;
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const ToBox = styled.div`
  max-width: 132px;
  display: flex;
`;

const To = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.button};
  cursor: pointer;
  margin-left: 4px;
`;

const TxFeeBox = styled.div`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${props => props.theme.etherbackgroundcolor};
  display: flex;
  border-radius: 6.1875rem;
  font-size: 0.60938rem;
  line-height: 1.7;
  letter-spacing: 0.8px;
  padding: 0 0.5rem;
  align-items: center;
`;

const TxsItems = ({ index, hash, timestamp, from, to, txFee }) => {
  txFee = txFee.toFixed(5);

  return (
    <TxsItem style={index !== 0 ? { marginTop: '12px' } : null}>
      <TxsInner>
        <TxsBox>
          <TxsIconDiv>
            <TxsIconBox>TX</TxsIconBox>
          </TxsIconDiv>
          <HashTimestampBox>
            <HashBox to={`/tx/${hash}`}>{hash}</HashBox>
            <TimeStamBox timestamp={timestamp} />
          </HashTimestampBox>
          <FromToDiv>
            <TxDiv>
              <FromBox>
                From
                <From>{from}</From>
              </FromBox>
              <ToBox>
                To
                <To> {to}</To>
              </ToBox>
            </TxDiv>
            <TxFeeBox> {txFee}Eth</TxFeeBox>
          </FromToDiv>
        </TxsBox>
      </TxsInner>
    </TxsItem>
  );
};

export default TxsItems;

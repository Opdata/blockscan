import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0px 12px 0px;
  /* align-items: center; */
  border: solid 1px;
`;

const TitleText = styled.h3`
  color: #6c757e;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.8125rem;
`;

const Sponsored = () => {
  return (
    <Title>
      <TitleText>Sponsored: IGMM</TitleText>
    </Title>
  );
};

export default Sponsored;

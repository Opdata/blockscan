import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';
import SponsoredTitle from './Containers/Content/Title/ReturnSponsoredTitle';
import SearchBar from './Containers/Content/SearchBar/ReturnSearchBar';
import EtherInfo from './Containers/Content/EtherInformation/ReturnEtherInfo';
import Banner from './Containers/Content/Banner';

const Wrapper = styled.div``;

const Body = styled.div`
  height: 100%;
  background-color: darkkhaki;
  margin-left: 316.5px;
  margin-right: 316.5px;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Body>
          <SponsoredTitle />
          <SearchBar />
          <EtherInfo />
          <Banner />
        </Body>
      </Wrapper>
    </ThemeProvider>
  );
};
export default App;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import SearchBar from './Containers/Content/SearchBar/ReturnSearchBar';

const Body = styled.div`
  background-color: #f8f9fa;
`;

//27인치 확인시 66가 width 동일

const Main = styled.div`
  height: 100%;
  width: 66%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Body>
        <Main>
          <SearchBar />
        </Main>
      </Body>
    </ThemeProvider>
  );
};
export default App;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';

const Wrapper = styled.div``;

const Body = styled.div`
  height: 100%;
  background-color: darkkhaki;
  padding: 0px 69px 0px 69px;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Body></Body>
      </Wrapper>
    </ThemeProvider>
  );
};
export default App;
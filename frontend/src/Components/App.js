import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';

const Wrapper = styled.div``;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  );
};
export default App;

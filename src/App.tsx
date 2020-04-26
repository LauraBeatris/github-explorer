import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default App;

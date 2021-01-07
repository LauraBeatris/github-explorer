import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { theme } from "styles/theme";

import Routes from "./routes";

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default App;

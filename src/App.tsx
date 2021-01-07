import React from "react";
import { ThemeProvider } from "styled-components";

import { Routes } from "routes";
import { GlobalStyles } from "styles/global";
import { theme } from "styles/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
}


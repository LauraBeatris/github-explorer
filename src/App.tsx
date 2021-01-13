import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { Routes } from "routes";
import { GlobalStyles } from "styles/global";
import { theme } from "styles/theme";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
}


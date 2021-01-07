import { createGlobalStyle } from "styled-components";

import githubBackground from "assets/github-background.svg";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    --webkit-font-smoothing: antialiased;
  }

  #root, body, html {
    height: 100%;
  }

  #root {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }

  body, button, textarea, input {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

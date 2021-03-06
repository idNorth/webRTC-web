import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    font-family: Roboto;
    height: 100%;
    width: 100%;
    background-color: #c4d0d9;
  }
  #root {
    height: inherit;
    width: inherit;
  }
`;

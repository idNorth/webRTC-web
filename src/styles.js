import { createGlobalStyle } from 'styled-components'

const availWidth = window.screen.availWidth;
const availHeight = window.screen.availHeight;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Roboto;
    height: 100vh;
    width: ${availWidth}px;
  }
  #root {
    height: inherit;
    width: inherit;
  }
`;

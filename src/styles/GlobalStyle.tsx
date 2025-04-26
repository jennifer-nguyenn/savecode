import { createGlobalStyle } from 'styled-components';
import { tokens, globalStyles } from './tokens';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${tokens.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${tokens.colors.background};
  }

  ${globalStyles}
`; 
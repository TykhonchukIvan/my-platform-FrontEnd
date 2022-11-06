import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    background: ${(props) => props.theme.mainBackgroundColor};
  };

`;
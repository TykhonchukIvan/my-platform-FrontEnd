import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    background: ${(props) => props.theme.mainBackgroundColor};
  };
  
`;
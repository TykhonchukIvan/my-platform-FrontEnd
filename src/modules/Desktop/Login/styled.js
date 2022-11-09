import styled from 'styled-components';

export const LoginWrapper = styled.div` && {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}`;

export const LoginContent = styled.div` && {
  background: ${({theme}) => theme.login.background};
  width: 350px;
  height: 400px;
}`;

export const LoginHeader = styled.div` && {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  
  .login--img-logo {
    width: 70px;
    height: 70px;
  }
}`


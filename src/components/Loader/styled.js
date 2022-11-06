import styled from 'styled-components';


export const StyledLoaderWrapper = styled.div` && {

  @keyframes disappear {
    0% {
      background-color: ${({ theme }) => theme.loader.background};
      transform: scale(1, 1);
    }
    100% {
      background-color: ${({ theme }) => theme.loader.secondBackground};
      transform: scale(0, 0);
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(90deg) }
    50% { transform: rotate(180deg) }
    75% { transform: rotate(270deg) }
    100% { transform: rotate(360deg) }
  }
  
  margin: 100px auto;
  width: ${({ size }) => size.widthWrapper}px;
  height: ${({ size }) => size.heightWrapper}px;
  animation: spin 10s infinite;
}`;


export const SquareWrapper = styled.div` && {
  background: ${({ theme }) => theme.loader.background};
  animation-delay: ${({ animation }) => animation}ms;
  float: left;
  clear: right;
  margin: ${({ size }) => size.margin}px;
  width: ${({ size }) => size.widthSquare}px;
  height: ${({ size }) => size.heightSquare}px;
  animation-name: disappear;
  animation-direction: alternate;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
}`;
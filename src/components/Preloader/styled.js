import styled from 'styled-components';

export const StyledPreloaderWrapper = styled.div` && {
  display: flex;
  flex-direction: row;
  
  @keyframes glow-effect-grow {
    0%,
    40%,
    100% {
      transform: scale(0.7);
      opacity: 0.95;
    }
    20% {
      transform: scale(1.15);
      box-shadow: 0 1px 2px 0 ${({ theme }) => theme.preloader.boxShadowBackground};
    }
  }
}`

export const SquareWrapper = styled.div` && {
  width: ${({ sizeSquare }) => sizeSquare.width};
  height: ${({ sizeSquare }) => sizeSquare.height};
  border-radius: 3px;
  background: ${({ theme }) => theme.preloader.background};
  animation: glow-effect-grow ${({ animation }) => animation}s ease-in-out infinite;
  animation-delay: ${props => props.animationDelay}s;
}`;
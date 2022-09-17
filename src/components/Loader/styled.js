import styled from 'styled-components';


export const StyledLoader = styled.div` && {
  
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .loading {
    display: flex;
    flex-direction: column;
  }

  .preloader {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .preloader_content {
    position: relative;
    width: ${props => props.size.width};
    height: ${props => props.size.height};
  }

  .preloader_first,
  .preloader_second,
  .preloader_third {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: 0.7s linear infinite;
  }

  .preloader_first {
    border-bottom: ${props => props.size.border} solid red;
    animation-name: first;
  }

  .preloader_second {
    border-right: ${props => props.size.border} solid rebeccapurple;
    animation-name: second;
  }

  .preloader_third {
    border-top: ${props => props.size.border} solid black;
    animation-name: third;
  }

  @keyframes first {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes second {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes third {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }

}`;
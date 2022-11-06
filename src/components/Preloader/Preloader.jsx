import React from 'react';
import PropTypes from 'prop-types';

import { SquareWrapper, StyledPreloaderWrapper } from '@src/components/Preloader/styled';

const Preloader = (props) => {

  const { size, amountSquare } = props;

  const createAnimation = (amountSquare) => {
    if (typeof amountSquare !== 'number') return []
    const animationDelayArr = []
    for (let i = 0; i < amountSquare; i++) {
      if (animationDelayArr.length === 0) {
        animationDelayArr.push(-0.2)
      }
      animationDelayArr.push(Number((animationDelayArr[i] -0.2).toFixed(1)));
    }
    return animationDelayArr.reverse();
  }

  const GetSquare = () => createAnimation(amountSquare).map((el, index) => <SquareWrapper
    key={index}
    animation={Math.abs(createAnimation(amountSquare)[0])}
    sizeSquare={getSizeLoader(size)}
    animationDelay={el}
    />
  )

  const getSizeLoader = (size) => {
    switch (size) {
      case 'large' :
        return {
          width: '15px',
          height: '15px',
        }
      case 'small' :
        return {
          width: '5px',
          height: '5px',
        }
      default :
        return {
          width: '10px',
          height: '10px',
        }
    }
  }

  return (
      <StyledPreloaderWrapper>
        <GetSquare />
      </StyledPreloaderWrapper>
  )
};

Preloader.propTypes = {
  size: PropTypes.string.isRequired,
  amountSquare: PropTypes.number.isRequired,
};

export default Preloader;
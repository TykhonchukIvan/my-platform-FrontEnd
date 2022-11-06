import React from 'react';
import PropTypes from 'prop-types';

import { SquareWrapper, StyledLoaderWrapper } from './styled';


const Loader = (props) => {

  const { size } = props;

  const getSizeLoader = (size) => {
    switch (size) {
      case 'large' :
        return {
          widthWrapper: 100,
          heightWrapper: 100,
          widthSquare: 27,
          heightSquare: 27,
          margin: 3,
        }
      case 'small' :
        return {
          widthWrapper: 25,
          heightWrapper: 25,
          widthSquare: 5,
          heightSquare: 5,
          margin: 1,
        }
      default :
        return {
          widthWrapper: 50,
          heightWrapper: 50,
          widthSquare: 12,
          heightSquare: 12,
          margin: 2,
        }
    }
  }

  const animationDelayArr = [1000, 800, 600, 800, 600, 400, 600, 400, 200]

  const GetSquare = () => animationDelayArr.map((el, index) => <SquareWrapper
    key={index}
    className="square"
    animation={el}
    size={getSizeLoader(size)}/>
  )

  return (
    <StyledLoaderWrapper size={getSizeLoader(size)}>
      <GetSquare />
    </StyledLoaderWrapper>
  );
}

Loader.propTypes = {
  size: PropTypes.string.isRequired,
};


export default Loader;
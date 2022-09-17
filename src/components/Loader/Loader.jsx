import React from 'react';
import { StyledLoader } from './styled';


const Loader = (props) => {

  const { size } = props;

  const getSizeLoader = () => {
    switch (size) {
      case 'big' :
        return {
          width: '100px',
          height: '100px',
          border: '8px',
        }
      case 'small' :
        return {
          width: '25px',
          height: '25px',
          border: '2px',
        }
      default :
        return {
          width: '50px',
          height: '50px',
          border: '4px',
        }
    }
  }

  return (
    <>
      <StyledLoader id="globalLoader" size={getSizeLoader()}>
        <div className="loading">
          <div className="preloader">
            <div className="preloader_content">
              <div className="preloader_first" />
              <div className="preloader_second" />
              <div className="preloader_third" />
            </div>
          </div>
        </div>
      </StyledLoader>
    </>
  );
}


export default Loader;
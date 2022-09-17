import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {appActions} from '@src/redux/app/reducer';
import Loader from '@src/components/Loader';


export const App = () => {
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(appActions.init())
  }, [])

  return <div>
    <Loader size={'big'} />
  </div>
}
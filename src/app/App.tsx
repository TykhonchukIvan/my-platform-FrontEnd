import React, {useEffect} from 'react';
import favicon from '@public/favicon.svg'
import {useDispatch} from 'react-redux';
import {appActions} from '@src/redux/app/reducer';

export const App = () => {
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(appActions.init())
  }, [])

  return <div><img src={favicon}/></div>
}
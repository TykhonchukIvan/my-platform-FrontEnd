import React from 'react';
import {useSelector} from "react-redux";
import {appStore} from "@src/redux/app/selector";

import {LoginContent, LoginHeader, LoginWrapper} from '@src/modules/Desktop/Login/styled';


const Login = () => {

    const { login } = useSelector(appStore.getTheme);

    return (
    <LoginWrapper>
      <LoginContent>
          <LoginHeader>
              <img src={login.iconLogo} className={'login--img-logo'}/>
          </LoginHeader>
      </LoginContent>
    </LoginWrapper>
  )
}

export default Login;
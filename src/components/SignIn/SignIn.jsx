import React from 'react';
import { SignInForm } from '../SignInForm';
import { LinksBox } from '../LinksBox';

import logo from '../../images/logo.svg';
import './SignIn.scss';

export const SignIn = () => (
  <div className="sign-in">
    <img
      src={logo}
      alt="logo"
      className="sign-in__logo"
    />
    <SignInForm />
    <LinksBox />
  </div>
);

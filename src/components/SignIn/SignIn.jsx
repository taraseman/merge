import React from 'react';
import { SignInForm } from '../SignInForm';
import { SignInInput } from '../SignInIput';
import { Button } from '../Button';
import { LinksBox } from '../LinksBox';

import logo from '../../images/logo.svg';
import './SignIn.scss';

export const SignIn = () => {
  const a = 0;

  return (
    <div className="sign-in">
      <img
        src={logo}
        alt="logo"
        className="sign-in__logo"
      />
      <SignInForm />
      <SignInInput
        title="Email"
        type="email"
        hasPlaceholderLink={false}
      />
      <SignInInput
        title="Password"
        type="password"
        hasPlaceholderLink={1}
      />
      <Button
        content="Sign In"
        type="submit"
      />
      <LinksBox />
    </div>
  );
};

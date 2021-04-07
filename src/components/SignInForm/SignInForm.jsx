import React, { useCallback, useState, useContext } from 'react';
import { LoginContext } from '../LogInContext';
import { SignInInput } from '../SignInIput';
import { Button } from '../Button';

import './SignInForm.scss';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isEmailTrue, setIsEmailTrue] = useState(true);
  const [isPassTrue, setIsPassTrue] = useState(true);
  const [isLogined, setIsLogined] = useState(false);
  const { setHasLogined } = useContext(LoginContext);
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const changeInput = useCallback((value, type) => {
    setIsEmailTrue(true);
    setIsPassTrue(true);
    switch (type) {
      case 'password':
        setPass(value);
        break;

      case 'email':
        setEmail(value);
        break;
      default:
    }
  });

  const submitForm = (event) => {
    event.preventDefault();

    const isEmailCorrect = emailPattern.test(email);
    const isPassCorrect = pass.length >= 6;

    if (!isEmailCorrect || !isPassCorrect) {
      setIsEmailTrue(isEmailCorrect);
      setIsPassTrue(isPassCorrect);
    } else {
      setHasLogined(true);
      setIsLogined(true);
    }
  };

  return (
    <form
      onSubmit={event => submitForm(event)}
      className="sign-in-form"
    >
      <div className="sign-in-form__head">
        <h2 className="sign-in-form__title">Sign in</h2>
        Don’t have an account?
        <a
          href="/#"
          className="sign-in-form__sign-up-link"
        >
          Sign up now
        </a>
      </div>
      <SignInInput
        title="Email"
        type="email"
        value={email}
        changeInput={changeInput}
        hasPlaceholderLink={false}
        hasError={isEmailTrue}
        isLogined={isLogined}
      />
      <SignInInput
        title="Password"
        type="password"
        value={pass}
        changeInput={changeInput}
        hasPlaceholderLink={!!true}
        hasError={isPassTrue}
        isLogined={isLogined}
      />
      <Button
        content="Sign In"
        type="submit"
        isDisable={email.length === 0 && pass.length === 0}
      />
    </form>
  );
};

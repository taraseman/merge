import React from 'react';
import './SignInForm.scss';

export const SignInForm = () => {
  const t = 0;

  return (
    <form className="sign-in-form">
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
    </form>
  );
};

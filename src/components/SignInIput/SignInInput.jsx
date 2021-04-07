import React from 'react';
import './SignInInput.scss';

export const SignInInput = ({ type, hasPlaceholderLink, title }) => (
  <>
    <label className="sign-in-input__label">
      {title}
    </label>
    <input
      type={type}
      className="sign-in-input__input"
    />
  </>
);

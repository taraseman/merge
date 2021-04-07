import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SignInInput.scss';

export const SignInInput = (
  {
    type,
    hasPlaceholderLink,
    title,
    changeInput,
    value,
    hasError,
    isLogined,
  },
) => (
  <div className="sign-in-input">
    <label className="sign-in-input__label" htmlFor={type}>
      {title}
    </label>
    <input
      id={type}
      type={type}
      className={
      classNames('sign-in-input__input',
        { 'sign-in-input__input--error': !hasError,
          'sign-in-input__input--is-logined': isLogined })
      }
      value={value}
      onChange={event => changeInput(event.target.value, type)}
    />
    {hasPlaceholderLink && (
      <a
        href="/#"
        className="sign-in-input__link-password"
      >
        Forgot your password?
      </a>
    )}
  </div>
);

SignInInput.propTypes = {
  type: PropTypes.string.isRequired,
  hasPlaceholderLink: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLogined: PropTypes.bool.isRequired,
};

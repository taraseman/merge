import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ content, isDisable }) => (
  <button
    type="submit"
    className="button"
    disabled={isDisable}
  >
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ content }) => (
  <button
    type="submit"
    className="button"
  >
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

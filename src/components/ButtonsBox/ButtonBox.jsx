import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonBox.scss';

export const ButtonBox = ({ chooseSlide, choosenSlide }) => (
  <div className="button-box">
    <label className="button-box__label">
      <button
        type="button"
        className={
          classNames('button-box__button',
            { 'button-box__button--active': choosenSlide === 0 })}
        onClick={() => chooseSlide(0)}
      />
    </label>
    <label className="button-box__label">
      <button
        type="button"
        className={
          classNames('button-box__button',
            { 'button-box__button--active': choosenSlide === 33.33 })}
        onClick={() => chooseSlide(33.33)}
      />
    </label>
    <label className="button-box__label">
      <button
        type="button"
        className={
          classNames('button-box__button',
            { 'button-box__button--active': choosenSlide === 66.66 })}
        onClick={() => chooseSlide(66.66)}
      />
    </label>
  </div>
);

ButtonBox.propTypes = {
  chooseSlide: PropTypes.func.isRequired,
  choosenSlide: PropTypes.number.isRequired,
};

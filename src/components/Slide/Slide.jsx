import React from 'react';
import './Slide.scss';

export const Slide = ({ imgSrc, title, text }) => (
  <li>
    <img
      src={imgSrc}
      alt="g"
      className="slide__img"
    />
    <h3 className="slide__title">{title}</h3>
    <p className="slide__text">{text}</p>
  </li>
);

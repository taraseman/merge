import React, { useState, useCallback } from 'react';

import firstSlide from '../../images/slide-1.png';
import secondSlide from '../../images/slide-2.png';
import thirdSlide from '../../images/slide-3.png';

import { ButtonBox } from '../ButtonsBox';
import { Slide } from '../Slide';
import './Slider.scss';

export const Slider = () => {
  const [choosenSlide, chooseSlide] = useState(0);

  const chooseSlideWrapper = useCallback(chooseSlide);

  return (
    <div className="slider">
      <div className="slider__window">
        <ul
          className="slider__wraper"
          style={{
            transform: `translateX(-${choosenSlide}%)`,
          }}
        >
          <Slide
            title="Tokenplace"
            imgSrc={firstSlide}
            text="Multi-exchange Trading Terminal"
          />
          <Slide
            title="Fund Platform"
            imgSrc={secondSlide}
            text="Hedge funds wealth management"
          />
          <Slide
            title="Noviscient"
            imgSrc={thirdSlide}
            text="Management Platform"
          />
        </ul>
      </div>
      <ButtonBox
        chooseSlide={chooseSlideWrapper}
        choosenSlide={choosenSlide}
      />
    </div>
  );
};

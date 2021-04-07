import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import firstSlide from '../../images/slide-1.png';
import secondSlide from '../../images/slide-2.png';
import thirdSlide from '../../images/slide-3.png';
import fourthSlide from '../../images/slide-4.png';

import { ButtonBox } from '../ButtonsBox';
import { Slide } from '../Slide';
import './Slider.scss';

export const Slider = ({ hasLogined }) => {
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
          {hasLogined
            ? (
              <Slide
                title="Merge Data Review"
                imgSrc={fourthSlide}
                text="It gives data managers the power
                  to efficiently manage quality data
                  to ensure database lock readiness."
              />
            ) : (
              <Slide
                title="Tokenplace"
                imgSrc={firstSlide}
                text="Multi-exchange Trading Terminal"
              />
            )
          }
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

Slider.propTypes = {
  hasLogined: PropTypes.bool.isRequired,
};

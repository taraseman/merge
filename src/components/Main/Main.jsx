import React from 'react';
import { Slider } from '../Slider';
import { SignIn } from '../SignIn';

import './Main.scss';

export const Main = () => (
  <div className="main">
    <Slider />
    <SignIn />
  </div>
);

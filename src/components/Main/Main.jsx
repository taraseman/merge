import React, { useState, useMemo } from 'react';
import { LoginContext } from '../LogInContext';
import { Slider } from '../Slider';
import { SignIn } from '../SignIn';

import './Main.scss';

export const Main = () => {
  const [hasLogined, setHasLogined] = useState(false);

  const contextValue = useMemo(() => (
    {
      hasLogined,
      setHasLogined,
    }
  ), [hasLogined]);

  return (
    <div className="main">
      <LoginContext.Provider value={contextValue}>
        <Slider hasLogined={hasLogined} />
        <SignIn />
      </LoginContext.Provider>
    </div>
  );
};

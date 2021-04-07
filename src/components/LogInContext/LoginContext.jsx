import React from 'react';

export const LoginContext = React.createContext({
  hasLogined: false,
  setHasLogined: () => {},
});

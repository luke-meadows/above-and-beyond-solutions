import { createContext, useState } from 'react';

export const Ctx = createContext();

export const CtxProvider = ({ children }) => {
  const [stickyNavCoords, setStickyNavCoords] = useState(0);
  const [shouldStick, setShouldStick] = useState(false);
  return (
    <Ctx.Provider
      value={{
        stickyNavCoords,
        setStickyNavCoords,
        shouldStick,
        setShouldStick,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

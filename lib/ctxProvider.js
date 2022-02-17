import { createContext, useState } from 'react';

export const Ctx = createContext();

export const CtxProvider = ({ children }) => {
  const [stickyNavCoords, setStickyNavCoords] = useState(0);
  const [shouldStick, setShouldStick] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [stopScrolling, setStopScrolling] = useState(false);
  return (
    <Ctx.Provider
      value={{
        stickyNavCoords,
        setStickyNavCoords,
        shouldStick,
        setShouldStick,
        mobileNavActive,
        setMobileNavActive,
        stopScrolling,
        setStopScrolling,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

import { createContext, useState } from 'react';

export const Ctx = createContext();

export const CtxProvider = ({ children }) => {
  const [stickyNavCoords, setStickyNavCoords] = useState(0);
  return (
    <Ctx.Provider
      value={{
        stickyNavCoords,
        setStickyNavCoords,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

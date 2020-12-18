import { createContext, useRef } from "react";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const navRef = useRef(null);

  return <NavContext.Provider value={{ navRef }}>{children}</NavContext.Provider>;
};

import React from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={5}>{children}</AppContext.Provider>;
};

export default AppContext
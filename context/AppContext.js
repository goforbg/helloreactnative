import React from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const blogPosts = [
    {
      title: "Blog Post 1",
    },
    {
      title: "Blog Post 2",
    },
  ];


  return <AppContext.Provider value={blogPosts}>{children}</AppContext.Provider>;
};

export default AppContext;

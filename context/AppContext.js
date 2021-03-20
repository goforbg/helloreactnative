import React from "react";
import { useReducer } from "react";

const AppContext = React.createContext();

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog_post":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(BlogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blog_post" });
  };

  return (
    <AppContext.Provider value={{ blogPosts: blogPosts, addBlogPost }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

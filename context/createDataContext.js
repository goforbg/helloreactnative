import React, { useReducer } from "react";

//Reducer like to do state related activity using a switch case.
// Actions like to Create Post , Edit Delete
// What should the initial state be.
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //Actions is an object === { addBlogPost : (dispatch) return a function that does something }

    const boundActions = {};
    //Iterating all keys
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

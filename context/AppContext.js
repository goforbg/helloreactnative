import createDataContext from "./createDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog_post":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blog_post" });
  };
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost },
  []
);

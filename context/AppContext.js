import createDataContext from "./createDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case "delete_blog_post":
      return state.filter((blogPost) => blogPost.id != action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blog_post" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blog_post", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost },
  []
);

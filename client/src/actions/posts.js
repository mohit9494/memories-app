import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.fetchPosts();
    const data = res.data;

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {

  try {

    const res = await api.createPost(post)
    const data = res.data;

    dispatch({ type: "CREATE", payload: data });

  } catch (error) {
    console.log(error.message);
  }




}

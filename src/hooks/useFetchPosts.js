import useFetch from "./useFetch";

const useFetchPosts = (postId = "") => {
  const [posts, setPosts] = useFetch(`posts/${postId}`);

  return [posts, setPosts];
};

export default useFetchPosts;

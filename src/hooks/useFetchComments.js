import useFetch from "./useFetch";

const useFetchComments = (postId) => {
  const [comments, setComments] = useFetch(`posts/${postId}/comments`);

  return [comments, setComments];
};

export default useFetchComments;

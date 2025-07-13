import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../utils/authUtils";
import CommentCard from "../components/CommentCard";
import styles from "./post.module.css";
import useGetData from "../hooks/useGetData";
import { fetchPost } from "../utils/fetchUtils";

const Post = () => {
  const { postId } = useParams();
  const { token, user } = useAuth();
  const [inputs, setInputs] = useState({
    comment: "",
  });

  const post = useGetData(`posts/${postId}`);
  const comments = useGetData(`posts/${postId}/comments`);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchPost(
      `readers/@${user.username}/posts/${postId}/comments`,
      { ...inputs },
      token
    );
    const jsonData = await response.json();
    if (!response.ok) {
      console.log(jsonData.message);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className={`container ${styles.postContainer}`}>
      <h1>{post.title}</h1>
      <div className={styles.contentContainer}>
        <p className={styles.postContent}>{post.content}</p>
      </div>

      <div className={styles.commentsContainer}>
        <div>
          <h2>Comments</h2>
          <hr />
        </div>
        <div>
          <form onSubmit={handleSubmit} className={styles.createCommentForm}>
            <textarea
              name="comment"
              id="comment"
              value={inputs.comment}
              onChange={handleChange}
              required
            ></textarea>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        {comments.map((comment, index) => (
          <CommentCard key={index} user={comment.reader.username}>
            {comment.content}
          </CommentCard>
        ))}
      </div>
    </div>
  );
};

export default Post;

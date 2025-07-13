import { useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import styles from "./post.module.css";
import useGetData from "../hooks/useGetData";

const Post = () => {
  const { postId } = useParams();

  const post = useGetData(`posts/${postId}`);
  const comments = useGetData(`posts/${postId}/comments`);

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
          <form action="" className={styles.createCommentForm}>
            <textarea name="" id=""></textarea>
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

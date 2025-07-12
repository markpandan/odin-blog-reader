import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

const PostCard = ({ header, postId, children }) => {
  return (
    <div className={styles.postCardContainer}>
      <section className={styles.postCardHeader}>
        <Link to={`/posts/${postId}`}>{header}</Link>
      </section>

      <article>{children}</article>
    </div>
  );
};

export default PostCard;

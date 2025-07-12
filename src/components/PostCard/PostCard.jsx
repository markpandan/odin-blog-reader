import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

const PostCard = ({ header, children }) => {
  return (
    <div className={styles.postCardContainer}>
      <section className={styles.postCardHeader}>
        <Link to={"/posts/123456"}>{header}</Link>
      </section>

      <article>{children}</article>
    </div>
  );
};

export default PostCard;

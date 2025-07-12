import styles from "./CommentCard.module.css";

const CommentCard = ({ user, children }) => {
  return (
    <div className={styles.commentContainer}>
      <p className={styles.commentHeader}>
        <span className={styles.commentUser}>{user}</span> wrote:
      </p>
      <p className={styles.commentContent}>{children}</p>
    </div>
  );
};

export default CommentCard;

import PostCard from "../components/PostCard";
import useFetchPosts from "../hooks/useFetchPosts";
import styles from "./home.module.css";

const Home = () => {
  const [postLists] = useFetchPosts();

  return (
    <div className={`container ${styles.homeContainer}`}>
      <h1 className="page-title">Posts</h1>
      <div className={styles.postList}>
        {postLists.map((post, index) => {
          return (
            <PostCard key={index} postId={post.id} header={post.title}>
              {post.content}
            </PostCard>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

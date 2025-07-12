import PostCard from "../components/PostCard";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={`container ${styles.homeContainer}`}>
      <h1 className="page-title">Posts</h1>
      <div className={styles.postList}>
        <PostCard header="You Should Read This">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          quis quasi voluptas architecto velit nostrum. Dicta, veniam officiis,
          harum a provident perspiciatis eius assumenda quibusdam quis sapiente
          repudiandae mollitia.
        </PostCard>
        <PostCard header="How To Create A Great Blog">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          quis quasi voluptas architecto velit nostrum. Dicta, veniam officiis,
          harum a provident perspiciatis eius assumenda quibusdam quis sapiente
          repudiandae mollitia.
        </PostCard>
        <PostCard header="What You Should Do Today?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          quis quasi voluptas architecto velit nostrum. Dicta, veniam officiis,
          harum a provident perspiciatis eius assumenda quibusdam quis sapiente
          repudiandae mollitia.
        </PostCard>
        <PostCard header="We Create The Best Blogs!">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          quis quasi voluptas architecto velit nostrum. Dicta, veniam officiis,
          harum a provident perspiciatis eius assumenda quibusdam quis sapiente
          repudiandae mollitia.
        </PostCard>
      </div>
    </div>
  );
};

export default Home;

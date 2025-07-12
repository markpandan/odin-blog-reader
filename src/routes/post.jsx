import CommentCard from "../components/CommentCard";
import styles from "./post.module.css";

const Post = () => {
  return (
    <div className={`container ${styles.postContainer}`}>
      <h1>Page Title</h1>
      <div className={styles.contentContainer}>
        <p className={styles.postContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          placeat optio, eveniet reprehenderit rem architecto tempora suscipit
          hic. Molestias nostrum ipsam distinctio nam laborum at ipsum, odio
          excepturi ea! Provident. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima laborum animi cum obcaecati, aliquid velit,
          iure culpa nesciunt adipisci, unde ullam voluptatibus explicabo. Id,
          nihil quam accusantium quibusdam eius distinctio.
        </p>
        <p className={styles.postContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          placeat optio, eveniet reprehenderit rem architecto tempora suscipit
          hic. Molestias nostrum ipsam distinctio nam laborum at ipsum, odio
          excepturi ea! Provident. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima laborum animi cum obcaecati, aliquid velit,
          iure culpa nesciunt adipisci, unde ullam voluptatibus explicabo. Id,
          nihil quam accusantium quibusdam eius distinctio. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nesciunt placeat optio, eveniet
          reprehenderit rem architecto tempora suscipit hic. Molestias nostrum
          ipsam distinctio nam laborum at ipsum, odio excepturi ea! Provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laborum animi cum obcaecati, aliquid velit, iure culpa nesciunt
          adipisci, unde ullam voluptatibus explicabo. Id, nihil quam
          accusantium quibusdam eius distinctio.
        </p>
        <p className={styles.postContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          placeat optio, eveniet reprehenderit rem architecto tempora suscipit
          hic. Molestias nostrum ipsam distinctio nam laborum at ipsum, odio
          excepturi ea! Provident. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima laborum animi cum obcaecati, aliquid velit,
          iure culpa nesciunt adipisci, unde ullam voluptatibus explicabo. Id,
          nihil quam accusantium quibusdam eius distinctio.
        </p>
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
        <CommentCard user="Alice">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
          delectus, maxime minus recusandae harum mollitia error aperiam
          perspiciatis quidem iusto, inventore officia sapiente reiciendis
          similique nesciunt accusantium eligendi facilis.
        </CommentCard>
        <CommentCard user="Steven">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
          delectus, maxime minus recusandae harum mollitia error aperiam
          perspiciatis quidem iusto, inventore officia sapiente reiciendis
          similique nesciunt accusantium eligendi facilis. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Totam alias a facilis esse aperiam
          perspiciatis modi quo cupiditate quas sit saepe repellendus facere
          suscipit est dolor, amet illum quidem ratione?
        </CommentCard>
        <CommentCard user="Robert">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
          delectus, maxime minus recusandae harum mollitia error aperiam
          perspiciatis quidem iusto, inventore officia sapiente reiciendis
          similique nesciunt accusantium eligendi facilis. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Rem quasi illo magnam assumenda
          velit, nostrum, ipsa accusamus aut qui sequi, facilis id incidunt. Vel
          expedita dolorem quod quasi, enim sequi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores, unde rerum aliquam sequi beatae
          sint similique a, quibusdam eum illo ad debitis alias magnam ea nisi
          odit? Quis, similique eligendi!
        </CommentCard>
        <CommentCard user="Samantha">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
          delectus, maxime minus recusandae harum mollitia error aperiam
          perspiciatis quidem iusto, inventore officia sapiente reiciendis
          similique nesciunt accusantium eligendi facilis.
        </CommentCard>
        <CommentCard user="Kyle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
          delectus, maxime minus recusandae harum mollitia error aperiam
          perspiciatis quidem iusto, inventore officia sapiente reiciendis
          similique nesciunt accusantium eligendi facilis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sequi doloremque consectetur
          praesentium modi asperiores natus quod facere itaque numquam explicabo
          doloribus, ipsum aut veritatis nesciunt exercitationem aliquam libero
          laudantium adipisci.
        </CommentCard>
      </div>
    </div>
  );
};

export default Post;

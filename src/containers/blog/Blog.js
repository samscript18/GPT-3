import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => {
  return (
    <div className="gpt3-blog" id="blog">
      <div className="gpt3-blog-heading">
        <h1 className="gradient-text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3-blog-content">
        <div className="gpt3-blog-groupA">
          <Article
            img={blog01}
            date="Sep 29 2023"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3-blog-groupB">
          <Article
            img={blog02}
            date="Sep 29 2023"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            img={blog03}
            date="Sep 29 2023"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            img={blog04}
            date="Sep 29 2023"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            img={blog05}
            date="Sep 29 2023"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};
export default Blog;

import { Link } from "react-router-dom";

export const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {" "}
      {/* className is used instead of class because class is a reserved keyword */}
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          /* key is mainly used with map */
          <div className="blog-preview" key={blog.id}>
            {/*key is used so that react can uniqely identify items (map items) */}
            <Link to={`/blogs/${blog.id}`}>
              {/*Link parameter to BlogDetails.js*/}
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
            <Link to={`/delete/${blog.id}`}><button>Delete Blog</button></Link>
            <Link to={`/edit/${blog.id}`}><button>Edit Blog</button></Link>
          </div>
        );
      })}
    </div>
  );
};

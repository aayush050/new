import { useHistory, useParams } from "react-router-dom";
import EditBlog from "./EditBlog";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { BlogList } from "./BlogList";
import DeleteBlog from "./DeleteBlog";

const BlogDetails = () => {
  const { id } = useParams(); //id coming from URL
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
    <DeleteBlog blogId = {blog.id} />
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <p> Written By {blog.author} </p>
          <div>{blog.body}</div>
          <button ><Link to = {`/delete/${blog.id}`}>Delete blog</Link></button>
          {/*<button onClick = {handleClick}>Delete Blog</button>*/}
          <button ><Link to = {`/edit/${blog.id}`}>Edit Blog </Link></button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

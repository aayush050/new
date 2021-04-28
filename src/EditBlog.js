import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditBlog = () => {
    const {id} = useParams();    
    const {data:blog, error} = useFetch ("http://localhost:8000/blogs/"+id);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const history = useHistory();

    useEffect(() => { 

        if(blog){
            setTitle(blog.title);
            setBody(blog.body);
            setAuthor(blog.author);
        } 
    },[blog]);

    const handleSubmit = (e) => {
        e.preventDefault();                     //prevent page from refreshing
        const blogForId = { title, body, author, id };
        fetch("http://localhost:8000/blogs/"+id, {
          method: "PUT",  //PUT is used to update the content already present
          headers: { "Content-Type": "application/json" },     
          body: JSON.stringify(blogForId),
        }).then(() => {
          history.push("/");        //tell us where to navigate.
        });
    }
    return ( 
        <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>log Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          <button>Add Blog</button>
        </form>
      </div>
    );
};
 
export default EditBlog;
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import React from 'react';
const DeleteBlog = () => {
  const { id } = useParams(); //id coming from URL
  const history = useHistory();
  //return needed? doubt(working same without return!)
  useEffect(()=>{
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  },[])
  
  return <React.Fragment></React.Fragment>     /* Functional component returns only JSX */
};

export default DeleteBlog;

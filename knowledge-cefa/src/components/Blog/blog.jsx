import { useEffect, useState } from "react";

const blog = () => {
  const [blogs,setBlogs]= useState([]);
  useEffect(()=>{
    fetch('Blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

  return (
    <div>
      
    </div>
  );
};

export default blog;
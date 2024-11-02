import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blogs = () => {
  const [blogs, setBlogs]= useState([]);

  useEffect((()=>{

//    fetch('data.json')
//   .then( res => res.json())
// .then(data => setBlogs(data))
const fetchBlogs = async ()=>{
try {
  const res = await axios.get('data.json')
const data = await res.data;
setBlogs(data);
} catch (error) {
  console.log(error)
}

}
fetchBlogs()

  }), [])
  console.log(blogs)
  return (
    <div>
      <h1>{blogs.length}</h1>
    </div>
  )
}

export default Blogs

// src/BlogList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log('BlogList component mounted');
    axios.get('https://localhost:7018/api/Blog')
      .then(response => {
        console.log('API call successful', response.data);
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs!', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      <ul style={{ width: '100%', margin: '0 auto' }}>
        {blogs.map(blog => (
          <li key={blog.blogId} style={{ color: 'green', textDecoration: 'underline', padding: '10px 0' }}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <small>By {blog.author} on {new Date(blog.createdDate).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;


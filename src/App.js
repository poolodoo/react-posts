import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data));
  });

  return (
    <div className="App">
      <h1>Posts</h1>
      <h2>...are here</h2>

      {posts.map(post => (
        <div key={post.id}>{post.id}-{post.title}</div>
      ))}
    </div>
  );
}

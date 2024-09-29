'use client';

import { useState, useEffect } from 'react';
import { Post } from '@/types';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
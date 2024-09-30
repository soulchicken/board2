'use client';

import { supabase } from '@/lib/supabase';
import { Post } from '@/types';
import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        setError('Post not found'); // 에러 처리
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [id]);

  const deletePost = async () => {
    if (confirm('진짜 지워?')) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/');
      } else {
        const errorData = await response.json();
        console.error('Error deleting post:', errorData.error);
      }
    }
  };

  if (error) {
    notFound();
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <small>Posted on: {post?.created_at.toLocaleString()}</small>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

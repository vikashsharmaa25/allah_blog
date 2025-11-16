'use client';

import React from 'react'
import { BlogList } from '@/components/admin/blog/blog-list';
import { getAllPost } from '@/apis/all-apis';

export default function BlogPage() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAllPost();
      setPosts(res);
    };
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="container py-6">
      <BlogList posts={posts} />
    </div>
  );
}
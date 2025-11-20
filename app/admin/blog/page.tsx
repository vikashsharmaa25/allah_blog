'use client';

import { useEffect, useState } from 'react'
import { BlogList } from '@/components/admin/blog/blog-list';
import { getAllPost } from '@/apis/all-apis';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAllPost();
      console.log("Admin posts response:", res);
      setPosts(res);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container py-6">
      <BlogList posts={posts} />
    </div>
  );
}
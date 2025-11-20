'use client'

import { useState } from 'react';
import { BlogPost } from '@/lib/blog';
import { BlogPostCard } from './BlogPostCard';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
  };

  return (
    <section className="relative py-12 min-h-screen overflow-hidden">
      {/* Decorative Moon Icons - Left Side */}
      <div className="absolute left-4 md:left-8 top-1/3 space-y-3 z-10">
        <div className="w-3 h-3 rounded-full border border-yellow-600"></div>
        <div className="w-3 h-3 rounded-full border border-yellow-600"></div>
        <div className="w-3 h-3 rounded-full border border-yellow-600"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
      </div>

      {/* Decorative Moon Icons - Right Side */}
      <div className="absolute right-4 md:right-8 top-1/3 space-y-3 z-10">
        <div className="w-3 h-3 rounded-full border border-yellow-600"></div>
        <div className="w-3 h-3 rounded-full border border-yellow-600"></div>
        <div className="w-3 h-3 rounded-full border border-yellow-600"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Latest Articles
        </h2>

        {/* Blog Posts Grid - All Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {posts?.map((post) => (
            <BlogPostCard key={post?.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-transparent border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

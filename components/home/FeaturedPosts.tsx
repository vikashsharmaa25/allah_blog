'use client'

import { useState } from 'react';
import { BlogPostCard } from '../blog/BlogPostCard';
import { BlogPost } from '@/lib/blog';

interface FeaturedPostsProps {
  posts: BlogPost[];
  categories: string[];
}

export const FeaturedPosts = ({ posts, categories }: FeaturedPostsProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Islamic Articles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of insightful articles on various Islamic topics to enhance your knowledge and spirituality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-full font-medium transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

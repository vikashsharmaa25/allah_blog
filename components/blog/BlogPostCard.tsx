'use client'

import Link from 'next/link';
import { BookOpen, Calendar, User, Heart, Share2, MessageCircle, Clock, Tag } from 'lucide-react';

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    likes: number;
    comments: number;
  };
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center text-white text-sm">
            <User className="w-4 h-4 mr-1" />
            <span className="mr-4">{post.author}</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <Tag className="w-4 h-4 text-emerald-600 mr-1" />
          <span className="text-sm text-emerald-600 font-medium">{post.category}</span>
          <span className="mx-2 text-gray-400">•</span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 h-14">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 h-18">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-500 hover:text-emerald-600 transition">
              <Heart className="w-5 h-5 mr-1" />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-emerald-600 transition">
              <MessageCircle className="w-5 h-5 mr-1" />
              <span className="text-sm">{post.comments}</span>
            </button>
          </div>
          <Link 
            href={`/blog/${post.id}`}
            className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

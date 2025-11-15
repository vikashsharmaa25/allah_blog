'use client'
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const BlogPostCard = ({ post }: any) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full rounded-b-xl"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col grow p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 grow">
                    {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                        📅 {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                        ⏱️ {post.readTime}
                    </span>
                </div>

                {/* Read More Button */}
                <Link href={`/blog/${post.id}`} className="self-end flex items-center gap-2 text-amber-600 rounded-lg text-sm font-medium transition-colors duration-200">
                    Read More
                    <MoveRight className="w-4 h-4 text-amber-600" />
                </Link>
            </div>
        </div>
    );
};

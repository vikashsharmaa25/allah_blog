'use client';

import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeaturedPosts } from '@/components/home/FeaturedPosts';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import HeroSection from '@/components/home/HeroSection';
import { useEffect, useState } from 'react';
import axiosInstance from '@/apis/axios/axiosInstance';

export default function Home() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts");
        console.log("Posts response:", response);
        setPostsData(response);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="flex flex-col">
      <Header />
      <main className="grow">
        <HeroSection />
        <FeaturedPosts posts={postsData} />
        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </div>
  );
}
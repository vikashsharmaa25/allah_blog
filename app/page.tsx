'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeaturedPosts } from '@/components/home/FeaturedPosts';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { HeroSection } from '@/components/home/HeroSection';

// Static Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Ramadan Ki Fazilat Aur Barkat",
    excerpt: "Ramadan ka mahina Allah ki rehmat aur maghfirat ka mahina hai. Is mahine mein ibadat ka ajar bahut zyada hai.",
    content: "Ramadan Mubarak! Is mubarak mahine mein rozay, taraweeh, aur Quran ki tilawat ki fazilat...",
    author: "Maulana Ahmed Ali",
    date: "2025-03-15",
    category: "Ramadan",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    likes: 245,
    comments: 32
  },
  {
    id: 2,
    title: "Namaz Ka Tarika - Puri Jaankari",
    excerpt: "Namaz Islam ka sabse ahem rukn hai. Yahan par namaz ka mukammal tarika bataya gaya hai.",
    content: "Namaz ek musalman ke liye farz hai. Pehle wuzu karein, phir qibla ki taraf munh karke...",
    author: "Dr. Fatima Khan",
    date: "2025-03-10",
    category: "Ibadat",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    likes: 189,
    comments: 45
  },
  {
    id: 3,
    title: "Quran Ki Tilawat Ke Adaab",
    excerpt: "Quran Majeed Allah ka kalam hai. Isko padhne ke kuch khaas adaab hain jo har musalman ko maloom hone chahiye.",
    content: "Quran padhte waqt paak saaf hona zaroori hai. Wuzu ke baad...",
    author: "Qari Muhammad Hassan",
    date: "2025-03-05",
    category: "Quran",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80",
    likes: 312,
    comments: 28
  },
  {
    id: 4,
    title: "Hajj Ki Tayyari - Complete Guide",
    excerpt: "Hajj har sahi musalman par zindagi mein ek baar farz hai. Is article mein hajj ki puri tayyari batai gayi hai.",
    content: "Hajj ke liye pehle se tayyari karna bohot zaroori hai...",
    author: "Haji Abdul Rahman",
    date: "2025-02-28",
    category: "Hajj",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
    likes: 276,
    comments: 56
  },
  {
    id: 5,
    title: "Zakat Ka Hisaab Aur Masail",
    excerpt: "Zakat Islam ke paanch arkan mein se ek hai. Is article mein zakat ke masail aur hisaab ki tafseel hai.",
    content: "Zakat nisaab ke barabar maal par farz hoti hai...",
    author: "Mufti Khalid Saifullah",
    date: "2025-02-20",
    category: "Fiqh",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    likes: 198,
    comments: 41
  },
  {
    id: 6,
    title: "Shab-e-Qadr Ki Fazilat",
    excerpt: "Laylatul Qadr hazaar maheenon se behtar hai. Is raat ki ibadat ki fazilat aur tarika.",
    content: "Shab-e-Qadr Ramadan ke aakhri ashra mein aati hai...",
    author: "Maulana Ahmed Ali",
    date: "2025-02-15",
    category: "Ramadan",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80",
    likes: 423,
    comments: 67
  }
];

const categories = ["All", "Ramadan", "Ibadat", "Quran", "Hajj", "Fiqh", "Seerah"];

// Main Page Component
export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="grow">
        <HeroSection />
        <FeaturedPosts posts={blogPosts} categories={categories} />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
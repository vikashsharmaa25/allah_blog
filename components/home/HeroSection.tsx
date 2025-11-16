'use client'

import { Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Background from "@/public/assets/background.jpg"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src={Background}
            alt="Islamic Background"
            width={1024}
            height={1080}
            className="w-full h-full object-fill"
          />
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/20"></div> */}
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Islamic Calligraphy */}
          <div className="mb-6 animate-fadeIn">
            <div className="inline-block">
              <div className="text-amber-400 text-5xl md:text-6xl mb-2 font-serif">☪</div>
              <p className="text-3xl md:text-4xl text-amber-300 font-serif mb-3 tracking-wide">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Journey Through Islamic Knowledge
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore the timeless wisdom Islam through authentic articles, scholarly works, and spiritual guides
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="relative bg-white rounded-full shadow-2xl overflow-hidden flex items-center">
                <div className="pl-6 pr-3 py-1 flex items-center">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Quran, Hadith, Articles..."
                  className="flex-1 py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-base"
                />
                <button className="mr-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
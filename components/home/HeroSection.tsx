'use client'

import { Search } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-r from-emerald-900 to-teal-900 text-white py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover the Beauty of Islam
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Explore authentic Islamic knowledge, articles, and resources to strengthen your faith and understanding.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for articles, Quran, Hadith..."
                className="w-full px-6 py-4 pr-14 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-green-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="text-sm font-medium">Popular:</span>
            {['Ramadan', 'Prayer', 'Quran', 'Hajj', 'Zakat', 'Sunnah'].map((tag) => (
              <a
                key={tag}
                href="#"
                className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400"></div>
    </section>
  );
};

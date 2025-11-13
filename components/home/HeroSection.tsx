'use client'

import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <section className="relative bg-linear-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0 L50 20 L70 20 L55 32 L60 52 L40 40 L20 52 L25 32 L10 20 L30 20 Z"
                  fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Arabic Calligraphy Style Accent */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-md px-6 py-2 rounded-full border border-blue-400/30">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-100">Authentic Islamic Knowledge</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-linear-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent animate-gradient">
                Discover the Beauty
              </span>
              <span className="block mt-2 text-blue-50">
                of Islam
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Explore authentic Islamic knowledge, inspiring articles, and comprehensive resources to strengthen your faith and deepen your understanding.
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-20"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-md rounded-full shadow-2xl border border-blue-500/30 overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for articles, Quran verses, Hadith..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full px-8 py-5 pr-16 bg-transparent text-white placeholder-blue-300/60 focus:outline-none text-base md:text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-linear-to-r from-blue-600 to-indigo-700 text-white p-3 md:p-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:scale-110">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Popular Topics */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-blue-200">Popular Topics:</span>
              {[
                { tag: 'Ramadan', color: 'from-blue-600/90 to-indigo-600/90' },
                { tag: 'Prayer', color: 'from-indigo-600/90 to-violet-600/90' },
                { tag: 'Quran', color: 'from-sky-600/90 to-blue-600/90' },
                { tag: 'Hajj', color: 'from-blue-700/90 to-indigo-700/90' },
                { tag: 'Zakat', color: 'from-violet-600/90 to-purple-600/90' },
                { tag: 'Sunnah', color: 'from-indigo-700/90 to-blue-700/90' }
              ].map(({ tag, color }) => (
                <button
                  key={tag}
                  className={`bg-linear-to-r ${color} backdrop-blur-sm hover:scale-110 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 border border-blue-400/30`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: '10K+', label: 'Articles' },
              { number: '50K+', label: 'Monthly Readers' },
              { number: '100%', label: 'Authentic' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="bg-blue-900/20 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30 hover:bg-blue-900/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-100/80">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="rgba(59, 130, 246, 0.1)" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </section>
  );
}
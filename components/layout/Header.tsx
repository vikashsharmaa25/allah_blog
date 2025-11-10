"use client";

import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            {/* {darkMode ? (
              <Sun
                className="w-8 h-8 cursor-pointer"
                onClick={toggleDarkMode}
              />
            ) : (
              <Moon
                className="w-8 h-8 cursor-pointer"
                onClick={toggleDarkMode}
              />
            )} */}
            <div>
              <h1 className="text-2xl font-bold">yaALLAH.in</h1>
              <p className="text-xs opacity-80">Knowledge & Guidance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-emerald-200 transition">
              Home
            </a>
            <a href="#" className="hover:text-emerald-200 transition">
              Articles
            </a>
            <a href="#" className="hover:text-emerald-200 transition">
              Quran
            </a>
            <a href="#" className="hover:text-emerald-200 transition">
              Hadith
            </a>
            <a href="#" className="hover:text-emerald-200 transition">
              About
            </a>
            <Link
              href="/login"
              className="w-full bg-white text-emerald-700 px-4 py-2 rounded-full font-medium mt-2"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-emerald-700 rounded-lg p-4 mt-2 mb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="block py-2 hover:bg-emerald-600 px-2 rounded"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-2 hover:bg-emerald-600 px-2 rounded"
              >
                Articles
              </a>
              <a
                href="#"
                className="block py-2 hover:bg-emerald-600 px-2 rounded"
              >
                Quran
              </a>
              <a
                href="#"
                className="block py-2 hover:bg-emerald-600 px-2 rounded"
              >
                Hadith
              </a>
              <a
                href="#"
                className="block py-2 hover:bg-emerald-600 px-2 rounded"
              >
                About
              </a>
              <Link
                href="/login"
                className="w-full bg-white text-emerald-700 px-4 py-2 rounded-full font-medium mt-2"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, User, LogOut, Home, BookOpen, BookMarked, Info, ChevronDown, UserCircle, Settings, HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // 🔥 Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  // 🔥 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
    router.push("/");
    router.refresh();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="text-white shadow-lg sticky top-0 z-50 bg-[#101828]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold">yaALLAH.in</h1>
              <p className="text-xs opacity-80 ml-2 hidden sm:inline">Knowledge & Guidance</p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`flex items-center space-x-1 hover:text-emerald-200 transition ${pathname === "/" ? "text-emerald-400" : ""}`}>
              <Home size={18} />
              <span>Home</span>
            </Link>

            <Link href="/articles" className={`flex items-center space-x-1 hover:text-emerald-200 transition ${pathname === "/articles" ? "text-emerald-400" : ""}`}>
              <BookOpen size={18} />
              <span>Articles</span>
            </Link>

            <Link href="/quran" className={`flex items-center space-x-1 hover:text-emerald-200 transition ${pathname === "/quran" ? "text-emerald-400" : ""}`}>
              <BookMarked size={18} />
              <span>Quran</span>
            </Link>

            <Link href="/hadith" className={`flex items-center space-x-1 hover:text-emerald-200 transition ${pathname === "/hadith" ? "text-emerald-400" : ""}`}>
              <BookMarked size={18} />
              <span>Hadith</span>
            </Link>

            <Link href="/about" className={`flex items-center space-x-1 hover:text-emerald-200 transition ${pathname === "/about" ? "text-emerald-400" : ""}`}>
              <Info size={18} />
              <span>About</span>
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">

                {/* 🔥 Show Dashboard only for ADMIN */}
                {user?.userType === "ADMIN" && (
                  <Link
                    href="/admin"
                    className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition"
                  >
                    <User size={18} />
                    <span>Dashboard</span>
                  </Link>
                )}

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center space-x-1 text-white hover:text-emerald-200 transition"
                    aria-expanded={showDropdown}
                    aria-haspopup="true"
                  >
                    <UserCircle size={24} className="text-emerald-400" />
                    <span className="hidden md:inline">{user?.name || 'Account'}</span>
                    <ChevronDown size={16} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email || ''}</p>
                      </div>
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowDropdown(false)}
                      >
                        <User size={16} className="mr-2 text-emerald-600" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Settings size={16} className="mr-2 text-emerald-600" />
                        Settings
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="border border-amber-500/90 text-amber-500/90 px-6 py-2 rounded-full font-medium hover:bg-amber-500/90 hover:text-white transition"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white hover:bg-emerald-700 p-2 rounded-lg transition"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-[#101828] rounded-lg p-4 mt-2 mb-4">
            <div className="flex flex-col space-y-3">

              <Link
                href="/"
                className={`flex items-center space-x-2 py-2 px-3 rounded transition ${pathname === "/" ? "bg-[#2B528F]" : "hover:bg-[#2B528F]"}`}
                onClick={() => setMobileMenu(false)}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>

              <Link
                href="/articles"
                className={`flex items-center space-x-2 py-2 px-3 rounded transition ${pathname === "/articles" ? "bg-[#2B528F]" : "hover:bg-[#2B528F]"}`}
                onClick={() => setMobileMenu(false)}
              >
                <BookOpen size={18} />
                <span>Articles</span>
              </Link>

              <Link
                href="/quran"
                className={`flex items-center space-x-2 py-2 px-3 rounded transition ${pathname === "/quran" ? "bg-[#2B528F]" : "hover:bg-[#2B528F]"}`}
                onClick={() => setMobileMenu(false)}
              >
                <BookMarked size={18} />
                <span>Quran</span>
              </Link>

              <Link
                href="/hadith"
                className={`flex items-center space-x-2 py-2 px-3 rounded transition ${pathname === "/hadith" ? "bg-[#2B528F]" : "hover:bg-[#2B528F]"}`}
                onClick={() => setMobileMenu(false)}
              >
                <BookMarked size={18} />
                <span>Hadith</span>
              </Link>

              <Link
                href="/about"
                className={`flex items-center space-x-2 py-2 px-3 rounded transition ${pathname === "/about" ? "bg-[#2B528F]" : "hover:bg-[#2B528F]"}`}
                onClick={() => setMobileMenu(false)}
              >
                <Info size={18} />
                <span>About</span>
              </Link>

              {/* 🔥 Admin Dashboard only for ADMIN */}
              {isLoggedIn && user?.userType === "ADMIN" && (
                <Link
                  href="/admin"
                  className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition justify-center"
                  onClick={() => setMobileMenu(false)}
                >
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
              )}

              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenu(false);
                  }}
                  className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition justify-center py-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center space-x-2 border border-amber-500/90 text-amber-500/90 px-4 py-2 rounded-full font-medium hover:bg-amber-500/90 hover:text-white transition"
                  onClick={() => setMobileMenu(false)}
                >
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

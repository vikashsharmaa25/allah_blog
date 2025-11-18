'use client';

import { useState } from 'react';
import { User, Lock, Mail, Eye, EyeOff, Phone } from 'lucide-react';
import SignupLottie from "@/public/assets/signup.json"
import LottiePlayer from '@/components/ui/LottiePlayer';
import Link from 'next/link';
import axiosInstance from '@/apis/axios/axiosInstance';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    // userType: 'user',
  });
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsPending(true);
    setIsError(false);

    const res = await axiosInstance.post("/auth/register", formData);

    if (res) {
      setIsPending(false);
      setIsError(false);
      router.push("/login");
    } else {
      setIsPending(false);
      setIsError(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex relative">
      {/* LEFT SIDE — FIXED PANEL */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-1/2 bg-linear-to-br from-gray-100 to-gray-100 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-12 text-center">
          <LottiePlayer
            animationData={SignupLottie}
            className="w-full h-full"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      {/* RIGHT SIDE — SCROLLABLE FORM */}
      <div className="w-full lg:ml-[50%] flex items-center justify-center bg-white p-8 overflow-y-auto min-h-screen">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-6">
            <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Islamic Portal</h2>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Join us today and start your journey</p>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+1234567890"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-4 h-5 w-5 text-gray-400" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {isError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                An error occurred during signup. Please try again.
              </div>
            )}
            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg disabled:opacity-50"
              disabled={isPending}
            >
              {isPending ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>

          <Link href="/login" className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <span className="font-semibold text-yellow-600 hover:text-yellow-700 cursor-pointer">
              Sign in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

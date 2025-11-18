'use client';

import { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import LoginLottie from "@/public/assets/login.json";
import LottiePlayer from '@/components/ui/LottiePlayer';
import axiosInstance from '@/apis/axios/axiosInstance';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsPending(true);
        setIsError(false);

        try {
            const res = await axiosInstance.post("/auth/login", formData);

            if (res && res.token) {
                const token = res.token;
                Cookies.set("token", token, { expires: 7 });
                localStorage.setItem("token", token);

                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                try {
                    const profileResponse = await axiosInstance.get("/profile/me");
                    console.log(profileResponse);
                    if (profileResponse) {
                        localStorage.setItem("user", JSON.stringify(profileResponse));
                    }

                    router.push("/");
                    router.refresh();
                } catch (profileError) {
                    console.error('Error fetching profile:', profileError);
                    router.push("/");
                    router.refresh();
                }
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            console.error('Login error:', error);
            setIsError(true);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            <div className="hidden bg-gray-100 lg:flex lg:w-1/2 relative overflow-hidden p-12">
                <LottiePlayer
                    animationData={LoginLottie}
                    className="w-full h-full"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        margin: 'auto',
                        transform: 'scale(1.2)'
                    }}
                />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
                <div className="w-full max-w-md">
                    <div className="lg:hidden text-center mb-8">
                        <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Islamic Portal</h2>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                        <p className="text-gray-600">Sign in to continue your journey</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <button className="text-sm font-medium text-yellow-600 hover:text-yellow-700">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        {isError && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                                Invalid email or password. Please try again.
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isPending}
                        >
                            {isPending ? 'Signing in...' : 'Sign In'}
                        </button>
                    </div>

                    <Link href="/signup" className="mt-8 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <button className="font-semibold text-yellow-600 hover:text-yellow-700">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
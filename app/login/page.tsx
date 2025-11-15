'use client';

import { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsPending(true);
        setIsError(false);

        // Simulate API call
        setTimeout(() => {
            setIsPending(false);
            console.log('Login attempt with:', formData);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Image/Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 border-4 border-yellow-500 rounded-full"></div>
                    <div className="absolute bottom-32 right-32 w-24 h-24 border-4 border-yellow-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-yellow-500 rounded-full"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full px-12 text-center">
                    <div className="mb-8">
                        <div className="w-20 h-20 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4">Islamic Portal</h1>
                        <p className="text-xl text-gray-300 max-w-md mx-auto">
                            Your gateway to authentic Islamic knowledge and spiritual growth
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-500">10K+</div>
                            <div className="text-gray-400 text-sm mt-1">Articles</div>
                        </div>
                        <div className="w-px h-12 bg-gray-700"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-500">50K+</div>
                            <div className="text-gray-400 text-sm mt-1">Readers</div>
                        </div>
                        <div className="w-px h-12 bg-gray-700"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-500">100+</div>
                            <div className="text-gray-400 text-sm mt-1">Scholars</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
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

                        <div className="flex items-center">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4 text-yellow-600 focus:ring-yellow-600 border-gray-300 rounded"
                                checked={formData.remember}
                                onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                Remember me for 30 days
                            </label>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isPending}
                        >
                            {isPending ? 'Signing in...' : 'Sign In'}
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => console.log('Google login')}
                                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
                            </button>
                            <button
                                onClick={() => console.log('Facebook login')}
                                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="ml-2 text-sm font-medium text-gray-700">Facebook</span>
                            </button>
                        </div>
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
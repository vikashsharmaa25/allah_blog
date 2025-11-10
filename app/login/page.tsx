'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Implement login logic
        console.log('Login attempt with:', formData);
        setTimeout(() => setIsLoading(false), 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 to-teal-50 p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-emerald-800">Welcome Back</h1>
                    <p className="mt-2 text-gray-600">Sign in to your account to continue</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-10"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-gray-700">Password</Label>
                                <Link href="/forgot-password" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="pl-10"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="w-full bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 h-11"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </Button>
                        </div>
                    </form>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

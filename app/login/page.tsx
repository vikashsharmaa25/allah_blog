'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { userLogin } from '@/apis/auth';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { mutate: login, isPending, isError, error } = useMutation({
        mutationFn: () =>
            userLogin({
                email: formData.email,
                password: formData.password,
            }),
        onSuccess: (data) => {
            // Handle successful login (e.g., store token, redirect)
            console.log('Login successful:', data);
            router.push('/'); // Redirect to home or dashboard
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login();
        console.log('Login attempt with:', formData);
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
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-emerald-800">Welcome Back</h1>
                    <p className="mt-2 text-gray-600">Sign in to your account</p>
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
                                    placeholder="your@email.com"
                                    className="pl-10"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
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
                                    placeholder="••••••••"
                                    className="pl-10"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        {isError && (
                            <div className="text-red-500 text-sm text-center">
                                {error?.message || 'Invalid email or password'}
                            </div>
                        )}

                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition-colors"
                                disabled={isPending}
                            >
                                {isPending ? 'Signing in...' : 'Sign In'}
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
function setIsLoading(arg0: boolean): void {
    throw new Error('Function not implemented.');
}


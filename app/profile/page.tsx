'use client'

import React from 'react'
import { useAuth } from '@/providers/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Mail, Calendar, LogOut, Settings, Shield } from 'lucide-react'

function ProfilePage() {
    const { user, isLoggedIn, logout } = useAuth()

    if (!isLoggedIn || !user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <Card className="w-full max-w-md">
                    <CardContent className="p-8 text-center">
                        <div className="mb-6">
                            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                                <User className="w-10 h-10 text-gray-400" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Not Logged In</h2>
                        <p className="text-gray-600 mb-6">Please login to view your profile</p>
                        <Button className="w-full" onClick={() => window.location.href = '/login'}>
                            Go to Login
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const handleLogout = () => {
        logout()
        window.location.href = '/login'
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header Card */}
                <Card className="mb-8 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
                    <CardContent className="relative pb-8">
                        <div className="absolute -top-16 left-8">
                            <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
                                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                    <User className="w-16 h-16 text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="pt-20 ml-40">
                            <h1 className="text-3xl font-bold text-gray-800 capitalize">
                                {user.name || user.username || 'User'}
                            </h1>
                            <p className="text-gray-600 mt-1">Welcome to your profile</p>
                        </div>
                    </CardContent>
                </Card>

                {/* User Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Personal Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                Personal Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between py-3 border-b">
                                <span className="text-gray-600">Full Name</span>
                                <span className="font-medium capitalize">
                                    {user.name || user.username || 'Not available'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b">
                                <span className="text-gray-600">Email</span>
                                <span className="font-medium">{user.email || 'Not available'}</span>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <span className="text-gray-600">User ID</span>
                                <span className="font-medium text-sm">#{user.id || 'N/A'}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Account Status */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Account Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between py-3 border-b">
                                <span className="text-gray-600">Status</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    Active
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b">
                                <span className="text-gray-600 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Member Since
                                </span>
                                <span className="font-medium">
                                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recent'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <span className="text-gray-600">Role</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    {user.role || 'User'}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            Quick Actions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline" className="flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Edit Profile
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Contact Support
                            </Button>
                            <Button
                                variant="destructive"
                                className="flex items-center gap-2"
                                onClick={handleLogout}
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ProfilePage
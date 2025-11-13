"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Download, Filter, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const AdminDashboard = () => {
    const [searchQuery, setSearchQuery] = useState("")

    // Sample data - replace with actual data from your API
    const stats = [
        { title: "Total Posts", value: "1,234", change: "+12% from last month" },
        { title: "Active Users", value: "845", change: "+5% from last week" },
        { title: "Comments", value: "3,456", change: "+8% from yesterday" },
        { title: "Page Views", value: "24,531", change: "+15% from last week" },
    ]

    const recentActivities = [
        { id: 1, user: "John Doe", action: "created a new post", time: "2 minutes ago" },
        { id: 2, user: "Jane Smith", action: "updated profile", time: "1 hour ago" },
        { id: 3, user: "Bob Johnson", action: "commented on a post", time: "3 hours ago" },
        { id: 4, user: "Alice Brown", action: "deleted a comment", time: "5 hours ago" },
    ]

    const posts = [
        { id: 1, title: "Getting Started with Next.js", author: "John Doe", status: "published", date: "2023-06-15" },
        { id: 2, title: "React Hooks Guide", author: "Jane Smith", status: "draft", date: "2023-06-14" },
        { id: 3, title: "TypeScript Best Practices", author: "Bob Johnson", status: "published", date: "2023-06-12" },
        { id: 4, title: "CSS Grid Layouts", author: "Alice Brown", status: "archived", date: "2023-06-10" },
    ]

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, Admin</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                        <Button size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Add New
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <Card key={index}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                <div className="h-4 w-4 text-muted-foreground">
                                    <Search className="h-4 w-4" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground">{stat.change}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    {/* Recent Activities */}
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Recent Activities</CardTitle>
                            <CardDescription>Latest actions from users</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity) => (
                                    <div key={activity.id} className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none">{activity.user}</p>
                                            <p className="text-sm text-muted-foreground">{activity.action}</p>
                                        </div>
                                        <div className="text-sm text-muted-foreground">{activity.time}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Quick Stats</CardTitle>
                            <CardDescription>Overview of your content</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Published Posts</p>
                                        <p className="text-sm text-muted-foreground">Last updated 1 hour ago</p>
                                    </div>
                                    <Badge variant="outline">24</Badge>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Drafts</p>
                                        <p className="text-sm text-muted-foreground">In progress</p>
                                    </div>
                                    <Badge variant="outline">5</Badge>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Comments Pending</p>
                                        <p className="text-sm text-muted-foreground">Needs review</p>
                                    </div>
                                    <Badge variant="outline">12</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Posts Table */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Posts</CardTitle>
                                <CardDescription>Manage your blog posts</CardDescription>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search posts..."
                                        className="pl-8 sm:w-[300px]"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <Button variant="outline" size="sm">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filter
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Author</TableHead>
                                    <TableHead className="text-center">Status</TableHead>
                                    <TableHead className="text-right">Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {posts.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell className="font-medium">{post.id}</TableCell>
                                        <TableCell>{post.title}</TableCell>
                                        <TableCell>{post.author}</TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                variant={
                                                    post.status === 'published'
                                                        ? 'default'
                                                        : post.status === 'draft'
                                                            ? 'outline'
                                                            : 'secondary'
                                                }
                                            >
                                                {post.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{post.date}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default AdminDashboard

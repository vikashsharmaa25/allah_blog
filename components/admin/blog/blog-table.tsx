'use client';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Blog = {
    id: string;
    title: string;
    slug: string;
    status: 'published' | 'draft' | 'archived';
    publishedAt: string;
    author: string;
    views: number;
};

type BlogTableProps = {
    blogs: Blog[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onView: (id: string) => void;
};

export function BlogTable({ blogs, onEdit, onDelete, onView }: BlogTableProps) {
    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'published':
                return 'default';
            case 'draft':
                return 'secondary';
            case 'archived':
                return 'destructive';
            default:
                return 'outline';
        }
    };

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Published</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs.map((blog) => (
                        <TableRow key={blog.id}>
                            <TableCell className="font-medium">{blog.title}</TableCell>
                            <TableCell>
                                <Badge variant={getStatusVariant(blog.status)}>
                                    {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                                </Badge>
                            </TableCell>
                            <TableCell>{new Date(blog.publishedAt).toLocaleDateString()}</TableCell>
                            <TableCell>{blog.author}</TableCell>
                            <TableCell>{blog.views.toLocaleString()}</TableCell>
                            <TableCell className="flex justify-end space-x-2">
                                <Button variant="ghost" size="icon" onClick={() => onView(blog.id)}>
                                    <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => onEdit(blog.id)}>
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => onDelete(blog.id)}>
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

'use client';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';

export function BlogTable({ blogs, onEdit, onDelete, onView }: any) {
    console.log("blogs in table:", blogs);
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
                        <TableHead>Author</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Comments</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs?.map((blog: any) => (
                        <TableRow key={blog.id}>
                            <TableCell className="font-medium">{blog.title}</TableCell>
                            <TableCell>{blog.authorName}</TableCell>
                            <TableCell>{blog.authorEmail}</TableCell>
                            <TableCell>{new Date(blog.createdAt).toLocaleDateString()}</TableCell>
                            <TableCell>{blog.commentCount}</TableCell>
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

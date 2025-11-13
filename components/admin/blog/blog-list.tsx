'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import { BlogTable } from './blog-table';
import { BlogForm } from './blog-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type Blog = {
  id: string;
  title: string;
  slug: string;
  status: 'published' | 'draft' | 'archived';
  publishedAt: string;
  author: string;
  views: number;
};

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  // Mock data - replace with actual data fetching
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: '1',
      title: 'Getting Started with Next.js',
      slug: 'getting-started-with-nextjs',
      status: 'published',
      publishedAt: '2023-11-01',
      author: 'John Doe',
      views: 1245,
    },
    {
      id: '2',
      title: 'React Hooks Guide',
      slug: 'react-hooks-guide',
      status: 'draft',
      publishedAt: '2023-11-05',
      author: 'Jane Smith',
      views: 0,
    },
  ]);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (id: string) => {
    const blogToEdit = blogs.find(blog => blog.id === id);
    if (blogToEdit) {
      setEditingBlog(blogToEdit);
      setIsFormOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const handleView = (id: string) => {
    // Navigate to blog post
    console.log('View blog:', id);
  };

  const handleSubmit = (values: any) => {
    if (editingBlog) {
      // Update existing blog
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id 
          ? { ...blog, ...values, updatedAt: new Date().toISOString() }
          : blog
      ));
    } else {
      // Create new blog
      const newBlog = {
        id: Math.random().toString(36).substr(2, 9),
        ...values,
        author: 'Current User', // Replace with actual user
        publishedAt: new Date().toISOString(),
        views: 0,
      };
      setBlogs([...blogs, newBlog]);
    }
    setIsFormOpen(false);
    setEditingBlog(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h2 className="text-2xl font-bold tracking-tight">Blog Posts</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button onClick={() => {
            setEditingBlog(null);
            setIsFormOpen(true);
          }}>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <BlogTable 
        blogs={filteredBlogs} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        onView={handleView} 
      />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <BlogForm 
              defaultValues={editingBlog || undefined}
              onSubmit={handleSubmit}
              isEditing={!!editingBlog}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import { createPost } from '@/apis/all-apis';
import { BlogTable } from './blog-table';
import { BlogForm } from './blog-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function BlogList({ posts }: { posts: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);

  const handleEdit = (blog: any) => {
    if (blog) {
      setEditingBlog(blog);
      setIsFormOpen(true);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      // setBlogs(blogs.filter(blog => blog.id !== id));
      console.log('Delete blog:', id);
    }
  };

  const handleView = (id: number) => {
    // Navigate to blog post
    console.log('View blog:', id);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setIsSubmitting(true);

      if (editingBlog) {
        // Handle update logic here if needed
        // await updatePost({ ...values, id: editingBlog.id });
      } else {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('content', values.content);

        if (values.featuredImage && values.featuredImage.length > 0) {
          formData.append('image', values.featuredImage[0]);
        }

        await createPost({
          title: values.title,
          content: values.content,
          image: values.featuredImage[0]
        });

        // window.location.reload();
      }

      setIsFormOpen(false);
      setEditingBlog(null);
    } catch (error) {
      console.error('Error submitting blog post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleCreate = () => {
    setIsFormOpen(true);
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
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <BlogTable
        blogs={posts}
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

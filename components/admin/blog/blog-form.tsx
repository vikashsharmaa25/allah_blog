'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    content: z.string().min(10, {
        message: 'Content must be at least 10 characters.',
    }),
    featuredImage: z.any()
        .refine((files) => files?.length >= 1, 'Image is required')
        .refine((files) => {
            if (!files?.[0]) return true;
            return files[0]?.size <= 5000000;
        }, 'Max file size is 5MB')
        .refine((files) => {
            if (!files?.[0]) return true;
            return ['image/jpeg', 'image/png', 'image/webp'].includes(files[0]?.type);
        }, 'Only .jpg, .png, and .webp formats are supported')
});

type BlogFormValues = z.infer<typeof formSchema>;

type BlogFormProps = {
    defaultValues?: Partial<BlogFormValues>;
    onSubmit: (values: BlogFormValues) => void;
    isSubmitting?: boolean;
    isEditing?: boolean;
};

export function BlogForm({
    defaultValues,
    onSubmit,
    isSubmitting = false,
    isEditing = false,
}: BlogFormProps) {
    const form = useForm<BlogFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: '',
            featuredImage: '',
            ...defaultValues,
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter blog title"
                                    {...field}
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Write your blog post content here..."
                                    className="min-h-[200px]"
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="featuredImage"
                    render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                            <FormLabel>Featured Image</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    disabled={isSubmitting}
                                    onChange={(e) => {
                                        onChange(e.target.files);
                                    }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end space-x-4 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => form.reset()}
                        disabled={isSubmitting}
                    >
                        Reset
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Saving...' : 'Save Post'}
                    </Button>
                </div>
            </form>
        </Form>
    );
}

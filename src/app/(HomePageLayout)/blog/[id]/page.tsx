import BlogDetails from '@/components/Modules/Blog/BlogDetails'
import { getAllBlogs, getBlogById } from '@/services/Blog';
import { Metadata } from 'next';
import React from 'react'

export const metadata = {
  title: 'Blog Details',
  description: 'Blog Details',
  keywords: ['Blog Details', 'Blog', 'Blog Details'],
  openGraph: {
    title: 'Blog Details',
    description: 'Blog Details',
    images: ['/images/blog-details.jpg'],
  },

  alternates: {
    canonical: '/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}




const BlogDetailsPage = async ({ params } : { params: Promise<{ id: string }> }) => {

  const { id } = await params;
  const blog = await getBlogById(id);

  metadata.title = blog.data.title;
  metadata.description = blog.data.excerpt;
  metadata.keywords = [blog.data.title, 'Blog', 'Blog Details'];
  metadata.openGraph.title = blog.data.title;
  metadata.openGraph.description = blog.data.excerpt;
  metadata.openGraph.images = [blog.data.thumbnail];

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  )
}

export default BlogDetailsPage

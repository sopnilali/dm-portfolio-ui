import BlogList from '@/components/Modules/Blog/BlogList'
import { getAllBlogs } from '@/services/Blog';
import React from 'react'

export const metadata = {
  title: 'Blog List | Md. Tohidul Islam',
  description: 'Blog List',
  keywords: ['Blog List', 'Blog', 'Blog List', 'Md. Tohidul Islam'],
  openGraph: {
    title: 'Blog List | Md. Tohidul Islam',
    description: 'Blog List',
    images: ['/images/blog-list.jpg'],
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

const BlogListPage = async () => {

  const blogs = await getAllBlogs();

  metadata.title = `Blog List | ${blogs.data.length} Blogs`;
  metadata.description = `Blog List | ${blogs.data.length} Blogs`;
  metadata.keywords = ['Blog List', 'Blog', 'Blog List', 'Md. Tohidul Islam', ...blogs.data.map((blog: any) => blog.title)];
  metadata.openGraph.title = `Blog List | ${blogs.data.length} Blogs`;
  metadata.openGraph.description = `Blog List | ${blogs.data.length} Blogs`;  
  metadata.openGraph.images = blogs.data.map((blog: any) => blog.thumbnail);


  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  )
}

export default BlogListPage

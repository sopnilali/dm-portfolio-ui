'use client'

import React from 'react'
// @ts-ignore
import blogs from './blogs.json'
import Link from 'next/link'
import { useGetAllBlogQuery } from '@/components/Redux/features/blog/blogApi';

const BlogList = ({ blogs }: { blogs: any }) => {

  const {  isLoading, isError } = useGetAllBlogQuery(undefined);

  const blogData = blogs?.data || [];

  const dateFormatted = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  if (isLoading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
    )
}

if (isError || !blogs?.data) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl text-red-600 dark:text-red-400">Error loading blogs</h1>
        </div>
    )
}

  return (
    <section className="w-full py-12 px-2 sm:px-6 md:px-12 mt-12 bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 transition-colors duration-300">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] dark:text-white mb-2">Latest Blog Posts</h2>
      </div>
      <div className="container mx-auto flex flex-col gap-8 items-center">
        {blogData.map((blog: any, idx: number) => (
          <div key={idx} className="w-full bg-white dark:bg-gray-900/40 rounded-xl shadow-md flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8 transition hover:shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex-shrink-0 w-full md:w-72 h-48 md:h-44 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <img src={blog.thumbnail} alt={blog.title} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col items-start text-left">
              <Link href={`/blog/${blog.id}`}>
                <h3 className="text-xl md:text-2xl font-bold text-[#222] dark:text-white mb-2 leading-snug capitalize">{blog.title}</h3>
              </Link>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-2 capitalize">
                {blog.user.name} &middot; <span>{dateFormatted(blog.createdAt)}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4 line-clamp-3">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.id}`}
                className="inline-block px-6 py-2 border border-[#222] dark:border-gray-600 rounded-md text-[#222] dark:text-white font-semibold hover:bg-[#ea6153] hover:text-white hover:border-[#ea6153] transition-colors duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogList

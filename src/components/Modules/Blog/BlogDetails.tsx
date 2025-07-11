"use client"
import React from 'react'
import Image from 'next/image'
import './blog.css'
import { useParams } from 'next/navigation'
import { useGetBlogByIdQuery } from '@/components/Redux/features/blog/blogApi'

const BlogDetails = ({ blog }: { blog: any }) => {


    const { id } = useParams();
    const { isLoading, isError } = useGetBlogByIdQuery(id);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900/70 backdrop-blur-md">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800 dark:border-gray-200"></div>
            </div>
        );
    }

    if (isError || !blog?.data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900/70 backdrop-blur-md">
                <h1 className="text-2xl text-red-500 dark:text-red-300">Error loading blog details</h1>
            </div>
        );
    }
    

    return (
        <div className="blog-container container mx-auto ">
            {/* Blog Header */}
            <div className="blog-header mt-25">
                <h1 className="blog-title capitalize">{blog?.data?.title}</h1>
                <div className="blog-meta ">
                    <span className=" capitalize">{blog?.data?.user?.name}</span> &middot;
                    <span className="blog-date ml-1 capitalize">{new Date(blog?.data?.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</span>
                </div>
            </div>

            {/* Featured Image */}
            {blog?.data?.thumbnail && (
                <div className="blog-image-container">
                    <Image
                        src={blog.data.thumbnail}
                        alt={blog.data.title}
                        fill
                        className="blog-image"
                    />
                </div>
             )}


            <div className='blog-content' dangerouslySetInnerHTML={{ __html: blog?.data?.content || "" }} />
        </div>
    )
}

export default BlogDetails

"use client"
import React from 'react'
import Image from 'next/image'
import './blog.css'

const BlogDetails = () => {

    return (
        <div className="blog-container container mx-auto ">
            {/* Blog Header */}
            <div className="blog-header">
                <h1 className="blog-title">Blog Title</h1>
                <div className="blog-meta">
                    <span className="blog-date">
                        {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                </div>
            </div>

            {/* Featured Image */}
            {/* {blog?.data?.thumbnail && ( */}
                <div className="blog-image-container">
                    {/* <Image
                        // src={logo}
                        // alt={blog.data.title}
                        alt="blog image"
                        fill
                        className="blog-image"
                    /> */}
                </div>
            {/* )} */}


            <div className='blog-content' dangerouslySetInnerHTML={{ __html: "Blog Content" }} />
        </div>
    )
}

export default BlogDetails

import React from 'react'
// @ts-ignore
import blogs from './blogs.json'
import Link from 'next/link'

const BlogList = () => {
  return (
    <section className="w-full py-12 px-2 sm:px-6 md:px-12">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] mb-2">Latest Blog Posts</h2>
      </div>
      <div className="container mx-auto flex flex-col gap-8 items-center">
        {blogs.map((blog: any, idx: number) => (
          <div key={idx} className="w-full bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8 transition hover:shadow-lg">
            <div className="flex-shrink-0 w-full md:w-72 h-48 md:h-44 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <img src={blog.image} alt={blog.title} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#222] mb-2 leading-snug">{blog.title}</h3>
              <div className="text-gray-500 text-sm mb-2">
                {blog.author} &middot; <span>{blog.date}</span>
              </div>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="inline-block px-6 py-2 border border-[#222] rounded-md text-[#222] font-semibold hover:bg-[#ea6153] hover:text-white hover:border-[#ea6153] transition-colors duration-200"
                target="_blank" rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogList

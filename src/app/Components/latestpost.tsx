'use client';
import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogs, { Blog } from '../data/blog';

const LatestPosts = forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="bg-gradient-to-br from-[#12C2E9] to-[#F64F59] text-white px-4 md:px-16 py-12">
    <div className="container mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
        <p className="text-gray-300 mt-2">Stay updated with the latest insights</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post: Blog) => (
          <div
            key={post.id}
            className="bg-darkBlueAlt bg-gray-800 p-4 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-x-100"
          >
            {/* Post Image */}
            <div className="relative w-full h-40 md:h-52">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Post Content */}
            <div className="mt-4">
              <h3 className="text-lg font-bold pb-2">{post.title}</h3>
              <p className="text-gray-400 mt-2 text-sm pb-2">
                By {post.author} - {post.date}
              </p>
              
              {/* Read More Button */}
              <div className="text-lg text-gray-300  pb-2">{post.excerpt}</div>
              <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

LatestPosts.displayName = 'LatestPosts';

export default LatestPosts;
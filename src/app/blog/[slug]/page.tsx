'use client';

import { useParams } from 'next/navigation';
import blogs from '@/app/data/blog';
import Image from 'next/image';
import Link from 'next/link';

const PostPage = () => {
  const { slug } = useParams(); // Extract the slug from the URL

  // Find the post matching the slug
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gradient-to-br from-[#12C2E9] to-[#F64F59] text-white px-4 md:px-16 py-12 flex items-center justify-center min-h-screen">
  <div className="container mx-auto">
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
    </div>

    <div className="relative w-full md:w-3/4 h-72 md:h-80 mx-auto">
      <Image
        src={post.image}
        alt={post.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>

    <div className="mt-8 text-center">
      <p className="text-gray-400">{post.excerpt}</p>
      <div className="mt-4 text-lg">{post.description}</div>
    </div>

    <div className="mt-8 text-center">
      <Link href="/blog" className="text-black font-bold hover: size-3">Back to Blog</Link>
    </div>
  </div>
</div>
  );
};

export default PostPage;

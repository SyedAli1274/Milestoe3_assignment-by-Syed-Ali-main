 'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogs, { Blog } from '../data/blog';

interface Comment {
  name: string;
  text: string;
  timestamp: string;
}

const BlogPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');

  const handleCommentChange = (value: string) => {
    setCommentInput(value);
  };

  const handleNameChange = (value: string) => {
    setNameInput(value);
  };

  const handleCommentSubmit = () => {
    if (commentInput && nameInput) {
      const newComment: Comment = {
        name: nameInput,
        text: commentInput,
        timestamp: new Date().toLocaleString(),
      };
      setComments((prev) => [...prev, newComment]);
      setCommentInput('');
      setNameInput('');
    }
  };

  return (
    <main className="container bg-gradient-to-br from-[#12C2E9] to-[#F64F59] mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold text-white mb-8">Wellcom to our latest blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post: Blog) => (
          <div key={post.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-40 md:h-52">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl mt-4 font-semibold">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline mt-4 block">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Comment Section at the End of the Page */}
      <div className="mt-8  p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Comments</h3>
        <ul className="mt-2 max-h-32 overflow-y-auto">
          {comments.map((comment, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-lg mt-2">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-sm text-gray-500">{comment.timestamp}</p>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => handleNameChange(e.target.value)}
          className="w-full mt-2 p-2 rounded-lg border border-gray-300"
          placeholder="Your name"
        />
        <textarea
          value={commentInput}
          onChange={(e) => handleCommentChange(e.target.value)}
          className="w-full mt-2 p-2 rounded-lg border border-gray-300"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </main>
  );
};

export default BlogPage;
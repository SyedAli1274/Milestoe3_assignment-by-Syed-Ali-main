"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C3E50] to-[#4C5C68] text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Description */}
        <div>
          <Link href="/">
            <Image src="/homeres/logo.png" alt="Logo" width={150} height={50} />
          </Link>
          <p className="mt-4 text-sm">
            Your go-to blog for the latest trends and updates in technology, design, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
        <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/share/18DmW5CHvm/" aria-label="Facebook">
            <Image
              src="/homeres/fb.png" // Replace with the actual path to your Facebook icon
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </Link>
          <Link href="https://github.com/SyedAli1274" aria-label="Github">
            <Image
              src="/homeres/git.png" // Replace with the actual path to your Twitter icon
              alt="Github"
              width={28}
              height={26}
              className="hover:opacity-75"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/syed-ali-b3520a332?" aria-label="LinkedIn">
            <Image
              src="/homeres/Lin.png"  
              alt="LinkedIn"
              width={28}
              height={26}
              className="hover:opacity-75"
            />
          </Link>
        </div>
      </div>
        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Subscribe</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md  text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-br from-[#12C2E9] to-[#F64F59] text-black rounded-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4">
        <div className="container mx-auto px-6 flex justify-between text-sm">
          <p>© {new Date().getFullYear()} YourBlog. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

 "use client"; // For interactivity like theme toggle

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import blogs, { Blog } from '../data/blog';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Blog[]>([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setSearchResults([]);
    setSearchQuery('');
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={" bg-gradient-to-br from-[#1F1C2C] to-[#928DAB] text-white"  }
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/homeres/logo.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Actions: Search Icon & Hamburger Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleSearchInput} aria-label="Toggle Search Input">
            <Image src="/cres/s1.png" alt="Search" width={20} height={20} />
          </button>
          <button
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          ref={menuRef}
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-x-6 absolute md:static top-16 left-0 bg-gray-900 w-full md:w-auto md:bg-transparent z-40`}
        >
          <Link href="/" className="block md:inline hover:text-blue-500 pl-4 ml-6 py-2">
            Home
          </Link>
          <Link href="/blog" className="block md:inline hover:text-blue-500 pl-4 py-2">
            Blog
          </Link>
          <Link href="/Contact" className="block md:inline hover:text-blue-500 pl-4  pt-2 pb-4">
            Contact Us
          </Link>
        </nav>

        {/* Search Input for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-md bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2">
              <Image src="/cres/s1.png" alt="Search" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Search Input for Mobile */}
      {showSearchInput && (
        <div className="md:hidden px-6 py-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="absolute top-16 right-4 bg-gray-800 text-white rounded-md shadow-lg p-4 w-64 max-h-64 overflow-y-auto">
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} className="border-b border-gray-700 py-2">
                <Link href={`/blog/${result.slug}`} className="text-white" onClick={handleLinkClick}>
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
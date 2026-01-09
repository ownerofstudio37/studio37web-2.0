'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl text-white">
            Studio37
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/gallery" className="text-gray-300 hover:text-white">
              Gallery
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link
              href="/admin"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

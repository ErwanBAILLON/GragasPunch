import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-400 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/logo_grasapunch.png" alt="GrasaPunch Logo" width={50} height={50} />
            <span className="ml-3 text-2xl font-bold text-gray-800">GrasaPunch</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors">
            Shop
          </Link>
          <Link href="/news" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors">
            News
          </Link>
          <Link href="/about" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link href="/cart">
            <Image src="/Shopping_cart_grasapunch.png" alt="Cart" width={30} height={30} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-yellow-400">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-gray-800 font-semibold text-lg hover:text-gray-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-800 font-semibold text-lg hover:text-gray-600 transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-gray-800 font-semibold text-lg hover:text-gray-600 transition-colors">
                News
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 font-semibold text-lg hover:text-gray-600 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

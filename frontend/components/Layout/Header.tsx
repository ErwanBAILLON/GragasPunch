// components/Header.tsx

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Désactiver le scroll lorsque le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-yellow-400 top-0 left-0 right-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo et Titre (Mobile) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_grasapunch.png"
                alt="GrasaPunch Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              {/* Titre visible uniquement sur mobile */}
              <span className="block md:hidden ml-2 text-xl font-bold text-gray-800">
                GrasaPunch
              </span>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/news"
              className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
            >
              News
            </Link>
            <Link
              href="/about"
              className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Icons and Mobile Menu Button (Right) */}
          <div className="flex items-center space-x-4">
            {/* Icône du Panier */}
            <Link href="/cart" className="relative">
              <Image
                src="/Shopping_cart_grasapunch.png"
                alt="Cart"
                width={30}
                height={30}
              />
            </Link>

            {/* Bouton Menu Mobile */}
            <button
              className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
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
      </div>

      {/* Menu Mobile avec Transition */}
      <Transition
        show={isMobileMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        {(ref) => (
          <div className="md:hidden bg-yellow-400 shadow-md">
            <nav ref={ref} className="px-2 pt-2 pb-4 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </Transition>
    </header>
  );
}
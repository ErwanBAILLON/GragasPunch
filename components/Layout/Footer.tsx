import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-yellow-400 text-gray-800 py-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-wrap justify-between space-y-8 md:space-y-0 border-b border-black pb-8">
                    {/* Logo et description */}
                    <div className="w-full md:w-1/4">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            {/* <img src="/logo_grasapunch.png" alt="GrasaPunch Logo" className="w-10 h-10" /> */}
                            <Image src="/logo_grasapunch.png" alt="GrasaPunch Logo" width={40} height={40} className="object-contain" />
                            <span className="text-2xl font-bold">GrasaPunch</span>
                        </Link>
                        <p className="text-sm">
                            GRASAPUNCH - © 2024
                        </p>
                        <p className="text-sm mt-2">
                            This website is a student project for educational purposes only.
                        </p>
                    </div>

                    {/* Liens - Produits */}
                    <div className="w-full md:w-1/4 md:pl-12">
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <nav className="space-y-2">
                            <Link href="/shop/product_page_green" className="flex justify-between items-center hover:text-white transition-colors">
                                <span>GrasaPunch Green</span>
                                <span className="text-gray-600 ml-2">→</span>
                            </Link>
                            <hr className="border-black" />
                            <Link href="/shop/product_page_boost" className="flex justify-between items-center hover:text-white transition-colors">
                                <span>GrasaPunch Boost</span>
                                <span className="text-gray-600 ml-2">→</span>
                            </Link>
                            <hr className="border-black" />
                            <Link href="/shop/product_page_juice" className="flex justify-between items-center hover:text-white transition-colors">
                                <span>GrasaPunch Juice</span>
                                <span className="text-gray-600 ml-2">→</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Liens - Informations */}
                    <div className="w-full md:w-1/4 md:pl-12">
                        <h3 className="text-lg font-semibold mb-4">Information</h3>
                        <nav className="space-y-2">
                            <Link href="/about" className="flex justify-between items-center hover:text-white transition-colors">
                                <span>About</span>
                                <span className="text-gray-600 ml-2">→</span>
                            </Link>
                            <hr className="border-black" />
                            <Link href="/contact" className="flex justify-between items-center hover:text-white transition-colors">
                                <span>Contact</span>
                                <span className="text-gray-600 ml-2">→</span>
                            </Link>
                            <hr className="border-black" />
                            <Link href="/news" className="flex justify-between items-center hover:text-white transition-colors">
                                <span>News</span>
                                <span className="text-gray-600 ml-2">→</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Blog ou Réseaux sociaux */}
                    <div className="w-full md:w-1/4 md:pl-12">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/profile.php?id=61567096463680" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://x.com/GrasaPunch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaXTwitter size={24} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://medium.com/@grasapunch.live" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaMedium size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section légale */}
                <div className="mt-8 text-center text-sm text-gray-600">
                    Legal Information - Terms of Service - Privacy Policy
                </div>
            </div>
        </footer>
    );
}

// pages/shop.tsx

import React from 'react';
import Layout from "@/components/Layout/Layout";
import CategorySection from "@/components/CategorySection";
import productsData from "@/public/shop.json";
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from "next/link";

export default function Shop() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
                    <div className="text-white text-center md:text-left md:w-1/2 md:pr-12">
                        <h1 className="text-4xl font-bold mb-4">Our Shop</h1>
                        <p className="text-lg mb-8">
                            Discover our range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!
                        </p>
                        <Link href="#categories" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-300">
                                Browse Products
                        </Link>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <Image
                            src="/arasgrasa_homepage.png"
                            alt="Presentation Image"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <div id="categories" className="container mx-auto px-6 py-12">
                {productsData.categories.map((category) => (
                    <CategorySection key={category.id} category={category} />
                ))}
            </div>
        </Layout>
    );
}

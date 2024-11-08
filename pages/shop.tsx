import React from 'react';
import Layout from "@/components/Layout/Layout";
import CategorySection from "@/components/CategorySection";
import productsData from "@/public/shop/shop.json";
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from "next/link";

export default function Shop() {
    return (
        <Layout title="GrasaPunch - Shop Natural Energy Drinks" description="Shop the GrasaPunch collection of natural energy drinks made with Arasgrasa. Discover healthy, energizing beverages designed to boost your vitality. Order now for a natural energy experience!" url="https://grasapunch.live/shop">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 min-h-screen flex items-center justify-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0">
                    <div className="text-white md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-5xl font-bold tracking-wide leading-tight">
                            Discover the Power of <span className="text-yellow-300">Natural Energy</span>
                        </h1>
                        <p className="text-xl leading-relaxed">
                            Boost your energy with GrasaPunch&apos;s healthy and natural ingredients. Shop now and experience a new level of energy!
                        </p>
                        <Link href="#categories">
                            <p className="inline-block bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 mt-8">
                                Browse Products
                            </p>
                        </Link>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="/arasgrasa_homepage.png"
                            alt="GrasaPunch Energy Drink"
                            width={400}
                            height={400}
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-10 w-full text-center">
                    <Link href="#categories">
                        <p className="text-white animate-bounce">↓ Scroll to Explore ↓</p>
                    </Link>
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

// components/CategorySection.tsx

import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Assurez-vous d'utiliser les bons imports selon votre version de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Review = {
    id: number;
    author: string;
    rating: number;
    comment: string;
};

type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    uri: string;
    url_can_image: string;
    reviews: Review[];
};

type Category = {
    id: number;
    name: string;
    description: string;
    products: Product[];
};

type CategorySectionProps = {
    category: Category;
};

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
    return (
        <section className="my-8 px-4">
            {/* Category Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold">{category.name}</h2>
                <p className="text-md text-gray-600">{category.description}</p>
            </div>

            {/* Slider for Mobile */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    navigation
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    className="py-4"
                >
                    {category.products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid for Desktop */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                {category.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;

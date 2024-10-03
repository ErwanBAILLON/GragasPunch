// components/ProductCard.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    uri: string;
    url_can_image: string;
};

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center transition-shadow duration-300 hover:shadow-md">
            <Image
                src={product.url_can_image}
                alt={product.name}
                width={150}
                height={150}
                className="object-contain mb-4"
                loading="lazy"
            />
            <h3 className="text-lg font-semibold text-center">{product.name}</h3>
            <p className="text-sm text-gray-600 text-center mt-1">{product.description}</p>
            <p className="text-md font-bold text-teal-600 mt-2">{product.price}</p>
            <Link className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors duration-300" href={`/shop/${product.uri}`}>
                    View Details
            </Link>
        </div>
    );
};

export default ProductCard;

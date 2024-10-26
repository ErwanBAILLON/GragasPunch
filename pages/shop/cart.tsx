import React, { useState } from 'react';
import Layout from "@/components/Layout/Layout";
import "tailwindcss/tailwind.css";
import Image from 'next/image';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
}

export default function Cart() {
    const initialProducts: Product[] = [
        { id: 1, name: "Arasgrasa Aloe Vera Boost", category: "Boost", price: 1.5, quantity: 1, image: "/shop/product/cans/grasapunchBoost/Arasgrasa_Aloe_Verra.png"},
        { id: 2, name: "Arasgrasa Mint", category: "Green", price: 1.5, quantity: 2, image: "/shop/product/cans/grasapunchGreen/Arasgrasa_Mint.png" }
    ];

    const [products, setProducts] = useState<Product[]>(initialProducts);

    // Update the quantity of a product
    const updateQuantity = (id: number, newQuantity: number) => {
        setProducts(products.map(product =>
            product.id === id
                ? { ...product, quantity: newQuantity }
                : product
        ));
    };

    const removeProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const calculateSubtotal = () => {
        return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Details Section */}
                    <section className="w-full lg:w-2/3">
                        <div className="space-y-6">
                            {products.length === 0 ? (
                                <p className="text-center text-gray-500">Your cart is empty.</p>
                            ) : (
                                products.map(product => (
                                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row items-center">
                                        {/* Product Image */}
                                        <div className="w-full sm:w-1/4 flex justify-center">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        {/* Product Information */}
                                        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:pl-4">
                                            <h3 className="font-semibold text-xl">{product.name}</h3>
                                            <p className="text-gray-500">{product.category}</p>
                                            <p className="mt-2 text-lg font-semibold text-yellow-600">${product.price.toFixed(2)}</p>
                                        </div>
                                        {/* Controls */}
                                        <div className="w-full sm:w-1/4 mt-4 sm:mt-0 flex flex-col items-center space-y-2">
                                            <div className="flex items-center">
                                                <button
                                                    className="bg-gray-200 text-gray-600 hover:bg-gray-300 p-2 rounded-full"
                                                    onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className="mx-2 font-medium text-lg">{product.quantity}</span>
                                                <button
                                                    className="bg-gray-200 text-gray-600 hover:bg-gray-300 p-2 rounded-full"
                                                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                            <button
                                                className="text-red-500 hover:text-red-700 flex items-center space-x-1"
                                                onClick={() => removeProduct(product.id)}
                                            >
                                                <FaTrash />
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        {/* Action Buttons */}
                        {products.length > 0 && (
                            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Continue Shopping
                                </button>
                                <button
                                    className="text-red-500 hover:text-red-700 font-semibold flex items-center space-x-1"
                                    onClick={() => setProducts([])}
                                >
                                    <FaTrash />
                                    <span>Clear Cart</span>
                                </button>
                            </div>
                        )}
                    </section>

                    {/* Cart Summary Section */}
                    {products.length > 0 && (
                        <section className="w-full lg:w-1/3">
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <p>Subtotal</p>
                                        <p className="font-semibold">${calculateSubtotal().toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Shipping</p>
                                        <p className="font-semibold">$5.00</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Tax</p>
                                        <p className="font-semibold">$3.00</p>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold border-t pt-4">
                                        <p>Total</p>
                                        <p>${(calculateSubtotal() + 5 + 3).toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    className={`w-full mt-6 text-white font-semibold py-3 rounded-lg transition duration-200 ${
                                        products.length === 0
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-yellow-500 hover:bg-yellow-600'
                                    }`}
                                    disabled={products.length === 0}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </Layout>
    );
}

import React, { useState } from 'react';
import Layout from "@/components/Layout/Layout";
import "tailwindcss/tailwind.css";
import Image from 'next/image';

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
        { id: 1, name: "Product 1", category: "Category 1", price: 1.5, quantity: 1, image: "/can_variant_1.png" },
        { id: 2, name: "Product 2", category: "Category 2", price: 1.5, quantity: 2, image: "/can_variant_2.png" }
    ];

    const [products, setProducts] = useState<Product[]>(initialProducts);

    // Update quantity of a product
    const updateQuantity = (id: number, newQuantity: number) => {
        setProducts(products.map(product =>
            product.id === id
                ? { ...product, quantity: newQuantity }
                : product
        ));
    };

    // Remove a product from the cart
    const removeProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
    };

    // Calculate subtotal
    const calculateSubtotal = () => {
        return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Details Section */}
                    <section className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
                        <div className="divide-y divide-gray-200">
                            {products.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                products.map(product => (
                                    <div key={product.id} className="flex items-center justify-between py-4">
                                        <div className="flex items-center">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={50}
                                                height={50}
                                            />
                                            <div className="ml-4">
                                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                                <p className="text-sm text-gray-500">{product.category}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg font-semibold">${product.price}</p>
                                        <div className="flex items-center space-x-2">
                                          <button
                                              className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-1 rounded-md"
                                              onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))}
                                          >
                                              -
                                          </button>
                                          <span className="w-12 text-center font-medium text-gray-800">{product.quantity}</span>
                                          <button
                                              className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-1 rounded-md"
                                              onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                          >
                                              +
                                          </button>
                                        </div>
                                        <button
                                            className="text-red-500 font-semibold hover:text-red-700"
                                            onClick={() => removeProduct(product.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>

                    {/* Cart Summary Section */}
                    <section className="w-full lg:w-1/3 bg-gray-100 shadow-md rounded-lg p-6">
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
                            <div className="flex justify-between text-lg font-bold border-t pt-4">
                                <p>Total</p>
                                <p>${(calculateSubtotal() + 5 + 3).toFixed(2)}</p>
                            </div>
                        </div>
                        <button className="w-full mt-6 bg-yellow-400 text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 transition duration-200">
                            Proceed to Checkout
                        </button>
                    </section>
                </div>

                {/* Action Section */}
                <section className="mt-8 flex justify-between items-center">
                    <button className="text-gray-700 hover:text-gray-900 font-semibold">
                        Continue Shopping
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700 font-semibold"
                        onClick={() => setProducts([])}
                    >
                        Clear Cart
                    </button>
                </section>
            </div>
        </Layout>
    );
}

import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import productsData from "@/public/shop.json";
import Image from "next/image";
import CommentSection from "@/components/CommentSection";
import ProductCard from "@/components/ProductCard";
import "tailwindcss/tailwind.css";

export default function ProductPage() {
    const router = useRouter();
    const { uri } = router.query;

    if (!uri) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-screen">
                    <p className="text-xl text-gray-500">Loading...</p>
                </div>
            </Layout>
        );
    }

    // Find the corresponding product
    const product = productsData.categories
        .flatMap(category => category.products)
        .find(p => p.uri === uri);

    if (!product) {
        return (
            <Layout>
                <div className="flex flex-col items-center justify-center h-screen px-6">
                    <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Product Not Found</h1>
                    <p className="text-lg text-gray-600">Sorry, the product you are looking for does not exist.</p>
                </div>
            </Layout>
        );
    }

    // Find the product's category
    const category = productsData.categories.find(cat => cat.products.some(p => p.uri === uri));

    // Get other products in the same category
    const relatedProducts = category?.products.filter(p => p.id !== product.id) || [];

    return (
        <Layout urlCanonical={`https://grasapunch.com/shop/${product.uri}`}>
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Product Image */}
                        <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
                            <div className="relative w-full h-96 lg:h-[500px]"> {/* Ajustement pour l'image */}
                                <Image
                                    src={product.url_can_image}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="contain" // Utiliser "contain" pour voir toute la canette
                                    className="rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Product Details */}
                        <div className="w-full lg:w-1/2 lg:pl-16">
                            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{product.name}</h1>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                            <p className="text-3xl font-bold text-teal-600 mb-6">{product.price}</p>
                            <div className="text-gray-600 mb-8 leading-relaxed">
                                {product.content}
                            </div>
                            {/* Buy Now Button */}
                            <button className="bg-teal-600 text-white px-8 py-4 rounded-full shadow hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Comment Section */}
                    <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Customer Reviews</h2>
                        <CommentSection reviews={product.reviews} />
                    </div>

                    {/* Related Products Section */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Related Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {relatedProducts.map((relatedProduct) => (
                                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

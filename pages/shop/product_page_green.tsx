import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import categoriesData from "@/public/shop.json"; // Utiliser le JSON des catégories
import Link from "next/link";
import { useEffect } from "react";
import 'tailwindcss/tailwind.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductPageGreen() {
  // Récupérer la catégorie GrasaPunch Green
  const categoryGreen = categoriesData.categories.find(category => category.name === "GrasaPunch Green");

  // Initialiser AOS pour les animations au scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/green_background.jpg')" }} // Assurez-vous que l'image soit bien importée
        data-aos="fade-in"
      >
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-6" data-aos="fade-up">{categoryGreen?.name}</h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">{categoryGreen?.description}</p>
        </div>
        <div className="absolute bottom-10 text-center z-10" data-aos="fade-up" data-aos-delay="400">
          <Link href="#green-products">
            <p className="inline-block bg-green-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105">
              Explore the Range
            </p>
          </Link>
        </div>
      </section>

      {/* Product Cards Section */}
      <section id="green-products" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Explore Our Green Range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryGreen?.products.map((product) => (
              <Link href={`/shop/${product.uri}`} key={product.id}>
                <div className="group relative bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 text-center relative z-10">
                    <Image
                      src={product.url_can_image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-lg text-gray-600 mt-2">{product.description}</p>
                    <p className="text-xl font-semibold text-green-600 mt-4">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryGreen?.products.map((product) => product.reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
                <p className="text-gray-600 italic mb-4">{`"${review.comment}"`}</p>
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={24} height={24} />
                  ))}
                </div>
                <h4 className="font-semibold text-gray-800">{`— ${review.author}`}</h4>
              </div>
            )))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

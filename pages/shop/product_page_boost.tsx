import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import categoriesData from "@/public/shop.json";
import Link from "next/link";
import { useEffect } from "react";
import 'tailwindcss/tailwind.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductPageBoost() {
  // Récupérer la catégorie Boost
  const categoryBoost = categoriesData.categories.find(category => category.name === "GrasaPunch Boost");

  // Initialiser AOS pour l'animation au scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      {/* Hero Immersive Section */}
      <section
        className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/boost_background.jpg')" }}
        data-aos="fade-in"
      >
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-center max-w-screen-lg mx-auto">
          <h1 className="text-6xl font-extrabold mb-6" data-aos="fade-up">{categoryBoost?.name}</h1>
          <p className="text-xl mx-auto max-w-3xl" data-aos="fade-up" data-aos-delay="200">{categoryBoost?.description}</p>
        </div>
        <div className="absolute bottom-10 text-center z-10" data-aos="fade-up" data-aos-delay="400">
          <Link href="#boost-products">
            <p className="inline-block bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-105">
              Explore the Range
            </p>
          </Link>
        </div>
      </section>

      {/* Storyline Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2" data-aos="fade-left">
              <Image
                src="/boost_story.jpg"
                alt="Boost Energy"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center md:text-left" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-red-600 mb-4">Better, Harder, Faster, Stronger</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The GrasaPunch Boost line is designed for those who need to go the extra mile. Whether you&apos;re pushing your limits at the gym or burning the midnight oil, Boost gives you the sustained energy you need without the crash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section id="boost-products" className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Explore Our Boost Range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryBoost?.products.map((product) => (
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
                    <p className="text-xl font-semibold text-red-600 mt-4">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryBoost?.products.map((product) => product.reviews.map((review) => (
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

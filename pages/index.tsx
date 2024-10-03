// pages/index.tsx

import Layout from "@/components/Layout/Layout";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
// Import required modules
import { Autoplay, EffectFade } from "swiper/modules";

export default function HomePages() {
  // Données des produits
  const products = [
    {
      name: "GrasaPunch Green",
      description: "The original Arasgrasa energy drink",
      image: "/cans/grasapunchGreen/Arasgrasa_Aloe_Verra.png",
      link: "/shop/product_page_green",
      color: "emerald",
    },
    {
      name: "GrasaPunch Boost",
      description: "High energy when you need it",
      image: "/cans/grasapunchBoost/Arasgrasa_Kiwi_Lime_Boost.png",
      link: "/shop/product_page_boost",
      color: "red",
    },
    {
      name: "GrasaPunch Juice",
      description: "Arasgrasa for endurance",
      image: "/cans/grasapunchJuice/Arasgrasa_Mango_Crazy.png",
      link: "/shop/product_page_juice",
      color: "sky",
    },
  ];

  // Données des témoignages
  const testimonials = [
    {
      quote:
        "GrasaPunch has changed the way I approach my day. Natural energy without the jitters!",
      author: "— Alex M.",
    },
    {
      quote:
        "I love that it's made with natural ingredients. The Arasgrasa Boost is my favorite.",
      author: "— Sarah L.",
    },
    {
      quote:
        "Finally, an energy drink that tastes great and aligns with my health goals.",
      author: "— Michael R.",
    },
    // Vous pouvez ajouter plus de témoignages ici
  ];

  return (
    <Layout>
      {/* Section Hero */}
      <section className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">
              Natural Energy Drinks with{" "}
              <span className="text-yellow-300">Arasgrasa</span>
            </h1>
            <p className="text-lg mb-8">
              Boost your energy naturally with GrasaPunch. Our drinks are
              crafted with <strong>Arasgrasa</strong>, providing a healthy and
              sustainable energy source without compromising on taste.
            </p>
            <Link href="/shop">
              <Button colorText="teal">Shop Now</Button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/arasgrasa_homepage.png"
              alt="GrasaPunch Energy Drinks"
              width={600}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose GrasaPunch */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose GrasaPunch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <Image
                src="/icons/leaves.png"
                alt="Natural Ingredients"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
              <p>
                Made with 100% natural ingredients, our drinks offer a healthier
                alternative to traditional energy drinks.
              </p>
            </div>
            <div className="p-6">
              <Image
                src="/icons/thunderbolt.png"
                alt="Sustainable Energy"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sustainable Energy</h3>
              <p>
                Experience a long-lasting energy boost without the crash, thanks
                to the unique properties of Arasgrasa.
              </p>
            </div>
            <div className="p-6">
              <Image
                src="/icons/save-the-world.png"
                alt="Eco-Friendly"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p>
                We&apos;re committed to sustainability with recyclable packaging and
                responsible sourcing of ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel des Produits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center mb-12 px-6">
          <h2 className="text-4xl font-bold mb-4">Our Range of Products</h2>
          <p className="text-lg text-gray-700">
            Explore our varieties of energy drinks, each offering a unique taste and natural energy boost.
          </p>
        </div>
        <div className="container mx-auto px-6">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={30}
                    className="object-cover w-full h-48"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                  {/* Contenu */}
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="mb-4">{product.description}</p>
                    <Link href={product.link}>
                      <Button colorText="white">
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Carrousel des Témoignages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <div className="max-w-xl mx-auto">
            <Swiper
              modules={[Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              effect="fade"
              speed={1000}
              allowTouchMove={false}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 bg-white rounded-lg shadow">
                    <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                    </p>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest news and exclusive offers.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md text-gray-800"
              />
              <button
                type="submit"
                className="w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

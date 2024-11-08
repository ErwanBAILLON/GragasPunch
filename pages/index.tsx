// pages/index.tsx

import Layout from "@/components/Layout/Layout";
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
      image: "/shop/product/cans/grasapunchGreen/Arasgrasa_Aloe_Verra.png",
      link: "/shop/grasapunch-green",
      color: "emerald",
    },
    {
      name: "GrasaPunch Boost",
      description: "High energy when you need it",
      image: "/shop/product/cans/grasapunchBoost/Arasgrasa_Kiwi_Lime_Boost.png",
      link: "/shop/grasapunch-boost",
      color: "red",
    },
    {
      name: "GrasaPunch Juice",
      description: "Arasgrasa for endurance",
      image: "/shop/product/cans/grasapunchJuice/Arasgrasa_Mango_Crazy.png",
      link: "/shop/grasapunch-juice",
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
  ];

  return (
    <Layout title="GrasaPunch - Natural Energy Drinks with Arasgrasa" description="Discover GrasaPunch's range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!" url="https://grasapunch.live">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0">
          <div className="text-white md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">
              Natural Energy Drinks with{" "}
              <span className="text-yellow-300">Arasgrasa</span>
            </h1>
            <p className="text-lg mb-8">
              Boost your energy naturally with GrasaPunch. Our drinks are
              crafted with <strong>Arasgrasa</strong>, providing a healthy and
              sustainable energy source without compromising on taste.
            </p>
            <Link href="/shop" className="inline-block bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 mt-8">
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/arasgrasa_homepage.png"
              alt="GrasaPunch Energy Drinks"
              width={400}
              height={400}
              className="object-contain drop-shadow-2xl"
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
            Explore our different energy drinks, each offering a unique taste and natural energy boost.
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
                <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-128 h-[28rem] m-3">
                  <div className="flex flex-col justify-between h-full p-8">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                      <p className="mb-6 text-gray-300">{product.description}</p>
                    </div>
                    <div>
                      <Link href={product.link}>
                        <button className="px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-semibold">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={240}
                      className="object-contain"
                    />
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
                  <div className="p-6 bg-white rounded-lg">
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

      {/* Featured Partners */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="https://arasgrasa.me" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Image
                src="https://arasgrasa.me/images/logo.webp"
                alt="ArasBurger"
                width={100}
                height={100}
                className="mx-auto"
              />
              <p className="text-lg font-semibold">ArasBurger</p>
            </Link>
            <Link href="https://arasgrasell.kusmicrew.cloud" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Image
                src="https://arasgrasell.kusmicrew.cloud/wp-content/uploads/2024/09/DALL_E_2024-09-12_17.09.30_-_circle_logo_of_a_flower__realistic_style__4K-removebg-preview-150x150.png"
                alt="arasgrasell"
                width={100}
                height={100}
                className="mx-auto"
              />
              <p className="text-lg font-semibold">ArasGrasell</p>
            </Link>
            <Link href="https://arasgrasa-pure.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Image
                src="https://arasgrasa-pure.com/wp-content/uploads/2024/10/cropped-Logo-ARAS-300x300.webp"
                alt="arasgrasa-pure"
                width={100}
                height={100}
                className="mx-auto"
              />
              <p className="text-lg font-semibold">ArasGrasa Pure</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-50">
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

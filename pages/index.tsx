// pages/index.tsx

import Layout from "@/components/Layout/Layout";
import Button from "@/components/button/Button";
import BasicBoxContainer from "@/components/container/BasicBoxContainer";
import Grid from "@/components/container/Grid";
import Image from "next/image";
import Link from "next/link";

export default function HomePages() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">
              Natural Energy Drinks with <span className="text-yellow-300">Arasgrasa</span>
            </h1>
            <p className="text-lg mb-8">
              Boost your energy naturally with GrasaPunch. Our drinks are crafted with <strong>Arasgrasa</strong>,
              providing a healthy and sustainable energy source without compromising on taste.
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
                Made with 100% natural ingredients, our drinks offer a healthier alternative to traditional energy drinks.
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
                Experience a long-lasting energy boost without the crash, thanks to the unique properties of Arasgrasa.
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
                We&apos;re committed to sustainability with recyclable packaging and responsible sourcing of ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-12">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Range of Products</h2>
          <p className="text-lg text-gray-700">
            Explore our varieties of energy drinks, each offering a unique taste and natural energy boost.
          </p>
        </div>
        <Grid>
          <BasicBoxContainer color="emerald">
            <h3 className="text-2xl font-bold text-center">GrasaPunch Green</h3>
            <p className="text-center">The original Arasgrasa energy drink</p>
            <Image
              src="/can_variant_2.png"
              alt="GrasaPunch Green"
              width={125}
              height={125}
              className="mx-auto mt-4 mb-4"
            />
            <Link href={`/shop/product_page_green`}>
              <Button>Buy Now</Button>
            </Link>
          </BasicBoxContainer>
          <BasicBoxContainer color="red">
            <h3 className="text-2xl font-bold text-center">GrasaPunch Boost</h3>
            <p className="text-center">High energy when you need it</p>
            <Image
              src="/can_variant_1.png"
              alt="GrasaPunch Boost"
              width={125}
              height={125}
              className="mx-auto mt-4 mb-4"
            />
            <Link href={`/shop/product_page_boost`}>
              <Button>Buy Now</Button>
            </Link>
          </BasicBoxContainer>
          <BasicBoxContainer color="sky">
            <h3 className="text-2xl font-bold text-center">GrasaPunch Juice</h3>
            <p className="text-center">Arasgrasa for endurance</p>
            <Image
              src="/can_variant_3.png"
              alt="GrasaPunch Juice"
              width={125}
              height={125}
              className="mx-auto mt-4 mb-4"
            />
            <Link href={`/shop/product_page_juice`}>
              <Button>Buy Now</Button>
            </Link>
          </BasicBoxContainer>
        </Grid>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600 italic">
              &quot;GrasaPunch has changed the way I approach my day. Natural energy without the jitters!&quot;
              </p>
              <h4 className="mt-4 font-semibold">— Alex M.</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600 italic">
              &quot;I love that it&apos;s made with natural ingredients. The Arasgrasa Boost is my favorite.&quot;
              </p>
              <h4 className="mt-4 font-semibold">— Sarah L.</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600 italic">
              &quot;Finally, an energy drink that tastes great and aligns with my health goals.&quot;
              </p>
              <h4 className="mt-4 font-semibold">— Michael R.</h4>
            </div>
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

import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import categoriesData from "@/public/shop/shop.json";
import Link from "next/link";
import { useEffect } from "react";
import 'tailwindcss/tailwind.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductCategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Récupérer la catégorie correspondante à partir du fichier JSON
  const categoryData = categoriesData.categories.find((cat) => cat.name.toLowerCase().replace(" ", "-") === category);

  if (!categoryData) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Category Not Found</h1>
            <p className="text-lg text-gray-600">Sorry, the category you are looking for does not exist.</p>
            </div>
        </Layout>
    );
  }

  return (
    <Layout title={`GrasaPunch - ${categoryData?.name}`} description={`Discover the GrasaPunch range of ${categoryData?.name}. Explore our selection of natural energy drinks, designed to boost your vitality and well-being.`} url={`https://grasapunch.live/shop/${category}`}>
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/shop/product/background/${category}_background.jpg')` }} // Utiliser une image dynamique
        data-aos="fade-in"
      >
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-6" data-aos="fade-up">{categoryData?.name}</h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">{categoryData?.description}</p>
        </div>
        <div className="absolute bottom-10 text-center z-10" data-aos="fade-up" data-aos-delay="400">
          <Link href="#products">
            <p className="inline-block bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-105">
              Explore the Range
            </p>
          </Link>
        </div>
      </section>

      {/* Product Cards Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Explore Our {categoryData?.name} Range
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryData?.products.map((product) => (
              <Link href={`/shop/product/${product.uri}`} key={product.id}>
                <div
                  className="group relative bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer h-[450px] flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="p-6 text-center flex-grow">
                    <Image
                      src={product.url_can_image}
                      alt={product.name}
                      width={product.image_size?.width ?? 180}
                      height={product.image_size?.height ?? 180}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-lg text-gray-600 mt-2">{product.description}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-xl font-semibold text-sky-600">{product.price}</p>
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
            {categoryData?.products.map((product) => product.reviews.map((review) => (
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

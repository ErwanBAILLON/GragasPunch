import Layout from "@/components/Layout/Layout";
import Grid from "@/components/container/Grid";
import Image from "next/image";
import categoriesData from "@/public/shop.json"; // Assurez-vous que le chemin du fichier JSON soit correct
import 'tailwindcss/tailwind.css';
import Link from "next/link";

export default function ProductPageBoost() {
  // Récupérer la catégorie Boost
  const categoryBoost = categoriesData.categories.find(category => category.name === "GrasaPunch Boost");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 py-16">
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white text-center md:text-left md:w-1/2 md:pl-12">
            <h1 className="text-5xl font-bold mb-4">{categoryBoost?.name}</h1>
            <p className="text-lg mb-8">{categoryBoost?.description}</p>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Explore Our Boost Range</h2>
        <Grid>
          {categoryBoost?.products.map((product) => (
            <Link href={`/shop/${product.uri}`} key={product.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 cursor-pointer">
                <div className="p-4 flex flex-col items-center">
                  <Image
                    src={product.url_can_image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-lg text-gray-600 mt-2">{product.description}</p>
                  <p className="text-xl font-semibold text-red-600 mt-4">{product.price}</p>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-red-600 transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </Grid>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryBoost?.products.map((product) => product.reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
                <p className="text-gray-600 italic mb-4">{`"${review.comment}"`}</p>
                <div className="flex justify-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={20} height={20} />
                  ))}
                </div>
                <h4 className="font-semibold">{`— ${review.author}`}</h4>
              </div>
            )))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

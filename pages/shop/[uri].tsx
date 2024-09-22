import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import products from "@/public/shop.json";
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import type { Product } from '@/data/product';
import 'tailwindcss/tailwind.css';

interface Props {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { uri: product.uri },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { uri } = context.params as { uri: string };
  const product = products.find((product) => product.uri === uri);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }: Props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <section className={product.header_color}>
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white text-center md:text-left md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-8 ml-8">{product.header_description}</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center bg-beige p-6 rounded-lg shadow-lg">
          <div className="flex-shrink-0 ml-64 mr-6">
            <Image src={product.url_can_image} alt="logo" width={125} height={125} className="mt-4 mb-4"/>
          </div>
          <div className="ml-32">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-lg font-semibold text-gray-700">{product.price}</p>
            <button
                className="w-full bg-teal-500 text-white py-3 mt-8 rounded-md shadow-md hover:bg-teal-600 transition duration-150 ease-in-out"
              >
                Buy
              </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
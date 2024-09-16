import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import products from "@/public/shop.json";
import Layout from '@/components/Layout/Layout';
import Image, { ImageProps } from 'next/image';
import 'tailwindcss/tailwind.css';

interface Product { // FIXME: modifier shop.json pour mieux le séparer. ajouter 3 types en fonction du produit green, boost et juice
  id: number;
  name: string;
  description: string;
  price: string;
  header_color: string;
  uri: string;
  url_can_image: string;
}

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
            <p className="text-lg mb-8 ml-8">Better conscience for better taste</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="cursor-pointer">
          <div className="bg-beige">
            <Image src={product.url_can_image} alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
          </div>
          <h1 className="text-2xl font-bold ml-4">{product.name}</h1>
          <p className="text-xl ml-4">{product.description}</p>
          <p className="text-xl ml-4">{product.price}</p>
        </div>
      </section>
    </Layout>
  );
}
import BasicBoxContainer from "@/components/container/BasicBoxContainer";
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/container/Grid";
import Image from "next/image";
import Link from "next/link";
import products from "@/public/shop.json";
import 'tailwindcss/tailwind.css';

export default function ProductPageGreen() {

  return(
    <Layout>
      <section className="relative bg-sky-500 py-16">
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white text-center md:text-left md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Grasa Punch Juice</h1>
            <p className="text-lg mb-8 ml-8">Taste on your lips, you&apos;re on a ride</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <Grid>
          <Link href={`/shop/${products[6].uri}`}>
            <div className="cursor-pointer">
              <BasicBoxContainer color="beige">
                <Image src="/can_variant_3.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
              </BasicBoxContainer>
              <h1 className="text-2xl font-bold ml-4">Arasgrasa Mango Crazy</h1>
              <p className="text-xl ml-4">For freshness taste and power boost</p>
              <p className="text-xl ml-4">1.5€</p>
            </div>
          </Link>
          <Link href={`/shop/${products[7].uri}`}>
            <div className="cursor-pointer">
              <BasicBoxContainer color="beige">
                <Image src="/can_variant_3.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
              </BasicBoxContainer>
              <h1 className="text-2xl font-bold ml-4">Arasgrasa Strawberry Bomb</h1>
              <p className="text-xl ml-4">For a curative effect and power boost</p>
              <p className="text-xl ml-4">1.5€</p>
            </div>
          </Link>
          <Link href={`/shop/${products[8].uri}`}>
            <div className="cursor-pointer">
              <BasicBoxContainer color="beige">
                <Image src="/can_variant_3.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
              </BasicBoxContainer>
              <h1 className="text-2xl font-bold ml-4">Arasgrasa Peach Punch</h1>
              <p className="text-xl ml-4">For health taste and power boost</p>
              <p className="text-xl ml-4">1.5€</p>
            </div>
          </Link>
        </Grid>
      </section>
    </Layout>
  );
}
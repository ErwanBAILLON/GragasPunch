import BasicBoxContainer from "@/components/container/BasicBoxContainer";
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/container/Grid";
import Image from "next/image";
import products from "@/public/shop.json";
import 'tailwindcss/tailwind.css';
import Link from "next/link";

export default function Shop() {
    return (
        <Layout>
          <section className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 py-16">
            <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
              <div className="text-white text-center md:text-left md:w-1/2 md:pl-12">
                <h1 className="text-4xl font-bold mb-4">Our Shop</h1>
                <p className="text-lg mb-8">
                  Discover our range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="/arasgrasa_homepage.png"
                  alt="Image de présentation"
                  width={600}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto text-center my-8">
              <h2 className="text-3xl font-bold mb-4">GrasaPunch Green</h2>
              <p className="text-lg text-gray-700">
                Better conscience for better taste
              </p>
            </div>
          </section>

          <section className="mt-8">
            <Grid>
              <Link href={`/shop/${products[0].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="emerald">
                    <Image src="/can_variant_1.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Mint</h1>
                  <p className="text-xl ml-4">For freshness taste and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
              <Link href={`/shop/${products[1].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="emerald">
                    <Image src="/can_variant_1.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Lemon Ginger</h1>
                  <p className="text-xl ml-4">For a curative effect and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
              <Link href={`/shop/${products[2].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="emerald">
                    <Image src="/can_variant_1.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Aloe Verra</h1>
                  <p className="text-xl ml-4">For health taste and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
            </Grid>
          </section>

          <section>
            <div className="container mx-auto text-center my-8">
              <h2 className="text-3xl font-bold mb-4">GrasaPunch Boost</h2>
              <p className="text-lg text-gray-700">
                Better, Harder, Faster, Stronger
              </p>
            </div>
          </section>

          <section className="mt-8">
            <Grid>
              <Link href={`/shop/${products[3].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="red">
                    <Image src="/can_variant_2.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Kiwi Lime Boost</h1>
                  <p className="text-xl ml-4">For freshness taste and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
              <Link href={`/shop/${products[4].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="red">
                    <Image src="/can_variant_2.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Ananas Fiesta Boost</h1>
                  <p className="text-xl ml-4">For a curative effect and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
              <Link href={`/shop/${products[5].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="red">
                    <Image src="/can_variant_2.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Aloe Verra</h1>
                  <p className="text-xl ml-4">For health taste and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
            </Grid>
          </section>

          <section>
            <div className="container mx-auto text-center my-8">
              <h2 className="text-3xl font-bold mb-4">GrasaPunch Juice</h2>
              <p className="text-lg text-gray-700">
                Taste on your lips, you&apos;re on a ride
              </p>
            </div>
          </section>

          <section className="mt-8">
            <Grid>
              <Link href={`/shop/${products[6].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="sky">
                    <Image src="/can_variant_3.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Mango Crazy</h1>
                  <p className="text-xl ml-4">For freshness taste and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
              <Link href={`/shop/${products[7].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="sky">
                    <Image src="/can_variant_3.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4"/>
                  </BasicBoxContainer>
                  <h1 className="text-2xl font-bold ml-4">Arasgrasa Strawberry Bomb</h1>
                  <p className="text-xl ml-4">For a curative effect and power boost</p>
                  <p className="text-xl ml-4">1.5€</p>
                </div>
              </Link>
              <Link href={`/shop/${products[8].uri}`}>
                <div className="cursor-pointer">
                  <BasicBoxContainer color="sky">
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
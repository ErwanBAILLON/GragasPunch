import Layout from "@/components/Layout/Layout";
import Button from "@/components/button/Button";
import BasicBoxContainer from "@/components/container/BasicBoxContainer";
import Grid from "@/components/container/Grid";
import Image from "next/image";
import Link from "next/link";

export default function HomePages() {
  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 py-16">
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white text-center md:text-left md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Découvrez notre Gamme</h1>
            <p className="text-lg mb-8">
              Découvrez notre gamme de boissons énergisantes naturelles à base d&apos;Arasgrasas. Boostez votre énergie avec des ingrédients sains et naturels. Commandez en ligne dès maintenant !
            </p>
            <Button colorText="teal" onClick={() => console.log("En savoir plus")} >En savoir plus</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/arasgrasa_homepage.png" // Remplace avec le chemin de ton image
              alt="Image de présentation"
              width={600}
              height={400}
                className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Notre Gamme de Produits</h2>
          <p className="text-lg text-gray-700">
            Explorez nos différentes variantes de boissons énergisantes, chacune offrant un goût unique et une énergie naturelle.
          </p>
        </div>
      </section>

      <Grid>
        <BasicBoxContainer color="emerald">
          <h1 className="text-3xl font-bold text-center">Grasa Punch Green</h1>
          <h2 className="text-xl font-bold text-center">the original arasgrasa energy drink</h2>
          <Image src="/can_variant_1.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4" />
          <Link href={`/shop/product_page_green`}>
            <Button onClick={() => console.log("Buy Now")}>Buy Now</Button>
          </Link>
        </BasicBoxContainer>
        <BasicBoxContainer color="red">
          <h1 className="text-3xl font-bold text-center">Grasa Punch Boost</h1>
          <h2 className="text-xl font-bold text-center">the original arasgrasa energy drink</h2>
          <Image src="/can_variant_2.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4" />
          <Link href={`/shop/product_page_boost`}>
            <Button onClick={() => console.log("Buy Now")}>Buy Now</Button>
          </Link>
        </BasicBoxContainer>
        <BasicBoxContainer color="sky">
          <h1 className="text-3xl font-bold text-center">Grasa Punch Juice</h1>
          <h2 className="text-xl font-bold text-center">the original arasgrasa energy drink</h2>
          <Image src="/can_variant_3.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4" />
          <Link href={`/shop/product_page_juice`}>
            <Button onClick={() => console.log("Buy Now")}>Buy Now</Button>
          </Link>
        </BasicBoxContainer>
      </Grid>
    </Layout>
  );
}

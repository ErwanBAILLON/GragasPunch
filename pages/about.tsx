import Layout from "@/components/Layout/Layout";
import Button from "@/components/button/Button";
import Grid from "@/components/container/Grid";
import Image from "next/image";

export default function About() {
    return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto text-justify">
          <h2 className="text-3xl font-bold mb-4">Our team and mission</h2>
          <p className="text-lg text-gray-700 mb-4">
          Welcome to GrasaPunch, where nature meets energy. Our mission is simple: to provide a clean, natural source of energy that fuels your active lifestyle without compromise. Born from a passion for wellness and sustainability, we create energy drinks crafted from the finest plant-based ingredients and the best Arasgrasa sources, offering a refreshing and revitalizing boost that's as good for your body as it is for the planet. </p>
          <p className="text-lg text-gray-700 mb-4">
          At GrasaPunch, we believe that nature holds the key to true vitality. That's why every can of our energy drink is packed with carefully selected natural ingredients, free from artificial additives, preservatives, and excessive sugars. Whether you're powering through your workout, tackling a busy workday, or simply looking for a clean pick-me-up, our drinks provide sustained energy in the most wholesome way. </p>
          <p className="text-lg text-gray-700 mb-4">
          We're a team of nature lovers, health enthusiasts, and innovators committed to sustainability and transparency. Our packaging is eco-friendly, and our production methods minimize environmental impact, ensuring that the energy we provide is as clean as it is powerful. </p>
          <p className="text-lg text-gray-700">
          We are also a team of students making this project for a Google Ranking Challenge, so nothing is for sale. Feel free to contact us if you'd like to buy actual products, and we might launch a real drink brand !
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our team</h2>
        <Grid size = {4}>
            <Image
              src="/pepe.png"
              alt="Team Picture"
              width={400}
              height={200}
                className="mx-auto align-bottom"
            />
            <Image
              src="/bedge.png"
              alt="Team Picture"
              width={400}
              height={200}
                className="mx-auto align-bottom"
            />
            <Image
              src="/peeposhy.png"
              alt="Team Picture"
              width={400}
              height={200}
                className="mx-auto align-bottom"
            />
            <Image
              src="/peepowicked.png"
              alt="Team Picture"
              width={400}
              height={200}
                className="mx-auto align-bottom"
            />
        </Grid>

      </section>

    </Layout>
    );
}

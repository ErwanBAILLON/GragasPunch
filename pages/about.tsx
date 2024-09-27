// pages/about.tsx

import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function About() {
  const teamMembers = [
    {
      name: "Hugo Duval",
      role: "Co-Founder & CEO",
      image: "/pepe.png",
      bio: "Passionate about wellness and sustainability, John leads our team with a vision to revolutionize the energy drink industry.",
    },
    {
      name: "Erwan Baillon",
      role: "Head of Product Development",
      image: "/bedge.png",
      bio: "With a background in nutrition, Jane ensures every GrasaPunch drink is both healthy and delicious.",
    },
    {
      name: "Matéo Baldassi",
      role: "Marketing Director",
      image: "/peeposhy.png",
      bio: "Mike spreads the word about GrasaPunch, connecting us with a community of health enthusiasts.",
    },
    {
      name: "Nataniel Louis",
      role: "Sustainability Manager",
      image: "/peepowicked.png",
      bio: "Emily ensures our operations are eco-friendly, from sourcing to packaging.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      {/* Section Notre Mission améliorée */}
      <section className="bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/mission-bg.jpg')" }}>
        <div className="bg-black bg-opacity-60 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6 text-center text-white">Our Mission</h2>
            <p className="text-lg text-gray-200 mb-6 text-center max-w-3xl mx-auto">
              Welcome to GrasaPunch, where nature meets energy. Our mission is simple: to provide a clean, natural source of energy that fuels your active lifestyle without compromise. Born from a passion for wellness and sustainability, we create energy drinks crafted from the finest plant-based ingredients and the best Arasgrasa sources, offering a refreshing and revitalizing boost that&apos;s as good for your body as it is for the planet.
            </p>
            <p className="text-lg text-gray-200 mb-6 text-center max-w-3xl mx-auto">
              At GrasaPunch, we believe that nature holds the key to true vitality. That&apos;s why every can of our energy drink is packed with carefully selected natural ingredients, free from artificial additives, preservatives, and excessive sugars. Whether you&apos;re powering through your workout, tackling a busy workday, or simply looking for a clean pick-me-up, our drinks provide sustained energy in the most wholesome way.
            </p>
            <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto">
              We&apos;re a team of nature lovers, health enthusiasts, and innovators committed to sustainability and transparency. Our packaging is eco-friendly, and our production methods minimize environmental impact, ensuring that the energy we provide is as clean as it is powerful.
            </p>
            <p className="text-lg text-gray-300 mt-8 text-center max-w-3xl mx-auto italic">
              We are also a team of students making this project for a Google Ranking Challenge, so nothing is for sale. Feel free to contact us if you&apos;d like to buy actual products, and we might launch a real drink brand!
            </p>
          </div>
        </div>
      </section>

      {/* Section Meet Our Team avec ajustements */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>

          {/* Grille pour desktop avec alignement amélioré */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
              >
                <div className="w-48 h-48 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm flex-grow">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Carrousel pour mobile avec alignement amélioré */}
          <div className="md:hidden">
            <div className="relative">
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
                style={{ minHeight: '400px' }}
              >
                <div className="w-48 h-48 mb-4">
                  <Image
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    width={192}
                    height={192}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{teamMembers[currentIndex].name}</h3>
                <p className="text-gray-600 mb-2">{teamMembers[currentIndex].role}</p>
                <p className="text-gray-700 text-sm">{teamMembers[currentIndex].bio}</p>
              </div>
              {/* Boutons de navigation */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 px-3 py-2 bg-gray-800 bg-opacity-50 text-white rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-2 bg-gray-800 bg-opacity-50 text-white rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

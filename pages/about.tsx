import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "tailwindcss/tailwind.css";

export default function About() {
  const teamMembers = [
    {
      name: "Matéo Baldassi",
      role: "Co-Founder & CEO",
      image: "/about/pepe.png",
      bio: "Passionate about wellness and sustainability, Matéo leads our team with a vision to revolutionize the energy drink industry.",
    },
    {
      name: "Erwan Baillon",
      role: "Head of Product Development",
      image: "/about/bedge.png",
      bio: "With a background in nutrition, Erwan ensures every GrasaPunch drink is both healthy and delicious.",
    },
    {
      name: "Hugo Duval",
      role: "Marketing Director",
      image: "/about/peeposhy.png",
      bio: "Hugo spreads the word about GrasaPunch, connecting us with a community of health enthusiasts.",
    },
    {
      name: "Nataniel Louis",
      role: "Sustainability Manager",
      image: "/about/peepowicked.png",
      bio: "Nataniel ensures our operations are eco-friendly, from sourcing to packaging.",
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
    <Layout title="GrasaPunch - About Us" description="Learn more about GrasaPunch, the team behind the brand, and our commitment to sustainability." url="https://grasapunch.live/about">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-white text-center bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4">We are a team of students, entrepreneurs, and innovators with a mission to revolutionize the energy drink industry with natural ingredients and sustainable practices.</p>
          <p className="text-lg max-w-2xl mx-auto italic">Our journey began with a simple idea: to create a drink that fuels both body and mind, sustainably.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Welcome to GrasaPunch, where nature meets energy. Our mission is simple: to provide a clean, natural source of energy that fuels your active lifestyle without compromise. Born from a passion for wellness and sustainability, we create energy drinks crafted from the finest plant-based ingredients and the best Arasgrasa sources.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Whether you&apos;re powering through your workout, tackling a busy workday, or simply looking for a clean pick-me-up, our drinks provide sustained energy in the best way. Every can of our energy drink is packed with carefully selected natural ingredients.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto italic">
            We are also a team of students making this project for a Google Ranking Challenge, so nothing is for sale. Feel free to contact us if you&apos;d like to buy actual products, and we might launch a real drink brand!
          </p>
        </div>
      </section>

      {/* Team Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-700 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <Image
                src={teamMembers[currentIndex].image}
                alt={teamMembers[currentIndex].name}
                width={150}
                height={150}
                className="rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{teamMembers[currentIndex].name}</h3>
              <p className="text-gray-700 text-sm mb-2">{teamMembers[currentIndex].role}</p>
              <p className="text-gray-600 text-sm">{teamMembers[currentIndex].bio}</p>
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 via-teal-500 to-teal-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to Sustainability</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            At GrasaPunch, sustainability is at the heart of everything we do. We believe in using eco-friendly packaging, sourcing ingredients responsibly, and minimizing our environmental impact at every step of the way.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Our production methods are designed to be sustainable, ensuring that the energy we provide is as clean as it is powerful.
          </p>
        </div>
      </section>
    </Layout>
  );
}

import Layout from '@/components/Layout/Layout';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nom:', name, 'Email:', email, 'Message:', message);
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(true);
  };

  return (
    <Layout title="GrasaPunch - Contact Us" description="Get in touch with the GrasaPunch team. Send us your questions, feedback, or partnership inquiries. We're here to help!" url="https://grasapunch.live/contact">
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-xl w-full">
        {formSubmitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-teal-600 mb-4">
              Thanks for your message!
            </h2>
            <p className="text-gray-700">We will respond shortly.</p>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Contact us
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block text-gray-600 text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                  placeholder="Your name"
                />
              </div>

              <div className="relative">
                <label className="block text-gray-600 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                  placeholder="Your email"
                />
              </div>

              <div className="relative">
                <label className="block text-gray-600 text-sm mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                  rows={5}
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded-md shadow-md hover:bg-teal-600 transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default Contact;

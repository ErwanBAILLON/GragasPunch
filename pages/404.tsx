import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 p-6">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="mt-4 text-2xl text-white">Sorry, the page you&apos;re looking for cannot be found.</p>
        <div className="mt-8 flex items-center space-x-4">
          <Link href="/"className="px-6 py-3 bg-white text-gray-800 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Go back home
          </Link>
          <Link href="/contact"className="px-6 py-3 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300 ease-in-out">
              Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  );
}

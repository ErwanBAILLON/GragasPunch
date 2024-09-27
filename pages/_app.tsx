// pages/_app.tsx

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Balises Meta Principales */}
        <title>GrasaPunch - Natural Energy Drinks with Arasgrasa</title>
        <meta name="title" content="GrasaPunch - Natural Energy Drinks with Arasgrasa" />
        <meta
          name="description"
          content="Discover GrasaPunch's range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!"
        />
        <meta
          name="keywords"
          content="GrasaPunch, Arasgrasa, energy drinks, natural energy, healthy drinks, buy energy drinks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="GrasaPunch" />
        <link rel="icon" href="/logo_grasapunch.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grasapunch.live/" />
        <meta
          property="og:title"
          content="GrasaPunch - Natural Energy Drinks with Arasgrasa"
        />
        <meta
          property="og:description"
          content="Discover GrasaPunch's range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!"
        />
        <meta property="og:image" content="https://www.grasapunch.live/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.grasapunch.live/" />
        <meta
          property="twitter:title"
          content="GrasaPunch - Natural Energy Drinks with Arasgrasa"
        />
        <meta
          property="twitter:description"
          content="Discover GrasaPunch's range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!"
        />
        <meta property="twitter:image" content="https://www.grasapunch.live/images/og-image.jpg" />

        {/* Données Structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GrasaPunch",
              "url": "https://www.grasapunch.live",
              "logo": "https://www.grasapunch.live/logo_grasapunch.png",
              "sameAs": [
                "https://www.facebook.com/grasapunch",
                "https://www.instagram.com/grasapunch",
                "https://twitter.com/grasapunch",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-1-56-21-45-78",
                "contactType": "Customer Service",
                "areaServed": "FR",
                "availableLanguage": ["English", "French"],
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "16 Rue Théodore Blanc",
                "addressLocality": "Bruges",
                "postalCode": "33520",
                "addressCountry": "FR",
              },
            }),
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

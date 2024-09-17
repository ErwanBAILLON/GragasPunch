import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grasapunch</title>
        <meta property="og:title" content="Grasapunch - Natural Energy Drinks" />
        <meta name="description" content="Discover our range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://www.grasapunch.live" />
        <link rel="icon" href="/logo_grasapunch.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

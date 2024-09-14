import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grasapunch</title>
        <meta name="description" content="Découvrez notre gamme de boissons énergisantes naturelles à base d'Arasgrasas. Boostez votre énergie avec des ingrédients sains et naturels. Commandez en ligne dès maintenant !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_grasapunch.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
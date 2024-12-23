// _app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_grasapunch.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

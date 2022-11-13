import Head from 'next/head';
import ShopPage from './shop';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopper</title>
        <meta name='description' content='Shopper — e-commerce react website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ShopPage />
    </>
  );
}

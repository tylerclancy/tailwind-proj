import Head from 'next/head';
import Image from 'next/image';

import Main from '../components/Main';
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tailwind proj</title>
        <meta
          name="description"
          content="Sample test project to learn twailwind and build portfolio"
        />
        <meta
          name="keywords"
          content="by tylerclancy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
    </div>
  );
}

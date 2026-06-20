import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function HomePage() {
  return (
    <>
      <Head>
        <title>Hoteles en Chihuahua Capital</title>
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}

export default HomePage;
import Image from 'next/image';

function Hero() {
  return (
    <section>
      <Image
        src="/hero.jpg"
        alt="Imagen de hero"
        width={100}
        height={100}
      />
      <h1>Hoteles en Chihuahua Capital</h1>
    </section>
  );
}

export default Hero;
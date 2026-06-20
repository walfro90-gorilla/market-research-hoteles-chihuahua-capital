import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
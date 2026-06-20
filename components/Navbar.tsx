import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Acerca de</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
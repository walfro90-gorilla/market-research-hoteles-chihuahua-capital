import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
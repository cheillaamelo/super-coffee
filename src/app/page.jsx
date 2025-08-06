import About from "@/components/About/About";
import Details from "@/components/Details/Details";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Reviews from "@/components/Reviews/Reviews";
import Social from "@/components/Social/Social";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Details />
      <Products />
      <About />
      <Social />
      <Reviews />
      <Footer />
    </main>
  );
}

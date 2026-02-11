import Hero from "../components/home/Hero";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


export default function Home() {
  return (
    <>
    <div className="pt-24">
      <Hero />
    </div>
      <Header />
      <Footer />
    </>
  );
}

import Hero from "../home/Hero";
import AboutSection from "../home/AboutSection";
import Header from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";



export default function Home() {
  return (
    <>
      <Header />

        <Outlet />


      <Footer />
    </>

  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Layout from "../components/layout/Layout";
import Gallery from "../pages/Gallery";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/clases' element={<Courses />} />
        <Route path='/galeria' element={<Gallery />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

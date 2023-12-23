import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Gallery } from "./pages/Gallery";
import { Info } from "./pages/Info";
import { Events } from "./pages/Events";
import { Faq } from "./pages/Faq";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <div className=" bg-gray-300 h-full py-3">
      <div className=" flex justify-center items-center pt-5 flex-col shadow-2xl bg-white w-[90vw] md:w-[80vw] mx-auto shadow-black rounded">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/info" element={<Info />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

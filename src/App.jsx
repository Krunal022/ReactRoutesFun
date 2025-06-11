import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-pink-300 w-screen h-screen text-5xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;

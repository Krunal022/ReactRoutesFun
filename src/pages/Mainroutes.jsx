import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Product from "./Product";
import Projects from "./Projects";
import Service from "./Service";
import ProductDetail from "./ProductDetail";
import ServiceDetail from "./ServiceDetail";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetail />} />
      <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetail />} />
      </Route>
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Mainroutes;

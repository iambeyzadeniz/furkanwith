import React from "react";
import { Routes, Route } from "react-router-dom";
import Programs from "../pages/Programs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Prices from "../pages/Prices";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Programs />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/prices" element={<Prices />} />
    </Routes>
  );
};

export default AppRouter;

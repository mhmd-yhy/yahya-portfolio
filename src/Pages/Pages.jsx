import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Pages;

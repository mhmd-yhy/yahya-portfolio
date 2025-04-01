import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Landing from "../Components/Landing";
import Footer from "../Components/Footer";
import NavSide from "../Components/NavSide";
import Login from "./Login";

function Pages() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(location.pathname !== "/dashboard" && location.pathname !== "/login");
  }, [location.pathname]);

  return (
    <div className={`${visible && "lg:flex justify-between gap-5 "} lg:flex lg:justify-evenly xl:justify-between gap-5 container sm:mx-auto py-16 px-4 lg:px-0`}>
      {<Landing />}
      <div className={`${!visible && "lg:w-9/12 xl:w-11/12"}`} >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
      <NavSide visible={visible} />
    </div>
  );
}

export default Pages;

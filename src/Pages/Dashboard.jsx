import Heading from "../Components/Heading";

import RouterAnimation from "../Components/RouterAnimation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutContainer from "../Components/dashboard/AboutContainer";
import FeaturesContainer from "../Components/dashboard/FeaturesContainer";
import StatsContainer from "../Components/dashboard/StatsContainer";
import ServicesContainer from "../Components/dashboard/ServicesContainer";
import SkillsContainer from "../Components/dashboard/SkillsContainer";
import ProtfolioContainer from "../Components/dashboard/ProtfolioContainer";

export default function Dashboard() {
  const navigate = useNavigate();
  const [protected_Route, setProtected_Route] = useState(localStorage.getItem("role"));
  useEffect(() => { if (protected_Route !== "admin") { navigate("/"); } }, [protected_Route]);


  return (
    <section className="dashboard mt-8 lg:mt-0 xl:m-0">
      <RouterAnimation title="dashboard" />
      <div className="border our-border-color back-2 grow-1 rounded-2xl px-5 py-8">
        <AboutContainer />
        <FeaturesContainer />
        <StatsContainer />
        <ServicesContainer />
        <SkillsContainer />
        <ProtfolioContainer />




      </div>
    </section>
  );
}

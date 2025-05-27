import RouterAnimation from "../Components/RouterAnimation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutContainer from "../Components/dashboard/AboutContainer";
import FeaturesContainer from "../Components/dashboard/FeaturesContainer";
import StatsContainer from "../Components/dashboard/StatsContainer";
import ServicesContainer from "../Components/dashboard/ServicesContainer";
import SkillsContainer from "../Components/dashboard/SkillsContainer";
import ProtfolioContainer from "../Components/dashboard/ProtfolioContainer";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <section className="dashboard mt-8 lg:mt-0 xl:m-0">
      <RouterAnimation title="dashboard" />
      <div className="border border-Border-Color-Light dark:border-Border-Color-Dark bg-Sec-Back-Light dark:bg-Sec-Back-Dark grow-1 rounded-2xl px-5 py-8">
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
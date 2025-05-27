import React, { useEffect, useState } from "react";
import { portfolio } from "../assets/data";
import { Link } from "react-router-dom";
import Heading from "../Components/Heading";
import RouterAnimation from "../Components/RouterAnimation";

export default function Portfolio() {
  useEffect(() => { localStorage.removeItem("role"); }, []);
  const categoriesArray = portfolio.map((project, i) => project.category);
  const unique_categories = ["all", ...new Set(categoriesArray)];
  // console.log(unique_categories);

  /*==========Start Filteration==========*/
  const [activeCategory, setActiveCategory] = useState("all");
  let viewProjects = [];
  if (activeCategory !== "all") {
    viewProjects = portfolio.filter((project, i) => {
      return project.category === activeCategory;
    });
  } else {
    viewProjects = portfolio.map((project, i) => {
      return project;
    });
  }
  /*==========End Filteration==========*/

  return (
    <section className="portfolio mt-8 lg:mt-12 xl:m-0 dark:text-Text-Color-Dark text-zinc-300">
      <RouterAnimation title="portfolio" />
      <div className="border border-Border-Color-Light dark:border-Border-Color-Dark bg-Sec-Back-Light dark:bg-Sec-Back-Dark grow-1 rounded-2xl px-5 py-8">
        <Heading title="portfolio" />
        <ul className="filter list-none flex justify-center gap-3 mt-3">
          {unique_categories.map((category, i) => {
            return (
              <li key={i} data-category={category} onClick={(e) => { setActiveCategory(e.target.dataset.category); }}
                className={` capitalize border border-Border-Color-Light dark:border-Border-Color-Dark shadow-md rounded-md text-lg py-1 px-4 cursor-pointer tracking-widest hover:bg-blue-500 hover:text-white ${activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-transparent "
                  }`}>
                {category}
              </li>
            );
          })}
        </ul>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {viewProjects.map((project, i) => {
            return (
              <div key={i} className="card rounded-xl overflow-hidden border border-Border-Color-Light dark:border-Border-Color-Dark hover:border-blue-500 dark:hover:border-blue-500">
                <div className="image opacity-40 overflow-hidden">
                  <img src={project.image} alt="" className="rounded-xl w-full h-48" />
                </div>
                <div className="card-alt p-3 bg-Third-Back-Light dark:bg-Back-Dark z-10 h-full">
                  <h2 className="title  text-xl mt-1 capitalize">{project.title}</h2>
                  <ul className="topics list-none flex flex-wrap gap-2 mt-2">
                    {project.topics.map((toppic, i) => (
                      <li key={i} className="topic rounded-xl text-md text-zinc-300 bg-blue-500 px-2" >{toppic}</li>
                    ))}
                  </ul>
                  <div className="links mt-2">
                    <Link to={project.view} target="_blank" className="link relative capitalize text-base hover:text-blue-500 after:absolute after:content-normal after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:duration-500 after:hover:w-full after:bg-blue-500">
                      view
                    </Link>
                    <span className=" text-lg mx-2">|</span>
                    <Link to={project.code} target="_blank" className="link relative capitalize text-base hover:text-blue-500 after:absolute after:content-normal after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:duration-500 after:hover:w-full after:bg-blue-500" >
                      code
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className=" text-center mt-5">
          To see all projects visit my{" "}
          <Link to={`https://github.com/mhmd-yhy`} target="_blank" className="link capitalize text-blue-500 relative hover:tracking-wider after:absolute after:content-normal after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:duration-500 after:hover:w-full after:bg-blue-500" >
            github
          </Link>
        </p>
      </div>
    </section>
  );
}

import Heading from "../Components/Heading";
import { about } from "../assets/data";
import RouterAnimation from "../Components/RouterAnimation";
import { useEffect } from "react";

export default function About() {
  useEffect(() => { localStorage.removeItem("role"); }, []);
  return (
    <section className="about mt-8 lg:mt-12 xl:m-0 text-zinc-300">
      <RouterAnimation title="about" />
      <div className="border border-Border-Color-Light dark:border-Border-Color-Dark bg-Sec-Back-Light dark:bg-Sec-Back-Dark grow-1 rounded-2xl px-5 py-8">
        <Heading title={"about"} />
        <div className="dark:text-Text-Color-Dark"><p className="md:text-lg">{about.desc}</p></div>

        <div className="features mt-10">
          <Heading title={"features"} />
          <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-2">
            {about.features.map((value, i) => (
              <div key={i} className="box p-3 mb-2 sm:mb-0 bg-transparent rounded-lg text-center dark:text-Text-Color-Dark border-2 border-Border-Color-Light dark:border-Border-Color-Dark hover:border-blue-500 dark:hover:border-blue-500 " >
                <h2 className="icon flex justify-center mb-2"><i className="text-8xl">{value.icon}</i></h2>
                <h2 className="text-2xl text-blue-500 font-bold tracking-wide capitalize mb-2">{value.title}</h2>
                <p className="text-md">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats mt-10">
          <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-2">
            {about.stats.map((value, i) => (
              <div key={i} className="box py-3 mb-2 sm:mb-0 overflow-hidden bg-transparent rounded-lg text-center border-2 border-Border-Color-Light dark:border-Border-Color-Dark relative opacity-30 hover:opacity-100 hover:-translate-y-2 before:content-normal after:content-normal before:absolute after:absolute before:w-1 after:w-1 before:h-0 after:h-0 before:duration-500 after:duration-500 before:top-0 after:bottom-0 before:-left-px after:-right-px before:hover:h-full after:hover:h-full before:bg-blue-500 after:bg-blue-500" >
                <div className="icon text-5xl text-white dark:text-Text-Color-Dark flex justify-center mb-2">{value.icon}</div>
                <h2 className="text-5xl text-white dark:text-Text-Color-Dark mb-2">{value.stat}</h2>
                <h2 className="text-xl text-blue-500 capitalize font-bold">{value.text}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

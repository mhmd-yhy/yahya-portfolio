import Heading from "../Components/Heading";
import {about} from "../assets/data";
import RouterAnimation from "../Components/RouterAnimation";

export default function About() {
  return (
    <section className="about mt-8 lg:mt-12 xl:m-0 ">
      <RouterAnimation title="about" />
      <div className="border our-border-color back-2 grow-1 rounded-2xl px-5 py-8">
        <Heading title={"about"} />
        <div className="text-zinc-500">
          <p className="md:text-lg">{about.desc}</p>
        </div>

        <div className="features mt-10">
          <Heading title={"features"} />
          <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-2">
            {about.features.map((value, i) => (
              <div
                key={i}
                className="box p-3 mb-2 sm:mb-0 bg-transparent rounded-lg text-center border-2 our-border-color duration-500 hover:border-blue-500"
              >
                <h2 className="icon flex justify-center mb-2">
                  <i className="text-8xl text-zinc-500 duration-500">
                    {value.icon}
                  </i>
                </h2>
                <h2 className="text-2xl text-blue-500 font-bold tracking-wide capitalize mb-2">
                  {value.title}
                </h2>
                <p className="text-md text-white">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats mt-10">
          <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-2">
            {about.stats.map((value, i) => (
              <div
                key={i}
                className="box py-3 mb-2 sm:mb-0 bg-transparent rounded-lg overflow-hidden text-center border-2 our-border-color relative duration-500 opacity-30 hover:opacity-100 hover:-translate-y-2"
              >
                <div className="icon text-5xl text-zinc-500 flex justify-center mb-2">
                  {value.icon}
                </div>
                <h2 className="text-5xl text-zinc-500 mb-2">{value.stat}</h2>
                <h2 className="text-xl text-blue-500 capitalize font-bold">
                  {value.text}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Heading from "../Components/Heading";
import {services} from "../assets/data";
import RouterAnimation from "../Components/RouterAnimation";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Scrollbar} from "swiper/modules";

export default function Services() {
  return (
    <section className="services mt-8 lg:mt-12 xl:m-0">
      <RouterAnimation title="services" />
      <div className="border our-border-color back-2 grow-1 rounded-2xl p-8">
        <Heading title={"services"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.service.map((value, i) => {
            return (
              <div
                key={i}
                className="box p-3 bg-transparent border our-border-color rounded-lg duration-500 hover:border-blue-500 hover:rotate-2"
              >
                <h2 className="icon text-zinc-500 text-7xl m-auto inline-block duration-500 mb-4">
                  {value.icon}
                </h2>
                <h2 className="text-blue-500 text-xl sm:text-3xl mb-4">
                  {value.title}
                </h2>
                <p className="text-zinc-500 duration-500">{value.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="skills mt-10 ">
          <Heading title={"skills"} />
          <Swiper
            slidesPerView={3}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Scrollbar]}
            className="mySwiper lg:max-w-xl 2xl:max-w-3xl"
          >
            {services.skills.map((value, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className="skill text-7xl sm:text-9xl cursor-grab justify-center items-center"
                  style={{color: value.color, display: "flex"}}
                >
                  <i className="mx-auto text-center">{value.icon}</i>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

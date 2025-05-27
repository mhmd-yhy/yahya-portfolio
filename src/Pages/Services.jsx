import React, { useEffect } from "react";
import Heading from "../Components/Heading";
import { services } from "../assets/data";
import RouterAnimation from "../Components/RouterAnimation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";

export default function Services() {
  useEffect(() => { localStorage.removeItem("role"); }, []);
  return (
    <section className="services mt-8 lg:mt-12 xl:m-0">
      <RouterAnimation title="services" />
      <div className="border border-Border-Color-Light dark:border-Border-Color-Dark bg-Sec-Back-Light dark:bg-Sec-Back-Dark grow-1 rounded-2xl p-8">
        <Heading title={"services"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.service.map((value, i) => {
            return (
              <div key={i} className="box p-3 bg-transparent border border-Border-Color-Light dark:border-Border-Color-Dark rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:rotate-2">
                <h2 className="icon text-zinc-300 dark:text-Text-Color-Dark text-7xl m-auto inline-block mb-4">{value.icon}</h2>
                <h2 className="text-blue-500 text-xl sm:text-3xl mb-4">{value.title}</h2>
                <p className="text-zinc-300 dark:text-Text-Color-Dark">{value.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="skills mt-10 ">
          <Heading title={"skills"} />
          <Swiper
            className="mySwiper lg:max-w-xl 2xl:max-w-3xl"
            slidesPerView={3}
            scrollbar={{ hide: true, }}
            autoplay={{ delay: 1500, disableOnInteraction: false, }}
            modules={[Autoplay, Scrollbar]}>
            {services.skills.map((value, i) => {
              return (
                <SwiperSlide key={i} className="skill text-7xl sm:text-9xl cursor-grab justify-center items-center" style={{ color: value.color, display: "flex" }} >
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

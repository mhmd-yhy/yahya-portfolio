import React, { useState } from "react";
import { landing } from "../assets/data";
import { Link, NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Landing() {
  const [showContact, setShowContact] = useState("max-h-0");
  return (
    <div className="landing mt-12 xl:m-0 relative">
      <span className="show absolute lg:hidden z-10 top-0 right-0 text-Text-Color-Dark text-sm bg-transparen  p-2 rounded-tr-2xl rounded-bl-2xl border border-Border-Color-Light dark:border-Border-Color-Dark cursor-pointer overflow-hidden our-back-shadow shadow-inner hover:text-zinc-300 shadow-blue-500 " onClick={() => setShowContact(showContact === "max-h-0" ? "max-h-96" : "max-h-0")} >
        <span className="hidden sm:block">Show Contact</span>
        <span className={`block sm:hidden text-2xl ${showContact === "max-h-0" ? "rotate-0" : "rotate-180"} `}>
          {landing.showContactIcon}
        </span>
      </span>
      <div className={`bg-Sec-Back-Light dark:bg-Sec-Back-Dark text-zinc-300 rounded-2xl border border-Border-Color-Light dark:border-Border-Color-Dark sticky overflow-hidden`} style={{ top: "0" }} >
        <div className="top-sec pt-5 pl-3 sm:px-5">
          <div className="flex items-center lg:block ">
            <div className="w-36 sm:w-44 md:w-52 lg:w-3/4 h-32 lg:h-52 lg:mx-auto mb-2 relative bg-Third-Back-Light dark:bg-Back-Dark rounded-3xl overflow-hidden">
              <img src={landing.image} alt="" className="absolute -bottom-0 left-1/2 -translate-x-1/2 sm:h-32 sm:w-44 md:w-52 lg:h-52 lg:w-56" />
            </div>
            <div className="desc ml-3 lg:ml-0">
              <h2 className="capitalize mb-2 text-center text-md sm:text-lg md:text-2xl font-bold tracking-wide dark:text-Text-Color-Dark">
                <Typewriter options={{ strings: [landing.name], autoStart: true, loop: true, }} />
              </h2>
              <h3 className="capitalize dark:text-Text-Color-Dark font-bold mb-2 mt-3 lg:mt-0 lg:text-center">
                <span className="bg-Third-Back-Light dark:bg-Back-Dark py-1 px-2 text-xs sm:text-base lg:text-lg rounded-md">{landing.competence}</span>
              </h3>
            </div>
          </div>

          <ul className="social list-none flex justify-center gap-2 mb-4 lg:mb-2 mt-2">
            {landing.social.map((value, i) => {
              return (
                <NavLink to={value.href} target="_blank" key={i} className={`bg-transparent border border-Border-Color-Light dark:border-Border-Color-Dark text-xl mb-2 p-2 rounded-md cursor-pointer ${value.color} hover:text-white hover:bg-blue-500`}>
                  {value.icon}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <div className={`alt-sec px-5 ${showContact} lg:max-h-96 overflow-hidden`} >
          <ul className="info bg-Third-Back-Light dark:bg-Back-Dark p-5 pt-0 rounded-2xl mb-4">
            {landing.contactInfo.map((value, i) => {
              return (
                <li key={i} className={`flex ${value.borderBottom ? "border-b-2" : ""} border-Border-Color-Light dark:border-Border-Color-Dark p-3 gap-1`} >
                  <div className={`icon p-2 text-2xl rounded-lg ${value.iconColor} hover:text-white hover:bg-blue-500 dark:hover:bg-blue-500 bg-Sec-Back-Light dark:bg-Sec-Back-Dark`} >{value.icon}</div>
                  <div className="desc">
                    <h3 className="dark:text-Text-Color-Dark text-sm capitalize">{value.text}</h3>
                    <h3 className="dark:text-Text-Color-Dark font-bold sm:text-sm text-xs">{value.desc}</h3>
                  </div>
                </li>
              );
            })}
          </ul>

          <button className="flex justify-center items-center gap-2 border-2 text-white bg-blue-500 rounded-lg p-2 mx-auto border-transparent hover:bg-transparent hover:border-blue-500 mb-5">
            {landing.cvIcon}
            <Link download target="_blank" to={landing.cvFile} className="capitalize" >download cv</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

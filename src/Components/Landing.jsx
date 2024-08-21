import React, {useState} from "react";
import {landing} from "../assets/data";
import {Link, NavLink} from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Landing() {
  const [showContact, setShowContact] = useState("max-h-0");
  return (
    <div className="landing mt-12 xl:m-0 relative">
      <span
        className="show absolute lg:hidden z-10 top-0 right-0 text-zinc-500 text-sm bg-transparent shadow-md p-2 rounded-tr-2xl rounded-bl-2xl border our-border-color cursor-pointer overflow-hidden duration-500 our-back-shadow hover:border-blue-500 hover:text-zinc-300 hover:shadow-blue-500 hover:shadow-sm"
        onClick={() =>
          setShowContact(showContact === "max-h-0" ? "max-h-96" : "max-h-0")
        }
      >
        <span className="hidden sm:block">Show Contact</span>
        <span className="block sm:hidden text-2xl">
          {landing.showContactIcon}
        </span>
      </span>
      <div
        className={`back-2 text-white rounded-2xl border our-border-color sticky overflow-hidden duration-500`}
        style={{top: "0"}}
      >
        <div className="top-sec pt-5 pl-3 sm:px-5">
          <div className="flex items-center lg:block ">
            <img
              src={landing.image}
              alt=""
              className="w-36 sm:w-52 md:w-52 lg:w-3/4 h-32 lg:h-52 lg:mx-auto mb-2"
            />
            <div className="desc ml-3 lg:ml-0">
              <h2 className="capitalize mb-2 text-center text-md sm:text-lg md:text-2xl font-bold tracking-wide text-zinc-500">
                <Typewriter
                  options={{
                    strings: [landing.name],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <h3 className="capitalize text-zinc-300 mb-2 mt-3 lg:mt-0 lg:text-center">
                <span className="back-3 py-1 px-2 text-xs sm:text-base lg:text-lg rounded-md">
                  {landing.competence}
                </span>
              </h3>
            </div>
          </div>

          <ul className="social list-none flex justify-center gap-2 mb-4 lg:mb-2 mt-2">
            {landing.social.map((value, i) => {
              return (
                <NavLink
                  to={value.href}
                  target="_blank"
                  key={i}
                  className={`bg-transparent border our-border-color text-xl mb-2 p-2 rounded-md cursor-pointer ${value.color} hover:text-white hover:bg-blue-500 duration-500`}
                >
                  {value.icon}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <div
          className={`alt-sec px-5 ${showContact} lg:max-h-96 overflow-hidden duration-1000`}
        >
          <ul className="info back-3 p-5 pt-0 rounded-2xl mb-4">
            {landing.contactInfo.map((value, i) => {
              return (
                <li
                  key={i}
                  className={`flex ${
                    value.borderBottom ? "border-b-2" : ""
                  } our-border-color p-3`}
                >
                  <div
                    className={`icon p-2 mr-2 text-2xl rounded-lg back-2 ${value.iconColor} hover:text-white hover:bg-blue-500 duration-500`}
                  >
                    {value.icon}
                  </div>
                  <div className="desc">
                    <h3 className="text-zinc-500 text-sm capitalize">
                      {value.text}
                    </h3>
                    <h3 className="text-white sm:text-sm text-xs">
                      {value.desc}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>

          <button className="flex justify-center items-center gap-2 border-2 text-white bg-blue-500 rounded-lg p-2 mx-auto duration-500 border-transparent hover:bg-transparent hover:border-blue-500 mb-5">
            {landing.cvIcon}
            <Link
              download
              target="_blank"
              to={landing.cvFile}
              className="capitalize"
            >
              download cv
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

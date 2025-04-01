import { links } from "../assets/data.js";
import { NavLink } from "react-router-dom";

export default function NavSide({ visible }) {
  return (
    <div className="navside">
      <ul className={`list-none back-2 p-5 text-white rounded-2xl border-4 our-border-color flex justify-evenly w-11/12 sm:w-96 ${visible ? "xl:border xl:block xl:sticky xl:w-auto -translate-x-1/2" : "lg:border lg:block lg:sticky lg:w-auto -translate-x-1/2 lg:translate-x-0"} fixed top-0 rounded-b-full left-1/2  xl:translate-x-0 z-40`}>
        {links.slice(0, visible ? 4 : links.length).map((value, i) => {

          return (
            <li key={i} className={`${visible ? "xl:mb-4 " : "lg:mb-4"}`}
              onClick={() => { window.scrollTo({ behavior: "instant", top: "0", }); }}>
              <NavLink
                to={value.path}
                className={({ isActive }) => {
                  return (
                    `rounded-lg text-center flex flex-col items-center p-2 capitalize hover:text-white hover:bg-blue-500 duration-500 ` +
                    (isActive
                      ? `bg-blue-500 text-white`
                      : `text-zinc-500 back-3`)
                  );
                }}
              >
                <h2 className="text-2xl">{value.icon}</h2>
                <h3 className={`hidden ${visible ? "xl:block " : "lg:block"}`}>{value.text}</h3>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
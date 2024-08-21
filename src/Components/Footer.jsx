import React from "react";
import {footer} from "../assets/data";

export default function Footer() {
  return (
    <section className="footer mt-6">
      <div className="flex justify-between items-center p-5 rounded-2xl back-2 border our-border-color">
        <h2 className="text-zinc-500 text-sm md:text-md">
          {footer.desc}
          <span className="text-blue-500 capitalize"> {footer.reserved}</span>.
        </h2>
        <i
          className="text-blue-500 text-4xl cursor-pointer mr-2"
          onClick={() => {
            window.scrollTo({
              behavior: "smooth",
              top: "0",
            });
          }}
        >
          {footer.toTopIcon}
        </i>
      </div>
    </section>
  );
}

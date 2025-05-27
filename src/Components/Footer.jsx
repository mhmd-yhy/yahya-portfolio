import React from "react";
import { footer } from "../assets/data";

export default function Footer() {
  return (
    <section className="footer mt-6">
      <div className="flex justify-between items-center p-5 rounded-2xl bg-Sec-Back-Light dark:bg-Sec-Back-Dark border border-Border-Color-Light dark:border-Border-Color-Dark">
        <h2 className="text-zinc-300 dark:text-Text-Color-Dark text-sm md:text-md">
          {footer.desc}
          <span className="text-blue-500 capitalize"> {footer.reserved}</span>.
        </h2>
        <i className="text-blue-500 text-4xl cursor-pointer mr-2" onClick={() => { window.scrollTo({ behavior: "smooth", top: "0", }); }}>
          {footer.toTopIcon}
        </i>
      </div>
    </section>
  );
}

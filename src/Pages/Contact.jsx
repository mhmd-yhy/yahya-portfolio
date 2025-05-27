import React, { useEffect } from "react";
import RouterAnimation from "../Components/RouterAnimation";
import Heading from "../Components/Heading";
import MyInput from "../Components/MyInput";
import { contact } from "../assets/data";

export default function Contact() {
  useEffect(() => { localStorage.removeItem("role"); }, []);
  return (
    <section className="contact mt-8 lg:mt-12 xl:m-0 text-zinc-300">
      <RouterAnimation title="contact" />
      <div className="border border-Border-Color-Light dark:border-Border-Color-Dark bg-Sec-Back-Light dark:bg-Sec-Back-Dark rounded-2xl p-8">
        <iframe src={contact.map} title="mas" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg grayscale w-full" ></iframe>

        <form action={`https://formsubmit.co/${contact.myEmail}`} method="POST" className="mt-10" target="_subject" >
          <Heading title={"contact"} />
          <div className="text-xl dark:text-Text-Color-Dark w-full my-5">
            <p className="w-3/4 text-center mx-auto">{contact.desc}</p>
          </div>
          <input type="hidden" name="_subject" value="New Email!" />
          <input type="hidden" name="_captcha" value="false" />
          {
            contact.form.map((value, i) => <MyInput key={i} title={value.title} type={value.type} name={value.name} />)
          }
          <button className="text-white bg-blue-500 px-6 py-2 rounded-lg cursor-pointer flex justify-center items-center border border-Border-Color-Light dark:border-Border-Color-Dark hover:bg-transparent hover:border-blue-500 dark:hover:border-blue-500 ">
            <i className="text-3xl">{contact.sendIcon}</i>
            <span className="ml-3 text-xl font-semibold tracking-wide capitalize">send</span>
          </button>
        </form>
      </div>
    </section>
  );
}

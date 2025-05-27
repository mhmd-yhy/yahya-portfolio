import React from "react";

export default function MyInput({ title, type, name }) {
  return (
    <div className="flex flex-col dark:text-Text-Color-Dark mb-4">
      <label className="text-lg capitalize">{title}</label>
      <input type={type} name={name} required className="border-b border-Border-Color-Light dark:border-Border-Color-Dark bg-transparent outline-none mt-2 px-2 hover:border-b-blue-500 dark:hover:border-b-blue-500" />
    </div>
  );
}

import React from "react";

export default function MyInput({title, type, name}) {
  return (
    <div className="flex flex-col text-zinc-500 mb-4">
      <label className="text-lg capitalize">{title}</label>
      <input
        type={type}
        name={name}
        required
        className="border-b our-border-color bg-transparent outline-none mt-2 px-2 duration-500 hover:border-b-blue-500"
      />
    </div>
  );
}

import React from "react";

export default function RouterAnimation({title}) {
  return (
    <div className="router-Animation absolute top-0 -left-full -translate-x-1/2 w-full h-full back-2 duration-500 z-50">
      <h1 className="text-5xl text-white capitalize absolute top-80 sm:top-80 md:top-80 left-1/2 -translate-x-1/2">
        {title}
      </h1>
    </div>
  );
}

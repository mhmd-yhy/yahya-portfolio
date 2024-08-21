import React from "react";

export default function Heading({title}) {
  return (
    <div>
      <h2 className="heading text-white text-4xl sm:text-5xl font-bold capitalize mb-8">
        <span className="relative">{title}</span>
      </h2>
    </div>
  );
}

import React from "react";

export default function Heading({ title }) {
  return (
    <div>
      <h2 className="heading text-white text-4xl sm:text-5xl font-bold capitalize mb-8">
        <span className="relative after:content-[''] after:absolute after:top-1/2 after:-right-20 after:w-16 after:h-1 after:rounded-lg">
          {title}
        </span>
      </h2>
    </div>
  );
}

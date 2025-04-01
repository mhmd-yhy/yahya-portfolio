import React, { useState } from 'react';
import Heading from '../Heading';
import { about } from "../../assets/data";
const AboutContainer = () => {
  const [aboutDesc, setAboutDesc] = useState(about.desc);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const edit_About = () => {
    if (aboutDesc === "") {
      setError("It is cannot be empty.");
      setResponse("");
    }
    else {
      about.desc = aboutDesc;
      setResponse("Modified successfully.");
      setError("");
    }
  };
  return (
    <div>
      <Heading title={"about"} />
      <div className="text-zinc-500">
        <textarea rows={5} className="w-full back-3 outline-none" onChange={(e) => setAboutDesc(e.target.value)}>{aboutDesc}</textarea>
        <div className="flex items-center gap-5">
          <button onClick={edit_About} className="bg-blue-500 text-zinc-200 text-lg tracking-wide my-2 py-2 px-4 rounded-lg capitalize">edit</button>
          <p className="text-center text-red-600">{error}</p>
          <p className="text-center text-green-800">{response}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;

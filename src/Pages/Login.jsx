import Heading from "../Components/Heading";
import { login } from "../assets/data";
import RouterAnimation from "../Components/RouterAnimation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  useEffect(() => { localStorage.removeItem("role"); }, []);
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (formLogin.email === login.email && formLogin.password === login.password) {
      localStorage.setItem("role", "admin");
      navigate("/dashboard");
      setTimeout(() => { window.location.reload(); });
    }
    else { setError("Email or password is error"); localStorage.removeItem("role"); }
  };

  return (
    <section className="login mt-11 lg:mt-0 xl:m-0">
      <RouterAnimation title="login" />
      <div className="border border-Border-Color-Light dark:border-Border-Color-Dark bg-Sec-Back-Light dark:bg-Sec-Back-Dark grow-1 rounded-2xl px-5 py-8 min-h-96">
        <Heading title={"login"} />

        <div className="dark:text-Text-Color-Dark w-64 sm:w-80 mx-auto">
          <h2 className="text-9xl flex justify-center  mb-4">{login.icon}</h2>

          <input type="email" placeholder="Enter Your Email" className="bg-Third-Back-Light dark:bg-Back-Dark mb-4 p-4 rounded-lg outline-none w-full sm:w-80" value={formLogin.email} onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} />

          <input type="password" placeholder="Enter Your Password" className="bg-Third-Back-Light dark:bg-Back-Dark mb-4 p-4 rounded-lg outline-none w-full sm:w-80" value={formLogin.password} onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })} />

          <button className={`bg-blue-500 text-zinc-200 font-bold text-lg tracking-wide mb-4 p-4 rounded-lg w-full sm:w-80 ${(formLogin.email === "" || formLogin.password === "") && " bg-neutral-800 text-neutral-600"}`}
            disabled={formLogin.email === "" || formLogin.password === ""}
            onClick={handleClick}>Login</button>
          <p className="text-center text-red-600">{error}</p>
        </div>

      </div>
    </section>
  );
}

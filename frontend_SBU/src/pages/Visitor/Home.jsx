import NavbarHome from "../../components/navbarHome";
import { useNavigate, Link } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();
    return (
      <div className="h-screen w-full relative">
        <NavbarHome />
        <div className="h-full w-full">
          <img
            src="/img/brackground home.png"
            alt="imagen"
            className="h-full w-full object-cover absolute inset-0 -z-10"
          />
          <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 gap-10 md:gap-14 lg:gap-20">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              ¿Listo para <br />
              estudiar?
            </p>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              "Aprender a leer es encender un fuego, cada sílaba que se deletrea es una chispa"
            </h2>
            <Link to={`/Signin`}>
            <p className="rounded-2xl bg-[#521E03] text-white font-bold text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6">
              Empieza hoy
            </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
export default Home;

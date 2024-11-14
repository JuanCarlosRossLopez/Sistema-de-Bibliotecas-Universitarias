import React from "react";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Signup() {
  const [verContra, setVerContra] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center ">

      <div>
        <img
          src="/img/fondoLoginAndRegistrer.png"
          alt="imagen"
          className="h-full w-full object-cover absolute inset-0 -z-10" />
        <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 gap-10 md:gap-14 lg:gap-20">
          <p className="text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-extrabold leading-tight md:mb-10 mt-[-200px] md:mt-1 lg:mt-1">
            Bienvenido
          </p>

        </div>
      </div>

      <div className=" flex ">
        <div className="bg-[#C19B93] border-[4px] border-yellow-900 rounded-2xl transition-all duration-200 w-full max-w-xl mx-4 sm:mx-6 lg:mx-10">
          <form
            className="mx-1 sm:mx-8 md:mx-1 flex items-center space-y-4 py-8 sm:py-10 md:py-16 px-5 sm:px-10 md:px-[10rem] font-semibold text-gray-500 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-black font-semibold text-4xl">Registro</h1>

            <input
              className="w-full md:w-[20rem] p-2 placeholder-white bg-[#e9d2c4] rounded-md border border-gray-700 focus:border-yellow-00 hover:border-[#f0a779] transition-all duration-200"
              placeholder="Correo"
              {...register("example")}
            />
            {errors.exampleRequired && <span>Este campo es obligatorio</span>}

            <div className="flex w-full md:ml-7 md:w-[21.7rem] items-center space-x-1">
              <input
                type={verContra ? "text" : "password"}
                className="w-full p-2 placeholder-white bg-[#e9d2c4] rounded-md border border-gray-700 focus:border-white-700 hover:border-[#f0a779] transition-all duration-200"
                placeholder="Contraseña"
                {...register("exampleRequired", { required: true })}
              />
              <button
                type="button"
                onClick={() => setVerContra(!verContra)}
                className="text-gray-500 hover:text-yellow-700 text-2xl"
              >
                {verContra ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            {errors.exampleRequired && <span>Este campo es obligatorio</span>}

            <input
              className="w-full sm:w-44 p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-[#4a180dc4] transition-all duration-200"
              type="submit"
            />
            <p className=" text-center">
              ¿Ya tienes una cuenta?<br />
              <a
                className="font-semibold text-black hover:text-yellow-500 transition-all duration-200"
                href="/Signin"
              > Inicia Sesión
              </a>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Signup;
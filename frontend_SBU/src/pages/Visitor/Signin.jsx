import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from "react-icons/ai";

function Login() {
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
                <div className="flex h-full text-center text-white px-4 gap-10 md:gap-14 lg:gap-20">
                    <p className="text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-extrabold leading-tight md:mb-10 mt-[-200px] md:mt-1 lg:mt-1">
                        Bienvenido de vuelta
                    </p>

                </div>
            </div>

            <div className="flex">
                <div className="relative bg-[#e9d2c4] border-[4px] border-yellow-900 rounded-2xl transition-all duration-200 w-full max-w-xl mx-4 sm:mx-6 lg:mx-10">

                    <a
                        href={`/`}
                        className="absolute top-2 sm:top-4 md:top-4 left-2 sm:left-4 md:left-4  bg-transparent hover:scale-110 text-gray-700 rounded-full p-2 hover:bg-[#d39a77] transition-all duration-200"
                    >
                        <AiOutlineArrowLeft size={20} />
                    </a>
                    <form
                        className="mx-1 sm:mx-8 md:mx-10 flex items-center space-y-5 sm:space-y-4 md:space-y-4 xl:space-y-4 py-8 sm:py-10 md:py-16 px-4 sm:px-10 md:px-20 font-semibold text-gray-500 flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className="text-black text-2xl sm:text-4xl md:text-4xl">Inicio de Sesión</h1>

                        <input
                            className="w-full md:w-[20rem] p-2 placeholder-white text-black bg-[#d2a89f] rounded-md border border-gray-700 focus:border-yellow-700 hover:border-[#f0a779] transition-all duration-200"
                            placeholder="Correo"
                            {...register("example")}
                        />
                        {errors.exampleRequired && <span>Este campo es obligatorio</span>}

                        <div className="flex relative w-full md:w-[20rem] items-center space-x-1">
                            <input
                                type={verContra ? "text" : "password"}
                                className="w-full p-2 placeholder-white bg-[#d2a89f] rounded-md border border-gray-700 focus:border-white-700 hover:border-[#f0a779] transition-all duration-200"
                                placeholder="Contraseña"
                                {...register("exampleRequired", { required: true })}
                            />
                            <button
                                type="button"
                                onClick={() => setVerContra(!verContra)}
                                className="absolute right-3 text-gray-500 hover:text-yellow-700 hover:scale-110 text-2xl"
                            >
                                {verContra ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </button>
                        </div>
                        {errors.exampleRequired && <span>Este campo es obligatorio</span>}

                        <input
                            className="w-full sm:w-44 p-2 hover:scale-105 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-[#4a180dc4] transition-all duration-200"
                            type="submit"
                        />
                        <p className="text-center">
                            ¿No tienes una cuenta?
                            <a
                                className=" ml-1 font-semibold text-blue-600 border-b-2 border-blue-600 inline hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200"
                                href={`/signup`}
                            >
                                Registrate
                            </a>
                        </p>
                    </form>
                </div>
            </div>



        </div>
    );
}

export default Login;
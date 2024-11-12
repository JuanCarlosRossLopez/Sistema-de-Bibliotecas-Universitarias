import React from "react";
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div className="h-screen w-full relative">
            <div>
                <img
                    src="/img/fondoLoginAndRegistrer.png"
                    alt="imagen"
                    className="h-full w-full object-cover absolute inset-0 -z-10" />
                <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 gap-10 md:gap-14 lg:gap-20">
                    <p className="text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-extrabold leading-tight md:mt-20 sm:mt-20">
                        Bienvenido de vuelta
                    </p>

                </div>
            </div>

            <div className="flex items-center justify-center mt-5  sm:py-10">
                <div className="bg-[#e9d2c4] border-[4px] border-yellow-900 rounded-2xl hover:border-yellow-600 transition-all duration-200 w-full max-w-xl mx-4 sm:mx-6 lg:mx-10">
                    <form
                        className="mx-4 sm:mx-8 md:mx-10 flex items-center space-y-4 py-8 sm:py-10 md:py-16 px-4 sm:px-10 md:px-20 font-semibold text-gray-500 flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className="text-black text-4xl">Inicio de Sesión</h1>

                        <input
                            className="w-full p-2 text-black bg-[#d2a89f] rounded-md border border-gray-700 focus:border-yellow-700 hover:border-yellow-500 transition-all duration-200"
                            placeholder="Correo"
                            {...register("example")}
                        />

                        <input
                            className="w-full p-2 bg-[#d2a89f] rounded-md border border-gray-700 focus:border-yellow-700 hover:border-yellow-500 transition-all duration-200"
                            placeholder="Contraseña"
                            {...register("exampleRequired", { required: true })}
                        />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            className="w-full sm:w-44 p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-yellow-500 transition-all duration-200"
                            type="submit"
                        />
                        <p className="text-center">
                            ¿No tienes una cuenta?
                            <a
                                className="font-semibold text-black hover:text-yellow-500 transition-all duration-200"
                                href="/*"
                            > Registrate
                            </a>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;
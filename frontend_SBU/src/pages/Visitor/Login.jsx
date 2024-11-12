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
            </div>

            <div class="flex items-center justify-center w-full h-full">
                <div
                    class="bg-[#e9d2c4] border-[4px] border-yellow-900 rounded-2xl hover:border-yellow-600 transition-all duration-200"
                >
                    <form class="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col"
                        onSubmit={handleSubmit(onSubmit)}>

                        <h1 class="text-black font-semibold text-2xl">Inicio de Sesión</h1>

                        <input class="w-full p-2 bg-yellow-900 rounded-md border border-gray-700 focus:border-yellow-700 hover:border-yellow-500 transition-all duration-200"
                            placeholder="Correo" {...register("example")} />

                        <input class="w-full p-2 bg-yellow-900 rounded-md border border-gray-700 focus:border-yellow-700 hover:border-yellow-500 transition-all duration-200"
                            placeholder="Contraseña" {...register("exampleRequired", { required: true })} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input class="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-yellow-500 transition-all duration-200"
                            type="submit" />
                        <p>
                            ¿No tienes una cuenta? 
                            <a
                                class="font-semibold text-black hover:text-yellow-500 transition-all duration-200"
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
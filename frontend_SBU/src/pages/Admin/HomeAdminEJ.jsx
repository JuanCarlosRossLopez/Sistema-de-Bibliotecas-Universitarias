import React from "react";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import BarsChart from "../../components/BarsChart";

function HomeAdminEJ() {
    return (
        <div className="bg-[#FFEFE5] h-full min-h-screen w-full">
            <NavbarEJ />
            <div className=" fixed top-0">
            <SidebarEJ />
            </div>
            <div className="flex flex-col h-full p-4">
                <div className="flex flex-col gap-8 lg:gap-16">
                    <div className="flex flex-col md:flex-row gap-4 pt-16 sm:pt-16 md:pt-20 lg:pt-20 xl:pt-20 justify-between w-full">
                        <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
                            <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                                Administradores registrados: <b>0</b>
                            </h1>
                        </div>
                        <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
                            <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                                Empleados registrados: <b>0</b>
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 lg:gap-20 items-center ml-auto justify-center w-full">
                        <div
                            className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1 max-h-[240px] xl:max-h-[300px] max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px]"
                            style={{ minHeight: "200px" }}
                        >
                            <p className="m-2 text-center text-lg sm:text-xl md:text-2xl xl:text-2xl">
                                <b>Usuarios Registrados Mensuales</b>
                            </p>
                            <BarsChart />
                        </div>
                        <div
                            className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1 max-h-[240px] xl:max-h-[300px] max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px]"
                            style={{ minHeight: "200px" }}
                        >
                            <p className="m-2 text-center text-lg sm:text-xl md:text-2xl">
                                <b>Libros Vendidos Mensualmente</b>
                            </p>
                            <BarsChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdminEJ;
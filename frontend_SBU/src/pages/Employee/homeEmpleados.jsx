import React from "react";
import Sidebar from "../../components/Sidebar";
import BarsChart from "../../components/BarsChart";

function HomeEmpleados() {
  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full">
      <div className="flex justify-end">
        <div className="bg-[#834841] w-full md:w-8/12 lg:w-9/12 xl:w-10/12  h-14 md:h-28 flex pt-5 pl-16 md:pl-8 md:pt-16 lg:pt-10 lg:pl-4  font-bold text-3xl md:text-4xl lg:text-6xl text-white">
          Bienvenido sicmas
        </div>
      </div>
      <div className="fixed top-0">
        <Sidebar />
      </div>
      <div className="flex flex-col justify-center items-center h-full p-4">
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <div className="bg-[#C19B93] rounded-md flex-1">
              <h1 className="p-8 font-bold text-sm md:text-lg lg:text-xl text-center md:text-left">
                Devoluciones pendientes: <b>0</b>
              </h1>
            </div>
            <div className="bg-[#C19B93] rounded-md flex-1">
              <h1 className="p-8 font-bold text-sm md:text-lg lg:text-xl text-center md:text-left">
                Libros reservados: <b>0</b>
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-14 justify-center w-full">
            <div
              className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1"
              style={{
                maxWidth: "450px",
                minHeight: "200px",
              }}
            >
              <p className="m-2 text-center text-lg sm:text-xl md:text-2xl">
                <b>Ejemplo #2:</b> Grafico de barras
              </p>
              <BarsChart />
            </div>
            <div
              className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1"
              style={{
                maxWidth: "450px",
                minHeight: "200px",
              }}
            >
              <p className="m-2 text-center text-lg sm:text-xl md:text-2xl">
                <b>Ejemplo #2:</b> Grafico de barras
              </p>
              <BarsChart />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default HomeEmpleados;

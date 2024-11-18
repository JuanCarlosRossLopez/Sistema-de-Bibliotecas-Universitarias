import React from "react";
import Sidebar from "../../components/Sidebar";
import BarsChart from "../../components/BarsChart";

function HomeEmpleados() {
  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full">
      <div className="flex justify-end">
        <div className="bg-[#834841] w-full md:w-8/12 lg:w-9/12 xl:w-10/12 h-14 md:h-28 flex pt-5 pl-16 md:pl-8 lg:pl-10 font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
          Bienvenido sicma
        </div>
      </div>
      <div className="fixed top-0">
        <Sidebar />
      </div>
      <div className="flex flex-col justify-center items-center h-full p-4">
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
              <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                Devoluciones pendientes: <b>0</b>
              </h1>
            </div>
            <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
              <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                Libros reservados: <b>0</b>
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-14 justify-center w-full">
            <div
              className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1 max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]"
              style={{ minHeight: "200px" }}
            >
              <p className="m-2 text-center text-lg sm:text-xl md:text-2xl">
                <b>Ejemplo #2:</b> Grafico de barras
              </p>
              <BarsChart />
            </div>
            <div
              className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1 max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]"
              style={{ minHeight: "200px" }}
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

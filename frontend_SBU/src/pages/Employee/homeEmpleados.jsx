import React from "react";
import Sidebar from "../../components/Sidebar";
import BarsChart from "../../components/BarsChart";

function HomeEmpleados() {
  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full">
      <div className="flex justify-end">
        <div className="bg-[#834841] w-full md:w-8/12 lg:w-9/12 xl:w-10/12  h-14 md:h-28 flex pt-5 pl-16 md:pl-8 md:pt-16 lg:pt-10 lg:pl-4  font-bold text-3xl md:text-4xl lg:text-6xl text-white">
          Bienvenido sicma
        </div>
      </div>
      <div className="fixed top-0">
         <Sidebar />
      </div> 
      <div className="flex flex-col justify-center items-center h-full p-4">
  <p className="m-2 text-center text-lg sm:text-xl md:text-2xl">
    <b>Ejemplo #2:</b> Grafico de barras
  </p>
  <div
    className="bg-light mx-auto p-4 border border-spacing-2"
    style={{
      width: "100%", 
      maxWidth: "450px", 
      height: "auto", 
      minHeight: "200px",
    }}
  >
    <BarsChart />
  </div>
</div>
    </div>
  );
}

export default HomeEmpleados;

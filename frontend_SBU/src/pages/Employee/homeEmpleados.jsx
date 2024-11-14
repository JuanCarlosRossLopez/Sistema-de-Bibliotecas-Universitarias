import React from "react";
import Sidebar from "../../components/Sidebar";

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
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl font-bold text-[#834841]">aqui van las cards, cuando se consuman las apis</h1>
        </div>

     
    </div>
  );
}

export default HomeEmpleados;

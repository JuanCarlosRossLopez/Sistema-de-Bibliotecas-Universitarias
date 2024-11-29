import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import BarsChart from "../../components/BarsChart";

function HomeEmpleados() {
  const [pendingReturns, setPendingReturns] = useState(0);
  const [reservedBooks, setReservedBooks] = useState(0);

  useEffect(() => {
    fetchPendingReturns();
    fetchReservedBooks();
  }, []);

  const fetchPendingReturns = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bookRent/pendingReturns");
      setPendingReturns(response.data.count);
    } catch (error) {
      console.error("Error fetching pending returns:", error);
    }
  };

  const fetchReservedBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bookRent/reservedBooks");
      setReservedBooks(response.data.count);
    } catch (error) {
      console.error("Error fetching reserved books:", error);
    }
  };

  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full overflow-hidden">
      <NavbarEJ />
      <div className="fixed top-0">
        <SidebarEJ />
      </div>
      <div className="flex justify-center items-center mt-20 h-full p-4">
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
              <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                Devoluciones pendientes: <b>{pendingReturns}</b>
              </h1>
            </div>
            <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
              <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                Libros reservados: <b>{reservedBooks}</b>
              </h1>
            </div>
          </div>

          {/* <div className="flex flex-col md:flex-row gap-4 lg:gap-20 justify-center w-full">
            <div
              className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1 max-h-[240px] xl:max-h-[300px] max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px]"
              style={{ minHeight: "200px" }}
            >
              <p className="m-2 text-center text-lg sm:text-xl md:text-2xl">
                <b>Ejemplo #2:</b> Grafico de barras
              </p>
              <BarsChart />
            </div>
            <div
              className="bg-light mx-auto md:mx-0 p-4 border border-spacing-2 flex-1 max-h-[240px] xl:max-h-[300px] max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px]"
              style={{ minHeight: "200px" }}
            >
              <p className="m-2 text-center text-lg sm:text-xl md:text-2xl">
                <b>Ejemplo #2:</b> Grafico de barras
              </p>
              <BarsChart />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomeEmpleados;


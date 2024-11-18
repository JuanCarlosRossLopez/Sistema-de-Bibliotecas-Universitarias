import React from "react";

const BarraBusqueda = ({ onSearch }) => {
  return (
    <div className="p-4 flex flex-row">
      <h4 className="text-4xl font-bold basis-1/2">Catalogo</h4>
      <div className="basis-1/2">
        <input
          type="text"
          placeholder="Buscar libro por título..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-2 rounded border placeholder:italic focus:outline-none focus:ring"
        />
      </div>
    </div>
  );
};

export default BarraBusqueda;

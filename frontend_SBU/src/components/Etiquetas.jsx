
const Etiquetas = ({ etiquetas, selectedEtiquetas, onToggleEtiqueta }) => {
  return (
    <div className="p-4 text-black h-full">
      <h3 className="text-4xl text-center font-bold mb-4">Filtros</h3>

      {/* Filtros por Tipo de Libro */}
      <h4 className="font-semibold text-xl">Tipo de Libro</h4>
      <ul className="pb-4 border-b-4 border-amber-950 text-lg">
        <li>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedEtiquetas.includes('digital')}
              onChange={() => onToggleEtiqueta('digital')}
              className="form-checkbox"
            />
            Digital
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedEtiquetas.includes('fisico')}
              onChange={() => onToggleEtiqueta('fisico')}
              className="form-checkbox"
            />
            Físico
          </label>
        </li>
      </ul>

      {/* Filtros por Categorías */}
      <h4 className="font-semibold pt-4 text-xl">Categorías</h4>
      <ul className="text-lg">
        {etiquetas.map((etiqueta) => (
          <li key={etiqueta.id}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedEtiquetas.includes(etiqueta.id)}
                onChange={() => onToggleEtiqueta(etiqueta.id)}
                className="form-checkbox"
              />
              {etiqueta.category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Etiquetas;

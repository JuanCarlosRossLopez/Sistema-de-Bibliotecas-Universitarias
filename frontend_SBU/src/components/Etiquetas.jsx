import { useState } from 'react';

const Etiquetas = ({ categorias, selectedEtiquetas, onToggleEtiqueta }) => {
  const [error, setError] = useState(null);

  return (
    
    <div className="flex flex-col space-y-2">
      <h3 className="font-bold text-3xl text-center mb-4">Filtros</h3>
      {/* Filtros por Tipo de Libro */}
      <h4 className="text-lg font-bold">Formato de Libro</h4>
      <ul className="mb-4">
        <li>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedEtiquetas.includes('digital')}
              onChange={() => onToggleEtiqueta('digital')}
              className="form-checkbox"
            />
            Fisico
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
            Digital
          </label>
        </li>
      </ul>
      {/* Filtros por Categorias de Libro */}
      <h3 className="text-lg font-bold mb-4">Categorías</h3>
      {categorias.map((categoria) => (
        <label key={categoria.id_category} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={selectedEtiquetas.includes(categoria.id_category)}
            onChange={() => onToggleEtiqueta(categoria.id_category)}
          />
          <span className="text-sm">{categoria.category}</span>
        </label>
      ))}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Etiquetas;
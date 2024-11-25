import React, { useState, useEffect } from "react";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

function GestionCategorias() {
  const MySwal = withReactContent(Swal);
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error.response?.data || error.message);
      Swal.fire("Error", "No se pudieron cargar las categorías", "error");
    }
  };

  const showModal = async (Category = null) => {
    const isEdit = !!Category;
    const { value } = await MySwal.fire({
      title: isEdit ? "Editar Categoría" : "Crear Categoría",
      input: "text",
      inputPlaceholder: "Nombre de la categoría",
      inputValue: Category?.category || "",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      preConfirm: (category) => {
        if (!category) {
          Swal.showValidationMessage("El nombre de la categoría es obligatorio");
          return null;
        }
        return { category };
      },
    });

    if (value) {
      if (isEdit) {
        await updateCategory(Category.id_category, value);
      } else {
        await createCategory(value);
      }
      fetchCategories();
      Swal.fire("Éxito", isEdit ? "Categoría actualizada" : "Categoría creada", "success");
    }
  };
  

  const createCategory = async (categoryData) => {
    try {
      await axios.post("http://localhost:3000/category/post", categoryData);
    } catch (error) {
      console.error("Error creating category:", error.response?.data || error.message);
      Swal.fire("Error", "No se pudo crear la categoría", "error");
    }
  };

  const updateCategory = async (categoryId, categoryData) => {
    try {
      await axios.put(`http://localhost:3000/category/update/${categoryId}`, categoryData);
      Swal.fire("Éxito", "Categoría actualizada correctamente", "success");
    } catch (error) {
      console.error("Error al actualizar la categoría:", error.response?.data || error.message);
      Swal.fire("Error", "No se pudo actualizar la categoría", "error");
    }
  };
  

  const deleteCategory = async (categoryId) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarla",
      cancelButtonText: "Cancelar",
    });

    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/category/delete/${categoryId}`);
        fetchCategories();
        Swal.fire("Eliminado", "La categoría ha sido eliminada", "success");
      } catch (error) {
        console.error("Error deleting category:", error.response?.data || error.message);
        Swal.fire("Error", "No se pudo eliminar la categoría", "error");
      }
    }
  };

  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full">
      <NavbarEJ />
      <div className="fixed top-0">
        <SidebarEJ />
      </div>

      <div className="flex justify-center h-full p-4">
        <div className="bg-[#E0C5BC] p-4 md:p-8 rounded-md max-h-[700px] w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mt-32 sm:mt-24 md:mt-28">
          <div className="flex flex-col items-center justify-between pb-6">
            <h2 className="text-gray-600 font-semibold text-base md:text-xl">Gestión de Categorías</h2>
            <button onClick={() => showModal()} className="bg-[#A2726A] hover:bg-[#e8a599] px-3 py-2 rounded-md text-white font-semibold mt-4">
              Crear Categoría
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase">Categoría</th>
                  <th className="px-5 py-3 border-b-2 text-center text-xs font-semibold text-gray-600 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id_category}>
                    <td className="px-5 py-5 text-sm">
                      <p className="text-gray-900">{category.category}</p>
                    </td>
                    <td className="px-5 py-5 text-sm text-center">
                      <button onClick={() => showModal(category)} className="text-yellow-500 hover:text-yellow-700">
                        <FaEdit size={20} />
                      </button>
                      <button onClick={() => deleteCategory(category.id_category)} className="ml-4 text-red-500 hover:text-red-700">
                        <FaTrash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionCategorias;

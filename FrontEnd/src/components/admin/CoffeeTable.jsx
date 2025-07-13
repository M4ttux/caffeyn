import { useState } from "react";
import ModalAgregar from "./modals/Add/ModalAddCoffee";
import ModalEditar from "./modals/Edit/ModalEditCoffee";
import ModalEliminar from "./modals/Delete/ModalDelete";
import { createCafe, deleteCafeById, updateCoffee } from "../../services/api";

function CoffeeTable({ cafes, origins, refreshData }) {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const modalId = "modalAgregarCafe";

  const handleAgregar = async (data) => {
    try {
      const response = await createCafe(data);
      if (response && response.data) {
        console.log("Café creado:", response.data);
        refreshData();
      } else {
        console.error("Error al crear café:", response);
        alert("No se pudo crear el café. Revisa la consola.");
      }
    } catch (error) {
      console.error("Error en handleAgregar:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCafeById(id);
      console.log("Café eliminado exitosamente");
      refreshData();
      setItemToDelete(null);
    } catch (error) {
      console.error("Error al eliminar el café:", error);
      alert("Error al eliminar el café. Revisa la consola para más detalles.");
    }
  };

  const handleEdit = async (formData) => {
    try {
      const _id = formData.get("_id");
      if (!_id) {
        console.error("No se encontró el ID del café en el FormData");
        return;
      }
      await updateCoffee(_id, formData);
      refreshData();
      setSelectedCafe(null);
    } catch (error) {
      console.error("Error al actualizar el café:", error);
      alert("Error al actualizar el café. Revisa la consola.");
    }
  };

  return (
    <>
      <h2 className="text-center mb-0">Cafés</h2>
      <button
        className="btn btn-agregar-crud"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        <i className="bi bi-plus me-2"></i>Agregar Café
      </button>

      <div className="table-responsive">
        <table className="table table-dark table-bordered text-break mb-5 align-middle">
          <thead>
            <tr className="text-center">
              <th style={{ minWidth: "120px" }}>Nombre</th>
              <th style={{ minWidth: "200px" }}>Descripción</th>
              <th style={{ minWidth: "150px" }}>Descripción Corta</th>
              <th style={{ minWidth: "80px" }}>Precio</th>
              <th style={{ minWidth: "90px" }}>Tostado</th>
              <th style={{ minWidth: "150px" }}>Nota de Sabor</th>
              <th style={{ minWidth: "90px" }}>Imagen</th>
              <th style={{ minWidth: "100px" }}>Origen</th>
              <th style={{ minWidth: "130px" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cafes.map((cafe) => (
              <tr key={cafe._id}>
                <td>{cafe.name}</td>
                <td>
                  <span
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: "200px" }}
                    title={cafe.description}
                  >
                    {cafe.description}
                  </span>
                </td>
                <td>
                  <span
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: "150px" }}
                    title={cafe.shortDescription}
                  >
                    {cafe.shortDescription || "-"}
                  </span>
                </td>
                <td className="text-center">
                  {cafe.price ? `$${cafe.price}` : "-"}
                </td>
                <td className="text-center">{cafe.roastLevel}</td>
                <td>
                  <span
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: "150px" }}
                    title={cafe.flavorNote}
                  >
                    {cafe.flavorNote}
                  </span>
                </td>
                <td className="text-center">
                  {cafe.image ? (
                    <img
                      src={`/imgs/${cafe.image}`}
                      alt={cafe.name}
                      title={cafe.image}
                      className="d-block mx-auto"
                      style={{
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <span>Sin imagen</span>
                  )}
                </td>
                <td className="text-center">{cafe.origin?.country || "N/A"}</td>
                <td className="text-center">
                  <button
                    className="btn-editar-crud btn me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditar"
                    onClick={() => setSelectedCafe(cafe)}
                  >
                    <i className="bi bi-pen-fill text-light fs-5">
                      <span className="d-none">Editar</span>
                    </i>
                  </button>
                  <button
                    className="btn-eliminar-crud btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDelete"
                    onClick={() => setItemToDelete(cafe)}
                  >
                    <i className="bi bi-trash-fill fs-5 text-light">
                      <span className="d-none">Eliminar</span>
                    </i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalAgregar
        onSubmit={handleAgregar}
        type="cafe"
        modalId={modalId}
        origins={origins}
      />
      <ModalEditar
        onSubmit={handleEdit}
        type="cafe"
        modalId="modalEditar"
        initialData={selectedCafe || {}}
        origins={origins}
      />
      <ModalEliminar
        modalId="modalDelete"
        type="cafe"
        itemName={itemToDelete?.name || ""}
        onConfirm={() => itemToDelete && handleDelete(itemToDelete._id)}
      />
    </>
  );
}

export default CoffeeTable;

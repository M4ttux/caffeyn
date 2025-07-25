function ModalDelete({ modalId, type, itemName, onConfirm }) {
  const getLabel = () => {
    switch (type) {
      case "cafe":
        return "el café";
      case "origen":
        return "el origen";
      case "usuario":
        return "el usuario";
      default:
        return "el elemento";
    }
  };

  const handleConfirm = async () => {
    await onConfirm();
    document
      .getElementById(modalId)
      ?.querySelector('[data-bs-dismiss="modal"]')
      ?.click();
    window.location.reload();
  };

  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h3 className="modal-title text-danger">Confirmar Eliminación</h3>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              ¿Estás seguro de que querés eliminar {getLabel()}{" "}
              <strong>{itemName}</strong>?
            </p>
            <p className="text-warning mb-0">
              Esta acción no se puede deshacer.
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleConfirm}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;

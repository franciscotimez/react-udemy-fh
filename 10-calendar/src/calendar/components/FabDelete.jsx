import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {

  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleClickDelete = () => {
    startDeletingEvent();
  };

  return (
    <button
      aria-label="btn-delete"
      className="btn btn-danger fab-danger"
      onClick={handleClickDelete}
      style={{
        display: hasEventSelected ? '' : "none"
      }}
    >
      <i className="fas fa-trash-alt" ></i>
    </button>
  );
};

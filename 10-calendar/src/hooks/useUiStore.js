import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";


export const useUiStore = () => {

  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector(state => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    isDateModalOpen
      ? closeDateModal()
      : openDateModal();
  };

  return {
    //* propiedades
    isDateModalOpen,

    //* Metodos
    openDateModal,
    closeDateModal,
    toggleDateModal,
  };
};

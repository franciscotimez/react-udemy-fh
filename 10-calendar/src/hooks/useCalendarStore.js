import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector(state => state.calendar);
  const { user } = useSelector(state => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        // actualizando
        const { data } = await calendarApi.put(`/events/${calendarEvent.id}`, { ...calendarEvent, user });
        dispatch(onUpdateEvent({ ...data.event, user }));
        return;
      }
      // Creando
      const { data } = await calendarApi.post("/events", { ...calendarEvent, user });
      dispatch(onAddNewEvent({ ...data.event, user }));
    } catch (error) {
      console.log({ error });
      Swal.fire('Error al guardar', error.response.data?.msg, 'error');
    }
  };

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log({ error });
      Swal.fire('Error al eliminar', error.response.data?.msg, 'error');
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);

      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Metodos
    setActiveEvent,
    startLoadingEvents,
    startSavingEvent,
    startDeletingEvent,
  };
};

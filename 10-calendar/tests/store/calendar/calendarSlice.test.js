import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState, newEvent } from "../../fixtures/calendarStates";

describe('Pruebas en calendarSlice', () => {

  test('Debe regresar el estado inicial', () => {
    expect(calendarSlice.getInitialState()).toEqual(initialState);
  });

  test('Debe setear el evento activo con onSetActiveEvent', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
    expect(state.activeEvent).toEqual(events[0]);
  });

  test('Debe agregar un nuevo evento con onAddNewEvent', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
    expect(state.events).toEqual([
      ...events,
      {
        ...newEvent,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      }
    ]
    );
  });

  test('Debe actualizar un nuevo evento con onUpdateEvent', () => {
    const updatedEvent = {
      id: '1',
      start: '2022-10-21 13:00:00',
      end: '2022-10-21 15:00:00',
      title: 'Cumpleanios de Fernando',
      notes: "Enviar notificaciones al team",
    };
    const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
    expect(state.events).toContainEqual({
      ...updatedEvent,
      start: new Date(updatedEvent.start),
      end: new Date(updatedEvent.end),
    });
  });

  test('Debe borrar el evento activo con onDeleteEvent', () => {
    const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent());
    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContainEqual(events[0]);
  });

  test('Debe establecer los eventos con onLoadEvents', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state).toEqual(calendarWithEventsState);

    const newState = calendarSlice.reducer(state, onLoadEvents(events));
    expect(newState.events.length).toBe(events.length);
  });

  test('Debe limpriar el estado con onLogoutCalendar', () => {
    const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar());
    expect(state).toEqual(initialState);
  });
});
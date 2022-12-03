import { createSlice } from '@reduxjs/toolkit';
import { parseISO } from 'date-fns';
// import { addHours } from 'date-fns';

// const tempEvent = {
//   id: new Date().getTime(),
//   title: 'Cumpleanios del jefe',
//   notes: "Hya que comprar la torta",
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     uid: "123",
//     name: "Francisco"
//   }
// };

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push({
        ...payload,
        start: parseISO(payload.start),
        end: parseISO(payload.end)
      });
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map(event => {
        if (event.id === payload.id) {
          return {
            ...payload,
            start: parseISO(payload.start),
            end: parseISO(payload.end)
          };
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(event => event.id !== state.activeEvent.id);
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      // state.events = payload;
      payload.forEach(event => {
        const exist = state.events.some(dbEvent => dbEvent.id === event.id);
        if (!exist) {
          state.events.push(event);
        }
      });
    }
  }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } = calendarSlice.actions;
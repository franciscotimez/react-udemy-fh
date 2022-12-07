export const events = [
  {
    id: '1',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
    title: 'Cumpleanios del jefe',
    notes: "Hay que comprar la torta",
  },
  {
    id: '2',
    start: new Date('2022-10-26 13:00:00'),
    end: new Date('2022-10-26 15:00:00'),
    title: 'Cumpleanios de melisa',
    notes: "Hay que comprar la bebida",
  }
];

export const newEvent = {
  id: '3',
  start: '2022-10-20 13:00:00',
  end: '2022-10-20 15:00:00',
  title: 'Cumpleanios de Raul',
  notes: "Enviar notificaciones al team",
};

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] }
};
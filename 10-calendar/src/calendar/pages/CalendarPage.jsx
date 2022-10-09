import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';

import { CalendarEvent, NavBar } from "../components";
import { localizer, getMessagesES } from '../helpers';

const events = [{
  title: 'Cumpleanios del jefe',
  notes: "Hya que comprar la torta",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    name: "Francisco"
  }
}];

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    };

    return { style };
  };
  return (
    <>
      <NavBar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
      />
    </>
  );
};

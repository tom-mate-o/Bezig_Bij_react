import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';
import nlLocale from '@fullcalendar/core/locales/nl';

export default function Agenda() {
  const calendarRef = useRef();

  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl, {
      plugins: [listPlugin, googleCalendarPlugin],
      initialView: 'listWeek',
      locale: nlLocale,
      contentHeight: 'auto',
      googleCalendarApiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
      events: {
        googleCalendarId: 'magicnonsense.agenda@gmail.com',
      },
      eventClick: function (info) {
        info.jsEvent.preventDefault();
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div ref={calendarRef} style={{ width: '100%', height: '100%' }}></div>
  );
}

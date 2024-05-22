import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import nlLocale from '@fullcalendar/core/locales/nl';

export default function Agenda() {
  const calendarRef = useRef();

  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl, {
      plugins: [listPlugin],
      initialView: 'listWeek',
      locale: nlLocale,
      contentHeight: 'auto',

      events: {
        url: '/.netlify/functions/fetch-events',
        format: 'json',
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

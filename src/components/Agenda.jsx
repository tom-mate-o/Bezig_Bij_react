import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import iCalendarPlugin from '@fullcalendar/icalendar';
import listPlugin from '@fullcalendar/list';
import nlLocale from '@fullcalendar/core/locales/nl';

export default function Agenda() {
  const calendarRef = useRef();

  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl, {
      plugins: [listPlugin, iCalendarPlugin],
      initialView: 'listWeek',
      locale: nlLocale,
      contentHeight: 'auto',

      events: {
        url: 'https://calendar.proton.me/api/calendar/v1/url/bi_quJKrAd_Ko9erjojgkCWouAKFnOFcIoUcvA8zF0lCIOB351AWumQPHzy92gOA1uDFxtiGS9aF4TC4WOBvbg==/calendar.ics?CacheKey=IOkIe0kodCaKEGZAmsV6dg%3D%3D&PassphraseKey=tHVkXG3vHn8daSBuUnEdV7ImzMGifZ12GIVL-U4egV4%3D',
        format: 'ics',
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

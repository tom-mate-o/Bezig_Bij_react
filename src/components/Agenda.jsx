import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import iCalendarPlugin from '@fullcalendar/icalendar';
import listPlugin from '@fullcalendar/list';
import nlLocale from '@fullcalendar/core/locales/nl';
import ICAL from 'ical.js';

export default function Agenda() {
  const calendarRef = useRef();

  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl, {
      plugins: [listPlugin, iCalendarPlugin],
      initialView: 'listWeek',
      locale: nlLocale,
      contentHeight: 'auto',

      events: function (fetchInfo, successCallback, failureCallback) {
        fetch(
          'https://calendar.proton.me/api/calendar/v1/url/bi_quJKrAd_Ko9erjojgkCWouAKFnOFcIoUcvA8zF0lCIOB351AWumQPHzy92gOA1uDFxtiGS9aF4TC4WOBvbg==/calendar.ics?CacheKey=IOkIe0kodCaKEGZAmsV6dg%3D%3D&PassphraseKey=tHVkXG3vHn8daSBuUnEdV7ImMGifZ12GIVL-U4egV4%3D',
          {
            mode: 'no-cors',
          }
        )
          .then((response) => response.text())
          .then((str) => {
            const jcalData = ICAL.parse(str);
            const comp = new ICAL.Component(jcalData);
            const vevents = comp.getAllSubcomponents('vevent');
            const events = vevents.map((vevent) => {
              const event = new ICAL.Event(vevent);
              return {
                title: event.summary,
                start: event.startDate.toString(),
                end: event.endDate.toString(),
              };
            });
            successCallback(events);
          })
          .catch(failureCallback);
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

import React from 'react';
import { useEffect } from 'react';
import Agenda from '../components/Agenda.jsx';

export default function AgendaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Agenda</h2>
        </div>
        <div className="singlepage__agenda agenda">
          <Agenda />
        </div>
        <div className="singlepage__ctaContainer">
          <p>
            Wil je je inschrijven voor een van de evenementen? Stuur ons een
            bericht via het contactformulier of Whatsapp of bel ons gewoon even
          </p>
          <button className="button cta">Maak een afspraak</button>
        </div>
      </div>
    </div>
  );
}
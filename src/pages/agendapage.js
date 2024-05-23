import React from 'react';
import { useEffect } from 'react';
import Agenda from '../components/Agenda.jsx';
import { Link } from 'react-router-dom';
import Calendly from '../components/Calendly.jsx';
import { BsWhatsapp } from 'react-icons/bs';

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
          <button className="button cta">
            <Link to="/contact">Maak een afspraak</Link>
          </button>
          <button className="button whatsapp">
            <a
              href="https://wa.me/31648149616?text=Hoi,%20Magic%20Nonsense!"
              target="_blank"
            >
              <span>
                <BsWhatsapp /> WhatsApp ons
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

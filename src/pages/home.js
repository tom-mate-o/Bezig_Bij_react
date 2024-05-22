import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Agenda from '../components/Agenda.jsx';

import PauseOnHover from '../components/PauseOnHover';

import bezig1 from '../img/bezig1.jpg';
import bezig2 from '../img/bezig2.jpg';
import bezig3 from '../img/bezig3.jpg';

import dianaandarno from '../img/dianaandarno.jpg';
import mninsta from '../img/mninsta.png';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import Calendly from '../components/Calendly.jsx';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const position = [52.03823697875865, 5.277477712194901];

  function createDefaultIcon() {
    return new Icon({
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  }

  return (
    <div className="hero" id="home">
      <div className="hero__bg-image">
        <h1 className="hero__title">
          Gevoelsreflectie
          <br />& Mindfulness
        </h1>
        <div className="hero__left">
          <div className="hero__text">
            <p className="hero__content">
              Welkom! Bij ons kun je leren hoe je met behulp van mindfulness een
              verbinding met jezelf en de natuur kunt vinden. Samen met de
              paarden bevorderen we verbinding, eigenwaarde, grenzen, empathie
              en communicatie.
            </p>
            <div className="hero__buttons">
              <Link to="/overons" className="hero__button button primary">
                over ons
              </Link>
              <Link to="/contact" className="hero__button button secondary">
                contact
              </Link>
            </div>
          </div>
        </div>
        <div className="hero__right"></div>
      </div>
      <main>
        <div className="highlights__section wrapper">
          <div className="highlights__container" id="1">
            <div className="highlights__imageContainer">
              <div className="inner">
                <img src={bezig1} alt="Personal Coaching"></img>
              </div>
            </div>
            <div className="highlights__textContainer">
              <h3 className="highlights__title">meer rust en meer inzicht</h3>
              <p className="highlights__text">
                Ontdek meer rust en inzicht door te leren van de oordeelvrije
                paarden, die ons leren over non-verbale communicatie en onze
                innerlijke balans.
              </p>
              <button className="highlights__button tealButton">
                <Link to="/overons">...meer!</Link>
              </button>
            </div>
          </div>

          <div className="highlights__container" id="2">
            <div className="highlights__imageContainer">
              <div className="inner">
                <img src={bezig2} alt="Personal Coaching"></img>
              </div>
            </div>
            <div className="highlights__textContainer">
              <h3 className="highlights__title">verbinding en communicatie</h3>
              <p className="highlights__text">
                Ontdek een diepere verbinding en verbeterde communicatie door te
                leren van de oordeelvrije paarden, die ons leren over
                non-verbale communicatie en onze innerlijke balans.
              </p>
              <button className="highlights__button tealButton">
                <Link to="/overons">...meer!</Link>
              </button>
            </div>
          </div>

          <div className="highlights__container" id="3">
            <div className="highlights__imageContainer">
              <div className="inner">
                <img src={bezig3} alt="Personal Coaching"></img>
              </div>
            </div>
            <div className="highlights__textContainer">
              <h3 className="highlights__title">
                intuïtie en sociale interactie
              </h3>
              <p className="highlights__text">
                Ervaar een versterkte intuïtie en sociale interactie door te
                leren van de wijsheid van dieren, die ons helpen ons natuurlijke
                gevoel en sociale verbinding te versterken.
              </p>
              <button className="highlights__button tealButton">
                <Link to="/overons">...meer!</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="quote__section">
          <div className="quote__container">
            <h2 className="quote__title">
              De essentie van mindfulness leer je het beste van een paard,
            </h2>
            <p className="quote__subtitle">
              want zij leven altijd in het moment en weerspiegelen onze diepste
              waarheid.
            </p>
            <div className="quote__picturecontainer"></div>
          </div>
        </div>

        <div className="info_section wrapper">
          <div className="info__container">
            <PauseOnHover />
          </div>
        </div>

        <div className="aboutbox__section">
          <div className="aboutbox__container">
            <BiSolidQuoteAltLeft className="aboutbox__icon" />
            <h3 className="aboutbox__text">
              Wij leren mensen bewust kijken naar zichzelf en gebruik maken van
              gevoel, energie en intuïtie. Op ons mooie perceel grond werken we
              aan permacultuur en de verzorging van al onze dieren. Verder
              houden we van creatief bezig zijn en verdiepen wij ons graag in de
              natuur.
            </h3>
            <div className="aboutbox__user">
              <img
                className={'hero__image'}
                src={dianaandarno}
                alt="testimonial"
                width={230}
                height={315}
              />
              <div>
                <p>Diana Asmuss & Arno Wildschut</p>
                <p>Magic & Nonsense</p>
              </div>
            </div>
          </div>
        </div>

        <div className="social__section wrapper">
          <div className="social__container">
            <img
              className={'hero__image'}
              src={mninsta}
              alt="testimonial"
              width={230}
              height={315}
            />
            <div className="social__text">
              <h3>@magic_nonsense</h3>
              <button className="button social">
                <Link
                  to="https://www.instagram.com/magic_nonsense/"
                  target="_blank"
                >
                  <span>
                    <BsInstagram /> Instagram
                  </span>
                </Link>
              </button>
              <button className="button social">
                <Link
                  to="https://www.facebook.com/people/Magic-Nonsense/100090949099793/"
                  target="_blank"
                >
                  <span>
                    <BsFacebook /> Facebook
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="cta__section" id="agenda">
          <div className="cta__container">
            <h2>Agenda</h2>
            <div className="agenda">
              <Agenda />
            </div>
            <p>
              Wil je je inschrijven voor een van de evenementen? Stuur ons een
              bericht via het contactformulier of Whatsapp of bel ons gewoon
              even
            </p>
            <button className="button cta">
              <Link to="contact">Maak een afspraak</Link>
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

        <div className="map__section">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: '300px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={createDefaultIcon()}>
              <Popup>Veensteeg 3 3972 MH, Driebergen Nederland</Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </div>
  );
}

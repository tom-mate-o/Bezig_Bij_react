import React, { useEffect } from 'react';
import './dist/style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as Logo } from './img/bezigbijlogo.svg';
import { ReactComponent as LogoVertical } from './img/bezigbijlogvertical.svg';
import { ReactComponent as Hamburger } from './img/bars-solid.svg';
import { ReactComponent as Close } from './img/x-bars-solid.svg';

import Home from './pages/home';
import OverOns from './pages/overons';
import OnzeVisie from './pages/onzevisie';
import Workshops from './pages/workshops';
import Retraites from './pages/retraites';
import Apnoetauchen from './pages/apnoetauchen';
import Preise from './pages/preise';
import Contact from './pages/contact';
import Impressum from './pages/impressum';
import AgendaPage from './pages/agendapage';
import Privacydisclaimer from './pages/privacydisclaimer';

import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

import { ReactComponent as Extern } from './img/square-arrow-up-right-solid.svg';

export default function App() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setMobileNavVisible(true);
  };

  const handleCloseClick = () => {
    setMobileNavVisible(false);
  };

  useEffect(() => {
    if (isMobileNavVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileNavVisible]);

  return (
    <BrowserRouter>
      <Link to="#main" className="visually-hidden">
        Skip to main content
      </Link>
      <header className="topnav">
        <h2 className="visually-hidden">Header</h2>
        <div className="wrapper topnav__wrapper">
          <div className="topnav__leftcolumn">
            <Link to="/" className="topnav__homelink hover-fade">
              <Logo className="topnav__logo" />
            </Link>
          </div>
          <div className="topnav__rightcolumn">
            <h1 className="topnav__title visually-hidden">Magic & Nonsense</h1>
            <nav>
              <ul className="topnav__links">
                <Hamburger
                  className="topnav__hamburger"
                  style={{ fill: 'var(--text-color-light)' }}
                  onClick={handleHamburgerClick}
                />
                <div
                  className="topnav__hamburgerwrapper"
                  onClick={handleHamburgerClick}
                ></div>
                <li className="topnav__item">
                  <Link to="/" className="topnav__link">
                    Home
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/overons" className="topnav__link">
                    over ons
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/onzevisie" className="topnav__link">
                    onze visie
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/workshops" className="topnav__link">
                    workshops
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/retraites" className="topnav__link">
                    retraites
                  </Link>
                </li>

                <li className="topnav__item">
                  <Link to="/agenda" className="topnav__link">
                    agenda
                  </Link>
                </li>

                <li className="topnav__item">
                  <Link to="/contact" className="topnav__link">
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={`mobilenav ${isMobileNavVisible ? '' : 'hidden'}`}>
          <nav>
            <Close
              className="mobilenav__close"
              style={{ fill: 'var(--text-color-light)' }}
              onClick={handleCloseClick}
            />

            <ul className="mobilenav__links">
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/" className="mobilenav__link">
                  Home
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/overons" className="mobilenav__link">
                  over ons
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/onzevisie" className="mobilenav__link">
                  onze visie
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/workshops" className="mobilenav__link">
                  workshops
                </Link>
              </li>

              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/retraites" className="mobilenav__link">
                  Retraites
                </Link>
              </li>

              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/agenda" className="mobilenav__link">
                  agenda
                </Link>
              </li>

              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/contact" className="mobilenav__link">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="wrapper__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overons" element={<OverOns />} />
          <Route path="/onzevisie" element={<OnzeVisie />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/retraites" element={<Retraites />} />
          <Route path="/apnoetauchen" element={<Apnoetauchen />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/privacydisclaimer" element={<Privacydisclaimer />} />
        </Routes>
        <footer className="footer">
          <div className="footer__collumn1">
            <h3>Sitemap</h3>
            <ul>
              <li>
                <Link to="/" className="footer__link">
                  home
                </Link>
              </li>
              <li>
                <Link to="/overons" className="footer__link">
                  overn ons
                </Link>
              </li>
              <li>
                <Link to="/onzevisie" className="footer__link">
                  onze visie
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="footer__link">
                  workshops
                </Link>
              </li>
              <li>
                <Link to="/retraites" className="footer__link">
                  retraites
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="footer__link">
                  agenda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__collumn2">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/magic_nonsense/"
                  target="_blank"
                  className="footer__link"
                >
                  <BsInstagram className="footer__socialicon" />
                  Instagram
                  <Extern className="footer__externicon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Magic-Nonsense/100090949099793/"
                  target="_blank"
                  className="footer__link"
                >
                  <BsFacebook className="footer__socialicon" />
                  Facebook
                  <Extern className="footer__externicon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__collumn3">
            <h3>Contact</h3>

            <div>
              <p>
                Diana Asmuss
                <br />& Arno Wildschut
              </p>
              <p> Veensteeg 3</p>
              <p>3972 MH</p>
              <p>Driebergen, NL</p>
              <br />
            </div>
            <div>
              <p>
                Tel: <a href="tel:0648149616">0648149616</a>
              </p>
              <a href="mailto:info@magic-nonsense.nl">
                <p>info@magic-nonsense.nl</p>
              </a>
            </div>
          </div>
          <div className="footer__collumn4">
            <h3>Privacy</h3>
            <ul>
              <li>
                <Link to="/impressum" className="footer__link">
                  <p className="footer__privacy">Impressum</p>
                </Link>
              </li>
              <li>
                <Link to="/privacydisclaimer" className="footer__link">
                  <p className="footer__privacy">Legal Terms</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__collumn5">
            <div className="footer__collumn5__logoGroup">
              <Link to="/" className="topnav__homelink hover-fade">
                <Logo className="footer__logo horizontal" />
              </Link>
              <LogoVertical className="footer__logo vertical" />
              <p className="footer__collumn5__copyright">
                {`©${new Date().getFullYear()}`} Bezig Bij
              </p>
              <p className="footer__collumn5__tom">
                Images by{' '}
                <a
                  href="https://www.freepik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Freepik.com
                </a>
              </p>
              <p className="footer__collumn5__tom">
                Icons by{' '}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Flaticon.com (Freepik)
                </a>
              </p>
            </div>
            <p className="footer__collumn5__tom">
              Made with 🧡 by{' '}
              <a
                href="https://tomkra.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ whiteSpace: 'nowrap' }}
              >
                Tom Kra
              </a>
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

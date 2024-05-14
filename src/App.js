import React, { useEffect } from 'react';
import './dist/style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as Logo } from './img/xdreamlogohorizontal.svg';
import { ReactComponent as LogoVertical } from './img/xdreamlogovertical.svg';
import { ReactComponent as Hamburger } from './img/bars-solid.svg';
import { ReactComponent as Close } from './img/x-bars-solid.svg';

import Home from './pages/home';
import About from './pages/about';
import Coaching from './pages/coaching';
import Sekundaerpraevention from './pages/sekundaerpraevention';
import Wohlbefinden from './pages/wohlbefinden';
import Apnoetauchen from './pages/apnoetauchen';
import Preise from './pages/preise';
import Contact from './pages/contact';
import Impressum from './pages/impressum';
import Privacydisclaimer from './pages/privacydisclaimer';

import { BsThreads } from 'react-icons/bs';
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
            <h1 className="topnav__title visually-hidden">X-DREAM-FIT</h1>
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
                  <Link to="/about" className="topnav__link">
                    Über
                    <br />
                    mich
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/coaching" className="topnav__link">
                    Coaching
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/sekundaerpraevention" className="topnav__link">
                    Sekundär
                    <br />
                    Prävention
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/wohlbefinden" className="topnav__link">
                    Wohlbefinden
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/apnoetauchen" className="topnav__link">
                    Apnoe
                    <br />
                    Tauchen
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/preise" className="topnav__link">
                    Preise
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/kontakt" className="topnav__link">
                    Kontakt
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
                <Link to="/about" className="mobilenav__link">
                  About Me
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/coaching" className="mobilenav__link">
                  Coaching
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/sekundaerpraevention" className="mobilenav__link">
                  Sekundär
                  <br />
                  Prävention
                </Link>
              </li>

              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/wohlbefinden" className="mobilenav__link">
                  Wohlbefinden
                </Link>
              </li>

              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/apnoetauchen" className="mobilenav__link">
                  Apnoe
                  <br />
                  Tauchen
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/preise" className="mobilenav__link">
                  Preise
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/kontakt" className="mobilenav__link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="wrapper__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route
            path="/sekundaerpraevention"
            element={<Sekundaerpraevention />}
          />
          <Route path="/wohlbefinden" element={<Wohlbefinden />} />
          <Route path="/apnoetauchen" element={<Apnoetauchen />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacydisclaimer" element={<Privacydisclaimer />} />
        </Routes>
        <footer className="footer">
          <div className="footer__collumn1">
            <h3>Sitemap</h3>
            <ul>
              <li>
                <Link to="/about" className="footer__link">
                  Über mich
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="footer__link">
                  Coaching
                </Link>
              </li>
              <li>
                <Link to="/sekundaerpraevention" className="footer__link">
                  Sekundär Prävention
                </Link>
              </li>
              <li>
                <Link to="/wohlbefinden" className="footer__link">
                  Wohlbefinden
                </Link>
              </li>
              <li>
                <Link to="/apnoetauchen" className="footer__link">
                  Apnoe Tauchen
                </Link>
              </li>
              <li>
                <Link to="/preise" className="footer__link">
                  Preise
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="footer__link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__collumn2">
            <h3>Follow me</h3>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/x_dreamfit/"
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
                  href="https://www.threads.net/@x_dreamfit"
                  target="_blank"
                  className="footer__link"
                >
                  <BsThreads className="footer__socialicon" />
                  Threads
                  <Extern className="footer__externicon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__collumn3">
            <h3>Kontakt</h3>

            <div>
              <p>Susanne Roth</p>
              <p>Margarethe-Schütte-Lihotzky Siedlung 61</p>
              <p>8605 Kapfenberg</p>
              <br />
            </div>
            <div>
              <p>+43 (0) 664 243 50 22</p>
              <a href="mailto:office@xdreamfit.net">
                <p>office@xdreamfit.net</p>
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
                {`©${new Date().getFullYear()}`} X-DREAM-FIT-COACHING
              </p>
              <p className="footer__collumn5__tom">
                Icons by{' '}
                <a
                  href="https://www.flaticon.com/authors/juicy-fish/sketchy?author_id=313&type=standard"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Flaticon (juicy_fish)
                </a>
              </p>
            </div>
            <p className="footer__collumn5__tom">
              Made with 💙 by{' '}
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

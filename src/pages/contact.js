import React from 'react';
import { useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div>
      <div className="singlepage__contentContainer">
        <h2 className="singlepage__dividerHeadline">Contact</h2>

        <div className="singlepage__contactContainer">
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
          <div className="singlepage__contactContainer__text">
            <table>
              <h3>
                Diana Asmuss <br />& Arno Wildschu
              </h3>
              <tbody>
                <tr>
                  <td>Mail</td>
                  <td>info@magic-nonsense.nl</td>
                </tr>
                <tr>
                  <td>
                    Telefoon
                    <br />
                    WhatsApp
                  </td>
                  <td>0000 / 00000000</td>
                </tr>
                <tr>
                  <td>Adres</td>
                  <td>
                    Veensteeg 3<br />
                    3972 MH
                    <br />
                    Driebergen Nederland
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="singlepage__content">
          <div className="container">
            <h3 className="">Schrijf ons een berichtje</h3>
            <form
              action="https://formsubmit.co/info@magic-nonsense.nl"
              method="POST"
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Volledige naam"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="E-mail adres"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Bericht"
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>

              <div className="privacy">
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy">
                  Ik heb de <a href="/privacydisclaimer">Privacy Policy</a>{' '}
                  gelezen en ga ermee akkoord.
                </label>
              </div>
              <button type="button" className="button tealButton">
                versturen
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

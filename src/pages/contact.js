import React from 'react';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <h1 className="singlepage__dividerHeadline">Kontakt</h1>

        <div className="singlepage__content">
          <div className="container">
            <h3 className="">Schreib mir eine Nachricht</h3>
            <form
              action="https://formsubmit.co/office@xdreamfit.net"
              method="POST"
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>

              <div className="privacy">
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy">
                  Ich habe die <a href="/privacydisclaimer">Privacy Policy</a>{' '}
                  gelesen und bin einverstanden.
                </label>
              </div>
              <button type="button" className="button tealButton">
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

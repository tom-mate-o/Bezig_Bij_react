import React from 'react';
import { useEffect } from 'react';
import workshops from '../img/workshops.jpg';

export default function Workshops() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Workshops</h2>
        </div>
        <div className="singlepage__textandpictureContainer">
          <div className="singlepage__pictureContainer">
            <img src={workshops} alt="Workshops"></img>
          </div>
          <p>
            Voor iedereen organiseren wij korte trajecten, trainingen, events en
            workshops waarbij we altijd met een intake gesprek werken om
            gezamenlijk af te stemmen. Zo komen wij aan een gelijkwaardig en
            passend traject of product wat echt voor jou en/of je team werkt en
            passend is.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useEffect } from 'react';
import retreat from '../img/retreat.jpg';

export default function Retraite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Retraite</h2>
        </div>
        <div className="singlepage__textandpictureContainer">
          <div className="singlepage__pictureContainer">
            <img src={retreat} alt="Retreat"></img>
          </div>
          <p>
            Ook organiseren wij retraite dagen met verschillende thema’s.
            Hierbij staan terug gaan naar jezelf en verbinding met de natuur als
            basis uitgangspunt.
          </p>
        </div>
      </div>
    </div>
  );
}

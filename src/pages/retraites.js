import React from 'react';
import { useEffect } from 'react';
import retreat from '../img/retreat.jpg';

export default function Retraites() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Retraites</h2>
        </div>
        <div className="singlepage__textandpictureContainer">
          <div className="singlepage__pictureContainer">
            <img src={retreat} alt="Retreat"></img>
          </div>
          <p>
            Ook organiseren wij retraites met verschillende thema’s. Hierbij
            staan terug gaan naar jezelf, verbinding met de natuur en een
            zuivere lichaamsenergie als basis uitgangspunt. Onze paarden bieden
            hierbij momenten van bezinning en bewustwording. Zij helpen ons
            terug te keren naar onze zuivere levensenergie in combinatie met
            universele levensenergie sessies.
          </p>
        </div>
        <div>
          {' '}
          <br />
          <p>
            Heb je een team, vrienden/ vriendinnen groep of familie dan kunnen
            de retraites ook vanuit maatwerk geboden worden neem hiervoor
            contact met ons op.
          </p>
        </div>
      </div>
    </div>
  );
}

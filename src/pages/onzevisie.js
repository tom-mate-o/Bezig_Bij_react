import React from 'react';
import { useEffect } from 'react';
import vision from '../img/vision.jpg';

export default function OnzeVisie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Onze Visie</h2>
        </div>
        <div className="singlepage__textandpictureContainer">
          <div className="singlepage__pictureContainer">
            <img src={vision} alt="Vision"></img>
          </div>
          <p>
            In het dagelijks leven houden we ons veelal aan en regels. De
            werkdruk ligt vaak hoog maar ook binnen ons privéleven verlangen we
            veel van onszelf. We zoeken het liefst rationele oplossingen wanneer
            we gevoelsmatig vast lopen. Hierbij gaan we vaak voorbij aan eigen
            signalen en gevoel. Wij maken mensen bewust van persoonlijke
            energie, grenzen, intuïtie, en de kracht daarvan. Onze events en
            trainingen zijn gebaseerd op persoonlijke spirituele ontwikkeling in
            samenwerking met onze dieren en de natuur.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

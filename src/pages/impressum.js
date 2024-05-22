import React from 'react';
import { useEffect } from 'react';

import herobg from '../img/hero_bg.jpg';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__content">
          <div>
            <h2>Impressum</h2>
            <br />
            <p>
              <strong>Bedrijfsnaam</strong>: Magic & Nonsense
            </p>
            <p>
              <strong>Adres</strong>: Veensteeg 3
            </p>
            <p>
              <strong>Postcode en Plaats</strong>: 3972 MH Driebergen
            </p>
            <p>
              <strong>Land</strong>: Nederland
            </p>
            <br />
            <br />
            <h3>Contactgegevens</h3>
            <p>
              Telefoon: <a href="tel:0648149616">0648149616</a>
            </p>
            <p>
              E-mail:{' '}
              <a href="mailto:info@magic-nonsense.nl">info@magic-nonsense.nl</a>
            </p>
            <p>
              Website: <a href="www.magic-nonsense.nl">www.magic-nonsense.nl</a>
            </p>
            <br />
            <br />
            <h3>Registratie-informatie</h3>
            <p>
              <strong>KVK-nummer</strong>: 62418726
            </p>
            <p>
              <strong>BTW-nummer</strong>: NL001787848B92
            </p>
            <br />
            <br />
            <h3>Verantwoordelijke voor de inhoud volgens § 55 Abs. 2 RStV</h3>
            <p>Diana Asmuss</p>
            <p>Veensteeg 3 3972 MH, Driebergen Nederland</p>
            <br />
            <br />
            <h3>Online Geschillenbeslechting</h3>
            <p>
              Consumenten die in Nederland of in een andere lidstaat van de
              ODR-Verordening wonen, hebben de mogelijkheid om problemen met
              betrekking tot de koop van goederen of diensten online op te
              lossen via de online geschillenbeslechting (OS). De Europese
              Commissie biedt hiervoor een platform aan:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <br />
            <br />
            <h3>Auteursrecht</h3>
            <p>
              De inhoud van deze website is, voor zover wettelijk mogelijk,
              beschermd door diverse rechten (bijv. auteursrecht). Elke vorm van
              gebruik of verspreiding van beschikbaar gesteld materiaal, die
              door het auteursrecht wordt verboden, vereist schriftelijke
              toestemming van de websitebeheerder.
            </p>
            <br />
            <br />
            <h3>Aansprakelijkheid</h3>
            <p>
              Ondanks zorgvuldige controle van de inhoud, aanvaardt de beheerder
              van deze website geen aansprakelijkheid voor de inhoud van externe
              links. Voor de inhoud van de gelinkte pagina's zijn uitsluitend de
              beheerders daarvan verantwoordelijk. Mocht u toch op uitgaande
              links stuiten die verwijzen naar een website met onwettige
              activiteiten of informatie, dan verzoeken wij u om ons hiervan op
              de hoogte te stellen, zodat wij deze volgens artikel 17, lid 2,
              ECG onmiddellijk kunnen verwijderen.
            </p>
            <p>
              De auteursrechten van derden worden door de beheerder van deze
              website met de grootste zorg nageleefd. Mocht u desondanks een
              schending van het auteursrecht opmerken, verzoeken wij u ons
              hiervan op de hoogte te stellen. Bij bekend worden van dergelijke
              inbreuken zullen wij de betreffende inhoud onmiddellijk
              verwijderen.
            </p>
            <br />
            <p>
              Source:{' '}
              <b>
                <a href="https://www.fairesrecht.at/">fairesRecht.at</a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useEffect } from 'react';

import herobg from '../img/hero_bg.jpg';

export default function Privacydisclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__content">
          <div>
            <h2>Verklaring inzake informatieplicht</h2>
            <h3>Privacyverklaring</h3>
            <p>
              In deze privacyverklaring informeren wij u over de belangrijkste
              aspecten van de gegevensverwerking op onze website. Wij verzamelen
              en verwerken persoonlijke gegevens uitsluitend op basis van de
              wettelijke bepalingen (Algemene Verordening Gegevensbescherming,
              Telecommunicatiewet).
            </p>
            <br />
            <p>
              Zodra u als gebruiker onze website bezoekt of deze opent, wordt uw
              IP-adres, begin en einde van de sessie geregistreerd. Dit is
              technisch noodzakelijk en vormt een gerechtvaardigd belang volgens
              artikel 6, lid 1, onder f) van de AVG.
            </p>
            <br />
            <h3>Contact met ons</h3>
            <p>
              Als u contact met ons opneemt via ons contactformulier op onze
              website of via e-mail, worden de door u verstrekte gegevens zes
              maanden opgeslagen voor de verwerking van uw aanvraag en voor het
              geval van vervolgvragen. Uw gegevens worden zonder uw toestemming
              niet doorgegeven.
            </p>
            <br />
            <h3>Google Fonts</h3>
            <p>
              Onze website maakt gebruik van lettertypen van "Google Fonts". De
              dienstverlener van deze functie is: Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Ierland, Tel: +353 1 543 1000.
            </p>
            <br />
            <p>
              Bij het openen van deze website laadt uw browser de benodigde
              lettertypen en slaat deze op in de cache. Omdat u als bezoeker van
              de website gegevens van de dienstverlener ontvangt, kan Google
              mogelijk cookies op uw computer plaatsen of analyseren.
            </p>
            <br />
            <p>
              Het gebruik van "Google Fonts" dient de optimalisatie van onze
              dienstverlening en de uniforme weergave van inhoud. Dit vormt een
              gerechtvaardigd belang volgens artikel 6, lid 1, onder f) van de
              AVG.
            </p>
            <br />
            <p>
              Meer informatie over Google Fonts vindt u via de volgende link:
            </p>
            <a href="https://developers.google.com/fonts/faq">
              https://developers.google.com/fonts/faq
            </a>
            <br />
            <br />
            <p>
              Meer informatie over de omgang met gebruikersgegevens door Google
              vindt u in de privacyverklaring van Google:
            </p>
            <a href="https://policies.google.com/privacy?hl=nl">
              https://policies.google.com/privacy?hl=nl
            </a>
            <br />
            <br />
            <p>
              Google verwerkt de gegevens ook in de VS, maar heeft zich
              aangesloten bij het EU-VS Privacy Shield.
            </p>
            <a href="https://www.privacyshield.gov/EU-US-Framework">
              https://www.privacyshield.gov/EU-US-Framework
            </a>
            <br />
            <br />
            <h3>Uw rechten als betrokkene</h3>
            <p>
              Als betrokkene hebt u met betrekking tot uw gegevens die bij ons
              zijn opgeslagen in principe recht op:
            </p>
            <ul>
              <li>Inzage</li>
              <li>Verwijdering van de gegevens</li>
              <li>Correctie van de gegevens</li>
              <li>Overdraagbaarheid van de gegevens</li>
              <li>Intrekking en bezwaar tegen de gegevensverwerking</li>
              <li>Beperking van de verwerking</li>
            </ul>
            <p>
              Als u vermoedt dat er in de verwerking van uw gegevens inbreuk
              wordt gemaakt op de privacywetgeving, heeft u de mogelijkheid om
              bij ons (info@magic-nonsense.nl) of bij de Autoriteit
              Persoonsgegevens een klacht in te dienen. U kunt ons bereiken via
              de volgende contactgegevens: Websitebeheerder: Diana Asmuss,
              E-mail: info@magic-nonsense.nl
            </p>
            <br />
            <p>
              Source: <a href="https://fairesRecht.at">fairesRecht.at</a>
            </p>

            <div>
              <h2 class="singlepage__dividerSubHeadline">Disclaimer</h2>
              <p>
                Ondanks zorgvuldige inhoudelijke controle aanvaardt de
                websitebeheerder (www.magic-nonsense.nl, Diana Asmuss) geen
                aansprakelijkheid voor de inhoud van externe links. Voor de
                inhoud van de gelinkte pagina's zijn uitsluitend de beheerders
                van die pagina's verantwoordelijk. Mocht u op uitgaande links
                stuiten die naar een website met onwettige activiteit/informatie
                leiden, dan verzoeken wij u om ons hiervan op de hoogte te
                stellen (info@magic-nonsense.nl), zodat wij deze volgens artikel
                17, lid 2 van de Wet op de Elektronische Communicatie
                onmiddellijk kunnen verwijderen.
              </p>
              <p>
                De auteursrechten van derden worden door de beheerder met de
                grootst mogelijke zorgvuldigheid gerespecteerd. Mocht u
                desondanks een inbreuk op het auteursrecht opmerken, verzoeken
                wij u om een melding te sturen naar (info@magic-nonsense.nl).
                Bij kennisneming van dergelijke inbreuken zullen wij de
                betreffende inhoud onmiddellijk verwijderen.
              </p>
              <br />
              <p>
                Source: <a href="https://fairesRecht.at">fairesRecht.at</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

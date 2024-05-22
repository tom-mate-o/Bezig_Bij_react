import React from 'react';
import { useEffect } from 'react';

export default function OverOns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Over Ons</h2>
        </div>
        <p>
          Ik ben Diana Asmuss en samen met Arno Wildschut werk ik bij Magic &
          Nonsense. Wij leren mensen bewust kijken naar zichzelf en gebruik
          maken van gevoel, energie en intuïtie. Op ons mooie perceel grond
          werken we aan permacultuur en de verzorging van al onze dieren. Verder
          houden we van creatief bezig zijn en verdiepen wij ons graag in de
          natuur.
        </p>

        <div className="singlepage__dividerSubHeadline">
          <h2>Wat biedt deze mindfulness jou?</h2>
        </div>
        <p>
          Een gevoels en gedrags reflectie cursus Zijn we nog verbonden met
          onszelf en de natuur? Horse & Personality mindfulness heeft 6
          bijeenkomsten en omvat tal van kernonderwerpen om Verbinding,
          Eigenwaarde, Grenzen, Empathie en Communicatie te ondersteunen en te
          bevorderen. We werken vanuit het hier en nu principe en motiveren een
          ieders eigen oplossingsvermogen waarbij ons energieveld centraal
          staat. Hiermee is de Horse & Personality mindfulness tevens uitermate
          geschikt voor teams en leidinggevende. Meld je (team) tijdig aan want
          vol is vol!
        </p>

        <div className="singlepage__dividerSubHeadline">
          <h2>Waarom helpen paarden zo goed bij reflecteren?</h2>
        </div>
        <p>
          Paarden zijn oordeel vrije dieren die dwars door maskers van mensen
          kunnen kijken en die uitermate instinctief zijn voor de onderliggende
          gevoelens van ons gedrag. Paarden functioneren voor het grooste deel
          op non-verbale expressie, zoals spierspanning, hartslag en bloeddruk.
          Paarden hebben een zeer fijngevoelig vermogen om roofdieren en andere
          kudde dieren op afstand waar te nemen. Ook weten ze hoe iemand zich
          voelt, lang voordat die persoon de werkruimte in stapt. Wanneer je een
          glimlach en een zacht stemgeluid gebruikt en ondertussen spanning bij
          je draagt dan geef je het paard het gevoel dat hij uit balans is,
          voelt zich onveilig en wil dan uit je buurt blijven. Verberg je
          verdriet, dan zal hij zachtaardig reageren. Zij zijn liefdevol
          confronterend zodat je aan het eind van deze training je gevoelens en
          handelen kan reflecteren en je persoonlijke energie positief en
          succesvol in te zetten.
        </p>

        <div className="singlepage__dividerSubHeadline">
          <h2>Voor wie is deze training bedoeld?</h2>
        </div>
        <p>
          Voor iedereen die bewust wil omgaan met eigen gevoel, emoties en
          handelen. Wanneer je op een goede manier inzicht wil verkrijgen in
          eigen persoonlijkheid. Maar ook als je wat meer zelfvertrouwen en
          kracht kunt gebruiken. Of als je wat minder lekker in je vel zit.
          Deelname aan deze training heeft een positieve invloed op onze manier
          van denken en handelen. Je leert bewuster omgaan met huidige
          ervaringen, gedachten en de emoties die daarbij horen. Spreekt dit je
          aan? Meld je dan tijdig aan want er is beperkt plaats.
        </p>
      </div>
    </div>
  );
}

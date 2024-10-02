# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Ingmar Dijt

  #### Je startniveau:
  Piste Blauw

  #### Je focus:
  surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.hema.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Hema Homepagina
  <img src="readme-images/hemaHomepage.jpg" width="375px" alt="De Homepagina van de Hema, small screen">

  #### Screenshot(s) van de tweede pagina (small screen):
  Hema Productoverzichtpagina
  <img src="readme-images/hemaOverzichtpagina.jpg" width="375px" alt="productoverzichtpagina van de hema, small screen">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  De hema doet het met de screenreader over het algemeen zeer goed. Er zijn een paar punten die verbeterd kunnen worden zoals aan het begin waar de screenreader opeens dingen begint voor te lezen die niet op het scherm staan. Hij lijkt vooruit te lopen of leest nog oude aanbiedingen nog, want het ging over Nijntje terwijl Nijntje nergens te zien was.

  Ook begint de screen reader over inloggen te praten, zoas wachtwoord vergeten en maak een nieuw account aan. Dit is nergens te zien op de site

  Ook werden onder andere catagorien dubbel voorgelezen. Dit komt zeer waarschijnlijk omdat de images een alt tekst hebben en daaronder ook nog tekst staat. Dit is makkelijk te voorkomen.

  Ook zijn er fouten in de site. Zo gaan drop down menus af en toe gewoon niet open als je er op clickt en werken de carousels niet. Deze fouten komen alleen voor op mobile formaat. Door de pagina te refreshen gaan de fouten weg. Dit moet natuurlijk helemaal niet voorkomen 

  <h3>A11y Test</h3>
  <p>sommige onderdelen zoals video en tables heb ik overgeslagen omdat de hema geen videos en tables heeft dus het was NVT</p>
  <img src="readme-images/content.png" width="375px" alt="content a11y test">
  <img src="readme-images/globalCode.png" width="375px" alt="global code a11y test">
  <img src="readme-images/keyboard.png" width="375px" alt="keyboard a11y test">
  <img src="readme-images/images.png" width="375px" alt="images a11y test">
  <img src="readme-images/headings.png" width="375px" alt="headings a11y test">
  <p>omdat de hema geen h1 heeft zijn alle punten bij headings niet behaald</p>
  <img src="readme-images/list.png" width="375px" alt="list a11y test">
  <img src="readme-images/controls.png" width="375px" alt="controls a11y test">
  <img src="readme-images/input.png" width="375px" alt="forms a11y test">
  <img src="readme-images/appearence.png" width="375px" alt="appearence a11y test">
  <img src="readme-images/animatie.png" width="375px" alt="animation a11y test">
  <img src="readme-images/contrast.png" width="375px" alt="contrasts a11y test">
  <img src="readme-images/mobile.png" width="375px" alt="mobile  a11y test">

  
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown.png" width="375px" alt="breakdown van de hele pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  <h3>Screen reader test eigen pagina </h3>
  Uit mijn screenreader test ontdekte ik dat als je tabt voorbij  de hamburgermenuknop, dat de screenreader de inhoud van de hamburgermenu gaat lezen ookal is die niet in beeld. Dit probleem heeft de echte HEMA site ook.

  Ik heb dit probleem opgelost door visibility: hidden; op de .hamburgermenu te doen zodat die onzichtbaar is voor de screenreader, en dan als je op de knop drukt en #toonMenu op de .hamburgermenu word gedaan dat dan visability: visable aan gaat en de hamburger te zien is, met ogen en met de screen reader!


  <h3>A11y test eigen pagina </h3>

  <img src="readme-images/ingmarContent.png" width="375px" alt="mijn eigen content score op dea11y test">
  <img src="readme-images/ingmarGlobalCode.png" width="375px" alt="mijn eigen global code score op de a11y test">
  <img src="readme-images/ingmarKeyboard.png" width="375px" alt="mijn eigen keyboard score op de a11y test">
  <img src="readme-images/ingmarImages.png" width="375px" alt="mijn eigen images score op de a11y test">
  <img src="readme-images/ingmarHeadings.png" width="375px" alt="mijn eigen headings score op de a11y test">
  <img src="readme-images/ingmarLists.png" width="375px" alt="mijn eigen list score op de a11y test">
  <img src="readme-images/ingmarControls.png" width="375px" alt="mijn eigen controls score op de a11y test">
  <img src="readme-images/ingmarContrast.png" width="375px" alt="mijn eigen contrasts score bij de a11y test">
  <img src="readme-images/ingmarMobile.png" width="375px" alt="mijn eigen mobile score bij de a11y test">

  Sommige onderdelen zijn overgeslagen omdat ze NVT zijn.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik struggelde deze week een beetje met coderen en ik was ook erg druk met vormgeving. Ik ben wel bijna klaar met mn css van de eerste pagina


  ### Agenda voor meeting
  samen met je groepje opstellen

  Vragen:
  - Vragen of ik een simpelere tweede pagina mag
  - Vragen of ik dingen kan weglaten in hamburger menu


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Laatste week ff knallen om alles af te hebben
  - Tweede pagina hoeft niet alles er op te hebben, maak voormal "gave" dingen

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/eindresultaatMijnHema.png" width="375px" alt="uiteindelijke homepage einresultaat">
  <img src="readme-images/eindresultaatPagina2.png" width="375px" alt="uiteindelijke productpagina eindresultaat">


  ### Dit ging goed/Heb ik geleerd: 
  Het hamburger menu maken ging goed, de tutorial op DLO was duidelijk en ik had het snel gemaakt. Ook het onzichtbaar maken voor de screenreaders ging makkelijk na wat onderzoek

  <img src="readme-images/mijnVerbeteringHM.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  dark mode was een uitdaging. Sommige ptjes en htjes wouden maar niet mee vernaderen en moest ik uiteindelijk nog zelf aan slaan in de css. Ik ben wel erg blij dat het uiteindelijk gelukt is, maar ik ben er wel meerdere uren aan kwijt geraakt...

  <img src="readme-images/moeilijkDarkMode.png" width="375px" alt="bummer">

</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. https://www.sitepoint.com/style-html-details-element/ stylen details en summary
  2. i want three rows, how do i do this in html css: chatgpt prompt
  3. David de studentenassisten
  4. ivo
  5. DLO 
  6. Iconify voor sommige kleine icoontjes die niet in de source van de HEMA stonden
  7.  ik wil dat als je boven de originele positie bent dat hij onderaan het scherm staat, en als je voorbij de originele positie bent dat hij bovenaan gaat staan - CHATGPT
  8. https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai automatisch sluiten details tag als een andere word geopent 
  9. Mariska - carousel

</details>
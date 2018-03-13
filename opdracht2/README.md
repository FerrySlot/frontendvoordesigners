# frontend voor designers - opdracht 2

[Demo 1 voor opdracht 2](https://ferryslot.github.io/frontendvoordesigners/opdracht2/v1/index.html)

[Demo 2 voor opdracht 2](https://ferryslot.github.io/frontendvoordesigners/opdracht2/v2/)

## Uitleg concept (demo 1)

Een pop-up die naar X aantal seconden inactiviteit naar boven komt.
De inactiviteit word gemeten door een javascript functie.
Na elke beweging gaat er een timer lopen die weer gereset wordt als er een nieuwe beweging komt.
Oftewel, als de timer NIET wordt gereset (geen beweging dus), komt de pop-up naar boven.

De popup kan door middel van een onmouseover weggehaald worden. De onmouseover is gelinkt met de "No Thanks" button onderin de pop-up.

[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht2/v1/images/popup_preview.png "Preview pop-up v1"

Preview van de pop-up: 

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht2/images/popup_preview.png "Preview pop-up v1")



## Uitleg concept (demo 2)

Na feedback op demo 1 was de volgende stap om meerdere manieren te bedenken om de pop-up te laten tonen, en weg te halen.

Bijvoorbeeld: 
⋅⋅* Laat de pop-up zien als je een bepaalde afstand hebt gescrollt
⋅⋅* De gebruiker moet de pop-up weg kunnen klikken door er buiten te klikken.
⋅⋅* De gebruiker kan de pop-up weghalen door een "unlock slider" te gebruiken.

## Uitleg pop-up

### Wanneer komt de pop-up:
#### ⋅⋅* Inactivity
De pop-up komt omhoog wanneer de site registreerd dat de muis voor een X aantal seconden stil staat. Dit heb ik gedaan omdat je dan een gebruiker die je eigenlijk al "verloren" hebt, alsnog kan proberen te converteren.

#### ⋅⋅* Scroll
Als de gebruiker de hoogte van t scherm naar beneden scrollt (100vh) komt de pop-up omhoog. Op deze manier kan je gebruikers aanspreken die actief bezig zijn met de website. Bijvoorbeeld, laat ze inschrijven voor een nieuwsbrief.

### Wanneer gaat de pop-up weg:
#### ⋅⋅* Escape
Door op de escape knop te klikken kan je de pop-up weghalen. De escape wordt in meerdere software/website gebruikt als een soort van "cancel" knop.

#### ⋅⋅* Hover op "Nee Bedankt"
Door te hoveren op de "Nee Bedankt" tekst, gaat er een balk op de achtergrond van de pop-up lopen. Hierdoor creeer je een soort van bedenk tijd voor de gebruiker om de pop-up niet weg te klikken. Waarschijnlijk willen veel mensen het alsnog wegklikken, maar dan heb je toch nog 1 seconden extra van de gebruiker.

#### ⋅⋅* Klik buiten de pop-up
Tegenwoordig is dit een designpattern. Als er ergens een pop-up omhoog komt, kan je er 9 van de 10 keer naast klikken om de pop-up te verwijderen.

#### ⋅⋅* Unlock Slider
Dit was meer een test i.p.v. dat het een goede oplossing is voor een pop-up. Maar ik vind dit wel een goede oplossing als het belangrijke informatie is. De gebruiker moet even nadenken hoe hij de pop-up weg krijgt. Hierdoor zal je iets meer aandacht krijgen voor de informatie die op de pop-up staat.

## Hoe het werkt

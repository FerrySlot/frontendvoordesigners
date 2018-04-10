# frontend voor designers - opdracht 3

[Demo 1 voor opdracht 3](https://ferryslot.github.io/frontendvoordesigners/opdracht3/v1/index.html)

[Demo 2 voor opdracht 3](https://ferryslot.github.io/frontendvoordesigners/opdracht3/v2/index.html)

[Demo 3 voor opdracht 3](https://ferryslot.github.io/frontendvoordesigners/opdracht3/v3/index.html)

[Demo 4 voor opdracht 3](https://ferryslot.github.io/frontendvoordesigners/opdracht3/v4/index.html)




Demo 1:

Dit is de eerste test om een API in te laden. In de demo zie je dat er een willekeurige superhero wordt geladen en een lijst van films met de bijbehorende data.


Demo 2:

Cryptocurrency API. In deze demo heb ik gekeken hoe ik alle JSON data in een table kan laden.

Demo 3:

Cryptocurrency API. Redelijk het zelfde als de vorige demo, maar hierbij met eventlisteners zoals een header die smaller wordt na scrollen zodat er meer ruimte beschikbaar is voor de gebruiker.

Demo 4:

Deze demo heeft een extra functie gekregen.
Hier kan de gebruiker stapsgewijs twee currencies selecteren en bekijken welke het meest gestegen is. De gebruiker krijgt feedback doormiddel van kleur.

De tool is opgezet in 4 fases, stap 1: Het kiezen van je eerste crypto.

Voordat er iets gaat gebeuren wordt eerst de JSON geladen d.m.v. deze code:

```javascript
var requestCryptoURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,EOS,ETC,BCH,QTUM,NEO,TRX&tsyms=EUR,USD'; // De URL waar je de JSON van laadt
var requestCrypto = new XMLHttpRequest(); //shortcut maken van de request
requestCrypto.open('GET', requestCryptoURL); // open de json file
requestCrypto.responseType = 'json'; // zeg dat t json is
requestCrypto.send(); // verstuur de data

var isJSONloaded = 0;

requestCrypto.onload = function() 
{
    isJSONloaded = 1; // voor verder in de code, dan weet je zeker dat t geladen is.
    cryptoResponse = requestCrypto.response; // de response opslaan
}

```


[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht3/images/coinchange_stap1.png "stap 1"

Stap 1: Het kiezen van crypto currency A.

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht3/images/coinchange_stap1.png "Preview pop-up v1")



[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht3/images/coinchange_stap2.png "stap 2"

Stap 2: Het kiezen van crypto currency B.

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht3/images/coinchange_stap2.png "Preview pop-up v1")



[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht3/images/coinchange_stap3.png "stap 3"

Stap 3: Laat de tool berekenen welke currency meer gestegen is.

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht3/images/coinchange_stap3.png "Preview pop-up v1")



[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht3/images/coinchange_result.png "Result"

Stap 4: Het resultaat komt naar boven sliden. De percentage die het hoogst is wordt groen, en de percentage die het laagst is wordt rood.
Helaas zit er nog 1 bug in. Het getal dat wordt ingeladen via de API is geen "min getal", het is een getal met een streepje er voor. Hierdoor wordt het streepje genegeerd, en wordt het getal dat het meest gedaalt is ook wel eens groen.

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht3/images/coinchange_result.png "Preview pop-up v1")
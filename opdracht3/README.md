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


```javascript
var requestCryptoURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,EOS,ETC,BCH,QTUM,NEO,TRX&tsyms=EUR,USD';
var requestCrypto = new XMLHttpRequest();
requestCrypto.open('GET', requestCryptoURL);
requestCrypto.responseType = 'json';
requestCrypto.send();

var isJSONloaded = 0;

requestCrypto.onload = function() 
{
    isJSONloaded = 1;
    cryptoResponse = requestCrypto.response;
}

```
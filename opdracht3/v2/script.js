//CRYPTO

var requestCryptoURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,EOS,ETC,BCH,QTUM,NEO,TRX&tsyms=EUR,USD';
var requestCrypto = new XMLHttpRequest();

requestCrypto.open('GET', requestCryptoURL);
requestCrypto.responseType = 'json';
requestCrypto.send();

requestCrypto.onload = function() 
{
    var cryptoResponse = requestCrypto.response;
    //console.log("Crypto respones: " + cryptoResponse);
    showCrypto(cryptoResponse['DISPLAY'].XRP.EUR);
    showCrypto(cryptoResponse['DISPLAY'].BTC.EUR);
}


function showCrypto(jsonObj) 
{
    var cryptoarray = jsonObj;
    console.log(".size array: " + Object.keys(cryptoarray).length);

    var btcPrice = document.createElement('h1');
    btcPrice.innerHTML = cryptoarray.FROMSYMBOL + " prijs: </br>" + cryptoarray.PRICE;
    cryptodiv.appendChild(btcPrice);

    for (var i = 0; i < Object.keys(cryptoarray).length; i++) 
    {
        var infoRow = document.createElement('tr');
        cryptodiv.appendChild(infoRow);

        var infoName = document.createElement('td');
        infoName.innerHTML = Object.keys(cryptoarray)[i];
        infoRow.appendChild(infoName);

        var infoData = document.createElement('td');
        infoData.innerHTML = cryptoarray[Object.keys(cryptoarray)[i]];
        infoRow.appendChild(infoData);
    }
}
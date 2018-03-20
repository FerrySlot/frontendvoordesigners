//CRYPTO

var requestCryptoURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,EOS,ETC,BCH,QTUM,NEO,TRX&tsyms=EUR,USD';
var requestCrypto = new XMLHttpRequest();
requestCrypto.open('GET', requestCryptoURL);
requestCrypto.responseType = 'json';
requestCrypto.send();
var isJSONloaded = 0;
var selectCrypto = document.getElementById('selectcrypto');
var cryptoResponse;

requestCrypto.onload = function() 
{
    isJSONloaded = 1;
    cryptoResponse = requestCrypto.response;
    //console.log("Crypto respones: " + cryptoResponse);
    //showCrypto(cryptoResponse['DISPLAY'].BTC.EUR);
}

selectCrypto.onchange = function()
{
    if(isJSONloaded == 1)
    {
        console.log(selectCrypto.value);
        switch(selectCrypto.value) {
        case "BTC":
            showCrypto(cryptoResponse['DISPLAY'].BTC.EUR);
        break;
        case "ETH":
            showCrypto(cryptoResponse['DISPLAY'].ETH.EUR);
        break;
        case "XRP":
            showCrypto(cryptoResponse['DISPLAY'].XRP.EUR);
        break;
        case "LTC":
            showCrypto(cryptoResponse['DISPLAY'].LTC.EUR);
        break;
        case "EOS":
            showCrypto(cryptoResponse['DISPLAY'].EOS.EUR);
        break;
        case "ETC":
            showCrypto(cryptoResponse['DISPLAY'].ETC.EUR);
        break;
        case "BCH":
            showCrypto(cryptoResponse['DISPLAY'].BCH.EUR);
        break;
        case "QTUM":
            showCrypto(cryptoResponse['DISPLAY'].QTUM.EUR);
        break;
        case "NEO":
            showCrypto(cryptoResponse['DISPLAY'].NEO.EUR);
        break;
        case "TRX":
            showCrypto(cryptoResponse['DISPLAY'].TRX.EUR);
        break;
        }
    }
}

function showCrypto(jsonObj) 
{
    //remove everything
    var resetcryptodiv = document.getElementById("cryptodiv");
    while (resetcryptodiv.hasChildNodes()) {
        resetcryptodiv.removeChild(resetcryptodiv.firstChild);
    }
    //build everything
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

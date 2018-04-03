//CRYPTO

var requestCryptoURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,EOS,ETC,BCH,QTUM,NEO,TRX&tsyms=EUR,USD';
var requestCrypto = new XMLHttpRequest();
requestCrypto.open('GET', requestCryptoURL);
requestCrypto.responseType = 'json';
requestCrypto.send();

var isJSONloaded = 0;
var selectCrypto = document.getElementById('selectcrypto');
var cryptoResponse;

var BTCopenday;

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
    var welcomediv = document.querySelector("#welcometext");
    welcomediv.classList.add("hidden");
    //build everything
    var cryptoarray = jsonObj;
    console.log(".size array: " + Object.keys(cryptoarray).length);

    var btcPrice = document.createElement('h1');
    btcPrice.innerHTML = cryptoarray.FROMSYMBOL + " prijs:</br>" + cryptoarray.PRICE;
    cryptodiv.appendChild(btcPrice);
    //btcPrive.id = h1cryptoprijs;

    var btcProcent = document.createElement('h1');
    btcProcent.innerHTML = cryptoarray.FROMSYMBOL + " procent:</br>" + cryptoarray.CHANGEPCT24HOUR;
    cryptodiv.appendChild(btcProcent);
    //btcProcent.id = h1cryptoprocent;

    var dataTable = document.createElement('table');
    cryptodiv.appendChild(dataTable);

    for (var i = 0; i < Object.keys(cryptoarray).length; i++) 
    {
        var infoRow = document.createElement('tr');
        infoRow.id = Object.keys(cryptoarray)[i];
        dataTable.appendChild(infoRow);

        var infoName = document.createElement('td');
        infoName.innerHTML = Object.keys(cryptoarray)[i];
        infoRow.appendChild(infoName);

        var infoData = document.createElement('td');
        infoData.innerHTML = cryptoarray[Object.keys(cryptoarray)[i]];
        infoRow.appendChild(infoData);
    }

    console.log("cryptoarray log name : " + Object.keys(cryptoarray)[3]);
    console.log("cryptoarray log data : " + cryptoarray[Object.keys(cryptoarray)[3]]);
    console.log("cryptoarray met punt : " + cryptoarray.PRICE);
}

// Als de user scrollt
window.addEventListener("scroll", function(event) 
{
    var top = this.scrollY;//afstand vanaf top
    if (top >= 10)
    {
        //console.log("1px gescrolled");
        var headerElement = document.querySelector("header");
        headerElement.classList.add("smallheader");
        var cryptodiv = document.querySelector("#cryptodiv");
        cryptodiv.classList.add("pulltotop");
    }
    if (top == 0)
    {
        console.log("0px gescrolled");
        var headerElement = document.querySelector("header");
        headerElement.classList.remove("smallheader");
        var cryptodiv = document.querySelector("#cryptodiv");
        cryptodiv.classList.remove("pulltotop");
    }
})

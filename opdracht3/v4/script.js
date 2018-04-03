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

var leftProcent;
var rightProcent;

requestCrypto.onload = function() 
{
    isJSONloaded = 1;
    cryptoResponse = requestCrypto.response;
    //console.log("Crypto respones: " + cryptoResponse);
    //showCrypto(cryptoResponse['DISPLAY'].BTC.EUR);
}


var showBTCbutton = document.querySelector("#showBTCbutton");
showBTCbutton.onclick = function() 
{
    showCrypto(cryptoResponse['DISPLAY'].BTC.EUR);
    leftProcent = cryptoResponse['DISPLAY'].BTC.EUR.CHANGEPCT24HOUR;
    console.log(leftProcent);
};

var showBTCbutton2 = document.querySelector("#showBTCbutton2");
showBTCbutton2.onclick = function() 
{
    showCrypto2(cryptoResponse['DISPLAY'].BTC.EUR);
    rightProcent = cryptoResponse['DISPLAY'].BTC.EUR.CHANGEPCT24HOUR;
    console.log(rightProcent);
};


var showETHbutton = document.querySelector("#showETHbutton");
showETHbutton.onclick = function() 
{
    showCrypto(cryptoResponse['DISPLAY'].ETH.EUR); 
    leftProcent = cryptoResponse['DISPLAY'].ETH.EUR.CHANGEPCT24HOUR;
    console.log(leftProcent);
};

var showETHbutton2 = document.querySelector("#showETHbutton2");
showETHbutton2.onclick = function() 
{
    showCrypto2(cryptoResponse['DISPLAY'].ETH.EUR);
    rightProcent = cryptoResponse['DISPLAY'].ETH.EUR.CHANGEPCT24HOUR;
    console.log(rightProcent);
};

var showLTCbutton = document.querySelector("#showLTCbutton");
showLTCbutton.onclick = function() 
{
    showCrypto(cryptoResponse['DISPLAY'].LTC.EUR); 
    leftProcent = cryptoResponse['DISPLAY'].LTC.EUR.CHANGEPCT24HOUR;
    console.log(leftProcent);
};

var showLTCbutton2 = document.querySelector("#showLTCbutton2");
showLTCbutton2.onclick = function() 
{
    showCrypto2(cryptoResponse['DISPLAY'].LTC.EUR);
    rightProcent = cryptoResponse['DISPLAY'].LTC.EUR.CHANGEPCT24HOUR;
    console.log(rightProcent);
};



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

    if(rightProcent < leftProcent)
    {
        btcProcent.style.color = "green";
    }
    if(rightProcent > leftProcent)
    {
        btcProcent.style.color = "red";
    }

}

function showCrypto2(jsonObj) 
{
    //remove everything
    var resetcryptodiv2 = document.getElementById("cryptodiv2");
    while (resetcryptodiv2.hasChildNodes()) {
        resetcryptodiv2.removeChild(resetcryptodiv2.firstChild);
    }

    var welcomediv = document.querySelector("#welcometext");
    welcomediv.classList.add("hidden");

    //build everything
    var cryptoarray = jsonObj;
    console.log(".size array: " + Object.keys(cryptoarray).length);

    var btcPrice = document.createElement('h1');
    btcPrice.innerHTML = cryptoarray.FROMSYMBOL + " prijs:</br>" + cryptoarray.PRICE;
    cryptodiv2.appendChild(btcPrice);
    //btcPrive.id = h1cryptoprijs;

    var btcProcent = document.createElement('h1');
    btcProcent.innerHTML = cryptoarray.FROMSYMBOL + " procent:</br>" + cryptoarray.CHANGEPCT24HOUR;
    cryptodiv2.appendChild(btcProcent);
    if(rightProcent > leftProcent)
    {
        btcProcent.style.color = "green";
    }
    if(rightProcent < leftProcent)
    {
        btcProcent.style.color = "red";
    }
    //btcProcent.id = h1cryptoprocent;

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

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

var leftProcent = 0;
var rightProcent = 0;

var btcProcentRight;
var btcProcentLeft;

var vergelijkButton = document.querySelector("#vergelijkButton");
vergelijkButton.onclick = function() 
{
    if(rightProcent < leftProcent)
    {
        btcProcentLeft.style.color = "green";
    }
    if(rightProcent > leftProcent)
    {
        btcProcentLeft.style.color = "red";
    }
    if(rightProcent == leftProcent)
    {
        btcProcentLeft.style.color = "black";
    }
    if(rightProcent > leftProcent)
    {
        btcProcentRight.style.color = "green";
    }
    if(rightProcent < leftProcent)
    {
        btcProcentRight.style.color = "red";
    }
    if(rightProcent == leftProcent)
    {
        btcProcentRight.style.color = "black";
    }
}

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
    leftProcent = cryptoResponse['DISPLAY'].BTC.EUR.CHANGEPCT24HOUR;
    console.log(leftProcent);
    showCrypto(cryptoResponse['DISPLAY'].BTC.EUR);
};

var showBTCbutton2 = document.querySelector("#showBTCbutton2");
showBTCbutton2.onclick = function() 
{
    rightProcent = cryptoResponse['DISPLAY'].BTC.EUR.CHANGEPCT24HOUR;
    console.log(rightProcent);
    showCrypto2(cryptoResponse['DISPLAY'].BTC.EUR);
};

var showETHbutton = document.querySelector("#showETHbutton");
showETHbutton.onclick = function() 
{
    leftProcent = cryptoResponse['DISPLAY'].ETH.EUR.CHANGEPCT24HOUR;
    console.log(leftProcent);
    showCrypto(cryptoResponse['DISPLAY'].ETH.EUR); 
};

var showETHbutton2 = document.querySelector("#showETHbutton2");
showETHbutton2.onclick = function() 
{
    rightProcent = cryptoResponse['DISPLAY'].ETH.EUR.CHANGEPCT24HOUR;
    console.log(rightProcent);
    showCrypto2(cryptoResponse['DISPLAY'].ETH.EUR);
};

var showLTCbutton = document.querySelector("#showLTCbutton");
showLTCbutton.onclick = function() 
{
    leftProcent = cryptoResponse['DISPLAY'].LTC.EUR.CHANGEPCT24HOUR;
    console.log(leftProcent);
    showCrypto(cryptoResponse['DISPLAY'].LTC.EUR); 
};

var showLTCbutton2 = document.querySelector("#showLTCbutton2");
showLTCbutton2.onclick = function() 
{
    rightProcent = cryptoResponse['DISPLAY'].LTC.EUR.CHANGEPCT24HOUR;
    console.log(rightProcent);
    showCrypto2(cryptoResponse['DISPLAY'].LTC.EUR);
};



function showCrypto(jsonObj) 
{
    //remove everything
    var resetcryptodiv = document.getElementById("cryptodiv");
    while (resetcryptodiv.hasChildNodes()) 
    {
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

    btcProcentLeft = document.createElement('h1');
    btcProcentLeft.innerHTML = cryptoarray.FROMSYMBOL + " procent:</br>" + cryptoarray.CHANGEPCT24HOUR;
    cryptodiv.appendChild(btcProcentLeft);

    if ((leftProcent != 0) && (rightProcent != 0))
    {
        console.log("vergelijk nu");
        vergelijkButton.style.boxShadow = "1px 1px 5px #000";

    }
}

function showCrypto2(jsonObj) 
{
    //remove everything
    var resetcryptodiv2 = document.getElementById("cryptodiv2");
    while (resetcryptodiv2.hasChildNodes()) 
    {
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

    btcProcentRight = document.createElement('h1');
    btcProcentRight.innerHTML = cryptoarray.FROMSYMBOL + " procent:</br>" + cryptoarray.CHANGEPCT24HOUR;
    cryptodiv2.appendChild(btcProcentRight);

    if ((leftProcent != 0) && (rightProcent != 0))
    {
        console.log("vergelijk nu");
        vergelijkButton.style.boxShadow = "1px 1px 10px #000";
    }
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

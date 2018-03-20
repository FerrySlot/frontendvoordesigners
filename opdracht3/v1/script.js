//CRYPTO

var requestCryptoURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR';
var requestCrypto = new XMLHttpRequest();

requestCrypto.open('GET', requestCryptoURL);
requestCrypto.responseType = 'json';
requestCrypto.send();

requestCrypto.onload = function() 
{
    var cryptoResponse = requestCrypto.response;
    console.log("Crypto respones: " + cryptoResponse);
    showCrypto(cryptoResponse);
}

function showCrypto(jsonObj) 
{
    var cryptos = jsonObj['DISPLAY'];
    console.log(cryptos.BTC.EUR.PRICE);
    var btcPrice = document.createElement('h1');
    btcPrice.innerHTML = "Bitcoin prijs: " + cryptos.BTC.EUR.PRICE;
    cryptodiv.appendChild(btcPrice);
}


// RANDOM SUPERHERO
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() 
{
    var superHeroes = request.response;
    showHeroes(superHeroes);
}

function showHeroes(jsonObj) 
{
    var members = jsonObj['members'];
      
    var i = Math.floor(Math.random() * 3);
    {
        var secretID = document.querySelector('#secretidentity');
        var heroAge = document.querySelector('#age');
        var powerList = document.querySelector('#superpowers');
        var nameHero = document.querySelector('#heroname');

        console.log(members[i].name);
        console.log(members[i].secretIdentity);
        console.log(members[i].age);

        nameHero.innerHTML = members[i].name;

        secretID.innerHTML = 'Secret identity: ' + members[i].secretIdentity;
        heroAge.innerHTML = 'Age: ' + members[i].age;
        powerList.innerHTML = 'Superpowers:';
              
        var superPowers = members[i].powers;
        for (var j = 0; j < superPowers.length; j++) 
        {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            powerList.appendChild(listItem);
        }
    }
}


// MOVIE LIST
var requestURL2 = 'http://dennistel.nl/movies';
var request2 = new XMLHttpRequest();

request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();

request2.onload = function() 
{
    var movieList = request2.response;
    showMovies(movieList);
}

function showMovies(jsonObj) 
{
    console.log("Lengte array movies: " + jsonObj.length);
    for (var i = 0; i < jsonObj.length; i++) 
    {
        var movieContainer = document.createElement('div');
        var movieTitle = document.createElement('h1');
        var moviePoster = document.createElement('img');
        var movieDescription = document.createElement('p');

        movieTitle.innerHTML = jsonObj[i].title;
        movieDescription.innerHTML = jsonObj[i].plot;
        moviePoster.src = jsonObj[i].cover;

        movieContainer.appendChild(movieTitle);   
        movieContainer.appendChild(moviePoster);
        movieContainer.appendChild(movieDescription);

        movies.appendChild(movieContainer);
    }
}

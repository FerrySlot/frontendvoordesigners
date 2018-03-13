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
* Laat de pop-up zien als je een bepaalde afstand hebt gescrollt
* De gebruiker moet de pop-up weg kunnen klikken door er buiten te klikken.
* De gebruiker kan de pop-up weghalen door een "unlock slider" te gebruiken.

## Uitleg pop-up

### Wanneer komt de pop-up:
#### 1. Inactivity
De pop-up komt omhoog wanneer de site registreerd dat de muis voor een X aantal seconden stil staat. Dit heb ik gedaan omdat je dan een gebruiker die je eigenlijk al "verloren" hebt, alsnog kan proberen te converteren.

#### 2. Scroll
Als de gebruiker de hoogte van t scherm naar beneden scrollt (100vh) komt de pop-up omhoog. Op deze manier kan je gebruikers aanspreken die actief bezig zijn met de website. Bijvoorbeeld, laat ze inschrijven voor een nieuwsbrief.

[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht2/images/scroll_popup.gif "scroll popup"

Scroll pop up preview: 

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht2/images/scroll_popup.gif "scroll popup")

### Wanneer gaat de pop-up weg:
#### 3. Escape
Door op de escape knop te klikken kan je de pop-up weghalen. De escape wordt in meerdere software/website gebruikt als een soort van "cancel" knop.

#### 4. Hover op "Nee Bedankt"
Door te hoveren op de "Nee Bedankt" tekst, gaat er een balk op de achtergrond van de pop-up lopen. Hierdoor creeer je een soort van bedenk tijd voor de gebruiker om de pop-up niet weg te klikken. Waarschijnlijk willen veel mensen het alsnog wegklikken, maar dan heb je toch nog 1 seconden extra van de gebruiker.

[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht2/images/neebedankt_hover.gif "Hover op nee bedankt"

Hover "Nee Bedankt" preview: 

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht2/images/neebedankt_hover.gif "Hover op nee bedankt")

#### 5. Klik buiten de pop-up
Tegenwoordig is dit een designpattern. Als er ergens een pop-up omhoog komt, kan je er 9 van de 10 keer naast klikken om de pop-up te verwijderen.

#### 6. Unlock Slider
Dit was meer een test i.p.v. dat het een goede oplossing is voor een pop-up. Maar ik vind dit wel een goede oplossing als het belangrijke informatie is. De gebruiker moet even nadenken hoe hij de pop-up weg krijgt. Hierdoor zal je iets meer aandacht krijgen voor de informatie die op de pop-up staat.

[preview]: https://ferryslot.github.io/frontendvoordesigners/opdracht2/images/unlock_slider.gif "Unlock slider"

Unlock slider preview: 

![alt text](https://raw.githubusercontent.com/FerrySlot/frontendvoordesigners/master/opdracht2/images/unlock_slider.gif "Unlock slider")

## Hoe het werkt

### Wanneer de pop-up komt:

#### 1. Inactivity
```javascript
document.onmousemove = function()// Bij elke beweging; voer uit...
{
    clearTimeout(notmoving);// bij elke beweging gaat de timer weer naar 5 sec
    if(haspoppedup == 0)// als de pop-up nog niet gekomen is dan...
    {
	    notmoving = setTimeout( function()// De muis staat stil, start de timer van 5 sec
	    { 
	    	showPopUp();// Als de 5 sec voorbij zijn, laat de popup zien.
	    }, 	5000);//timer tijd
	}
}
```

#### 2. Scroll
```javascript
window.addEventListener("scroll", function(event) {// Voer uit als je scrollt...
    var top = this.scrollY;// afstand vanaf top
    if (top >= window.innerHeight)// Als je de afstand van je scherm gescrollt hebt.
    {
    	showPopUp();// Laat de pop-up zien
    }
})
```

Pop-up laten zien:
```javascript
function showPopUp()//laat de pop-up zien
{
	if(haspoppedup == 0)//zorgt er voor dat het maar 1x per bezoek kan.
	{
   		popup.classList.remove("hidden"); // haal display: none; weg van de pop-up
        document.querySelector(".content").classList.add("blur");// Blur de achtergrond
   		haspoppedup = 1;// zorgt er voor dat het maar 1x per bezoek kan.
    }
}
```

### Wanneer gaat de pop-up weg:
#### 3. Escape
```javascript
document.onkeydown = checkKey;//Als er een key omlaag gaat voer functie uit...
function checkKey(e) 
{
    e = e || window.event;
    if ((e.keyCode == '27') && (haspoppedup == 1)) //27 = ESC key
    {
        removePopUp(); // Haalt pop-up weg
    }
}
```

#### 4. Hover op "Nee Bedankt"
```javascript
removebutton.onmouseover = function()// Als je op "Nee bedankt" hovert
{
	loadingbar.classList.add("removeloadingfull");//Laat het balkje lopen met CSS transition van 1s
	hoverbutton = setTimeout( removePopUp, 1000);// Na 1s, haal de pop-up weg.
}
```

#### 5. Klik buiten de pop-up
```javascript
document.onclick = function(e)//Als er een muisklik is in de site
{   
    if ((!document.querySelector("#notmovingpopup").contains(e.target)) && (isDragging == 0))//Als je ergens klikt wat niet de pop-up is.
    {
        removePopUp();//haal de pop-up weg.
    } 
};
```

#### 6. Unlock Slider
```javascript
document.querySelector("#sliderhandler").onmousedown = beginSlide;//Als je knop ingedrukt is, voer functie uit...
document.onmouseup = endSlide;//Als je je muisknop loslaat, voer functie uit...

function beginSlide(event)//mousedown
{
  	verticalpixelsdown = event.pageX; //slaat de horizontale locatie op van de muis
    isDragging = 1;// Slaat op dat je aan het "unlocken" bent.
}

function endSlide(event)//mouseup
{
    if(isDragging == 1)//Als je aan het "unlocken" bent en je muis loslaat.
    {
      	verticalpixelsup = event.pageX;//Slaat horizontale locatie nog een keer op

      	if((verticalpixelsup > (verticalpixelsdown + 500)) && (haspoppedup == 1))//Is je muis tijdens het unlocken 500px naar rechts gegaan?
      	{ 
      		removePopUp();// Zo ja, haal de pop-up weg.
      	}
        document.querySelector("#sliderhandler").style.left = "10px";// Zo niet, gaat de slider terug.
        document.querySelector("#sliderhandler").style.backgroundColor = "#E3655B";// Zo niet, verander de kleur terug
        isDragging = 0;// Je hebt de knop losgelaten, je bent niet meer aan het unlocken.
    }
}

document.onmousemove = function()// Als je muis beweegt...
{
    if(isDragging == 1)// En je bent aan het unlocken...
    {
        var handlerLocation = (event.pageX - verticalpixelsdown);
        if(handlerLocation > 540){ handlerLocation = 540; }// Zet de max op 540px dat de locker kan schuiven
        if(handlerLocation < 10){ handlerLocation = 10; }// minimum is 10px
        document.querySelector("#sliderhandler").style.left = handlerLocation+"px";// Verschuif de unlocker met de muis mee.
        document.querySelector("#sliderhandler").style.backgroundColor = "#ed9892";// Verander de kleur tijdens het schuiven.
    }
}
```



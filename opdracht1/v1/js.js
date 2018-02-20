
var blueding = document.getElementsByClassName('blue');
var redding = document.getElementsByClassName("red");
var greending = document.getElementsByClassName("green");
var yellowding = document.getElementsByClassName("yellow");
var floatingHeader = document.querySelector('#floatingheader');
var imageSection = document.querySelector('#imagesection');
var buttonFeedback = document.getElementById("buttonfeedback");

floatingHeader.addEventListener("mouseover", hoverHeader);
floatingHeader.addEventListener("mouseout", hoverHeaderOut);

document.getElementById("bluebutton").addEventListener("click", function() { showImages(1); } );
document.getElementById("redbutton").addEventListener("click", function() { showImages(2); } );
document.getElementById("greenbutton").addEventListener("click", function() { showImages(3); } );
document.getElementById("yellowbutton").addEventListener("click", function() { showImages(4); } );
//document.getElementById("showall").addEventListener("click", showAllimages);

function showAllimages() 
{	
	for (var i = 0; i < 3; i++) 
	{
	    blueding[i].classList.remove("hidden");
	    redding[i].classList.remove("hidden");
	    greending[i].classList.remove("hidden");
	    yellowding[i].classList.remove("hidden");
	    document.getElementById("bluebutton").classList.add("activebutton");
	    document.getElementById("redbutton").classList.add("activebutton");
	    document.getElementById("greenbutton").classList.add("activebutton");
	    document.getElementById("yellowbutton").classList.add("activebutton");
	}
}

function hoverHeader() 
{	
	console.log("hovert over header");
	floatingHeader.classList.add("transitiondown");
	imageSection.classList.add("transitiondownimage");
}

function hoverHeaderOut() 
{	
	console.log("hovert over header");
	floatingHeader.classList.remove("transitiondown");
	imageSection.classList.remove("transitiondownimage");
}

function showImages(button) 
{	  
	console.log("showImages runt");
	switch(button)
	{
		case 1: 
			console.log("switch case blue");
			for (var i = 0; i < 3; i++) 
			{
			    blueding[i].classList.toggle("hidden");
			    document.getElementById("bluebutton").classList.toggle("activebutton");
			    buttonFeedback.innerHTML = "Kleuren geselecteerd:";
			}
		break;

		case 2:
			console.log("switch case red");
			for (var i = 0; i < 3; i++) 
			{
			    redding[i].classList.toggle("hidden");
			    document.getElementById("redbutton").classList.toggle("activebutton");
			}
		break;

		case 3:
			console.log("switch case green");
			for (var i = 0; i < 3; i++) 
			{
			    greending[i].classList.toggle("hidden");
			    document.getElementById("greenbutton").classList.toggle("activebutton");
			}
		break;

		case 4:
			console.log("switch case yellow");
			for (var i = 0; i < 3; i++) 
			{
			    yellowding[i].classList.toggle("hidden");
			    document.getElementById("yellowbutton").classList.toggle("activebutton");
			}
		break;
	}
	buttonFeedback.innerHTML = "Kleuren geselecteerd: X";
}

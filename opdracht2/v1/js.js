var notmoving;
var popup = document.querySelector("#popupoverlay");
var removebutton = document.querySelector("#removepopup");
var loadingbar = document.querySelector("#removeloading");
var haspoppedup = 0;


var verticalpixelsdown;
var verticalpixelsup;

document.onmousedown = beginSlide;
document.onmouseup = endSlide;

function beginSlide(event)
{
  	verticalpixelsdown = event.pageX;
  	console.log(verticalpixelsdown);
}

function endSlide(event)
{
  	verticalpixelsup = event.pageX;
  	console.log(verticalpixelsup);
  	if(verticalpixelsup <= verticalpixelsdown)
  	{
  		clearTimeout(notmoving);
		popup.classList.add("hidden");
		console.log("pop-up is weg"); 
  	}
}

document.touchstart = function()
{
    clearTimeout(notmoving);

    if(haspoppedup == 0)
    {
	    notmoving = setTimeout( function() 
	    { 
	    	popup.classList.remove("hidden"); 
	    	console.log("pop-up komt");
	    	haspoppedup = 1;
	    }, 5000);
	}
}

var hoverbutton;
removebutton.onmouseover = function()
{
	console.log("Hover over button?");
	popup.classList.add("changecolorbutton");
	loadingbar.classList.add("removeloadingfull");

	clearTimeout(notmoving);
	hoverbutton = setTimeout( function(){ 
		popup.classList.add("hidden");
		console.log("pop-up is weg"); 
	}, 1000);
}

removebutton.onmouseout = function()
{
	console.log("Hover OUT button");
	popup.classList.remove("changecolorbutton");
	loadingbar.classList.remove("removeloadingfull");

	clearTimeout(hoverbutton);
}

document.onkeyup = function() 
{ 
	if(haspoppedup == 1)
	{
		haspoppedup = 0;
		console.log("reset popup");
	}
};
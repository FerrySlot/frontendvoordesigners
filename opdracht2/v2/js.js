var notmoving;
var popup = document.querySelector("#popupoverlay");
var removebutton = document.querySelector("#removepopup");
var loadingbar = document.querySelector("#removeloading");
var haspoppedup = 0;
var verticalpixelsdown;
var verticalpixelsup;
var hoverbutton;

document.querySelector("#slideremove").onmousedown = beginSlide;
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
    
  	if((verticalpixelsup < verticalpixelsdown) && (haspoppedup == 1)) 
  	{ 
  		removePopUp();
  	}
}

document.onmousemove = function()
{
    clearTimeout(notmoving);
    if(haspoppedup == 0)
    {
	    notmoving = setTimeout( function() 
	    { 
	    	showPopUp();
	    }, 	5000);
	}
}

removebutton.onmouseover = function()
{
	console.log("Hover over button?");
	popup.classList.add("changecolorbutton");
	loadingbar.classList.add("removeloadingfull");
	clearTimeout(notmoving);
	hoverbutton = setTimeout( removePopUp, 1000);
}

removebutton.onmouseout = function()
{
	console.log("Hover OUT button");
	popup.classList.remove("changecolorbutton");
	loadingbar.classList.remove("removeloadingfull");
	clearTimeout(hoverbutton);
}

//Als je ergens klikt
document.onclick = function(e)
{   
    // click buiten de popup
    if (!document.querySelector("#notmovingpopup").contains(e.target))
    {
        removePopUp();
    } 
};

function removePopUp()// haad de pop up weg
{
  	clearTimeout(notmoving);
    popup.classList.add("hidden");
    console.log("pop-up is weg"); 
}

function showPopUp()//laat de pop-up zien
{
	if(haspoppedup == 0)//als hij nog niet opgepopt is.
	{
   		popup.classList.remove("hidden"); 
   		console.log("pop-up komt");
   		haspoppedup = 1;
    }
}

document.onkeydown = checkKey;
function checkKey(e) 
{
    e = e || window.event;
    if ((e.keyCode == '27') && (haspoppedup == 1)) //ESC key om de popup weg te halen
    {
        removePopUp();
        console.log("remove popup");
    }
    // Klik op de R knop als je de de pop-up wilt toestaan om te komen.
    if ((e.keyCode == '82') && (haspoppedup == 1)) // R key    
    {
        haspoppedup = 0;
        console.log("reset popup");
    }
}

// Pop-up komt als je 1x de viewport hoogte hebt gescrollt vanaf de top.
window.addEventListener("scroll", function(event) {
    var top = this.scrollY;//afstand vanaf top
    if (top >= window.innerHeight)
    {
    	showPopUp();
    }
})
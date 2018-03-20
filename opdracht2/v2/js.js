var notmoving;
var popup = document.querySelector("#popupoverlay");
var removebutton = document.querySelector("#removepopup");
var loadingbar = document.querySelector("#removeloading");
var haspoppedup = 0;
var verticalpixelsdown;
var verticalpixelsup;
var hoverbutton;
var isDragging = 0;


document.querySelector("#sliderhandler").onmousedown = beginSlide;
document.onmouseup = endSlide;

function beginSlide(event)//mousedown
{
  	verticalpixelsdown = event.pageX; //slaat de horizontale locatie op
    //Hier moet een blokje komen left: x;
    isDragging = 1;
}

function endSlide(event)//mouseup
{
    if(isDragging == 1)
    {
      	verticalpixelsup = event.pageX;

      	if((verticalpixelsup > (verticalpixelsdown + 500)) && (haspoppedup == 1)) 
      	{ 
      		removePopUp();
      	}
        document.querySelector("#sliderhandler").style.left = "10px";
        document.querySelector("#sliderhandler").style.backgroundColor = "#E3655B";
        isDragging = 0;
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
    if(isDragging == 1)
    {
        var handlerLocation = (event.pageX - verticalpixelsdown);
        if(handlerLocation > 540){ handlerLocation = 540; }
        if(handlerLocation < 10){ handlerLocation = 10; }
        console.log("isdragging = " + isDragging + " | " + event.pageX +" - "+ verticalpixelsdown + " = " + (event.pageX - verticalpixelsdown));
        document.querySelector("#sliderhandler").style.left = handlerLocation+"px";
        document.querySelector("#sliderhandler").style.backgroundColor = "#ed9892";
    }
}

removebutton.onmouseover = function()
{
	//popup.classList.add("changecolorbutton");
	loadingbar.classList.add("removeloadingfull");
	//clearTimeout(notmoving);
	hoverbutton = setTimeout( removePopUp, 1000);
}

removebutton.onmouseout = function()
{
	//popup.classList.remove("changecolorbutton");
	loadingbar.classList.remove("removeloadingfull");
	clearTimeout(hoverbutton);
}

//Als je ergens klikt
document.onclick = function(e)
{   
    // click buiten de popup
    if ((!document.querySelector("#notmovingpopup").contains(e.target)) && (isDragging == 0))
    {
        removePopUp();
    } 
};

function removePopUp()// haad de pop up weg
{
  	clearTimeout(notmoving);
    popup.classList.add("hidden");
    document.querySelector(".content").classList.remove("blur");
}

function showPopUp()//laat de pop-up zien
{
	if(haspoppedup == 0)//als hij nog niet opgepopt is.
	{
   		popup.classList.remove("hidden"); 
        document.querySelector(".content").classList.add("blur");
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
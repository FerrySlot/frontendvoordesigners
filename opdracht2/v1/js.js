var notmoving;
var popup = document.querySelector("#popupoverlay");
var removebutton = document.querySelector("#removepopup");
var loadingbar = document.querySelector("#removeloading");

document.onmousemove = function()
{
    clearTimeout(notmoving);
    notmoving = setTimeout( function(){ popup.classList.remove("hidden") }, 5000);
}

var hoverbutton;
removebutton.onmouseover = function()
{
	console.log("Hover over button?");
	popup.classList.add("changecolorbutton");
	loadingbar.classList.add("removeloadingfull");

	clearTimeout(notmoving);
	hoverbutton = setTimeout( function(){ popup.classList.add("hidden") }, 1000);
}

removebutton.onmouseout = function()
{
	console.log("Hover OUT button");
	popup.classList.remove("changecolorbutton");
	loadingbar.classList.remove("removeloadingfull");

	clearTimeout(hoverbutton);
}
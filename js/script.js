var navLinks = document.getElementById("nav");
var hide = document.getElementById("hide");
var show = document.getElementById("show");

function showMenu() {
	navLinks.style.left = "0";
	hide.style.fontSize = "30px";
	show.style.fontSize = "0px";
}
function hideMenu(){
	navLinks.style.left = "100%";
	hide.style.fontSize = "0px";
	show.style.fontSize = "30px";
}

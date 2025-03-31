// d:\IT\ProjektDungeon\tweego-2.1.1-windows-x64\tweego.exe -o index.html Main Imgs -w 
Config.macros.typeVisitedPassages = false;


// Nastavení

var zapnoutFullscreen = function () {
	Fullscreen.toggle();
}

Setting.addToggle("fullscreen", {
	label : "Zapnout fullscreen",
  	onChange : zapnoutFullscreen
}); 
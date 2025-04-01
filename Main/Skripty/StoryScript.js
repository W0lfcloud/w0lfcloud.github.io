// d:\IT\_hry\ProjektDungeon\tweego-2.1.1-windows-x64\tweego.exe -o index.html Main Imgs -w
Config.macros.typeVisitedPassages = false;


// Nastavení

var zapnoutFullscreen = function () {
	Fullscreen.toggle();
}

Setting.addToggle("fullscreen", {
	label : "Zapnout fullscreen",
  	onChange : zapnoutFullscreen
}); 

l10nStrings.settingsTitle = 'Nastavení hry';
l10nStrings.textOff   = 'Vyp';
l10nStrings.textOn    = 'Zap';
l10nStrings.settingsTextReset = 'Resetovat nastavení';
//TODO: Opravit nastavení :(
// Nejaky ty ilustrace
// Nejaky ty zvuky?? 
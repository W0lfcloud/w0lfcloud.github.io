
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


// ui-macro.min.js, for SugarCube 2, by Chapel
// v1.0.1, 2024-07-22, 336675ff2cabe5f729a5f30d86aa409cc8432726
;!function(){var s={update:UIBar.setStoryElements,stow:UIBar.stow,unstow:UIBar.unstow,toggle:function(){$("#ui-bar").hasClass("stowed")?UIBar.unstow():UIBar.stow()},hide:function(){$("#ui-bar").css("display","none")},show:function(){$("#ui-bar").css("display","block")},kill:function(){$("#ui-bar").css("display","none"),$("#story").css("margin-left","2.5em")},restore:function(){$("#ui-bar").css("display","block"),$("#story").css("margin-left","20em")},jump:UI.jumpto,saves:UI.saves,restart:UI.restart,settings:UI.settings,share:UI.share,aliases:{refresh:"update",reload:"update",destroy:"kill",revive:"restore",jumpto:"jump",save:"saves",load:"saves",setting:"settings",sharing:"share"}},r=Object.keys(s);function t(t){return t&&"string"==typeof t?function(s){return r.includes(s)}(t=t.toLowerCase().trim())||(t=function(r){return s.aliases[r]||null}(t))?(s[t](),!1):'Command "'+t+'" is not a valid command.':"Command is not a string."}Macro.add("ui",{handler:function(){Array.isArray(this.args)&&this.args.length||this.error("No commands passed to macro.");var s,r=function(s){if(!Array.isArray(s))return"Command list error.";var r=[];return s.forEach((function(s){r.push(t(s))})),r}(this.args.flat(1/0));s=(r=r.filter((function(s){return"string"==typeof s}))).join(" "),r.length&&s&&this.error(s)}})}();
// end ui-macro.min.js
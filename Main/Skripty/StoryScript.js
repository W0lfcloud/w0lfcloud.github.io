Config.macros.typeVisitedPassages = false;


// Nastavení
var zapnoutFullscreen = function () {
	Fullscreen.toggle();
}

Setting.addToggle("fullscreen", {
	label : "Zapnout fullscreen",
  	onChange : zapnoutFullscreen
}); 


// function menu
$(document).ready(function() {
	$(document).on("click", "#saves", function() {
		UI.saves();
	});
	$(document).on("click", "#settings", function() {
		UI.settings();
	});
	$(document).on("click", "#restart", function() {
		Dialog.setup("Restartovat hru");
		Dialog.wiki(Story.get("Reset").processText());
		Dialog.open();
	});
});


//lokalizace
l10nStrings.textAbort = 'Přerušit';
l10nStrings.textAborting = 'Přerušování';
l10nStrings.textCancel = 'Zrušit';
l10nStrings.textClear = 'Vymazat';
l10nStrings.textClose = 'Zavřít';
l10nStrings.textDelete = 'Smazat';
l10nStrings.textExport = 'Exportovat';

// V malých písmenech, pokud je to možné.
l10nStrings.textIdentity = 'hra';
l10nStrings.textImport = 'Importovat';
l10nStrings.textLoad = 'Načíst';
l10nStrings.textOff = 'Vyp';
l10nStrings.textOk = 'OK';
l10nStrings.textOn = 'Zap';
l10nStrings.textSave = 'Uložit';

// (podstatné jméno) šance jednat (ve hře), moment, období
l10nStrings.textTurn = 'Pozice';

/*******************************************************************************
	Chyby.
*******************************************************************************/

// POZNÁMKA: `passage` je dodáno lokálně.
l10nStrings.errorNonexistentPassage = 'pasáž "{passage}" neexistuje';

/*******************************************************************************
	Varování.
*******************************************************************************/

l10nStrings.warningNoStorage = 'Všechny použitelné API pro ukládání chybí. Možné příčiny jsou zakázané nastavení cookies třetích stran, které také ovlivňuje Web Storage, nebo režim soukromého prohlížení.';
l10nStrings.warningNoWebStorage = 'API Web Storage chybí, takže tato {textIdentity} běží v omezeném režimu. Možná budete moci pokračovat, ale některé části nemusí fungovat správně.';
l10nStrings.warningDegraded = 'Některé schopnosti potřebné k podpoře této {textIdentity} chybí, takže běží v omezeném režimu. Možná budete moci pokračovat, ale některé části nemusí fungovat správně.';
l10nStrings.warningNoSaves = 'Některé schopnosti potřebné k podpoře ukládání chybí, takže ukládání bylo pro tuto relaci zakázáno.';

/*******************************************************************************
	API: Uložení.
*******************************************************************************/
l10nStrings.saveErrorDisallowed = 'Ukládání je momentálně zakázáno.';
l10nStrings.saveErrorDecodeFail = 'nelze dekódovat uloženou hru, pravděpodobně kvůli poškození';
l10nStrings.saveErrorDiskLoadFail = 'nepodařilo se načíst uloženou hru z disku';
l10nStrings.saveErrorIdMismatch = 'uložená hra je z nesprávné {textIdentity}';
l10nStrings.saveErrorInvalidData = 'uložená hra postrádá požadovaná data, pravděpodobně kvůli poškození';
l10nStrings.saveErrorNonexistent = 'uložená hra neexistuje';

/*******************************************************************************
	Základní UI.
*******************************************************************************/

l10nStrings.uiBarLabelToggle = 'Přepnout UI panel';
l10nStrings.uiBarLabelBackward = 'Jít zpět v historii {textIdentity}';
l10nStrings.uiBarLabelForward = 'Jít vpřed v historii {textIdentity}';
// [ZASTARALÉ]
l10nStrings.uiBarLabelJumpto = 'Přeskočit na konkrétní bod v historii {textIdentity}';

/*******************************************************************************
	Dialog: Upozornění.
*******************************************************************************/

l10nStrings.alertTitle = 'Upozornění';

/*******************************************************************************
	Dialog: Restart.
*******************************************************************************/

l10nStrings.restartTitle = 'Restartovat';
l10nStrings.restartMesgPrompt = 'Všechen neuložený postup bude ztracen. Opravdu chcete restartovat?';

/*******************************************************************************
	Dialog: Uložení.
*******************************************************************************/

l10nStrings.continueTitle = 'Pokračovat';
l10nStrings.savesTitle = 'Uložené pozice';
l10nStrings.savesHeaderBrowser = 'V prohlížeči';
l10nStrings.savesHeaderDisk = 'Na disku';
l10nStrings.savesLabelBrowserClear = 'Smazat všechny uložené hry v prohlížeči';
l10nStrings.savesLabelBrowserExport = 'Exportovat uložené hry z prohlížeče do balíčku';
l10nStrings.savesLabelBrowserImport = 'Importovat uložené hry z balíčku do prohlížeče';
l10nStrings.savesLabelDiskLoad = 'Načíst z disku';
l10nStrings.savesLabelDiskSave = 'Uložit na disk';
l10nStrings.savesTextBrowserAuto = 'Automaticky';
l10nStrings.savesTextBrowserSlot = 'Slot';
l10nStrings.savesTextNoDate = 'neznámé datum';

/*******************************************************************************
	Dialog: Nastavení.
*******************************************************************************/
l10nStrings.settingsTitle = 'Nastavení';
l10nStrings.settingsTextReset = 'Obnovit výchozí';

/*******************************************************************************
	Ladění: Zobrazení chyb.
*******************************************************************************/

l10nStrings.errorViewTitle = 'Chyba';
l10nStrings.errorViewLabelToggle = 'Přepnout zobrazení chyb';

/*******************************************************************************
	Ladění: Ladící panel.
*******************************************************************************/

l10nStrings.debugBarLabelToggle = 'Přepnout ladící panel';
l10nStrings.debugBarLabelViewsToggle = 'Přepnout ladící zobrazení';
l10nStrings.debugBarLabelWatchAdd = 'Přidat nový sledovací bod';
l10nStrings.debugBarLabelWatchAll = 'Sledovat vše';
l10nStrings.debugBarLabelWatchClear = 'Vymazat všechny sledovací body';
l10nStrings.debugBarLabelWatchDelete = 'Smazat tento sledovací bod';
l10nStrings.debugBarLabelWatchPlaceholder = 'název proměnné';
l10nStrings.debugBarLabelPassagePlaceholder = 'název pasáže';
l10nStrings.debugBarLabelPassagePlay = 'Přehrát pasáž';
l10nStrings.debugBarLabelWatchToggle = 'Přepnout panel sledování';
l10nStrings.debugBarMesgNoWatches = 'Žádné sledovací body nejsou nastaveny';
l10nStrings.debugBarTextAdd = 'Přidat';
l10nStrings.debugBarTextPassage = 'Pasáž';
l10nStrings.debugBarTextViews = 'Zobrazení';
l10nStrings.debugBarTextWatch = 'Sledovat';

/*******************************************************************************
	Makra.
*******************************************************************************/

// (sloveso) přetočit zpět, vrátit
l10nStrings.macroBackText = 'Zpět';
// (sloveso) vrátit se/poslat zpět
l10nStrings.macroReturnText = 'Vrátit';

/*******************************************************************************
	[ZASTARALÉ] Dialog: Automatické načítání.
*******************************************************************************/

l10nStrings.autoloadTitle = 'Automatické načítání';
l10nStrings.autoloadMesgPrompt = 'Existuje automaticky uložená hra. Načíst ji nyní nebo přejít na začátek?';
l10nStrings.autoloadTextCancel = 'Přejít na začátek';
l10nStrings.autoloadTextOk = 'Načíst automaticky uloženou hru';


/*******************************************************************************
	[ZASTARALÉ] Dialog: Přeskočit na.
*******************************************************************************/

l10nStrings.jumptoTitle = 'Přeskočit na';
l10nStrings.jumptoMesgUnavailable = 'Momentálně nejsou dostupné žádné body pro přeskočení\u2026';




// ui-macro.min.js, for SugarCube 2, by Chapel
// v1.0.1, 2024-07-22, 336675ff2cabe5f729a5f30d86aa409cc8432726
;!function(){var s={update:UIBar.setStoryElements,stow:UIBar.stow,unstow:UIBar.unstow,toggle:function(){$("#ui-bar").hasClass("stowed")?UIBar.unstow():UIBar.stow()},hide:function(){$("#ui-bar").css("display","none")},show:function(){$("#ui-bar").css("display","block")},kill:function(){$("#ui-bar").css("display","none"),$("#story").css("margin-left","2.5em")},restore:function(){$("#ui-bar").css("display","block"),$("#story").css("margin-left","20em")},jump:UI.jumpto,saves:UI.saves,restart:UI.restart,settings:UI.settings,share:UI.share,aliases:{refresh:"update",reload:"update",destroy:"kill",revive:"restore",jumpto:"jump",save:"saves",load:"saves",setting:"settings",sharing:"share"}},r=Object.keys(s);function t(t){return t&&"string"==typeof t?function(s){return r.includes(s)}(t=t.toLowerCase().trim())||(t=function(r){return s.aliases[r]||null}(t))?(s[t](),!1):'Command "'+t+'" is not a valid command.':"Command is not a string."}Macro.add("ui",{handler:function(){Array.isArray(this.args)&&this.args.length||this.error("No commands passed to macro.");var s,r=function(s){if(!Array.isArray(s))return"Command list error.";var r=[];return s.forEach((function(s){r.push(t(s))})),r}(this.args.flat(1/0));s=(r=r.filter((function(s){return"string"==typeof s}))).join(" "),r.length&&s&&this.error(s)}})}();
// end ui-macro.min.js
var currentUniverse;
var currentPersonnage;
var currentVaisseau;

var modeEdit = false;
var modeEditStyle = false;

function initSelector() {
	var body = jQuery('body');
	
	var selector = jQuery('<div class="bandeau universe no-print"><div><label for="universe-selector" >Univers : </label><input type="file" id="universe-selector"></div></div>');
	body.append(selector);
	document.getElementById('universe-selector').addEventListener('change', setupUniverse, false);
	
	var results = jQuery('<div id="results">');
	body.append(results);
}

function setupUniverse(fileSelectedEvent) {
	
  var selectedFile = fileSelectedEvent.target.files[0];
  if (!selectedFile) {
    return;
  }
  
  var reader = new FileReader();
  reader.onload = function(loadedFileEvent) {
    var loadedFile = loadedFileEvent.target.result;
    parseUniverse(loadedFile);
  };
  reader.readAsText(selectedFile);
  
}

function parseUniverse(universeJson) {
	var jsonRootNode = JSON.parse(universeJson);	
	
	currentUniverse = universeFromJson(jsonRootNode);
	currentUniverse.resolve();

	fillBookFilters();
	fillPersoVaisseauFilters();
	
	fillStyle();
	
	reload();
}

function fillStyle(){
	jQuery('#universe_css').remove();
	jQuery("head").append('<style id="universe_css" type="text/css"></style>');

	var sheet = jQuery("#universe_css").get(0).sheet;
	
	var index=0;
	
	for(var [styleName, style] of currentUniverse.styles){
		var rule = '.card.' + style.nom + ' div, .card.' + style.nom + ' img {border-color: '+ style.hexa +';}';
		sheet.insertRule(rule, index);
		
		index++;
	}
	
	for(var [styleName, style] of currentUniverse.styles){
		var rule = 'option.' + style.nom + ', select.' + style.nom + ' {background-color: '+ style.hexa +'; color: white}';
		sheet.insertRule(rule, index);
		
		index++;
	}
	
	for(var [logoName, logo] of currentUniverse.logos){
		var rule = '.code.' + logo.nom + ' {background-image: url('+ logo.base64 +');}';
		sheet.insertRule(rule, index);
		
		index++;
	}
	
}

function fillPersoVaisseauFilters() {
	
	if(jQuery('#universeDescription').length == 0){
		jQuery('.bandeau').prepend(jQuery('<h3>'+ currentUniverse.nom +'</h3>'));
		jQuery('.bandeau').append(jQuery('<div ><label for="perso-selector">Personnage : </label><select id="perso-selector"></div>'));
		jQuery('.bandeau').append(jQuery('<div ><label for="vaisseau-selector">Vaisseau : </label><select id="vaisseau-selector"></div>'));
		jQuery('#perso-selector').change(setupPerso);		
		jQuery('#vaisseau-selector').change(setupVaisseau);
	} else {
		jQuery('#perso-selector option').remove();
		jQuery('#vaisseau-selector option').remove();
	}
	
	jQuery('#perso-selector').append(jQuery("<option>").attr('value','').text(''));
	for( [persoName,perso] of currentUniverse['personnages']){
		jQuery('#perso-selector').append(jQuery("<option>").attr('value',persoName).text(persoName));
	}
	
	jQuery('#vaisseau-selector').append(jQuery("<option>").attr('value','').text(''));
	for( [vaisseauName, vaisseau] of currentUniverse['vaisseaux']){
		jQuery('#vaisseau-selector').append(jQuery("<option>").attr('value',vaisseauName).text(vaisseauName));
	}
}

function setupPerso() {
	currentPersonnage = currentUniverse['personnages'].get(jQuery('#perso-selector').val());
	
	reload();
}

function setupVaisseau() {
	currentVaisseau = currentUniverse['vaisseaux'].get(jQuery('#vaisseau-selector').val());
	
	reload();
}

function fillBookFilters() {
	if(jQuery('#book-selector').length == 0){
		jQuery('.bandeau').append(jQuery('<div><label for="book-selector">Set de cartes : </label><select id="book-selector"></div>'));
		jQuery('#book-selector').change(reload);		
	} else {
		jQuery('#book-selector option').remove();
	}
	
	jQuery('#book-selector').append(jQuery("<option>").attr('value','Tous').text('Tous'));
	for( [bookName, book] of currentUniverse['books']){
		jQuery('#book-selector').append(jQuery("<option>").attr('value',bookName).text(bookName));
	}
}

function reload() {
		
	if(jQuery('#prinAllButton').length == 0){
		mooveBandeau();		
	}
	
	cleanResults();
	
	var selectedBook = jQuery('#book-selector').val();
	if(selectedBook == 'Tous'){
		for(var [bookName, book] of currentUniverse['books']) {
			book.print();
		}
	} else {
		currentUniverse['books'].get(selectedBook).print();
	}	
	
	replaceFields();
	addPrintCheckBoxes();
	resizeInputs();
}

function toggleEdition(){
	if(modeEdit){
		modeEdit = false;
		jQuery('input#modifyButton').val('Editer les cartes');
	} else {
		modeEdit = true;
		jQuery('input#modifyButton').val('Afficher les cartes');
	}
	
	modeEditStyle = false;
	jQuery('input#modifyStyleButton').val('Editer le style');
	
	reload();
}

function toggleEditionStyle(){
	if(modeEditStyle){
		modeEditStyle = false;
		jQuery('input#modifyStyleButton').val('Editer le style');
		reload();
	} else {
		modeEditStyle = true;
		jQuery('input#modifyStyleButton').val('Afficher les cartes');
		displayStyle();
	}
	
	modeEdit = false;
	jQuery('input#modifyButton').val('Editer les cartes');
}

function displayStyle(){
	cleanResults();
	var results = jQuery('#results');
	
	var bandeauStyle = jQuery('<div class="bandeau styles">');
	bandeauStyle.append(jQuery('<h3>Styles</h3>'));
	for( [styleName, style] of currentUniverse['styles']){
		var line = jQuery('<div class="styleDef" styleName="' + styleName + '">');
		var styleName = jQuery('<input type="text" value="' + style.nom + '" placeholder="Nom du style">').change(updateStyleDef);
		var styleColor = jQuery('<input type="color" value="' + style.hexa + '">').change(updateStyleDef);
		var deleteStyle = jQuery('<input type="submit" value="X" onclick="deleteStyleDef(this)">');
		line.append(styleColor);
		line.append(styleName);
		line.append(deleteStyle);
		bandeauStyle.append(line);
	}
	bandeauStyle.append(jQuery('<input type="submit" onclick="addStyleDef()" value="+"/>'));
	results.append(bandeauStyle);
		
	var bandeauLogo = jQuery('<div class="bandeau logos">');
	bandeauLogo.append(jQuery('<h3>Logos</h3>'));
	for( [logoName, logo] of currentUniverse['logos']){
		var line = jQuery('<div class="logoDef" logoName="' + logoName + '">');
		var logoName = jQuery('<input type="text" value="' + logo.nom + '" placeholder="Nom du logo">').change(updateLogoDef);
		var logoFile = jQuery('<input type="file">').change(updateLogoDef);
		var logoImg = jQuery('<img src="' + logo.base64 + '">');
		var deleteLogo = jQuery('<input type="submit" value="X" onclick="deleteLogoDef(this)">');
		line.append(logoImg);
		line.append(logoName);
		line.append(logoFile);
		line.append(deleteLogo);
		bandeauLogo.append(line);
	}
	bandeauLogo.append(jQuery('<input type="submit" onclick="addLogoDef()" value="+"/>'));
	results.append(bandeauLogo);

	var bandeauZones = jQuery('<div class="bandeau zones">');
	bandeauZones.append(jQuery('<h3>Zones</h3>'));
	for( [zoneName, zone] of currentUniverse['zones']){
		var line = jQuery('<div class="zoneDef" zoneName="' + zoneName + '">');
		var zoneName = jQuery('<input type="text" value="' + zone.nom + '" placeholder="Nom de la zone">').change(updateZoneDef);
		var zoneFile = jQuery('<input type="file">').change(updateZoneDef);
		var zoneImg = jQuery('<img src="' + zone.base64 + '">');
		var deleteZone = jQuery('<input type="submit" value="X" onclick="deleteZoneDef(this)">');
		line.append(zoneImg);
		line.append(zoneName);
		line.append(zoneFile);
		line.append(deleteZone);
		bandeauZones.append(line);
	}
	bandeauZones.append(jQuery('<input type="submit" onclick="addZoneDef()" value="+"/>'));
	results.append(bandeauZones);
	
	fillStyle();
}

function addStyleDef(){
	currentUniverse.addStyle(new Style('new', '#000000'));
	displayStyle();
}

function deleteStyleDef(event){
	var element = jQuery(event);
	var parent = element.parent();
	var oldName = parent.attr('styleName');
	
	currentUniverse['styles'].delete(oldName);
	displayStyle();
}

function updateStyleDef(event){
	var element = jQuery(event.target);
	var parent = element.parent();
	var oldName = parent.attr('styleName');
	
	var inputName = parent.find('input[type="text"]');
	var inputColor = parent.find('input[type="color"]');
	
	currentUniverse['styles'].delete(oldName);
	
	var newName = inputName.val();
	var newColor = inputColor.val();
	var newStyle = new Style(newName, newColor);
	
	currentUniverse['styles'].set(newName, newStyle);
	
	displayStyle();
}

function addLogoDef(){
	currentUniverse.addLogo(new Logo('new', 'data:image/png;base64,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'));
	displayStyle();
}

function deleteLogoDef(event){
	var element = jQuery(event);
	var parent = element.parent();
	var oldName = parent.attr('logoName');
	
	currentUniverse['logos'].delete(oldName);
	displayStyle();
}

function updateLogoDef(event){
	var element = jQuery(event.target);
	var parent = element.parent();
	var oldName = parent.attr('logoName');
	
	var inputName = parent.find('input[type="text"]');
	var inputFile = parent.find('input[type="file"]');
	var logoImg = parent.find('img');
	
	var oldLogo = currentUniverse['logos'].get(oldName);
	var oldValue = oldLogo != undefined ? oldLogo.base64 : '';
	currentUniverse['logos'].delete(oldName);
	
	var newName = inputName.val();
	
	var file = event.target.files != undefined ? event.target.files[0] : undefined;
	if (file) {
		var reader = new FileReader();
		reader.onload = function(loadedFileEvent) {
			var newValue = loadedFileEvent.target.result;
			
			logoImg.attr('src', newValue);

			currentUniverse['logos'].set(newName, new Logo(newName, newValue));
			displayStyle();	
		};
		reader.readAsDataURL(file);
	} else {
		currentUniverse['logos'].set(newName, new Logo(newName, oldValue));
		displayStyle();
	}		
}

function addZoneDef(){
	currentUniverse.addZone(new Zone('new', 'data:image/png;base64,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'));
	displayStyle();
}

function deleteZoneDef(event){
	var element = jQuery(event);
	var parent = element.parent();
	var oldName = parent.attr('zoneName');
	
	currentUniverse['zones'].delete(oldName);
	displayStyle();
}

function updateZoneDef(event){
	var element = jQuery(event.target);
	var parent = element.parent();
	var oldName = parent.attr('zoneName');
	
	var inputName = parent.find('input[type="text"]');
	var inputFile = parent.find('input[type="file"]');
	var zoneImg = parent.find('img');
	
	var oldZone = currentUniverse['zones'].get(oldName);
	var oldValue = oldZone != undefined ? oldZone.base64 : '';
	currentUniverse['zones'].delete(oldName);
	
	var newName = inputName.val();

	var file = event.target.files != undefined ? event.target.files[0] : undefined;
	if (file) {
		var reader = new FileReader();
		reader.onload = function(loadedFileEvent) {
			var newValue = loadedFileEvent.target.result;
			
			zoneImg.attr('src', newValue);

			currentUniverse['zones'].set(newName, new Zone(newName, newValue));
			displayStyle();	
		};
		reader.readAsDataURL(file);
	} else {
		currentUniverse['zones'].set(newName, new Zone(newName, oldValue));
		displayStyle();
	}		
}

function mooveBandeau() {
	var bandeau = jQuery('.bandeau');
	if(!bandeau.hasClass('fixed')){
		bandeau.addClass('fixed');

		bandeau.append(jQuery("<div id='no-printAll'><label for='printAllButton' >Tout sélectionner : </label><input type='checkbox' id='printAllButton'/><input id='print' type='submit' value='Imprimer'/></div>"));
		
		jQuery('input#printAllButton').on('change', function(){
			var input = jQuery(this);
			
			if(input.is(':checked')){
				jQuery('input.no-print:not(:checked)').click();
			} else {
				jQuery('input.no-print:checked').click();
			}
		});
		
		jQuery('input#print').on('click', function(){
			window.print();
		});
		
		bandeau.append(jQuery("<div id='modify'><input type='submit' id='modifyButton' value='Editer les cartes'/><input type='submit' id='modifyStyleButton' value='Editer le style'/></div>"));
		jQuery('input#modifyButton').on('click', toggleEdition);
		jQuery('input#modifyStyleButton').on('click', toggleEditionStyle);
		
		bandeau.append(jQuery("<div id='no-printJson'><input type='submit' id='no-printJsonButton' value='Sauvegarder en json'/></div>"));
		jQuery('input#no-printJsonButton').on('click', downloadJson);
	}	
}

function replaceFields() {
	var before = jQuery('#results').html();
	var after = before.replace(/#(\w+)\.(\w+)#/g, resolveField); 
	jQuery('#results').html(after);
}

function resolveField(key, context, field){
	
	switch(context){
		
		case 'perso' :
			dico = currentPersonnage;
			break;
		
		case 'vaisseau' :
			dico = currentVaisseau;
			break;
	}
	if(dico != undefined){
		return dico.print(field);
	} else {
		return key;
	}
}

jQuery.fn.textWidth = function(text, font) {
    
    if (!jQuery.fn.textWidth.fakeEl) jQuery.fn.textWidth.fakeEl = jQuery('<span>').hide().appendTo(document.body);
    
    jQuery.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
    
    return jQuery.fn.textWidth.fakeEl.width();
};

function resizeInputs(){
	jQuery('input[type="text"]').on('input', function() {
    var inputWidth = jQuery(this).textWidth();
    jQuery(this).css({
        width: inputWidth
    })
	}).trigger('input');
}

function cleanResults() {
	jQuery('#results').empty();
}

function addPrintCheckBoxes() {
	jQuery('.card').prepend(jQuery("<input type='checkbox' class='no-print' readonly='readonly'/>"));
	
	jQuery('input.no-print').on('change', function(){
		var input = jQuery(this);
		
		if(input.is(':checked')){
			input.parent().addClass('PRINT');
		} else {
			input.parent().removeClass('PRINT');
		}
	})
	
	jQuery('.card').on('click', function(){
		var clickedCard = jQuery(this);
		var clickedCardButton = clickedCard.children().first();

		clickedCardButton.click();
	})
}

function downloadJson() {
	
	var jsonWriter = new JsonWriter();
	currentUniverse.printJson(jsonWriter);
	var json = JSON.stringify(JSON.parse(jsonWriter.text),null,2);
	
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(json));
	element.setAttribute('download', currentUniverse['nom'] + '.json');
	element.setAttribute('value', 'télécharger');
	element.style.display = 'none';
	
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
	
}

initSelector();

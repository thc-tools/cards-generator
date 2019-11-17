function JsonWriter(){
	this.text = "";
}

JsonWriter.prototype.writeIn = function(target){
	jQuery(target).append('<div>' + this.text + '</div>');
}

JsonWriter.prototype.write = function(text){
	this.text += text;
}

JsonWriter.prototype.writeQuoted = function(text){
	this.write(' "' + text.toString().replace(/"/g, '\\"') + '" ');
}

JsonWriter.prototype.writeSeparator = function(){
	this.write(' , ');
}

JsonWriter.prototype.startObjet = function(type){
	var object = new JsonWriterObject(this);
	object.writeParam('typeElement', type);
	return object;
}

function JsonWriterObject(json){
	this.json = json;
	this.json.write(' { ');
	this.needSeparator = false;
}

JsonWriterObject.prototype.endObjet = function(){
	this.json.write(' } ');
}

JsonWriterObject.prototype.writeSeparator = function(){
	if(this.needSeparator){
		this.json.writeSeparator();
	} else {
		this.needSeparator = true;
	}
}

JsonWriterObject.prototype.writeParam = function(param, value){
	if(value != undefined) {
		
		this.writeSeparator();
		
		this.json.writeQuoted(param);
		this.json.write(':');
		this.json.writeQuoted(value);
		
	}
}

JsonWriterObject.prototype.writeEntry = function(param){
	
	this.writeSeparator();
	
	this.json.writeQuoted(param);
	this.json.write(':');
}

JsonWriterObject.prototype.writeParamObject = function(param){
	
	this.writeSeparator();
	
	this.json.writeQuoted(param);
	this.json.write(':');
	var obj = new JsonWriterObject(this.json);
	return obj;
}

JsonWriterObject.prototype.writeParamTab = function(param){
	
	this.writeSeparator();
	
	this.json.writeQuoted(param);
	this.json.write(':');
	var tab = new JsonWriterTab(this.json);
	return tab;
}

function JsonWriterTab(json){
	this.json = json;
	this.json.write(' [ ');
	this.needSeparator = false;
}

JsonWriterTab.prototype.endTab = function(){
	this.json.write(' ] ');
}

JsonWriterTab.prototype.writeSeparator = function(){
	if(this.needSeparator){
		this.json.writeSeparator();
	} else {
		this.needSeparator = true;
	}
}

JsonWriterTab.prototype.writeParamTab = function(param){
	
	this.writeSeparator();
	
	this.json.writeQuoted(param);
	this.json.write(':');
	var tab = new JsonWriterTab(this.json);
	return tab;
}

function elementFromJson(elementNode){
	switch (elementNode['typeElement']){
		
		case 'universe' :
			return universeFromJson(elementNode);
			
		case 'style' :
			return styleFromJson(elementNode);
			
		case 'logo' :
			return logoFromJson(elementNode);
			
		case 'zone' :
			return zoneFromJson(elementNode);
			
		case 'theme' :
			return themeFromJson(elementNode);
			
		case 'classe' :
			return classeFromJson(elementNode);
			
		case 'race' :
			return raceFromJson(elementNode);
			
		case 'personnage' :
			return personnageFromJson(elementNode);
			
		case 'arme' :
			return armeFromJson(elementNode);
			
		case 'bouclier' :
			return bouclierFromJson(elementNode);
			
		case 'armature' :
			return armatureFromJson(elementNode);
			
		case 'reacteur' :
			return reacteurFromJson(elementNode);
			
		case 'propulseur' :
			return propulseurFromJson(elementNode);
			
		case 'blindage' :
			return blindageFromJson(elementNode);
			
		case 'contremesure' :
			return contremesureFromJson(elementNode);
			
		case 'bouclierVaisseau' :
			return bouclierVaisseauFromJson(elementNode);
			
		case 'armeVaisseau' :
			return armeVaisseauFromJson(elementNode);
		
		case 'block' :
			return blockFromJson(elementNode);
			
		case 'ligne' :
			return ligneFromJson(elementNode);
			
		case 'caracteristique' :
			return caracteristiqueFromJson(elementNode);
			
		case 'competence' :
			return competenceFromJson(elementNode);
			
		case 'parametre' :
			return parametreFromJson(elementNode);
			
		case 'checkboxes' :
			return checboxesFromJson(elementNode);
			
		case 'checkbox' :
			return checkboxFromJson(elementNode);
			
		case 'valeur' :
			return valeurFromJson(elementNode);
			
		default:
			alert('Type de balise inconnu : ' + elementNode['typeElement']);
			return;
	}
}
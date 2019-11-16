// ARME

function Arme(id, nom, nomVo, logo, image, degatBase, typeDegat, degatSup, typeSup, critique, isContact, hasDegatCharisme, portee, capacite,  front, frontSize, back, backSize){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	this.logo = logo;
	this.image = image;
	this.degatBase = degatBase;
	this.typeDegat = typeDegat;
	this.degatSup = degatSup;
	this.typeSup = typeSup;
	this.critique = critique;
	this.isContact = isContact;
	this.hasDegatCharisme = hasDegatCharisme;
	this.portee = portee;
	this.capacite = capacite;
	this.front = front;
	this.frontSize = frontSize;
	this.back = back;
	this.backSize = backSize;
	
	this.keys = [];
	this.modifiedKeys = [];
}

Arme.prototype.save = function(key, value){
	var oldValue = this.keys[key];
	if(oldValue != undefined && value != oldValue){
		this.modifiedKeys[key] = true;
	}	
	
	this.keys[key] = value;
}

Arme.prototype.get = function(key){
	return this.keys[key];
}

Arme.prototype.print = function(key){
	var value = this.keys[key];
	var isModified = this.modifiedKeys[key] != undefined;
	
	return isModified ? '<em>' + value + '</em>' : value;
}

Arme.prototype.toCarte = function(personnage){
	
	var zone;
	if(this.portee == 'contact'){
		zone='contact_ennemi';
	} else {
		zone='distance_ennemi_1c'
	}
	
	var c_arme = new Carte (this.id, this.nom, this.nomVo, 'EQUIPMENT', this.logo, this.image, zone);
	
	
	c_arme.addElementEncart(new Parametre('Attaque', this.print('attaque')));
	c_arme.addElementEncart(new Parametre('Dégâts', this.print('degats')));
	c_arme.addElementEncart(new Parametre('Critique', this.print('critique')));	

	if(this.portee != 'contact'){
		c_arme.addElementFront(new Parametre('Portée', this.portee));	
	}
	
	if(this.capacite != undefined){
		c_arme.addElementFront(new Parametre('Capacité', this.capacite));	
	}
	
	this.front.forEach(element => c_arme.addElementFront(element));
	c_arme.setFrontSize(this.frontSize);

	c_arme.elementsBack = this.back;
	c_arme.setBackSize(this.backSize);
	return c_arme;
}

Arme.prototype.printJson = function(json){
	var arme = json.startObjet("arme");
	arme.writeParam("id", this.id);
	arme.writeParam("nom", this.nom);
	arme.writeParam("nomVo", this.nomVo);
	arme.writeParam("logo", this.logo);
	arme.writeParam("image", this.image);
	arme.writeParam("degatBase", this.degatBase);
	arme.writeParam("typeDegat", this.typeDegat);
	arme.writeParam("degatSup", this.degatSup);
	arme.writeParam("typeSup", this.typeSup);
	arme.writeParam("critique", this.critique);
	arme.writeParam("isContact", this.isContact);
	arme.writeParam("hasDegatCharisme", this.hasDegatCharisme);
	arme.writeParam("portee", this.portee);
	arme.writeParam("capacite", this.capacite);

	arme.writeParam("frontSize", this.frontSize);
	arme.writeParam("backSize", this.backSize);
	
	var frontTab = arme.writeParamTab("frontElements");
	for(frontKey in this.front){
		frontTab.writeSeparator();
		this.front[frontKey].printJson(json);
	}
	frontTab.endTab();
	
	var backTab = arme.writeParamTab("backElements");
	for(backKey in this.back){
		backTab.writeSeparator();
		this.back[backKey].printJson(json);
	}
	backTab.endTab();
	
	arme.endObjet();	
}

function armeFromJson(armeNode){
	var front = armeNode['frontElements'].map(frontElement => elementFromJson(frontElement));
	var back = armeNode['backElements'].map(backElement => elementFromJson(backElement));
	var arme = new Arme(armeNode['id'], armeNode['nom'], armeNode['nomVo'], armeNode['logo'], armeNode['image'], armeNode['degatBase'], armeNode['typeDegat'], armeNode['degatSup'], armeNode['typeSup'], armeNode['critique'], armeNode['isContact'], armeNode['hasDegatCharisme'],armeNode['portee'], armeNode['capacite'], front, armeNode['frontSize'], back, armeNode['backSize']);

	return arme;
}



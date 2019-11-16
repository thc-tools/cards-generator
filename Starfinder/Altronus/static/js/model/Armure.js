// ARMURE

function Armure(id, nom, nomVo, logo, image, cinetique, energetique, dexMax, malusTest, malusVitesse, nbAmelioration, front, frontSize, back, backSize){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	this.logo = logo;
	this.image = image;
	this.cinetique = cinetique;
	this.energetique = energetique;
	this.dexMax = dexMax;
	this.malusTest = malusTest;
	this.malusVitesse = malusVitesse;
	this.nbAmelioration = nbAmelioration;
	this.front = front;
	this.frontSize = frontSize;
	this.back = back;
	this.backSize = backSize;
}

Armure.prototype.toCarte = function(personnage){
	
	var c_armure = new Carte (this.id, this.nom, this.nomVo, 'EQUIPMENT', this.logo, this.image, 'personnel');

	c_armure.addElementEncart(new Parametre('Armure cinétique', (this.cinetique > 0 ? '+' : '') + this.cinetique));
	c_armure.addElementEncart(new Parametre('Armure énergétique', (this.energetique > 0 ? '+' : '') + this.energetique));
	c_armure.addElementEncart(new Parametre('Bonus de dextérité max', (this.dexMax > 0 ? '+' : '') + this.dexMax));	

	
	this.front.forEach(element => c_armure.addElementFront(element));
	
	c_armure.addElementFront(new Parametre('Malus aux tests', this.malusTest));
	c_armure.addElementFront(new Parametre('Modificateur de vitesse', this.malusVitesse));
	var param = new Parametre('Emplacement d\'amélioration', '', null, null, 'align');
	var checkBoxes = new CheckBoxes();
	for(var i = 0; i< this.nbAmelioration; i++){
		checkBoxes.addCheckBox(new CheckBox());
	}
	param.addElement(checkBoxes);
	c_armure.addElementFront(param);
	
	c_armure.setFrontSize(this.frontSize);

	c_armure.elementsBack = this.back;
	c_armure.setBackSize(this.backSize);
	return c_armure;
}

Armure.prototype.printJson = function(json){
	var armure = json.startObjet("armure");
	armure.writeParam("id", this.id);
	armure.writeParam("nom", this.nom);
	armure.writeParam("nomVo", this.nomVo);
	armure.writeParam("logo", this.logo);
	armure.writeParam("image", this.image);
	armure.writeParam("cinetique", this.cinetique);
	armure.writeParam("energetique", this.energetique);
	armure.writeParam("dexMax", this.dexMax);
	armure.writeParam("malusTest", this.malusTest);
	armure.writeParam("malusVitesse", this.malusVitesse);
	armure.writeParam("nbAmelioration", this.nbAmelioration);
	armure.writeParam("frontSize", this.frontSize);
	armure.writeParam("backSize", this.backSize);
	
	var frontTab = armure.writeParamTab("frontElements");
	for(frontKey in this.front){
		frontTab.writeSeparator();
		this.front[frontKey].printJson(json);
	}
	frontTab.endTab();
	
	var backTab = armure.writeParamTab("backElements");
	for(backKey in this.back){
		backTab.writeSeparator();
		this.back[backKey].printJson(json);
	}
	backTab.endTab();
	
	armure.endObjet();	
}

function armureFromJson(armureNode){
	var front = armureNode['frontElements'].map(frontElement => elementFromJson(frontElement))
	var back = armureNode['backElements'].map(backElement => elementFromJson(backElement))
	var armure = new Armure(armureNode['id'], armureNode['nom'], armureNode['nomVo'], armureNode['logo'], armureNode['image'], armureNode['cinetique'], armureNode['energetique'], armureNode['dexMax'], armureNode['malusTest'], armureNode['malusVitesse'], armureNode['nbAmelioration'], front, armureNode['frontSize'], back, armureNode['backSize']);
	
	return armure;
}


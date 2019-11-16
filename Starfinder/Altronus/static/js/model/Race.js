// RACE

function Race(id, nom, nomVo, pv, modArmureCinetique, modArmureEnergetique){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.pv = pv;
	this.modArmureCinetique = modArmureCinetique;
	this.modArmureEnergetique = modArmureEnergetique;
	this.caracBonuses = new Map();
	this.raceCompetences = new Map();
	
	this.capacites = new Array();
}

Race.prototype.addRaceCaracBonus = function(nom, value){
	this.caracBonuses.set(nom, value);
}

Race.prototype.addRaceCompetence = function(nom){
	this.raceCompetences.set(nom, true);
}

Race.prototype.addCapacite = function(capacite){
	this.capacites.push(capacite);
}

Race.prototype.printJson = function(json){
	var race = json.startObjet("race");
	race.writeParam("id", this.id);
	race.writeParam("nom", this.nom);
	race.writeParam("nomVo", this.nom);
	race.writeParam("pv", this.pv);
	race.writeParam("modArmureCinetique", this.modArmureCinetique);
	race.writeParam("modArmureEnergetique", this.modArmureEnergetique);
	
	var caracTab = race.writeParamTab("caracBonuses");
		for(var [caracName, caracValue] of this.caracBonuses){
			
			caracTab.writeSeparator();
			
			var caracBonus = json.startObjet("caracteristique");
			caracBonus.writeParam('nom', caracName);
			caracBonus.writeParam('valeur', caracValue);
			caracBonus.endObjet();
		}
	caracTab.endTab();
	
	var compTab = race.writeParamTab("competences");
		for(var [compName, comp] of this.raceCompetences){
			
			compTab.writeSeparator();
			
			json.writeQuoted(compName);
		}
	compTab.endTab();
	
	var capaciteTab = race.writeParamTab("capacités");
		for(var capacite of this.capacites){
			
			capaciteTab.writeSeparator();
			
			json.writeQuoted(capacite);
		}
	capaciteTab.endTab();
	
	race.endObjet();	
}

function raceFromJson(raceNode){
	var race = new Race(raceNode['id'], raceNode['nom'], raceNode['nomVo'], raceNode['pv'], raceNode['modArmureCinetique'], raceNode['modArmureEnergetique']);
	
	raceNode['caracBonuses']
		.map(caracNode => elementFromJson(caracNode))
		.forEach(carac => race.addRaceCaracBonus(carac.nom, carac.valeur));
		
	raceNode['capacités']
		.forEach(capacite => race.addCapacite(capacite));
	
	return race;
}
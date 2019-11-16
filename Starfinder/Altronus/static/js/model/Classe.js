// CLASSE

function Classe(id, nom, nomVo, pv, endurance, vitesse, combatant, maitriseReflexe, maitriseVigueur, maitriseVolonte, competenceParNiveau, caracEssentielle){
	
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	this.pv = pv;
	this.endurance = endurance;
	this.vitesse = vitesse;
	this.combatant = combatant;
	this.maitriseReflexe = maitriseReflexe;
	this.maitriseVigueur = maitriseVigueur;
	this.maitriseVolonte = maitriseVolonte;
	this.competenceParNiveau = competenceParNiveau;
	this.caracEssentielle = caracEssentielle;
	
	this.classCompetences = new Map();
}

Classe.prototype.addClassCompetence = function(nom){
	this.classCompetences.set(nom, true);
}

Classe.prototype.printJson = function(json){
	var classe = json.startObjet("classe");
	classe.writeParam("id", this.id);
	classe.writeParam("nom", this.nom);
	classe.writeParam("nomVo", this.nom);
	classe.writeParam("pv", this.pv);
	classe.writeParam("endurance", this.endurance);
	classe.writeParam("vitesse", this.vitesse);
	classe.writeParam("combatant", this.combatant);
	classe.writeParam("maitriseReflexe", this.maitriseReflexe);
	classe.writeParam("maitriseVigueur", this.maitriseVigueur);
	classe.writeParam("maitriseVolonte", this.maitriseVolonte);
	classe.writeParam("competenceParNiveau", this.competenceParNiveau);
	classe.writeParam("caracEssentielle", this.caracEssentielle);
	
	var compTab = classe.writeParamTab("competences");
		for(var [compName, compValue] of this.classCompetences){
			
			compTab.writeSeparator();
			
			json.writeQuoted(compName);
		}
	compTab.endTab();
	
	classe.endObjet();	
}

function classeFromJson(classeNode){
	var classe = new Classe(classeNode['id'], classeNode['nom'],classeNode['nomVo'],classeNode['pv'],classeNode['endurance'],classeNode['vitesse'],
							classeNode['combatant'],	classeNode['maitriseReflexe'],classeNode['maitriseVigueur'],
							classeNode['maitriseVolonte'],classeNode['competenceParNiveau'],classeNode['caracEssentielle']);

	
	classeNode['competences']
		.forEach(comp => classe.addClassCompetence(comp));
	
	return classe;
}
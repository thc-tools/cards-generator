// THEME

function Theme(id, nom, nomVo){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.caracBonuses = new Map();
	this.themeCompetences = new Map();
}

Theme.prototype.addThemeCaracBonus = function(nom, value){
	this.caracBonuses.set(nom, value);
}

Theme.prototype.addThemeCompetence = function(nom){
	this.themeCompetences.set(nom, true);
}

Theme.prototype.printJson = function(json){
	var theme = json.startObjet("theme");
	theme.writeParam("id", this.id);
	theme.writeParam("vf", this.nom);
	theme.writeParam("vo", this.nomVo);
	
	var caracTab = theme.writeParamTab("caracBonuses");
		for(var [caracName, caracValue] of this.caracBonuses){
			
			caracTab.writeSeparator();
			
			var caracBonus = json.startObjet("caracteristique");
			caracBonus.writeParam('nom', caracName);
			caracBonus.writeParam('valeur', caracValue);
			caracBonus.endObjet();
		}
	caracTab.endTab();
	
	var compTab = theme.writeParamTab("competences");
		for(var [compName, comp] of this.themeCompetences){
			
			compTab.writeSeparator();
			
			json.writeQuoted(compName);
		}
	compTab.endTab();
	
	theme.endObjet();	
}

function themeFromJson(themeNode){
	var theme = new Theme(themeNode['id'], themeNode['vf'], themeNode['vo']);
	
	this.themeCompetences = [];
	
	themeNode['caracBonuses']
		.map(caracNode => elementFromJson(caracNode))
		.forEach(carac => theme.addThemeCaracBonus(carac.nom, carac.valeur));
		
	if(themeNode['competences'] != undefined) {
		themeNode['competences']
			.forEach(competence => theme.addThemeCompetence(competence));
	}
		
	return theme;
}

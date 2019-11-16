// PERSONNAGE

function Personnage(id, nom, nomVo, classeName, raceName, themeName, alignement){
	this.keys = new Map();
	this.modifiedKeys = new Map();
	this.caracs = new Map();
	
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.niveau = 0;
	
	this.alignement = alignement;
	
	this.classeName = classeName;
	this.raceName = raceName;
	this.themeName = themeName;

	this.classe;
	this.race;
	this.theme;
	
	this.armesNames = new Array();
	this.armuresNames = new Array();
	this.equipedArmureName;
		
	this.armes = new Map();
	this.armures = new Map();
	this.equipedArmure;
	
	this.equipments = new Array();
	this.capacites = new Array();
	this.dons = new Array();
	
	this.competences = new Map();
	this.competences.set('Accrobatie', new Competence('Accrobatie', 'Dex', 'Vous pouvez garder votre équilibre en traversant des surfaces étroites ou instables, vous débarrasser d’entraves et effectuer un déplacement acrobatique pour éviter des attaques. Vous utilisez également la compétence Acrobaties pour déterminer le succès de manoeuvres compliquées lorsque vous volez.'));
	this.competences.set('Athlétisme', new Competence('Athlétisme', 'For', 'Vous pouvez escalader des surfaces verticales, sauter par-dessus des obstacles et nager.'));
	this.competences.set('Bluff', new Competence('Bluff', 'Cha', 'Vous pouvez agir et parler pour créer des diversions, feinter vos ennemis, dire des mensonges de façon convaincante et transmettre des messages secrets.'));
	this.competences.set('Culture', new Competence('Culture', 'Int', 'Vous avez étudié un grand nombre des cultures connues de la galaxie et possédez une connaissance riche et approfondie des divers courants culturels sous-jacents et des langues en général. Chaque fois que vous investissez un rang en Culture, vous apprenez à parler et à écrire une nouvelle langue.'));
	this.competences.set('Déguisement', new Competence('Déguisement', 'Cha', 'Vous êtes capable de modifier votre apparence pour vous fondre dans une foule ou tromper autrui pour vous infiltrer quelque part.'));
	this.competences.set('Diplomatie', new Competence('Diplomatie', 'Cha', 'Vous pouvez persuader vos interlocuteurs pour qu’ils se montrent amicaux envers vous, résoudre conflits et différends, et recueillir des informations et des rumeurs communes à propos d’une communauté.'));
	this.competences.set('Discrétion', new Competence('Discrétion', 'Dex', 'Vous pouvez rester caché et vous déplacer silencieusement pour éviter de vous faire repérer, ce qui vous permet de passer inaperçu auprès de gardes ou de frapper un adversaire sans qu’il sache où vous vous situez.'));
	this.competences.set('Escamotage', new Competence('Escamotage', 'Dex', 'Vous pouvez cacher des objets de petite taille, faire les poches de quelqu’un et accomplir d’autres exploits de dextérité manuelle sans vous faire repérer.'));
	this.competences.set('Informatique', new Competence('Informatique', 'Int', 'Vous pouvez faire fonctionner, manipuler et pirater des systèmes informatiques. Si vous ne pouvez accéder physiquement à l’interface utilisateur d’un système informatique, vous devez utiliser une trousse de piratage pour accéder au système et le manipuler.'));
	this.competences.set('Ingénierie', new Competence('Ingénierie', 'Int', 'Vous pouvez identifier, fabriquer, réparer ou désactiver des appareils technologiques, évaluer la solidité de structures et de machines, et amorcer et désamorcer des explosifs de manière appropriée. Vous subissez un malus de -2 au test si vous n’avez pas de trousse d’ingénierie lorsque vous effectuez un test d’Ingénierie.'));
	this.competences.set('Intimidation', new Competence('Intimidation', 'Cha', 'Vous pouvez impressionner vos ennemis en faisant preuve de bravoure ou les intimider en les menaçant verbalement pour les pousser à agir comme vous l’entendez.'));
	this.competences.set('Médecine', new Competence('Médecine', 'Int', 'Vous avez étudié la biologie de nombreuses espèces et pouvez traiter un certain nombre de blessures et de maladies différentes. Les DD de la plupart des tâches liées à la Médecine dépendent du type d’équipement utilisé.'));
	this.competences.set('Mysticisme', new Competence('Mysticisme', 'Sag', 'Vous avez étudié les domaines de la magie, de la religion, des plans et de l’incantation des sorts, ce qui vous permet d’identifier objets magiques et sorts, et de créer des objets magiques.'));
	this.competences.set('Perception', new Competence('Perception', 'Sag', 'Vous pouvez utiliser tous vos sens (l’ouïe, le goût, le toucher, la vue et l’odorat) pour repérer un danger ou des détails subtils, et chercher des objets dissimulés ou des créatures cachées.'));
	this.competences.set('Pilotage', new Competence('Pilotage', 'Dex', 'Vous savez conduire des véhicules, piloter des vaisseaux spatiaux et définir un itinéraire.'));
	this.competences.set('Profession', new Competence('Profession', 'Cha, Int ou Sag', 'Vous pratiquez un métier, une spécialité ou un art créatif en particulier. Vous savez utiliser les outils de votre métier, accomplir les tâches quotidiennes de la profession, superviser des assistants et gérer les problèmes courants.'));
	this.competences.set('Psychologie', new Competence('Psychologie', 'Sag', 'Vous pouvez détecter les mensonges et deviner les véritables intentions des créatures avec lesquelles vous interagissez.'));
	this.competences.set('Sciences de la vie', new Competence('Sciences de la vie', 'Int', 'Vous avez étudié les sciences des choses vivantes, depuis les plus petits organismes jusqu’aux plus imposants systèmes biologiques.'));
	this.competences.set('Sciences physiques', new Competence('Sciences physiques', 'Int', 'Vous avez étudié les sciences liées aux systèmes non vivants, depuis les plus minuscules atomes jusqu’aux plus gigantesques des corps célestes.'));
	this.competences.set('Survie', new Competence('Survie', 'Sag', 'Vous pouvez traverser tous types d’environnements sauvages et y survivre, suivre des pistes et des traces, gérer les animaux sauvages et chevaucher ceux domestiqués.'));
}

Personnage.prototype.setNiveau = function(niveau){
	this.niveau = niveau;
}

Personnage.prototype.setBaseCarac = function(nom, value){
	this.caracs.set(nom, value);
}

Personnage.prototype.addRangCompetence = function(nom, rang){
	this.competences.get(nom).rang = this.competences.get(nom).rang + rang;
}

Personnage.prototype.setRangCompetence = function(nom, rang){
	this.competences.get(nom).rang = rang;
}

Personnage.prototype.addEquipment = function(equipmentName){
	this.equipments.push(equipmentName);
}

Personnage.prototype.addCapacite = function(capacite){
	this.capacites.push(capacite);
}

Personnage.prototype.addDon = function(don){
	this.dons.push(don);
}

Personnage.prototype.addArmeName = function(armeName){
	this.armesNames.push(armeName);
}

Personnage.prototype.addArme = function(arme){
	this.armes.set(arme.id, arme);
}

Personnage.prototype.addArmureName = function(armureName){
	this.armuresNames.push(armureName);
}

Personnage.prototype.addArmure = function(armure){
	this.armures.set(armure.id, armure);
}

Personnage.prototype.equiperArmureName = function(armureName){
	this.equipedArmureName = armureName;
}

Personnage.prototype.equiperArmure = function(armure){
	this.equipedArmure = armure;
}

Personnage.prototype.save = function(key, value){
	var oldValue = this.keys.get(key);
	if(oldValue != undefined && value != oldValue){
		this.modifiedKeys.set(key, true);
	}	
	
	this.keys.set(key, value);
}

Personnage.prototype.get = function(key){
	return this.keys.get(key);
}

Personnage.prototype.print = function(key){
	var value = this.keys.get(key);
	var isModified = this.modifiedKeys.has(key);
	
	return isModified ? '<em>' + value + '</em>' : value;
}

Personnage.prototype.compute = function(){
	this.resolve();
	this.computeByNiveau(true);
	this.computeByNiveau(false);
}

Personnage.prototype.resolve = function(){
	if(currentUniverse == undefined){
		alert("Résolution interompue : pas d'univers courrant");
	} else {
		this.race = currentUniverse['races'].get(this.raceName);
		
		if(this.race == undefined){
			alert('Race non trouvée : ' + this.raceName);
		}
		
		this.classe = currentUniverse['classes'].get(this.classeName);
		
		if(this.classe == undefined){
			alert('Classe non trouvée : ' + this.classeName);
		}
		
		this.theme = currentUniverse['themes'].get(this.themeName);
		
		if(this.theme == undefined){
			alert('Théme non trouvé : ' + this.themeName);
		}
		
		for(var armeName of this.armesNames){
			var arme = currentUniverse['armes'].get(armeName);
			if(arme == undefined){
				alert('Arme non trouvée : ' + armeName);
			} else {
				this.addArme(arme);
			}
		}
		
		for(var armureName of this.armuresNames){
			var armure = currentUniverse['armures'].get(armureName);
			if(armure == undefined){
				alert('Armure non trouvée : ' + armureName);
			} else {
				this.addArmure(armure);
			}
		}
					   
		var equipedArmure = this.armures.get(this.equipedArmureName);
		
		if(equipedArmure == undefined){
			alert('Armure équipée non trouvée : ' + this.equipedArmureName);
		} else {
			this.equipedArmure + equipedArmure;
		}
	
	}
}

Personnage.prototype.computeByNiveau = function(prevNiveau){
	this.computeNoms();
	this.computeNiveau(prevNiveau);
	this.computeCaracs();
	this.computeBba();
	this.computePv();
	this.computeEndurance();
	this.computePerseverance();
	this.computeBonusArmure();
	this.computeVitesse();
	this.computeSauvegarde();
	this.computeCompetences();
	this.computeArmes();
	this.computeArmures();
}

Personnage.prototype.computeNiveau = function(prevNiveau){
	var niv = prevNiveau ? (parseInt(this.niveau) - 1) : parseInt(this.niveau);
	
	this.save('niveau', niv);
}

Personnage.prototype.computeNoms = function(){
	this.save('nom', this.nom);
	this.save('nomVo', this.nomVo);
	this.save('nom_classe', this.classe.nom);
	this.save('nomVo_classe', this.classe.nomVo);
	this.save('nom_race', this.race.nom);
	this.save('nomVo_race', this.race.nomVo);
	this.save('nom_theme', this.theme.nom);
	this.save('nomVo_theme', this.theme.nomVo);
	this.save('alignement', this.alignement);
}

Personnage.prototype.computeCaracs = function(){
	this.computeCarac('For');
	this.computeCarac('Dex');
	this.computeCarac('Con');
	this.computeCarac('Sag');
	this.computeCarac('Int');
	this.computeCarac('Cha');
}

Personnage.prototype.computeCarac = function(nom){
	var base = parseInt(this.caracs.get(nom));
	var bonus = (this.race.caracBonuses.get(nom) != undefined ? parseInt(this.race.caracBonuses.get(nom)) : 0) + (this.theme.caracBonuses.get(nom) != undefined ? parseInt(this.theme.caracBonuses.get(nom)) : 0);
	var value = base + bonus;
	var mod = Math.floor((value - 10)/2);
	
	this.save(nom, value);
	this.save(nom + '_base', base);
	this.save(nom + '_bonus', bonus);
	this.save(nom + '_bonus_aff', (bonus >= 0 ? '+' : '') + bonus);
	this.save('mod_' + nom, mod);
	this.save('mod_' + nom + '_aff', (mod >= 0 ? '+' : '') + mod);
}

Personnage.prototype.computePv = function(){
	this.save('pv_classe', parseInt(this.classe.pv));
	this.save('pv_race', parseInt(this.race.pv));

	var pv = this.get('pv_race') + ( this.get('niveau') * this.get('pv_classe'));
	this.save('pv',  pv);
}

Personnage.prototype.computeEndurance = function(){
	this.save('endurance_classe', parseInt(this.classe.endurance));
	
	var endurance = (this.get('endurance_classe') + this.get('mod_Con')) * this.get('niveau');
	this.save('endurance', endurance);
}

Personnage.prototype.computeBonusArmure = function(){
	
	if(this.race.modArmureCinetique != undefined){
		this.save('mod_cinetique', parseInt(this.race.modArmureCinetique));
	}
	
	if(this.race.modArmureEnergetique != undefined){
		this.save('mod_energetique', parseInt(this.race.modArmureEnergetique));
	}
}

Personnage.prototype.computePerseverance = function(){	
	var perseverance = Math.max(Math.floor(this.get('niveau') /2) ,1) + this.get('mod_' + this.classe.caracEssentielle);
	this.save('perseverance', perseverance);
}

Personnage.prototype.computeSauvegarde = function(){
	var niveau = this.get('niveau');
	
	var maitrisedValue = niveau + 2 - Math.floor((niveau + 1)/2);
	var unmaitrisedValue = niveau - Math.floor((niveau+1)/3) - Math.floor((niveau+2)/3);
	
	if(this.classe.maitriseReflexe == "true"){
		this.save('reflexes', (maitrisedValue >= 0 ? '+' : '') + maitrisedValue);
	} else {
		this.save('reflexes', (unmaitrisedValue >= 0 ? '+' : '') + unmaitrisedValue);
	}
	
	if(this.classe.maitriseVigueur == "true"){
		this.save('vigueur', (maitrisedValue >= 0 ? '+' : '') + maitrisedValue);
	} else {
		this.save('vigueur', (unmaitrisedValue >= 0 ? '+' : '') + unmaitrisedValue);
	}
	
	if(this.classe.maitriseVolonte == "true"){
		this.save('volonte', (maitrisedValue >= 0 ? '+' : '') + maitrisedValue);
	} else {
		this.save('volonte', (unmaitrisedValue >= 0 ? '+' : '') + unmaitrisedValue);
	}
}

Personnage.prototype.computeVitesse = function(){
	this.save('vitesse_feet', parseInt(this.classe.vitesse));
	this.save('vitesse_cases', parseInt(this.classe.vitesse) / 5);
}

Personnage.prototype.computeBba = function(){
	var niveau = this.get('niveau');
	
	var bba;
	if(this.classe.combatant == 'true'){
		bba = niveau;
	} else {
		bba = (niveau - 1) - Math.floor((niveau - 1)/4);
	}
	
	this.save('bba', bba);
	this.save('bba_aff', (bba >= 0 ? '+' : '') + bba);
}

Personnage.prototype.computeCompetences = function(){
	this.save('rang_by_niveau', parseInt(this.classe.competenceParNiveau) + this.get('mod_Int'));
	
	for(var [compName, comp] of this.competences){
		
		var deClasse = this.classe.classCompetences.get(compName) || this.race.raceCompetences.get(compName) || this.theme.themeCompetences.get(compName);
		comp.deClasse = deClasse;
		
		var value = parseInt(comp.rang) + (deClasse ? 3 : 0) + this.get('mod_' + comp.carac);
		comp.value = parseInt(comp.rang) > 0 ? value : 0;
	}
	
	var blockComp = new Block('rowwrap');
	for(var [compName, comp] of this.getUsedCompetences()){
		blockComp.addElement(new Parametre(compName, comp.value));
	}	
	var compFront = jQuery('<div>');	
	blockComp.print(compFront);
	this.save('competences_front',compFront.html());
	
	var blockBack = new Block('');
	for(var [compName, comp] of this.getUsedCompetences()){
		blockBack.addElement(new Ligne(comp.nom + ' :' + comp.rang, comp.description, true));
	}	
	var compBack = jQuery('<div>');	
	blockBack.print(compBack);
	this.save('competences_back',compBack.html());
	
	var blockClasse = new Block('rowwrap');
	for(var [compName, comp] of this.getClassCompetences()){
		blockClasse.addElement(new Parametre(compName, null, null, '(' + comp.carac +')'));
	}	
	var compClasse = jQuery('<div>');	
	blockClasse.print(compClasse);
	this.save('competences_classe',compClasse.html());
}

Personnage.prototype.getClassCompetences = function(){
	var filtered = new Map();
	for(var [compName, comp] of this.competences){
		if(comp.isDeClasse()){
			filtered.set(compName, comp);
		}
	}
	return filtered;
}

Personnage.prototype.getUsedCompetences = function(){
	var filtered = new Map();
	for(var [compName, comp] of this.competences){
		if(comp.isUsed()){
			filtered.set(compName, comp);
		}
	}
	return filtered;
}

Personnage.prototype.getPerseveranceList = function(){
	var list = new Array();
	for(var i = 0; i< this.get('perseverance'); i++){
		list[i] = true;
	}
	return list;
}

Personnage.prototype.computeArmes = function(){
	for(var [armeKey, arme] of this.armes){
		
		var attaque = this.get('bba') + (arme.isContact ? this.get('mod_For') : this.get('mod_Dex'));
		var bonusDegat = (arme.isContact ? this.get('mod_For') : 0) + (arme.hasDegatCharisme ? this.get('mod_Cha') : 0);
		var bonusDegat_aff = (bonusDegat > 0 ? (' +' + bonusDegat) : '');
		var degats = arme.degatBase + bonusDegat_aff + ' (' + arme.typeDegat + ')' + (arme.degatSup != undefined ? ' +' + arme.degatSup + ' (' + arme.typeSup + ')' : '');
		
		arme.save('attaque', attaque);
		arme.save('bonusDegat', bonusDegat);
		arme.save('bonusDegat_aff', bonusDegat_aff);
		arme.save('degats', degats);
		arme.save('critique', arme.critique);
	}
}

Personnage.prototype.computeArmures = function(){
	var cinetique = 10;
	var energetique = 10;
	
	var armure = this.equipedArmure;
	if(armure != undefined) {
		cinetique += parseInt(armure.cinetique) + Math.min(this.get('mod_Dex'), parseInt(armure.dexMax)) + (this.get('mod_cinetique') != undefined ? this.get('mod_cinetique') : 0);
		energetique += parseInt(armure.energetique) + Math.min(this.get('mod_Dex'), parseInt(armure.dexMax)) + (this.get('mod_energetique') != undefined ? this.get('mod_energetique') : 0);
	}
	
	this.save('cinetique', cinetique);
	this.save('energetique', energetique);
}



Personnage.prototype.printJson = function(json){
	var personnage = json.startObjet("personnage");
	
	personnage.writeParam("id", this.id);
	personnage.writeParam("nom", this.nom);
	personnage.writeParam("nomVo", this.nomVo);
	personnage.writeParam("niveau", this.niveau);
	personnage.writeParam("classeName", this.classeName);
	personnage.writeParam("raceName", this.raceName);
	personnage.writeParam("themeName", this.themeName);
	personnage.writeParam("alignement", this.alignement);
	personnage.writeParam("equipedArmureName", this.equipedArmureName);
	
	var armesTab = personnage.writeParamTab("armesNames");
		for(var armeName of this.armesNames){
			
			armesTab.writeSeparator();
			json.writeQuoted(armeName);
		}
	armesTab.endTab();
	
	var armuresTab = personnage.writeParamTab("armuresNames");
		for(var armureName of this.armuresNames){
			
			armuresTab.writeSeparator();
			json.writeQuoted(armureName);
		}
	armuresTab.endTab();
	
	var equipmentTab = personnage.writeParamTab("équipements");
		for(var equipmentName of this.equipments){
			
			equipmentTab.writeSeparator();
			json.writeQuoted(equipmentName);
		}
	equipmentTab.endTab();
	
	var caracTab = personnage.writeParamTab("baseCarac");
		for(var [caracName, caracValue] of this.caracs){
			
			caracTab.writeSeparator();
			var carac = json.startObjet("caracteristique");
			carac.writeParam('nom', caracName);
			carac.writeParam('valeur', caracValue);
			carac.endObjet();
		}
	caracTab.endTab();
	
	var compTab = personnage.writeParamTab("competences");
		for(var [compName, comp] of this.competences){
						
			compTab.writeSeparator();
			comp.printJson(json);
		}
	compTab.endTab();
	
	var capaciteTab = personnage.writeParamTab("capacités");
		for(var capacite of this.capacites){
						
			capaciteTab.writeSeparator();
			json.writeQuoted(capacite);
		}
	capaciteTab.endTab();
	
	var donTab = personnage.writeParamTab("dons");
	for(var don of this.dons){
					
		donTab.writeSeparator();
		json.writeQuoted(don);
	}
	donTab.endTab();
	
	personnage.endObjet();	
}

function personnageFromJson(personnageNode){
	var personnage = new Personnage(personnageNode['id'], personnageNode['nom'], personnageNode['nomVo'], personnageNode['classeName'], personnageNode['raceName'], personnageNode['themeName'], personnageNode['alignement']);
	
	personnage.setNiveau(personnageNode['niveau']);
	
	personnageNode['armesNames'].forEach(armeName => personnage.addArmeName(armeName));
	personnageNode['armuresNames'].forEach(armureName => personnage.addArmureName(armureName));
	personnage.equiperArmureName(personnageNode['equipedArmureName']);
	personnageNode['équipements'].forEach(equipmentName => personnage.addEquipment(equipmentName));
	
	personnageNode['baseCarac']
		.map(caracNode => elementFromJson(caracNode))
		.forEach(carac => personnage.setBaseCarac(carac.nom, carac.valeur));
		
	personnageNode['competences']
		.map(compNode => elementFromJson(compNode))
		.forEach(comp => personnage.setRangCompetence(comp.nom, comp.rang));
		
	personnageNode['capacités'].forEach(capacite => personnage.addCapacite(capacite));
	personnageNode['dons'].forEach(don => personnage.addDon(don));
	
	return personnage;
}
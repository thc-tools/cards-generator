// VAISSEAU

function Vaisseau(id, nom, nomVo, modeleName, armatureName, reacteurName, propulseurName){
	this.keys = new Map();
	this.modifiedKeys = new Map();
	
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.echelon = 0;
	this.rangPilote = 0;
	
	this.modeleName = modeleName;
	this.armatureName = armatureName;
	this.reacteurName = reacteurName;
	this.propulseurName = propulseurName;
	this.bouclierName;
	this.blindageName;
	this.contremesureName;
	
	this.armature;
	this.reacteur;
	this.propulseur;
	this.bouclier;
	this.blindage;
	this.contremesure;
	
	this.armesNames = new Map();
	this.armesNames.set('proue', new Array());
	this.armesNames.set('poupe', new Array());
	this.armesNames.set('babord', new Array());
	this.armesNames.set('tribord', new Array());
	this.armesNames.set('tourelle', new Array());
	
	this.armes = new Map();
	this.armes.set('proue', new Map());
	this.armes.set('poupe', new Map());
	this.armes.set('babord', new Map());
	this.armes.set('tribord', new Map());
	this.armes.set('tourelle', new Map());
}

Vaisseau.prototype.addArmeName = function(arc, armeName){
	this.armesNames.get(arc).push(armeName);
}

Vaisseau.prototype.addArme = function(arc, arme){
	this.armes.get(arc).set(arme.nom, arme);
}

Vaisseau.prototype.setBlindageName = function(blindageName){
	this.blindageName = blindageName;
}

Vaisseau.prototype.setBlindage = function(blindage){
	this.blindage = blindage;
}

Vaisseau.prototype.setBouclierName = function(bouclierName){
	this.bouclierName = bouclierName;
}

Vaisseau.prototype.setBouclier = function(bouclier){
	this.bouclier = bouclier;
}

Vaisseau.prototype.setContremesureName = function(contremesureName){
	this.contremesureName = contremesureName;
}

Vaisseau.prototype.setContremesure = function(contremesure){
	this.contremesure = contremesure;
}

Vaisseau.prototype.setEchelon = function(echelon){
	this.echelon = echelon;
}

Vaisseau.prototype.setRangPilote = function(rangPilote){
	this.rangPilote = rangPilote;
}

Vaisseau.prototype.save = function(key, value){
	var oldValue = this.keys.get(key);
	if(oldValue != undefined && value != oldValue){
		this.modifiedKeys.set(key, true);
	}	
	
	this.keys.set(key, value);
}

Vaisseau.prototype.get = function(key){
	return this.keys.get(key);
}

Vaisseau.prototype.print = function(key){
	var value = this.keys.get(key);
	var isModified = this.modifiedKeys.has(key);
	
	return isModified ? '<em>' + value + '</em>' : value;
}

Vaisseau.prototype.resolve = function(){
	if(currentUniverse == undefined){
		alert("Résolution interompue : pas d'univers courrant");
	} else {
		
		if(this.armatureName != undefined){
			this.armature = currentUniverse['piecesVaisseau'].get(this.armatureName);
			if(this.armature == undefined){
				alert('Armature non trouvée : ' + this.armatureName);
			}
		}
		
		if(this.reacteurName != undefined){
			this.reacteur = currentUniverse['piecesVaisseau'].get(this.reacteurName);
			if(this.reacteur == undefined){
				alert('Réacteur non trouvé : ' + this.reacteurName);
			}
		}
		
		if(this.propulseurName != undefined){
			this.propulseur = currentUniverse['piecesVaisseau'].get(this.propulseurName);
			if(this.propulseur == undefined){
				alert('Propulseur non trouvé : ' + this.propulseurName);
			}
		}
		
		if(this.bouclierName != undefined){
			this.bouclier = currentUniverse['piecesVaisseau'].get(this.bouclierName);
			if(this.bouclier == undefined){
				alert('Bouclier non trouvé : ' + this.bouclierName);
			}
		}
		
		if(this.blindageName != undefined){
			this.blindage = currentUniverse['piecesVaisseau'].get(this.blindageName);
			if(this.blindage == undefined){
				alert('Blindage non trouvé : ' + this.blindageName);
			}
		}
		
		if(this.contremesureName != undefined){
			this.contremesure = currentUniverse['piecesVaisseau'].get(this.contremesureName);
			if(this.contremesure == undefined){
				alert('Contre-mesures non trouvées : ' + this.contremesureName);
			}
		}
		
		for(var [arcName, armesArc] of this.armesNames){
			for(var armeName of armesArc){
				var arme = currentUniverse['piecesVaisseau'].get(armeName);
				if(arme == undefined){
					alert('Arme de vaisseau non trouvée : ' + armeName + ' (' + arcName +')');
				} else {
					this.addArme(arcName, arme);
				}
			}
		} 
	}
}

Vaisseau.prototype.compute = function(){
	this.resolve();
	this.computeByEchelon(true);
	this.computeByEchelon(false);
}

Vaisseau.prototype.computeByEchelon = function(prevEchelon){
	this.computeEchelon(prevEchelon);
	this.computeNoms();
	this.computeArmature();
	this.computeReacteur();
	this.computePropulseur();
	this.computeBlindage();
	this.computeBouclier();
	this.computeArmes();
	this.computeContremesure();
	this.computeVirage();
	this.computeCaIv();
}

Vaisseau.prototype.computeEchelon = function(prevEchelon){
	var echelon = prevEchelon ? (this.echelon - 1) : this.echelon;
	
	this.save('echelon', parseInt(echelon));
}

Vaisseau.prototype.computeNoms = function(){
	this.save('nom', this.nom);
	this.save('nomVo', this.nomVo);
	
	if(this.armature != undefined) {
		this.save('nom_armature', this.armature.nom);
		this.save('nomVo_armature', this.armature.nomVo);
	} else {
		this.save('nom_armature', 'Aucune armature');
		this.save('nomVo_armature', 'No armature');
	}
	
	if(this.reacteur != undefined) {
		this.save('nom_reacteur', this.reacteur.nom);
		this.save('nomVo_reacteur', this.reacteur.nomVo);
	}else {
		this.save('nom_reacteur', 'Aucun réacteur');
		this.save('nomVo_reacteur', 'No reactor');
	}
	
	if(this.propulseur != undefined) {
		this.save('nom_propulseur', this.propulseur.nom);
		this.save('nomVo_propulseur', this.propulseur.nomVo);
	}else {
		this.save('nom_propulseur', 'Aucun propulseur');
		this.save('nomVo_propulseur', 'No proppeler');
	}
}

Vaisseau.prototype.computeArmature = function(){
	if(this.armature != undefined) {
		this.save('taille', this.armature.taille);
		
		switch(this.armature.taille){
			case 'TP' :
				this.save('taille_aff', 'Trés petit');
				this.save('seuil_degats', '-');
				this.save('bonus_ca_taille', 2);
				this.save('bonus_iv_taille', 2);
				break;
			case 'P' : 
				this.save('taille_aff', 'Petit');
				this.save('seuil_degats', '-');
				this.save('bonus_ca_taille', 1);
				this.save('bonus_iv_taille', 1);
				break;
			case 'M' :
				this.save('taille_aff', 'Moyen');
				this.save('seuil_degats', '-');
				this.save('bonus_ca_taille', 0);
				this.save('bonus_iv_taille', 0);
				break;
			case 'G' : 
				this.save('taille_aff', 'Grand');
				this.save('seuil_degats', '-');
				this.save('bonus_ca_taille', -1);
				this.save('bonus_iv_taille', -1);
				break;
			case 'TG' :
				this.save('taille_aff', 'Trés grand');
				this.save('seuil_degats', 5);
				this.save('bonus_ca_taille', -2);
				this.save('bonus_iv_taille', -2);
				break;
			case 'Gig' :
				this.save('taille_aff', 'Gigantesque');
				this.save('seuil_degats', 10);
				this.save('bonus_ca_taille', -4);
				this.save('bonus_iv_taille', -4);
				break;
			case 'C' :
				this.save('taille_aff', 'Colossal');
				this.save('seuil_degats', 15);
				this.save('bonus_ca_taille', -8);
				this.save('bonus_iv_taille', -8);
				break;
		}	
		
		this.save('bonus_ca_taille_aff', (this.get('bonus_ca_taille') >= 0 ? '+' : '') + this.get('bonus_ca_taille'));
		this.save('bonus_iv_taille_aff', (this.get('bonus_iv_taille') >= 0 ? '+' : '') + this.get('bonus_iv_taille'));
		
		this.save('manoeuvrabilite', this.armature.manoeuvrabilite);
		switch(this.armature.manoeuvrabilite){
			case 'Déplorable' :
				this.save('distance_virage_manoeuvrabilite', 4);
				this.save('mod_Pil_manoeuvrabilite', -2);
				break;
			case 'Médiocre' :
				this.save('distance_virage_manoeuvrabilite', 3);
				this.save('mod_Pil_manoeuvrabilite', -1);
				break;
			case 'Moyenne' :
				this.save('distance_virage_manoeuvrabilite', 2);
				this.save('mod_Pil_manoeuvrabilite', 0);
				break;
			case 'Bonne' :
				this.save('distance_virage_manoeuvrabilite', 1);
				this.save('mod_Pil_manoeuvrabilite', 1);
				break;
			case 'Parfaite' :
				this.save('distance_virage_manoeuvrabilite', 0);
				this.save('mod_Pil_manoeuvrabilite', 2);
				break;		
		}
		
		this.save('mod_Pil_manoeuvrabilite_aff', (this.get('mod_Pil_manoeuvrabilite') >= 0 ? '+' : '') + this.get('mod_Pil_manoeuvrabilite'));
			
		this.save('nbCompartiment', parseInt(this.armature.nbCompartiment));
		this.save('minEquip', parseInt(this.armature.minEquip));
		this.save('maxEquip', parseInt(this.armature.maxEquip));
		
		var ptStruct = parseInt(this.armature.pointStructure) + (Math.floor(this.echelon / 4) * parseInt(this.armature.facteurStructure));
		this.save('structure_base', parseInt(this.armature.pointStructure));
		this.save('structure_facteur', parseInt(this.armature.facteurStructure));
		this.save('structure', ptStruct);
		
		var critique = Math.floor(ptStruct / 5) ;
		this.save('seuil_critique', parseInt(critique));
	} else {
		this.save('taille', 'Inconnue');
		this.save('taille_aff', 'Inconnue');
		this.save('seuil_degats', '-');
		this.save('bonus_ca_taille', 0);
		this.save('bonus_iv_taille', 0);
		this.save('bonus_ca_taille_aff', '-');
		this.save('bonus_iv_taille_aff', '-');
		this.save('distance_virage_manoeuvrabilite', 0);
		this.save('mod_Pil_manoeuvrabilite', 0);
		
		this.save('mod_Pil_manoeuvrabilite_aff', '-');
			
		this.save('nbCompartiment', '-');
		this.save('minEquip', '-');
		this.save('maxEquip', '-');
		
		this.save('structure_base', '-');
		this.save('structure_facteur', '-');
		this.save('structure', ptStruct);
		
		this.save('seuil_critique', '-');
		
	}
}

Vaisseau.prototype.computeReacteur = function(){
	if(this.reacteur != undefined){
		this.save('nb_UE', parseInt(this.reacteur.UE));
	} else {
		this.save('nb_UE', '-');
	}
}

Vaisseau.prototype.computePropulseur = function(){
	if(this.propulseur != undefined){
		this.save('vitesseMax', parseInt(this.propulseur.vitesse));
		if(this.propulseur.vitesse <= 4){
			this.save('mod_Pil_vitesse', 2);
		} else if(this.propulseur.vitesse < 8){
			this.save('mod_Pil_vitesse', 1);
		} else if(this.propulseur.vitesse <= 10){
			this.save('mod_Pil_vitesse', 0);
		} else if(this.propulseur.vitesse < 14){
			this.save('mod_Pil_vitesse', -1);
		} else if(this.propulseur.vitesse >= 14){
			this.save('mod_Pil_vitesse', -2);
		}
		
		this.save('mod_Pil_propulseur', parseInt(this.propulseur.modPilotage));
		this.save('mod_Pil_propulseur_aff', (this.get('mod_Pil_propulseur') >= 0 ? '+' : '') + this.get('mod_Pil_propulseur'));
	} else {
		this.save('vitesseMax', 0);
		this.save('mod_Pil_vitesse', 0);
		this.save('mod_Pil_propulseur', 0);
		this.save('mod_Pil_propulseur_aff', '-');
	}
}

Vaisseau.prototype.computeBlindage = function(){
	if(this.blindage != undefined){
		this.save('nom_blindage',  this.blindage.nom);
		this.save('nomVo_blindage',  this.blindage.nomVo);

		this.save('bonus_ca_blindage', parseInt(this.blindage.bonusCa));
		this.save('bonus_iv_blindage', parseInt(this.blindage.bonusIv));
		this.save('distance_virage_blindage', parseInt(this.blindage.distanceVirage));
	} else {
		this.save('nom_blindage',  'Aucun blindage');
		this.save('nomVo_blindage',  'no blindage');

		this.save('bonus_ca_blindage', 0);
		this.save('bonus_iv_blindage', 0);
		this.save('distance_virage_blindage', 0);
	}
}

Vaisseau.prototype.computeBouclier = function(){
	if(this.bouclier != undefined){
		this.save('nom_bouclier',  this.bouclier.nom);
		this.save('nomVo_bouclier',  this.bouclier.nomVo);

		this.save('bouclier', parseInt(this.bouclier.bouclier));
		this.save('bouclier_repartition', parseInt(this.bouclier.bouclier) / 4);
		this.save('bouclier_min', parseInt(this.bouclier.bouclier) / 10);
		this.save('bouclier_regen', parseInt(this.bouclier.regen));
	} else {
		this.save('nom_bouclier',  'Aucun bouclier');
		this.save('nomVo_bouclier',  'No shield');

		this.save('bouclier', 0);
		this.save('bouclier_repartition', 0);
		this.save('bouclier_min', 0);
		this.save('bouclier_regen', 0);
	}
}

Vaisseau.prototype.computeContremesure = function(){
	if(this.contremesure != undefined){
		this.save('nom_contremesure', this.contremesure.nom);
		this.save('nomVo_contremesure', this.contremesure.nomVo);

		this.save('bonus_iv_contremesure', parseInt(this.contremesure.bonusIv));
	} else {
		this.save('nom_contremesure', 'Aucune contre-mesure');
		this.save('nomVo_contremesure', 'No defenses');
		this.save('bonus_iv_contremesure', 0);
	}
}

Vaisseau.prototype.computeArmes = function(){
	for(var [arc,armesArc] of this.armes){
		for(var [position, arme] of armesArc){
			
			this.save('weapon_' + arc + '_nom', arme.nom);
			this.save('weapon_' + arc + '_nomVo', arme.nomVo);
			
			var porteeHexagones;
			switch(arme.portee){
				case 'Courte' :
					porteeHexagones = 5;
					break;
				case 'Moyenne' :
					porteeHexagones = 10;
					break;
				case 'Longue' :
					porteeHexagones = 20;
					break;
			}
			
			this.save('weapon_' + arc + '_portee', arme.portee + ' (' + porteeHexagones + ' hexagones)');
			this.save('weapon_' + arc + '_degats', arme.degats);
			this.save('weapon_' + arc + '_propriete', arme.propriete);
			this.save('weapon_' + arc + '_vitesse', arme.vitesse);
		}
	}
		
}

Vaisseau.prototype.computeVirage = function(){
	var virage = this.get('distance_virage_manoeuvrabilite') + (this.get('distance_virage_blindage') != undefined ? this.get('distance_virage_blindage') : 0);
	this.save('distance_virage', virage);
	
	var modPilotage = this.get('mod_Pil_propulseur') + this.get('mod_Pil_manoeuvrabilite') + this.get('mod_Pil_vitesse');
	this.save('mod_Pil', modPilotage);
}

Vaisseau.prototype.computeCaIv = function(){
	var ca = 10 + parseInt(this.rangPilote) + this.get('bonus_ca_taille') + (this.get('bonus_ca_blindage') != undefined ? this.get('bonus_ca_blindage') : 0);
	var iv = 10 + parseInt(this.rangPilote) + this.get('bonus_iv_taille') + (this.get('bonus_iv_contremesure') != undefined ? this.get('bonus_iv_contremesure') : 0) + (this.get('bonus_iv_blindage') != undefined ? this.get('bonus_iv_blindage') : 0);
	this.save('ca', ca);
	this.save('iv', iv);
}

Vaisseau.prototype.printJson = function(json){
	var vaisseau = json.startObjet("vaisseau");
	
	vaisseau.writeParam("id", this.id);
	vaisseau.writeParam("nom", this.nom);
	vaisseau.writeParam("nomVo", this.nomVo);
	
	vaisseau.writeParam("echelon", this.echelon);

	vaisseau.writeParam("modeleName", this.modeleName);
	vaisseau.writeParam("armatureName", this.armatureName);
	vaisseau.writeParam("reacteurName", this.reacteurName);
	vaisseau.writeParam("propulseurName", this.propulseurName);
	
	if(this.blindageName != undefined){
		vaisseau.writeParam("blindageName", this.blindageName);
	}
	
	if(this.bouclierName != undefined){
		vaisseau.writeParam("bouclierName", this.bouclierName);
	}
	
	if(this.contremesureName != undefined){
		vaisseau.writeParam("contremesureName", this.contremesureName);
	}
	
	var armes = vaisseau.writeParamObject("armesNames");
		for(var [arcName, armeNameList] of this.armesNames){
			var arcTab = armes.writeParamTab(arcName);
			for(var armeName of armeNameList){
				arcTab.writeSeparator();
				json.writeQuoted(armeName);
			}
			arcTab.endTab();
		}
	armes.endObjet();
	
	vaisseau.endObjet();	
}

function vaisseauFromJson(vaisseauNode){
	var vaisseau = new Vaisseau(vaisseauNode['id'], vaisseauNode['nom'], vaisseauNode['nomVo'], vaisseauNode['modeleName'], vaisseauNode['armatureName'], vaisseauNode['reacteurName'], vaisseauNode['propulseurName']);
	
	vaisseau.setEchelon(vaisseauNode['echelon']);
	
	if(vaisseauNode['blindageName'] != undefined){
		vaisseau.setBlindageName(vaisseauNode['blindageName']);
	}
	
	if(vaisseauNode['bouclierName'] != undefined){
		vaisseau.setBouclierName(vaisseauNode['bouclierName']);
	}
	
	if(vaisseauNode['contremesureName'] != undefined){
		vaisseau.setContremesureName(vaisseauNode['contremesureName']);
	}
	
	vaisseauNode['armesNames']['proue'].forEach(armeName => vaisseau.addArmeName('proue', armeName));
	vaisseauNode['armesNames']['poupe'].forEach(armeName => vaisseau.addArmeName('poupe', armeName));
	vaisseauNode['armesNames']['babord'].forEach(armeName => vaisseau.addArmeName('babord', armeName));
	vaisseauNode['armesNames']['tribord'].forEach(armeName => vaisseau.addArmeName('tribord', armeName));
	vaisseauNode['armesNames']['tourelle'].forEach(armeName => vaisseau.addArmeName('tourelle', armeName));

	return vaisseau;
}

// ARMATURE

function Armature(id, nom, nomVo, taille, manoeuvrabilite, pointStructure, facteurStructure, proue, poupe, babord, tribord, tourelle, nbCompartiment, minEquip, maxEquip){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.taille = taille;
	this.manoeuvrabilite = manoeuvrabilite;
	this.pointStructure = pointStructure;
	this.facteurStructure = facteurStructure;
	
	this.proue = proue;
	this.poupe = poupe;
	this.babord = babord;
	this.tribord = tribord;
	this.tourelle = tourelle;
	
	this.nbCompartiment = nbCompartiment;
	this.minEquip = minEquip;
	this.maxEquip = maxEquip;
}

Armature.prototype.printJson = function(json){
	var armature = json.startObjet("armature");
	
	armature.writeParam("id", this.id);
	armature.writeParam("nom", this.nom);
	armature.writeParam("nomVo", this.nomVo);
	
	armature.writeParam("taille", this.taille);
	armature.writeParam("manoeuvrabilite", this.manoeuvrabilite);
	armature.writeParam("pointStructure", this.pointStructure);
	armature.writeParam("facteurStructure", this.facteurStructure);
	
	armature.writeParam("proue", this.proue);
	armature.writeParam("poupe", this.poupe);
	armature.writeParam("babord", this.babord);
	armature.writeParam("tribord", this.tribord);
	armature.writeParam("tourelle", this.tourelle);
	
	armature.writeParam("nbCompartiment", this.nbCompartiment);
	armature.writeParam("minEquip", this.minEquip);
	armature.writeParam("maxEquip", this.maxEquip);
	
	armature.endObjet();
}

function armatureFromJson(armatureNode){
	var armature = new Armature(armatureNode['id'], armatureNode['nom'], armatureNode['nomVo'], armatureNode['taille'], armatureNode['manoeuvrabilite'], armatureNode['pointStructure'], armatureNode['facteurStructure'], armatureNode['proue'], armatureNode['poupe'], armatureNode['babord'], armatureNode['tribord'], armatureNode['tourelle'], armatureNode['nbCompartiment'], armatureNode['minEquip'], armatureNode['maxEquip']);
	
	return armature;
}

// REACTEUR

function Reacteur(id, nom, nomVo, UE, PC){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.UE = UE;
	this.PC = PC;
}

Reacteur.prototype.printJson = function(json){
	var reacteur = json.startObjet("reacteur");
	
	reacteur.writeParam("id", this.id);
	reacteur.writeParam("nom", this.nom);
	reacteur.writeParam("nomVo", this.nomVo);
	
	reacteur.writeParam("UE", this.UE);
	reacteur.writeParam("PC", this.PC);
	
	reacteur.endObjet();
}

function reacteurFromJson(reacteurNode){
	var reacteur = new Reacteur(reacteurNode['id'], reacteurNode['nom'], reacteurNode['nomVo'], reacteurNode['UE'], reacteurNode['PC']);
	
	return reacteur;
}

// PROPULSEUR

function Propulseur(id, nom, nomVo, vitesse, modPilotage, UE, PC){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.vitesse = vitesse;
	this.modPilotage = modPilotage;
	this.UE = UE;
	this.PC = PC;
}

Propulseur.prototype.printJson = function(json){
	var propulseur = json.startObjet("propulseur");
	
	propulseur.writeParam("id", this.id);
	propulseur.writeParam("nom", this.nom);
	propulseur.writeParam("nomVo", this.nomVo);
	
	propulseur.writeParam("vitesse", this.vitesse);
	propulseur.writeParam("modPilotage", this.modPilotage);
	propulseur.writeParam("UE", this.UE);
	propulseur.writeParam("PC", this.PC);

	propulseur.endObjet();
}

function propulseurFromJson(propulseurNode){
	var propulseur = new Propulseur(propulseurNode['id'], propulseurNode['nom'], propulseurNode['nomVo'], propulseurNode['vitesse'], propulseurNode['modPilotage'], propulseurNode['UE'], propulseurNode['PC']);
	
	return propulseur;
}

// BLINDAGE

function Blindage(id, nom, nomVo, bonusCa, bonusIv, distanceVirage){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.bonusCa = bonusCa;
	this.bonusIv = bonusIv;
	this.distanceVirage = distanceVirage;
}

Blindage.prototype.printJson = function(json){
	var blindage = json.startObjet("blindage");
	
	blindage.writeParam("id", this.id);
	blindage.writeParam("nom", this.nom);
	blindage.writeParam("nomVo", this.nomVo);
	
	blindage.writeParam("bonusCa", this.bonusCa);
	blindage.writeParam("bonusIv", this.bonusIv);
	blindage.writeParam("distanceVirage", this.distanceVirage);

	blindage.endObjet();
}

function blindageFromJson(blindageNode){
	var blindage = new Blindage(blindageNode['id'], blindageNode['nom'], blindageNode['nomVo'], blindageNode['bonusCa'], blindageNode['bonusIv'], blindageNode['distanceVirage']);
	
	return blindage;
}

// BOUCLIER

function BouclierVaisseau(id, nom, nomVo, bouclier, regen, UE, PC){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.bouclier = bouclier;
	this.regen = regen;
	this.UE = UE;
	this.PC = PC;
}

BouclierVaisseau.prototype.printJson = function(json){
	var bouclier = json.startObjet("bouclierVaisseau");
	
	bouclier.writeParam("id", this.id);
	bouclier.writeParam("nom", this.nom);
	bouclier.writeParam("nomVo", this.nomVo);
	
	bouclier.writeParam("bouclier", this.bouclier);
	bouclier.writeParam("regen", this.regen);
	bouclier.writeParam("UE", this.UE);
	bouclier.writeParam("PC", this.PC);

	bouclier.endObjet();
}

function bouclierVaisseauFromJson(bouclierNode){
	var bouclier = new BouclierVaisseau(bouclierNode['id'], bouclierNode['nom'], bouclierNode['nomVo'], bouclierNode['bouclier'], bouclierNode['regen'], bouclierNode['UE'], bouclierNode['PC']);
	
	return bouclier;
}

// CONTRE-MESURE

function Contremesure(id, nom, nomVo, bonusIv, UE, PC){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.bonusIv = bonusIv;
	this.UE = UE;
	this.PC = PC;
}

Contremesure.prototype.printJson = function(json){
	var contremesure = json.startObjet("contremesure");
	
	contremesure.writeParam("id", this.id);
	contremesure.writeParam("nom", this.nom);
	contremesure.writeParam("nomVo", this.nomVo);
	
	contremesure.writeParam("bonusIv", this.bonusIv);
	contremesure.writeParam("UE", this.UE);
	contremesure.writeParam("PC", this.PC);

	contremesure.endObjet();
}

function contremesureFromJson(contremesureNode){
	var contremesure = new Contremesure(contremesureNode['id'], contremesureNode['nom'], contremesureNode['nomVo'], contremesureNode['bonusIv'], contremesureNode['UE'], contremesureNode['PC']);
	
	return contremesure;
}

// ARME-VAISSEAU

function ArmeVaisseau(id, nom, nomVo, portee, degats, cout, vitesse, propriete){
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	
	this.portee = portee;
	this.degats = degats;
	this.cout = cout;
	this.vitesse = vitesse;
	this.propriete = propriete;
}

ArmeVaisseau.prototype.printJson = function(json){
	var armeVaisseau = json.startObjet("armeVaisseau");
	
	armeVaisseau.writeParam("id", this.id);
	armeVaisseau.writeParam("nom", this.nom);
	armeVaisseau.writeParam("nomVo", this.nomVo);
	
	armeVaisseau.writeParam("portee", this.portee);
	armeVaisseau.writeParam("degats", this.degats);
	armeVaisseau.writeParam("cout", this.cout);
	armeVaisseau.writeParam("vitesse", this.vitesse);
	armeVaisseau.writeParam("propriete", this.propriete);
	
	armeVaisseau.endObjet();
}

function armeVaisseauFromJson(armeVaisseauNode){
	var armeVaisseau = new ArmeVaisseau(armeVaisseauNode['id'], armeVaisseauNode['nom'], armeVaisseauNode['nomVo'], armeVaisseauNode['portee'], armeVaisseauNode['degats'], armeVaisseauNode['cout'], armeVaisseauNode['vitesse'], armeVaisseauNode['propriete']);
	
	return armeVaisseau;
}
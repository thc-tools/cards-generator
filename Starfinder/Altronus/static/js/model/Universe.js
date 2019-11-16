// UNIVERSE

function Universe(id, nom, nomVo){
	
	this.id = id;

	this.nom = nom;
	this.nomVo = nomVo;
	
	this.themes = new Map();
	this.classes = new Map();
	this.races = new Map();
	
	this.armures = new Map();
	this.armes = new Map();
	this.piecesVaisseau = new Map();
	
	this.personnages = new Map();
	this.vaisseaux = new Map();
	this.books = new Map();
	this.cartes = new Map();
	
	this.styles = new Map();
	this.logos = new Map();
	this.zones = new Map();
}

Universe.prototype.addStyle = function(style){
	this.styles.set(style.nom, style);
}

Universe.prototype.addLogo = function(logo){
	this.logos.set(logo.nom, logo);
}

Universe.prototype.addZone = function(zone){
	this.zones.set(zone.nom, zone);
}

Universe.prototype.addTheme = function(theme){
	this.themes.set(theme.id, theme);
}

Universe.prototype.addClasse = function(classe){
	this.classes.set(classe.id, classe);
}

Universe.prototype.addRace = function(race){
	this.races.set(race.id, race);
}

Universe.prototype.addArme = function(arme){
	this.armes.set(arme.id, arme);
}

Universe.prototype.addArmure = function(armure){
	this.armures.set(armure.id, armure);
}

Universe.prototype.addPieceVaisseau = function(pieceVaisseau){
	this.piecesVaisseau.set(pieceVaisseau.id, pieceVaisseau);
}

Universe.prototype.addPersonnage = function(personnage){
	this.personnages.set(personnage.id, personnage);
}

Universe.prototype.addVaisseau = function(vaisseau){
	this.vaisseaux.set(vaisseau.id, vaisseau);
}

Universe.prototype.addBook = function(book){
	this.books.set(book.id, book);
}

Universe.prototype.addCarte = function(carte){
	this.cartes.set(carte.id, carte);
}

Universe.prototype.resolve = function(){
	this.personnages.forEach(perso => perso.compute());
	this.vaisseaux.forEach(vaisseau => vaisseau.compute());
}

Universe.prototype.print = function(json){
	var bandeau = jQuery('#universeDescription');
	bandeau.html(this.nom);
	
	for(var bookKey in this.books){
		this.books[bookKey].print();
	}
}

Universe.prototype.printJson = function(json){
	var universe = json.startObjet("universe");
	
	universe.writeParam("id", this.id);
	universe.writeParam("vf", this.nom);
	universe.writeParam("vo", this.nomVo);
	
	var styleTab = universe.writeParamTab("styles");
	for(var [styleName, style] of this.styles){
		
		styleTab.writeSeparator();
		style.printJson(json);
	}
	styleTab.endTab();
	
	var logoTab = universe.writeParamTab("logos");
	for(var [logoName, logo] of this.logos){
		
		logoTab.writeSeparator();
		logo.printJson(json);
	}
	logoTab.endTab();
	
	var zoneTab = universe.writeParamTab("zones");
	for(var [zoneName, zone] of this.zones){
		
		zoneTab.writeSeparator();
		zone.printJson(json);
	}
	zoneTab.endTab();
	
	var themeTab = universe.writeParamTab("themes");
	for(var [themeName, theme] of this.themes){
		
		themeTab.writeSeparator();
		theme.printJson(json);
	}
	themeTab.endTab();
	
	var raceTab = universe.writeParamTab("races");
	for(var [raceName, race] of this.races){
		
		raceTab.writeSeparator();
		race.printJson(json);
	}
	raceTab.endTab();
	
	var classeTab = universe.writeParamTab("classes");
	for(var [classeName, classe] of this.classes){
		
		classeTab.writeSeparator();
		classe.printJson(json);
	}
	classeTab.endTab();
	
	var armeTab = universe.writeParamTab("armes");
	for(var [armeName,arme] of this.armes){
		
		armeTab.writeSeparator();
		arme.printJson(json);
	}
	armeTab.endTab();
	
	var armureTab = universe.writeParamTab("armures");
	for(var [armureName, armure] of this.armures){
		
		armureTab.writeSeparator();
		armure.printJson(json);
	}
	armureTab.endTab();
	
	var persoTab = universe.writeParamTab("personnages");
	for(var [persoName, perso] of this.personnages){
		
		persoTab.writeSeparator();
		perso.printJson(json);
	}
	persoTab.endTab();
	
	var piecesTab = universe.writeParamTab("piecesVaisseau");
	for(var [pieceName, piece] of this.piecesVaisseau){
		
		piecesTab.writeSeparator();
		piece.printJson(json);
	}
	piecesTab.endTab();
	
	var vaisseauTab = universe.writeParamTab("vaisseaux");
	for(var [vaisseauName, vaisseau] of this.vaisseaux){
		
		vaisseauTab.writeSeparator();
		vaisseau.printJson(json);
	}
	vaisseauTab.endTab();
	
	var bookTab = universe.writeParamTab("books");
	for(var [bookName, book] of this.books){
		
		bookTab.writeSeparator();
		book.printJson(json);
	}
	bookTab.endTab();
	
	var cardsTab = universe.writeParamTab("cards");
	for(var [cardId, card] of this.cartes){
		
		cardsTab.writeSeparator();
		card.printJson(json);
	}
	cardsTab.endTab();
	
	universe.endObjet();	
}

function universeFromJson(universeNode){
	var universe = new Universe(universeNode['id'], universeNode['vf'], universeNode['vo']);
	
	universeNode['styles']
		.map(stylekNode => styleFromJson(stylekNode))
		.forEach(style => universe.addStyle(style));
	
	universeNode['logos']
		.map(logoNode => logoFromJson(logoNode))
		.forEach(logo => universe.addLogo(logo));
		
	universeNode['zones']
		.map(zoneNode => zoneFromJson(zoneNode))
		.forEach(zone => universe.addZone(zone));
	
	universeNode['themes']
		.map(themeNode => themeFromJson(themeNode))
		.forEach(theme => universe.addTheme(theme));
		
	universeNode['classes']
		.map(classNode => classeFromJson(classNode))
		.forEach(classe => universe.addClasse(classe));
		
	universeNode['races']
		.map(raceNode => raceFromJson(raceNode))
		.forEach(race => universe.addRace(race));
	
	universeNode['armures']
		.map(armureNode => armureFromJson(armureNode))
		.forEach(armure => universe.addArmure(armure));
		
	universeNode['armes']
		.map(armeNode => armeFromJson(armeNode))
		.forEach(arme => universe.addArme(arme));
		
	universeNode['piecesVaisseau']
		.map(pieceNode => elementFromJson(pieceNode))
		.forEach(piece => universe.addPieceVaisseau(piece));
			
	universeNode['personnages']
		.map(personnageNode => personnageFromJson(personnageNode))
		.forEach(personnage => universe.addPersonnage(personnage));
		
	universeNode['vaisseaux']
		.map(vaisseauNode => vaisseauFromJson(vaisseauNode))
		.forEach(vaisseau => universe.addVaisseau(vaisseau));
		
	universeNode['books']
		.map(bookNode => bookFromJson(bookNode))
		.forEach(book => universe.addBook(book));
		
	universeNode['cards']
		.map(carteNode => carteFromJson(carteNode))
		.forEach(carte => universe.addCarte(carte));

	return universe;
}



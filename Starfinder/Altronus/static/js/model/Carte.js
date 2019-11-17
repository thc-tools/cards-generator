// BOOK

function Book(id, nom, isEquipment, isPerso, isCapacite, isVaisseau){
	this.id = id ;
	this.nom = nom;
	this.isEquipment = isEquipment == 'true';
	this.isPerso = isPerso == 'true';
	this.isCapacite = isCapacite == 'true';
	this.isVaisseau = isVaisseau == 'true';
	this.carteNames = [];
}

Book.prototype.addCarteName = function(carteName){
	this.carteNames.push(carteName);
}

Book.prototype.addArmes = function(personnage){
	var armes = personnage.armes;
	for(var armeKey in armes){
		var arme = armes[armeKey];
		this.cartes.push(arme.toCarte(personnage));
	}
}

Book.prototype.addArmures = function(personnage){
	var armures = personnage.armures;
	for(var armureKey in armures){
		var armure = armures[armureKey];
		this.cartes.push(armure.toCarte(personnage));
	}
}

Book.prototype.print = function(){
	var results = jQuery('#results');	
	var book = jQuery('<div id="' + this.nom + '" class="book" >')
	results.append(book);
	
	var bookCards = this.carteNames.slice(0);
	
	// book d'équipements
	
	if(this.isEquipment){
		bookCards.push('Stockage');
	}
	if(this.isEquipment && currentPersonnage != undefined){
		currentPersonnage.equipments.forEach(equipment => bookCards.push(equipment));
		currentPersonnage.armes.forEach(arme => arme.toCarte().print(book));
		currentPersonnage.armures.forEach(armure => armure.toCarte().print(book));
	}
	
	// book de capacités
	
	if(this.isCapacite && currentPersonnage != undefined){
		currentPersonnage.capacites.forEach(capacite => bookCards.push(capacite));
		currentPersonnage.dons.forEach(don => bookCards.push(don));
		currentPersonnage.race.capacites.forEach(capacite => bookCards.push(capacite));
	}
	
	// book de personnage
	
	if(this.isPerso){
		bookCards.push('perso');
		bookCards.push('classe');
		bookCards.push('theme');
		bookCards.push('race');
		bookCards.push('Caractéristiques');
		bookCards.push('Jets-de-sauvegarde');
		bookCards.push('Compétences');
		bookCards.push('Santé-/-Armure');
	}
	
	for(var carteName of bookCards){
		var carte = currentUniverse.cartes.get(carteName);
		if(carte != undefined){
			carte.print(book);
		} else {
			alert('Carte non trouvée : ' + carteName);
		}
	}
}

Book.prototype.printJson = function(json){
	var book = json.startObjet("book");
	book.writeParam("id", this.id);
	book.writeParam("nom", this.nom);
	book.writeParam("isEquipment", this.isEquipment);
	book.writeParam("isPerso", this.isPerso);
	book.writeParam("isCapacités", this.isCapacite);
	book.writeParam("isVaisseau", this.isVaisseau);
	
	var cartesTab = book.writeParamTab("cartes");
		for(var carteName of this.carteNames){
			cartesTab.writeSeparator();
			json.writeQuoted(carteName);
		}
	cartesTab.endTab();
	
	book.endObjet();	
}

function bookFromJson(bookNode){
	var book = new Book(bookNode['id'], bookNode['nom'], bookNode['isEquipment'], bookNode['isPerso'], bookNode['isCapacités'], bookNode['isVaisseau']);
	
	bookNode['cartes']
		.forEach(carteName => book.addCarteName(carteName));
	
	return book;
}

// CARTE

function Carte(id, nom, nomVo, style, logo, image, zone){
	
	this.id = id;
	this.nom = nom;
	this.nomVo = nomVo;
	this.style = style;
	this.logo = logo;
	this.image = image;
	this.zone = zone;
	
	this.elementsEncart = [];
	
	this.frontSize = 'normal';
	this.elementsFront = [];
	
	this.backSize = 'normal';
	this.elementsBack = [];
}

Carte.prototype.setFrontSize = function(frontSize){
	this.frontSize = frontSize;
}

Carte.prototype.setBackSize = function(backSize){
	this.backSize = backSize;
}

Carte.prototype.addElementEncart = function(element){
	this.elementsEncart.push(element);
}

Carte.prototype.addElementFront = function(element){
	this.elementsFront.push(element);
}

Carte.prototype.addElementBack = function(element){
	this.elementsBack.push(element);
}

Carte.prototype.print = function(parent){
	
	if(modeEdit){
		this.printEditable(parent);
	}else{
		this.printReadOnly(parent);
	}
}

Carte.prototype.printReadOnly = function(parent){
	
	var carte = jQuery('<div id="' + this.id +'" class="card ' + this.style +'" >');
	parent.append(carte);
	
	var front = jQuery('<div class="face front">');
	var back = jQuery('<div class="face back">');
	carte.append(front);
	carte.append(back);

	var head = jQuery('<div class="head">');
	front.append(head);
	
	var vf = jQuery('<div class="name VF">');
	vf.append(this.nom);
	head.append(vf);
	
	var vo = jQuery('<div class="name VO">');
	vo.append('(' +this.nomVo + ')');
	head.append(vo);
	
	var logo = jQuery('<div class="code ' + this.logo+ '">');
	head.append(logo);
	
	var image = jQuery('<div class="image">');
	front.append(image);
	var src = this.image.startsWith('data:image') ? this.image : 'static/image/' + this.image + '.png';
	var imgLogo = jQuery('<img src="static/image/' + this.image + '.png"/>');
	image.append(imgLogo);		

	var conditions = jQuery('<div class="conditions">');
	front.append(conditions);
	var incantation = jQuery('<div class="incantation">');
	conditions.append(incantation);
	
	for(var elementKey in this.elementsEncart){
		var elem = this.elementsEncart[elementKey];
		elem.print(incantation);
	}
	
	var zone = jQuery('<div class="zone">');
	conditions.append(zone);
	var imgZone = jQuery('<img src="static/image/zones/' + this.zone +'.png"/>');
	zone.append(imgZone);
	
	var resume = jQuery('<div class="resume '+ this.frontSize +'">');
	front.append(resume);
	
	for(var elementKey in this.elementsFront){
		var elem = this.elementsFront[elementKey];
		elem.print(resume);
	}
	
	var descr = jQuery('<div class="body '+ this.backSize +'">');
	back.append(descr);
	
	for(var elementKey in this.elementsBack){
		var elem = this.elementsBack[elementKey];
		elem.print(descr);
	}
}

function updateId(event){
	var input = jQuery(event);
	var cardId = input.attr('cardId');
	var newValue = input.val();
	
	var cardJs = currentUniverse['cartes'].get(cardId);
	cardJs.id = id;
}

function updateStyle(event){
	var input = jQuery(event);
	var cardId = input.attr('cardId');
	var newValue = input.val();
	
	input.removeClass();
	input.addClass(newValue);
	
	var cardHtml = jQuery('div[id="' + cardId + '"]');
	cardHtml.removeClass();
	cardHtml.addClass('card');
	cardHtml.addClass(newValue);
	
	var cardJs = currentUniverse['cartes'].get(cardId);
	cardJs.style = newValue;
}

function updateLogo(event){
	var input = jQuery(event);
	var cardId = input.attr('cardId');
	var newValue = input.val();
	
	var cardHtml = jQuery('div[id="' + cardId + '"]');
	var code = cardHtml.find('.front .head .code');
	code.removeClass();
	code.addClass('code');
	code.addClass(newValue);
	
	var cardJs = currentUniverse['cartes'].get(cardId);
	cardJs.logo = newValue;
}

function updateZone(event){
	var input = jQuery(event);
	var cardId = input.attr('cardId');
	var zoneName = input.val();
	var zone = currentUniverse['zones'].get(zoneName);
	
	var cardHtml = jQuery('div[id="' + cardId + '"]');
	var img = cardHtml.find('.zone img');
	img.attr('src', zone.base64);
	
	var cardJs = currentUniverse['cartes'].get(cardId);
	cardJs.zone = zone.base64;
}

function updateNom(event){
	var input = jQuery(event);
	var cardId = input.attr('cardId');
	var newValue = input.val();
	
	var cardJs = currentUniverse['cartes'].get(cardId);
	cardJs.nom = newValue;
}

function updateNomVo(event){
	var input = jQuery(event);
	var cardId = input.attr('cardId');
	var newValue = input.val();
	
	var cardJs = currentUniverse['cartes'].get(cardId);
	cardJs.nomVo = newValue;
}

function updateImage(event){
	var input = jQuery(event);
	var cardId = input.attr('cardId');
	var newValue = input.val();
	var url = 'static/image/' + newValue + '.png';

    var fakeImg = new Image();
	fakeImg.src = url;
    var fileExist = (fakeImg.width > 0);
	
	if(fileExist) {
		var cardHtml = jQuery('div[id="' + cardId + '"]');
		var img = cardHtml.find('>>>img');
		img.attr('src', url);
		
		var cardJs = currentUniverse['cartes'].get(cardId);
		cardJs.image = newValue;
	}
}

Carte.prototype.printEditable = function(parent){
	
	var inputs = jQuery('<div class="bandeau inputs">');
	parent.append(inputs);
	
	var labelId = jQuery('<label for="id_'+ this.id +'">Id : </label>');
	var inputId = jQuery('<input type="text" id="id_'+ this.id +'" cardId="'+ this.id +'" onchange="updateId(this);" value="'+ this.id +'" placeholder="Id">');
	inputs.append(labelId);
	inputs.append(inputId);
	
	var labelStyle = jQuery('<label for="style_'+ this.id +'">Style : </label>');
	var selectStyle = jQuery('<select id="style_'+ this.id +'" cardId="'+ this.id +'" onchange="updateStyle(this);" class="'+this.style+'">');
	for( [styleName,style] of currentUniverse['styles']){
		selectStyle.append(jQuery("<option>").attr('value',styleName).text(styleName).addClass(styleName));
	}
	inputs.append(labelStyle);
	inputs.append(selectStyle);
	jQuery('select#style[cardId="'+ this.id +'"] option[value="'+this.style+'"]').attr("selected",true);
	
	var labelLogo = jQuery('<label for="logo_'+ this.id +'">Logo : </label>');
	var selectLogo = jQuery('<select id="logo_'+ this.id +'" cardId="'+ this.id +'" onchange="updateLogo(this);">');
	for( [logoName,logo] of currentUniverse['logos']){
		selectLogo.append(jQuery("<option>").attr('value',logoName).text(logoName));
	}
	inputs.append(labelLogo);
	inputs.append(selectLogo);
	jQuery('select#logo[cardId="'+ this.id +'"] option[value="'+this.logo+'"]').attr("selected",true);
	
	var labelZone = jQuery('<label for="zone_'+ this.id +'">Zone : </label>');
	var selectZone = jQuery('<select id="zone_'+ this.id +'" cardId="'+ this.id +'" onchange="updateZone(this);">');
	for( [zoneName,zone] of currentUniverse['zones']){
		selectZone.append(jQuery("<option>").attr('value',zoneName).text(zoneName));
	}
	inputs.append(labelZone);
	inputs.append(selectZone);
	jQuery('select#zone[cardId="'+ this.id +'"] option[value="'+this.zone+'"]').attr("selected",true);
	
	var labelImage = jQuery('<label for="image_'+ this.id +'">Image : </label>');
	var inputImage = jQuery('<input type="text" id="image_'+ this.id +'" cardId="'+ this.id +'" onkeyup="updateImage(this)" value="' + this.image + '" placeholder="image">');
	inputs.append(labelImage);
	inputs.append(inputImage);


	var carte = jQuery('<div id="' + this.id +'" class="card ' + this.style +'" >');
	parent.append(carte);
	
	var front = jQuery('<div class="face front">');
	var back = jQuery('<div class="face back">');
	carte.append(front);
	carte.append(back);

	var head = jQuery('<div class="head">');
	front.append(head);
	
	var vf = jQuery('<div class="name VF">');
	var inputNom = jQuery('<input type="text" id="nom_'+ this.id +'" class="VF" cardId="'+ this.id +'" value="'+ this.nom +'" placeholder="nom" onchange="updateNom(this)">');
	vf.append(inputNom);
	head.append(vf);
	
	var vo = jQuery('<div class="name VO">');
	var inputNomVo = jQuery('<input type="text" id="nomVo_'+ this.id +'" class="VO" cardId="'+ this.id +'" value="'+ this.nomVo +'" placeholder="nomVo" onchange="updateNomVo(this)">');
	
	vo.append('(');vo.append(inputNomVo);vo.append(')');
	head.append(vo);
	
	var logo = jQuery('<div class="code ' + this.logo+ '">');
	head.append(logo);
	
	var image = jQuery('<div class="image">');
	front.append(image);
	var imgLoaded = jQuery('<img src="static/image/' + this.image + '.png">');
	image.append(imgLoaded);		

	var conditions = jQuery('<div class="conditions">');
	front.append(conditions);
	var incantation = jQuery('<div class="incantation">');
	conditions.append(incantation);
	
	for(var elementKey in this.elementsEncart){
		var elem = this.elementsEncart[elementKey];
		elem.printEditable(incantation);
	}
	
	var zone = jQuery('<div class="zone">');
	conditions.append(zone);
	var zoneElem = currentUniverse['zones'].get(this.zone);
	var zoneUrl = zoneElem != undefined ? zoneElem.base64 : 'static/image/ecole/' + this.zone + '.png';
	var imgZone = jQuery('<img src="' + zoneUrl +'"/>');
	zone.append(imgZone);
	
	var resume = jQuery('<div class="resume '+ this.frontSize +'">');
	front.append(resume);
	
	for(var elementKey in this.elementsFront){
		var elem = this.elementsFront[elementKey];
		elem.printEditable(resume);
	}
	
	var descr = jQuery('<div class="body '+ this.backSize +'">');
	back.append(descr);
	
	for(var elementKey in this.elementsBack){
		var elem = this.elementsBack[elementKey];
		elem.printEditable(descr);
	}
}

Carte.prototype.printJson = function(json){
	
	var carte = json.startObjet("carte");
	carte.writeParam("id", this.id);
	carte.writeParam("style", this.style);
	carte.writeParam("vf", this.nom);
	carte.writeParam("vo", this.nomVo);
	carte.writeParam("logo", this.logo);
	carte.writeParam("image", this.image);
	carte.writeParam("zone", this.zone);
	
	var encartTab = carte.writeParamTab("encartElements");
		for(var elementKey in this.elementsEncart){
			
			encartTab.writeSeparator();
			
			var elem = this.elementsEncart[elementKey];
			elem.printJson(json);
		}
	encartTab.endTab();
	
	carte.writeParam("frontsize", this.frontSize);
	var frontTab = carte.writeParamTab("frontElements");
		for(var elementKey in this.elementsFront){
			
			frontTab.writeSeparator();
			
			var elem = this.elementsFront[elementKey];
			elem.printJson(json);
		}
	frontTab.endTab();
	
	carte.writeParam("backsize", this.backSize);
	var backTab = carte.writeParamTab("backElements");
		for(var elementKey in this.elementsBack){
			
			backTab.writeSeparator();
			
			var elem = this.elementsBack[elementKey];
			elem.printJson(json);
		}
	backTab.endTab();
		
	carte.endObjet();
}

function carteFromJson(carteNode){
	var carte = new Carte(carteNode['id'], carteNode['vf'], carteNode['vo'], carteNode['style'], carteNode['logo'], carteNode['image'], carteNode['zone']);
	
	carte.setFrontSize(carteNode['frontsize']);
	carte.setBackSize(carteNode['backsize']);
	
	carteNode['encartElements']
		.map(encartNode => elementFromJson(encartNode))
		.forEach(encart => carte.addElementEncart(encart));
		
	carteNode['frontElements']
		.map(frontNode => elementFromJson(frontNode))
		.forEach(front => carte.addElementFront(front));
		
	carteNode['backElements']
		.map(backNode => elementFromJson(backNode))
		.forEach(back => carte.addElementBack(back));
	
	return carte;
}

// BLOCK

function Block(css){
	
	this.css = css != undefined ? css : '';
	this.elements = [];
}

Block.prototype.addElement = function(element){
	this.elements.push(element);
}

Block.prototype.print = function(parent){
	var block = jQuery('<div class="block '+ this.css +'">');
	parent.append(block);
	
	for(var elementKey in this.elements){
		var elem = this.elements[elementKey];
		elem.print(block);
	}
}

Block.prototype.printEditable = function(parent){
	var block = jQuery('<div class="block '+ this.css +'">');
	parent.append(block);
	
	for(var elementKey in this.elements){
		var elem = this.elements[elementKey];
		elem.printEditable(block);
	}
}

Block.prototype.printJson = function(json){
	var block = json.startObjet("block");
	block.writeParam("css", this.css);
	
	var content = block.writeParamTab("content");
		for(var elementKey in this.elements){
			
			content.writeSeparator();
			
			var elem = this.elements[elementKey];
			elem.printJson(json);
		}
	content.endTab();
	
	block.endObjet();
}

function blockFromJson(blockNode){
	var block = new Block(blockNode['css']);
	
	blockNode['content']
		.map(elementNode => elementFromJson(elementNode))
		.forEach(element => block.addElement(element));
		
	return block;
}

// PARAMETRE

function Parametre(nom, valeur, taille, info, css){
	
	this.nom = nom;
	this.valeur = valeur;
	this.taille = taille;
	this.info = info;
	this.css = css;
	
	this.elements = [];
}

Parametre.prototype.addElement = function(element){
	this.elements.push(element);
}

Parametre.prototype.print = function(parent){
	var parametre = jQuery('<div class="parametre '+ ((this.taille != undefined) ? (' grow' + this.taille) : '') + ((this.css != undefined) ? this.css : '') + '">');
	
	if(this.nom != undefined){
		var nom = jQuery('<div class="nom">');
		nom.append(this.nom);
		parametre.append(nom);
	}
	
	if(this.elements[0] != undefined){
		var points = jQuery('<div class="points">:</div>');
		var val = jQuery('<div class="valeur">');
		this.elements[0].print(val);
		parametre.append(points);
		parametre.append(val);
	} else if(this.valeur != undefined){
		var points = jQuery('<div class="points">:</div>');
		var val = jQuery('<div class="valeur">');
		val.append(this.valeur);
		parametre.append(points);
		parametre.append(val);
	}
	
	if(this.info != undefined){
		var inf = jQuery('<div class="info">');
		inf.append(this.info);
		parametre.append(inf);
	}
	
	parent.append(parametre);
}

Parametre.prototype.printEditable = function(parent){
	var parametre = jQuery('<div class="parametre '+ ((this.taille != undefined) ? (' grow' + this.taille) : '') + ((this.css != undefined) ? this.css : '') + '">');
	
	var nom = jQuery('<div class="nom">');
	nom.append(jQuery('<input type="text" class="paramNameInput" value="' + (this.nom ? this.nom  : " ") + '" onchange="updateParameterName(this)"> '));
	parametre.append(nom);
	
	var points = jQuery('<div class="points">:</div>');
	var val = jQuery('<div class="valeur">');
	val.append(jQuery('<input type="text" class="paramValueInput" value="' + (this.valeur ? this.valeur  : " ") + '" onchange="updateParameterValue(this)" >'));
	
	if(this.elements[0] != undefined){
		this.elements[0].printEditable(val);
	}
	
	parametre.append(points);
	parametre.append(val);
	
	var inf = jQuery('<div class="info">');
	inf.append(jQuery('<input type="text" class="paramInfoInput" value="' + (this.info ? this.info  : " ") + '" onchange="updateParameterInfo(this)" >'));
	parametre.append(inf);
	
	
	parent.append(parametre);
}

Parametre.prototype.printJson = function(json){
	var parametre = json.startObjet("parametre");
	parametre.writeParam("css", this.css);
	parametre.writeParam("nom", this.nom);
	parametre.writeParam("valeur", this.valeur);
	parametre.writeParam("info", this.info);
	parametre.writeParam("taille", this.taille);

	if(this.elements[0] != undefined){
		
		var elements = parametre.writeParamTab("elements");
			for(var elementKey in this.elements){
				
				elements.writeSeparator();
				
				var elem = this.elements[elementKey];
				elem.printJson(json);
			}
		elements.endTab();
	}
	
	parametre.endObjet();	
}

function parametreFromJson(parametreNode){
	var parametre = new Parametre(parametreNode['nom'], parametreNode['valeur'], parametreNode['taille'], parametreNode['info'], parametreNode['css']);
	
	if(parametreNode['elements'] != undefined) {
		parametreNode['elements']
			.map(elementNode => elementFromJson(elementNode))
			.forEach(element => parametre.addElement(element));
	}
	
	return parametre;
}

// LIGNE

function Ligne(nom, valeur, css){
	
	this.nom = nom;
	this.valeur = valeur;
	this.css = css;
}

Ligne.prototype.print = function(parent){
	if(this.nom != undefined){
		var ligne = jQuery('<div class="ligne '+ (this.css != undefined ? this.css : '') + '">');
		parent.append(ligne);
		
		var nom = jQuery('<div class="nom">');
		nom.append(this.nom);
		ligne.append(nom);
		
		var points = jQuery('<div class="points">:</div>');
		ligne.append(points);
		
		var valeur = jQuery('<div class="valeur">');
		valeur.append(this.valeur);
		ligne.append(valeur);
	} else {
		var ligne = jQuery('<div class="ligne '+ (this.css != undefined ? this.css : '') +'">');
		parent.append(ligne);
		ligne.append(this.valeur);
	}
}

Ligne.prototype.printEditable = function(parent){
	this.print(parent);
}

Ligne.prototype.printJson = function(json){
	var ligne = json.startObjet("ligne");
	ligne.writeParam("css", this.css);
	ligne.writeParam("nom", this.nom);
	ligne.writeParam("valeur", this.valeur);
	ligne.endObjet();	
}

function ligneFromJson(ligneNode){
	var ligne = new Ligne(ligneNode['nom'], ligneNode['valeur'], ligneNode['css']);
	return ligne;
}

// CHECKBOXES

function CheckBoxes(css){
	this.checkBoxes = [];
	this.css = css;
}

CheckBoxes.prototype.addCheckBox = function(checkBox){
	this.checkBoxes.push(checkBox);
}

CheckBoxes.prototype.print = function(parent){
	var block = jQuery('<div class="checkbox ' + (this.css != undefined ? this.css : '') + '">');
	parent.append(block);
	
	for(var checkBox in this.checkBoxes){
		var elem = this.checkBoxes[checkBox];
		elem.print(block);
	}
}

CheckBoxes.prototype.printEditable = function(parent){
	this.print(parent);
}

CheckBoxes.prototype.printJson = function(json){
	var checkboxes = json.startObjet("checkboxes");
	checkboxes.writeParam("css", this.css);
	
	var boxesTab = checkboxes.writeParamTab("boxes");
		for(var checkBox in this.checkBoxes){
			
			boxesTab.writeSeparator();
			
			var elem = this.checkBoxes[checkBox];
			elem.printJson(json);
		}
	boxesTab.endTab();
	
	checkboxes.endObjet();	
}

function checboxesFromJson(checkBoxesNode){
	var checkboxes = new CheckBoxes(checkBoxesNode['css']);
	
	checkBoxesNode['boxes']
		.map(checkBoxNode => checkboxFromJson(checkBoxNode))
		.forEach(checkBox => checkboxes.addCheckBox(checkBox));
	
	return checkboxes;
}

// CHECKBOX

function CheckBox(titre){
	this.titre = titre;
}

CheckBox.prototype.print = function(parent){
	var block = jQuery('<input type="checkbox" />' + (this.titre != undefined ? this.titre : ''));
	parent.append(block);
	
	if(this.titre != undefined){
		parent.append(this.titre);
	}
}

CheckBox.prototype.printEditable = function(parent){
	this.print(parent);
}

CheckBox.prototype.printJson = function(json){
	var checkbox = json.startObjet("checkbox");
	checkbox.writeParam("titre", this.titre);
	checkbox.endObjet();	
}

function checkboxFromJson(checkBoxNode){
	var checkbox = new CheckBox(checkBoxNode['titre']);
	
	return checkbox;
}

// VALEUR

function Valeur(valeur){
	this.valeur = valeur;
}

Valeur.prototype.print = function(parent){
	parent.append(this.valeur);
}

Valeur.prototype.printEditable = function(parent){
	this.print(parent);
}

Valeur.prototype.printJson = function(json){
	var checkbox = json.startObjet("valeur");
	checkbox.writeParam("valeur", this.valeur);
	checkbox.endObjet();	
}

function valeurFromJson(valeurNode){
	var valeur = new Valeur(valeurNode['valeur']);
	
	return valeur;
}

// CARACTERISTIQUE

function caracteristiqueFromJson(caracteristiqueNode){
	var caracteristique = {};
	
	caracteristique.nom = caracteristiqueNode['nom'];
	caracteristique.valeur = caracteristiqueNode['valeur'];
	
	return caracteristique;
}

// STYLE

function Style(nom, hexa){
	this.nom = nom;
	this.hexa = hexa;
}

Style.prototype.print = function(parent){
	var div = jQuery('<div class="style">');
	
	var divNom = jQuery('<div class="nom">'+ this.nom + '</div>');
	var divValeur = jQuery('<div class="valeur">'+ this.valeur + '</div>');
	div.append(divNom);
	div.append(divValeur);
	
	parent.append(div);
}

Style.prototype.printJson = function(json){
	var style = json.startObjet("style");
	style.writeParam("nom", this.nom);
	style.writeParam("hexa", this.hexa);
	style.endObjet();	
}

function styleFromJson(styleNode){
	var style = new Style(styleNode['nom'], styleNode['hexa']);
	
	return style;
}

// LOGO

function Logo(nom, base64){
	this.nom = nom;
	this.base64 = base64;
}

Logo.prototype.print = function(parent){
	var div = jQuery('<div class="logo">');
	
	var divNom = jQuery('<div class="nom">'+ this.nom + '</div>');
	var divValeur = jQuery('<div class="valeur">'+ this.base64 + '</div>');
	div.append(divNom);
	div.append(divValeur);
	
	parent.append(div);
}

Logo.prototype.printJson = function(json){
	var logo = json.startObjet("logo");
	logo.writeParam("nom", this.nom);
	logo.writeParam("base64", this.base64);
	logo.endObjet();	
}

function logoFromJson(logoNode){
	var logo = new Logo(logoNode['nom'], logoNode['base64']);
	
	return logo;
}

// ZONE

function Zone(nom, base64){
	this.nom = nom;
	this.base64 = base64;
}

Zone.prototype.print = function(parent){
	var div = jQuery('<div class="zone">');
	
	var divNom = jQuery('<div class="nom">'+ this.nom + '</div>');
	var divValeur = jQuery('<div class="valeur">'+ this.base64 + '</div>');
	div.append(divNom);
	div.append(divValeur);
	
	parent.append(div);
}

Zone.prototype.printJson = function(json){
	var zone = json.startObjet("zone");
	zone.writeParam("nom", this.nom);
	zone.writeParam("base64", this.base64);
	zone.endObjet();	
}

function zoneFromJson(zoneNode){
	var zone = new Logo(zoneNode['nom'], zoneNode['base64']);
	
	return zone;
}
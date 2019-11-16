// COMPETENCE

function Competence(nom, carac, description){
	this.nom = nom;
	this.carac = carac;
	this.description = description;
	
	this.deClasse = false;
	this.rang = 0;
	this.value = 0;
}

Competence.prototype.isDeClasse = function(){
	return this.deClasse;
}

Competence.prototype.isUsed = function(){
	return this.value > 0;
}

Competence.prototype.printJson = function(json){
	var competence = json.startObjet("competence");
	
	competence.writeParam("nom", this.nom);
	competence.writeParam("carac", this.carac);
	competence.writeParam("description", this.description);
	competence.writeParam("rang", this.rang);
	
	competence.endObjet();	
}

function competenceFromJson(competenceNode){
	var competence = new Competence(competenceNode['nom'], competenceNode['carac'], competenceNode['description']);
	competence.rang = competenceNode['rang'];
	
	return competence;
}

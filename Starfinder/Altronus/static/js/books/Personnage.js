var perso_book = new Book('Personnage');

//ATRONUS

var c_altro = new Carte('#perso.nom#', '#perso.nomVo#', 'SOLARIAN', 'SOLARIAN', 'personnage/ALTRONUS3', 'personnel');

c_altro.addElementEncart(new Parametre('Âge', '32 ans'));
c_altro.addElementEncart(new Parametre('Taille', '1m85'));
c_altro.addElementEncart(new Parametre('Poids', '110kg'));
c_altro.addElementEncart(new Parametre('Yeux', 'Ambrés'));
c_altro.addElementEncart(new Parametre('Peau', 'Cuivrés'));
c_altro.addElementEncart(new Parametre('Cheveux', 'Noirs'));

var block = new Block();
block.addElement(new Parametre('Niveau', '#perso.niveau#' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xp :', 3));
block.addElement(new Parametre('Classe', '#perso.nom_classe#', 1));
block.addElement(new Parametre('Race', '#perso.nom_race#', 1));
block.addElement(new Parametre('Profil', '#perso.nom_theme#', 1));
block.addElement(new Parametre('Alignement', '#perso.alignement#', 1));
c_altro.addElementFront(block);

perso_book.addCarte(c_altro);

// SOLARIAN

var c_solar = new Carte('#perso.nom_classe#', '#perso.nomVo_classe#', 'SOLARIAN', 'SOLARIAN', 'personnage/SOLARIAN', 'personnel');

c_solar.addElementEncart(new Parametre('Endurance', '#perso.endurance_classe#' + '+ mod. de constitution'));
c_solar.addElementEncart(new Parametre('Points de vie', '#perso.pv_classe#'));

var param = new Parametre('', '', 2);
var blockComp = new Block('rowwrap');
for(var [compName, comp] of altronus.getClassCompetences()){
	blockComp.addElement(new Parametre(compName, null, null, '(' + comp.carac +')'));
}
param.addElement(blockComp);

var block = new Block();
block.addElement(new Parametre('Compétences de classe', '', 1));
block.addElement(param);
c_solar.addElementFront(block);
c_solar.setFrontSize('x-small');

c_solar.addElementBack(new Ligne(null, 'Les étoiles régissent le mouvement des planètes avec leur force gravitationnelle, engendrent la vie par leur lumière et par leur chaleur et consument les mondes quand elles se transforment en supernovas ou en trous noirs.', 'space'));  
c_solar.addElementBack(new Ligne(null, 'Vous savez que ces actes de création et de destruction ne sont pas en opposition mais que ce sont les deux composantes d’un cycle naturel. Vous aspirez à être un agent de ce cycle, un guerrier éclair ayant la capacité de manipuler la puissance même des étoiles.', 'space'));  
c_solar.addElementBack(new Ligne(null, 'Ayant toujours à votre disposition des particules d’énergie fondamentale ou entropique, vous pouvez manipuler cette essence en combat pour créer des armes et des armures de lumière stellaire ou de ténèbres dévorantes.', 'space'));  
c_solar.addElementBack(new Ligne(null, 'Que vous ayez été formé dans un temple ou que vous ayez découvert seul votre puissance, vous vous reconnaissez comme partie intégrante d’une ancienne tradition, une force de préservation et d’annihilation.', 'space')); 
c_solar.setBackSize('small');

perso_book.addCarte(c_solar);
			
// XENO

var c_xeno = new Carte('#perso.nom_theme#', '#perso.nomVo_theme#', 'DON', 'SEEKER', 'personnage/SEEKER', 'personnel');

c_xeno.addElementEncart(new Parametre('Charisme', '#perso.Cha_bonus_aff#'));

var block = new Block();
block.addElement(new Ligne('Savoir thématique (niv 1)', 'Réduit de 5 le DD de sience de la vie. (C\'est une compétence de classe)', 'space'));
block.addElement(new Ligne('Langage improvisé (niv 6)', 'Permet d\'improviser un langage avec une race inconnue', 'space'));
block.addElement(new Ligne('Premier contact (niv 12)', 'Permet de calmer les races inamicales', 'space'));
block.addElement(new Ligne('Découverte exceptionnelle (niv 18)', 'Découvrir une nouvelle race animale ou végétale → 1PP', false));
c_xeno.addElementFront(block);
c_xeno.setFrontSize('x-small');

c_xeno.addElementBack(new Ligne('Savoir thématique (niv 1)', 'Vous êtes formé pour découvrir des formes de vie extraterrestres, les identifier et interagir avec elles. Réduisez de 5 le DD des tests de Sciencesde la vie effectués pour identifier une créature rare. Sciences de la vie estpour vous une compétence de classe mais si elle l’est déjà grâce à la classeque vous avez choisie au niveau 1, vous bénéficiez à la place d’un bonusde +1 aux tests de Sciences de la vie. De plus, vous augmentez votre valeurde Charisme de +1 lors de la création de votre personnage.', 'space'));
c_xeno.addElementBack(new Ligne('Langage improvisé (niv 6)', 'Si vous et les créatures que vous rencontrez ne parlent pas les mêmes langues, vous pouvez passer 10 minutes à tenter de discuter avec elles (sielles sont d’accord), après quoi vous effectuez un test de Culture DD 25.En cas de réussite, vous improvisez un langage simple permettant decommuniquer succinctement. Vous pouvez utiliser ce langage improviséavec ces créatures spécifiques seulement mais vous bénéficiez d’unbonus de +2 aux tests de Culture effectués pour improviser un autre langageavec des créatures similaires parlant la même langue.', 'space'));
c_xeno.addElementBack(new Ligne('Premier contact (niv 12)', 'Vous savez vous y prendre pour faire une première et bonne impression sur les membres de races nouvelleset apaiser leur peur de l’inconnu. Lorsque vousrencontrez une créature qui n’a jamais vuun membre de votre raceou de celles de vos compagnonsde voyage, considérezque son attitude est indifférente au lieu d’inamicale comme elledevrait l’être normalement envers les membres de races inconnues. Cet avantage ne produit aucun effet si la créature est normalementhostile, indifférente, amicale ou serviable.', 'space'));
c_xeno.addElementBack(new Ligne('Découverte exceptionnelle (niv 18)', 'Jusqu’à deux fois par jour, lorsque vous découvrez et récoltez les données sur une espèce de plante ou d’animal, vousrécupérez 1 PP. Sur une planète inexplorée où toutes lesespèces sont nouvelles, ce processus prend généralement10 minutes tout au plus (et on ne la considère pascomme une période de repos permettant de récupérer desPE) mais, même sur des planètes connues, vous pouveztrouver une espèce nouvelle en 1d4 heures (ou moins) dansun biome isolé ou abritant une grande variété d’animaux etde plantes.', 'space'));
c_xeno.setBackSize('xx-small');

perso_book.addCarte(c_xeno);


// ARMURES LOURDES

var c_heavyarmor = new Carte('Port des armures lourdes', 'Heavy Armor Proficiency', 'DON', 'UPGRADE', 'personnage/HEAVY_ARMOR', 'personnel');

c_heavyarmor.addElementEncart(new Parametre('Conditions', 'Force 13 \nformé au port des armures légères'));

var block = new Block();
block.addElement(new Ligne('Avantage', 'Vous êtes formé au port des armures lourdes', 'space'));
c_heavyarmor.addElementFront(block);

c_heavyarmor.addElementBack(new Ligne(null, 'Si vous portez une armure pour laquelle vous n’êtes pas formé, vous subissez un malus de –4 à votre CAE et à votre CAC.', 'space'));				
c_heavyarmor.addElementBack(new Ligne(null, 'Un personnage qui n’est formé que dans le port des armures légères peut s’équiper d’armures plus lourdes en choisissant le don Port des armures lourdes.', 'space'));				
c_heavyarmor.addElementBack(new Ligne(null, 'La plupart des classes confèrent la formation au port des armures légères et les classes davantage tournées vers le corps à corps, telles que les soldats, confèrent la maîtrise du port des armures lourdes. Si vous portez une armure dont vous ne maîtrisez pas le port, vous subissez un malus de -4 à votre classe d’armure.', 'space'));				

perso_book.addCarte(c_heavyarmor);


// KANABO

var c_kanabo = new Carte('#perso.nom_race#', '#perso.nomVo_race#', 'KANABO', 'KANABO', 'personnage/KANABO', 'personnel');

c_kanabo.addElementEncart(new Parametre('Force', '#perso.For_bonus_aff#'));
c_kanabo.addElementEncart(new Parametre('Constitution', '#perso.Con_bonus_aff#'));
c_kanabo.addElementEncart(new Parametre('Intelligence', '#perso.Int_bonus_aff#'));
c_kanabo.addElementEncart(new Parametre('Points de vie', '#perso.pv_race#'));
c_kanabo.addElementEncart(new Parametre('Vitesse', '#perso.vitesse_cases#'));
				
var block = new Block();
block.addElement(new Ligne('Science des armures', '+1 à la CA \nmalus d\'armure lourde réduit de 1'));			
block.addElement(new Ligne('Vision nocturne 6 pieds', 'Permer de voir dans une zone de lumière faible'));		
block.addElement(new Ligne('Magie Kanabo', 'Permer de lancer 1/jour les sorts Déguisement et Arme surchargée'));		
block.addElement(new Ligne('Langues', 'Parler, lire et écrire le goblin'));	
c_kanabo.addElementFront(block);
c_kanabo.setFrontSize('small');		
			
c_kanabo.addElementBack(new Ligne(null, 'Kanabo (qui signifie <i>le plus fort</i> en langue gobeline ) est la progéniture à demi-démon d\'un hobgobelin et d\'un ja noi.', 'space'));
c_kanabo.addElementBack(new Ligne(null, 'Les Kanabo possèdent une magie innée, une maîtrise naturelle de l\'armure et une empreinte indépendante qui les amène parfois à rejeter la société des hobgobelins.', 'space'));
c_kanabo.addElementBack(new Ligne(null, 'Le Kanabo peut se reproduire à la fois avec des ja noi et des hobgoblins, ils sont aussi gros que leurs parents onis et leur apparence peut varier considérablement, ressemblant à tout, des hobgoblins aux demi-orques et aux humains.', 'space'));
c_kanabo.addElementBack(new Ligne(null, 'Le kanabo moyen mesure plus de 1.8m et pèse 115kg.', 'space'));

perso_book.addCarte(c_kanabo);



// DEGUISEMENT

var c_deguisement = new Carte('Déguisement', 'Desguise self', 'KANABO', 'KANABO', 'sorts/DESGUISE', 'personnel');

c_deguisement.addElementEncart(new Parametre('Temps d\'incantation', '1 action')); 
c_deguisement.addElementEncart(new Parametre('Durée', '10 min par niveau')); 
c_deguisement.addElementEncart(new Parametre('Portée', 'personnelle')); 

var block = new Block();
block.addElement(new Ligne(null, 'Permet de modifier son apparence (sexe, morphologie, carrure, vêtements, armes...)'));
block.addElement(new Ligne(null, 'Offre un bonus de +10 (circonstance) aux test de déguisement'));
c_deguisement.addElementFront(block);	
		
c_deguisement.addElementBack(new Ligne(null, 'Vous donnez une apparence différente à tous vos vêtements, armures, armes et équipements. Vous pouvez paraître plus petit ou plus grand, mince, gros ou entre les deux. Vous pouvez apparaître sous un autre sous-type de créature, mais votre type ne change pas. L’ampleur du changement apparent dépend de vous. Vous pouvez simplement ajouter ou masquer une fonctionnalité mineure, ou vous pouvez ressembler à une personne ou à un sexe totalement différent.', 'space'));				
c_deguisement.addElementBack(new Ligne(null, 'Le sort ne fournit pas les capacités ou les manières de la forme choisie, ni ne modifie les propriétés perçues tactiles (tactiles) ou audibles (sons) de vous ou de votre équipement.', 'space'));				
c_deguisement.addElementBack(new Ligne(null, 'Si vous utilisez ce sort pour créer un déguisement, vous gagnez un bonus de circonstance de +10 au test de déguisement (car cela compte comme une modification de votre forme). Une créature qui interagit directement avec vous peut tenter un jet de sauvegarde de volonté pour reconnaître votre apparence en tant qu’illusion.', 'space'));				
c_deguisement.setBackSize('small');

perso_book.addCarte(c_deguisement);



// SURCHARGE

var c_surcharge = new Carte('Arme surchargée', 'Supercharge Weapon', 'KANABO', 'KANABO', 'sorts/SURCHARGE', 'contact_objet');

c_surcharge.addElementEncart(new Parametre('Temps d\'incantation', '1 action'));
c_surcharge.addElementEncart(new Parametre('Durée', 'jusqu\'à la fin du tour suivant'));
c_surcharge.addElementEncart(new Parametre('Portée', 'contact'));

var block = new Block();
block.addElement(new Ligne(null, 'Touche une arme et la surcharge au prochain tour', 'grow3'));
block.addElement(new Ligne(null, 'Ajoute des dégâts supplémentaires à la prochaine attaque :', 'grow3'));
block.addElement(new Ligne(null, '+4d6 pour les armes mono-cible','grow1'));
block.addElement(new Ligne(null, '+2d6 pour les armes multi-cible', 'grow1'));
c_surcharge.addElementFront(block);

c_surcharge.addElementBack(new Ligne(null, 'Vous surchargez l\'arme de la cible.', 'space'));
c_surcharge.addElementBack(new Ligne(null, 'Si la prochaine attaque de l\'arme touche (à condition qu\'elle soit effectuée avant la fin du tour suivant)', 'space'));
c_surcharge.addElementBack(new Ligne(null, 'Slle inflige 4d6 dégâts supplémentaires si l\'arme est une cible unique ou 2d6 dégâts supplémentaires si l\'arme attaque toutes les créatures d\'une zone.', 'space'));
c_surcharge.addElementBack(new Ligne(null, 'Ce bonus de dégâts est du même type que les dégâts normaux de l\'arme.', 'space'));
c_surcharge.setBackSize('medium');				

perso_book.addCarte(c_surcharge);



// CARACTERISTIQUES

var c_carac = new Carte('Caractéristiques', 'Abilities', 'SKILLS', 'SKILLS', 'personnage/ABILITIES', 'personnel');

c_carac.addElementEncart(new Parametre('Bonus d\'initiative', '#perso.mod_Dex_aff#'));

var block = new Block('rowwrap');
block.addElement(new Parametre('Force', '#perso.For#', 1, '#perso.mod_For_aff#'));
block.addElement(new Parametre('Constitution', '#perso.Con#', 1, '#perso.mod_Con_aff#'));
block.addElement(new Parametre('Dextérité', '#perso.Dex#', 1, '#perso.mod_Dex_aff#'));
block.addElement(new Parametre('Intelligence', '#perso.Int#', 1, '#perso.mod_Int_aff#'));
block.addElement(new Parametre('Sagesse', '#perso.Sag#', 1, '#perso.mod_Sag_aff#'));
block.addElement(new Parametre('Charisme', '#perso.Int#', 1, '#perso.mod_Cha_aff#'));						
c_carac.addElementFront(block);		

var block = new Block();
block.addElement(new Parametre('Force', 'Mesure la puissance physique', null, '#perso.For_base#' + ' ' + '#perso.For_bonus_aff#', 'vertical'));
block.addElement(new Parametre('Dextérité', 'Mesure l\'agilité', null, '#perso.Dex_base#' + ' ' + '#perso.Dex_bonus_aff#', 'vertical'));
block.addElement(new Parametre('Constitution', 'Mesure l\'endurance', null, '#perso.Con_base#' + ' ' + '#perso.Con_bonus_aff#', 'vertical'));
block.addElement(new Parametre('Intelligence', 'Mesure le raisonnement et la mémoire', null, '#perso.Int_base#' + ' ' + '#perso.Int_bonus_aff#', 'vertical'));
block.addElement(new Parametre('Sagesse', 'Mesure la perception et l\'intuition', null, '#perso.Sag_base#' + ' ' + '#perso.Sag_bonus_aff#', 'vertical'));
block.addElement(new Parametre('Charisme', 'Mesure la force de la personnalité', null, '#perso.Cha_base#' + ' ' + '#perso.Cha_bonus_aff#', 'vertical'));				
c_carac.addElementBack(block);
c_carac.setBackSize('max small');	
			
perso_book.addCarte(c_carac);



// SAUVEGARDE

var c_saving = new Carte('Jets de sauvegarde', 'Saving throws', 'SKILLS', 'SKILLS', 'personnage/THROWS', 'personnel');

c_saving.addElementEncart(new Parametre('Bonus de base à l\'attaque', '#perso.bba_aff#'));

var block = new Block();
block.addElement(new Parametre('Reflexe', '#perso.reflexes#'));	
block.addElement(new Parametre('Vigueur', '#perso.vigueur#'));		
block.addElement(new Parametre('Volonté', '#perso.volonte#'));				
c_saving.addElementFront(block);

c_saving.addElementBack(new Ligne('Réflexes', 'Les jets de sauvegarde de Réflexes mettent à l’épreuve votre capacité à esquiver les attaques de zone et les situations inattendues. Appliquez votre modificateur de Dextérité à vos jets de sauvegarde de Réflexes.', 'space'));
c_saving.addElementBack(new Ligne('Vigueur', 'Les jets de sauvegarde de Vigueur mesurent votre capacité à résister aux agressions physiques ou aux attaques contre votre vitalité et votre santé. Appliquez votre modificateur de Constitution à vos jets de sauvegarde de Vigueur.', 'space'));
c_saving.addElementBack(new Ligne('Volonté', 'Les jets de sauvegarde de Volonté reflètent votre résistance contre les influences mentales et contre de nombreux effets magiques. Appliquez votre modificateur de Sagesse à vos jets de sauvegarde de Volonté.', 'space'));
c_saving.setBackSize('medium');
			
perso_book.addCarte(c_saving);	



// COMPETENCES

var c_competences = new Carte('Compétences', 'Skills', 'SKILLS', 'SKILLS', 'personnage/SKILLS', 'personnel');

c_competences.addElementEncart(new Parametre('Nombre de rangs par niveau', '#perso.rang_by_niveau#'));

var blockComp = new Block('rowwrap');
for(var compKey in altronus.getUsedCompetences()){
	var comp = altronus.competences[compKey];
	blockComp.addElement(new Parametre(comp.nom, comp.value));
}		
c_competences.addElementFront(blockComp);

var blockComp = new Block();
for(var compKey in altronus.getUsedCompetences()){
	var comp = altronus.competences[compKey];
	blockComp.addElement(new Ligne(comp.nom + ' :' + comp.rang, comp.description, true));
}
c_competences.addElementBack(blockComp);
c_competences.setBackSize('x-small');
		
perso_book.addCarte(c_competences);	



// STOCKAGE

var c_stockage = new Carte('Stockage', 'Storage', 'STORAGE', 'CREDIT', 'personnage/STORAGE', 'personnel');

c_stockage.addElementEncart(new Parametre('Crédits', ''));

c_stockage.addElementFront(new Ligne('Contenu du stockage', ''));	
c_stockage.setFrontSize('small');

c_stockage.addElementBack(new Ligne(null, 'De nombreux mondes conservent des pièces ou d’autres formes de monnaie physique remontant à une époque antérieure au Pacte, des moyens de paiement dont ils ont un usage occasionnel pour des transactions locales. Cependant, la monnaie commune des Mondes du Pacte (et dans les règles de Starfinder) est le crédit. Toutes les transactions interplanétaires sont effectuées en crédits, une devise régulée par les gouvernements des Mondes du Pacte et par l’église d’Abadar. Une des obligations pour rejoindre les Mondes du Pacte est de convertir son économie pour qu’elle repose sur la monnaie commune qu’est le crédit, et même des civilisations très éloignées de la juridiction officielle des Mondes du Pacte préfèrent se servir de cette devise puisqu’elle est très répandue et facile à utiliser. Le crédit est à la fois une monnaie physique et une monnaie numérique. La plupart des individus et des entreprises de Starfinder confient leurs fonds à des établissements bancaires majeurs grâce à des comptes numériques protégés par les sorts et les systèmes de protection informatisés les plus puissants qu’on puisse s’offrir. Mais il y a un prix à payer pour de telles mesures de sécurité : accéder à ces fonds nécessite des manipulations complexes et les transactions officielles entre les comptes doivent être transparentes aussi bien pour les gouvernements que pour les responsables des banques, ce qui rend toute véritable confidentialité presque impossible.'));					
c_stockage.setBackSize('small');	
	
perso_book.addCarte(c_stockage);	
		



// SANTE

var c_sante = new Carte('Santé / Armure', 'Health / Armor', 'HEALTH', 'HEALTH', 'personnage/HEALTH', 'personnel');

c_sante.addElementEncart(new Parametre('Classe d\'armure cinétique', '#perso.cinetique#'));
c_sante.addElementEncart(new Parametre('Classe d\'armure énergétique',  '#perso.energetique#'));
									
var block = new Block();
block.addElement(new Parametre('Points d\'endurance', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/' + '#perso.endurance#'));
block.addElement(new Parametre('Points de vie', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/' + '#perso.pv#'));
var param = new Parametre('Points de persévérance', '');
var checkboxes = new CheckBoxes();
for(var compKey in altronus.getPerseveranceList()){
	checkboxes.addCheckBox(new CheckBox());
}
param.addElement(checkboxes);
block.addElement(param);
c_sante.addElementFront(block);
c_sante.setFrontSize('small');
						
c_sante.addElementBack(new Ligne('Récupérer des points d’endurance', 'Vous pouvez dépenser 1 point de persévérance pour récupérer la totalité de vos points d’endurance perdus, sans dépasser votre maximum normal. L’utilisation de ce pouvoir nécessite 10 minutes de repos ininterrompues – si vous êtes interrompu au cours de cette période de repos, vous ne récupérez pas vos points d’endurance mais vous ne perdez pas non plus le point de persévérance. Vous devez vous reposer pendant 10 minutes consécutives et ininterrompues pour pouvoir utiliser ce pouvoir et vous ne pouvez pas simplement vous reposer 10 minutes par intermittences.', 'space'));
c_sante.addElementBack(new Ligne('Se stabiliser', 'Si vous êtes agonisant et qu’il vous reste suffisamment de points de persévérance, vous pouvez dépenser un nombre de points de persévérance égal à un quart de votre maximum (1 PP au minimum, 3 PP au maximum) lors de votre tour pour vous stabiliser immédiatement. Une fois ces points dépensés, vous n’êtes plus agonisant mais vous restez inconscient. S’il ne vous reste pas assez de points de persévérance lorsque vous êtes agonisant, vous perdez des points de persévérance comme l’indiquent les règles de cet état.', 'space'));
c_sante.addElementBack(new Ligne('Poursuivre le combat', 'Si vous êtes stabilisé et qu’il vous reste suffisamment de points de persévérance, ou si vous êtes inconscient après avoir subi des dégâts non létaux (voir page 252), vous pouvez dépenser 1 point de persévérance au début de votre tour pour récupérer 1 point de vie. Vous n’êtes alors plus agonisant, vous reprenez immédiatement conscience et vous pouvez agir lors de votre tour comme à l’accoutumée. Vous pouvez dépenser des points de persévérance pour récupérer des points de vie uniquement si vos points de vie sont à 0 et si vous êtes stabilisé, et vous ne pouvez pas récupérer plus d’un point de vie de cette façon. Vous ne pouvez pas dépenser des points de persévérance pour à la fois vous stabiliser et poursuivre le combat lors du même round.', 'space'));
c_sante.setBackSize('x-small');
				
perso_book.addCarte(c_sante);		

perso_book.print();	

starfinder.addBook(perso_book);		
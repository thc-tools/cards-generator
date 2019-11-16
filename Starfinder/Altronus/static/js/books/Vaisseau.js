var vaisseau_book = new Book('Vaisseau');



// VAISSEAU

var c_vaisseau = new Carte('#vaisseau.nom#', '#vaisseau.nomVo#', 'SHIP', 'SHIP', 'vaisseau/VAISSEAU', 'personnel');

c_vaisseau.addElementEncart(new Parametre('Echelon', '#vaisseau.echelon#'));		

var blockFront = new Block();
blockFront.addElement(new Parametre('Armature', '#vaisseau.nom_armature#'));		
blockFront.addElement(new Parametre('Réacteur', '#vaisseau.nom_reacteur#'));
blockFront.addElement(new Parametre('Propulseur', '#vaisseau.nom_propulseur#'));
blockFront.addElement(new Parametre('Blindage', '#vaisseau.nom_blindage#'));
blockFront.addElement(new Parametre('Défenses', '#vaisseau.nom_contremesure#'));
blockFront.addElement(new Parametre('Boucliers', '#vaisseau.nom_bouclier#'));


c_vaisseau.addElementFront(blockFront);
c_vaisseau.setFrontSize('small');




c_vaisseau.addElementBack(new Ligne(null, 'D’aspect très industriel, le Pink Albatros est un vaisseau conçu pour maintenir son équipage en vie dans des systèmes hostiles, tout le reste est secondaire.', 'space'));
c_vaisseau.addElementBack(new Ligne(null, 'À l’intérieur, cependant, le Pink Albatros est étonnamment confortable ce qui en fait un appareil idéal pour l’exploration, pour y demeurer ou pour des trajets long-courriers.'));

c_vaisseau.setBackSize('medium');

vaisseau_book.addCarte(c_vaisseau);	


// ARMATURE

var c_armature = new Carte('#vaisseau.nom_armature#', '#vaisseau.nomVo_armature#', 'SHIP', 'SHIP', 'vaisseau/ARMATURE', 'personnel');

c_armature.addElementEncart(new Parametre('Taille', '#vaisseau.taille_aff#'));		
c_armature.addElementEncart(new Parametre('Nombre de compartiments', '#vaisseau.nbCompartiment#'));		
c_armature.addElementEncart(new Parametre('Equipage', 'minimum ' + '#vaisseau.minEquip#' + ', maximum ' + '#vaisseau.maxEquip#'));		


var blockFront = new Block('vertical');

var blockFront1 = new Block('rowwrap');
blockFront1.addElement(new Parametre('Seuil de dégâts', '#vaisseau.seuil_degats#'));		
blockFront1.addElement(new Parametre('Seuil critique', '#vaisseau.seuil_critique#'));

var blockFront2 = new Block('rowwrap');
blockFront2.addElement(new Parametre('Bonus de pilotage', '#vaisseau.mod_Pil_manoeuvrabilite_aff#'));
blockFront2.addElement(new Parametre('Points de structure', '#vaisseau.structure#'));

var blockFront3 = new Block('rowwrap');
blockFront3.addElement(new Parametre('Bonus de CA', '#vaisseau.bonus_ca_taille_aff#'));
blockFront3.addElement(new Parametre('Bonus d\'IV', '#vaisseau.bonus_iv_taille_aff#'));

var blockFront4 = new Block('rowwrap');
blockFront4.addElement(new Parametre('Manoeuvrabilité', '#vaisseau.manoeuvrabilite#'));
blockFront4.addElement(new Parametre('Distance de virage', '#vaisseau.distance_virage_manoeuvrabilite#'));

var blockFront5 = new Block('rowwrap');
blockFront5.addElement(new Parametre('Base de structure', '#vaisseau.structure_base#'));
blockFront5.addElement(new Parametre('Facteur de structure', '#vaisseau.structure_facteur#'));

blockFront.addElement(blockFront1);
blockFront.addElement(blockFront2);
blockFront.addElement(blockFront3);
blockFront.addElement(blockFront4);
blockFront.addElement(blockFront5);
c_armature.addElementFront(blockFront);
c_armature.setFrontSize('x-small');

c_armature.addElementBack(new Ligne(null, 'Chaque vaisseau est conçu à partir d’une armature de base qui détermine sa taille, sa manoeuvrabilité, ses emplacements d’arme de départ, sa résistance structurelle, ses possibilités d’aménagements et d’autres capacités.', 'space'));
c_armature.addElementBack(new Ligne(null, 'Bien que deux vaisseaux basés sur la même armature puissent avoir l’air radicalement différents, ils partagent cependant certaines caractéristiques de base.', 'space'));
c_armature.addElementBack(new Ligne(null, 'L’armature d’un vaisseau inclut tous les systèmes de survie et de gravité artificielle nécessaires à la survie et au confort de l’équipage (et des passagers éventuels).', 'space'));
c_armature.addElementBack(new Ligne(null, 'Elle intègre également un transpondeur qui correspond à « l’adresse » du vaisseau pour les communications intra-système et illimitées.'));

c_armature.setBackSize('medium');

vaisseau_book.addCarte(c_armature);	


// REACTEUR

var c_reacteur = new Carte('#vaisseau.nom_reacteur#', '#vaisseau.nomVo_reacteur#', 'SHIP', 'SHIP', 'vaisseau/REACTEUR', 'personnel');

c_reacteur.addElementEncart(new Parametre('Puissance', '#vaisseau.nb_UE#' + ' UE'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Le réacteur est le système le plus important d’un vaisseau puisqu’il fournit de l’énergie à tous les autres systèmes.'));
c_reacteur.addElementFront(blockFront);
c_reacteur.setFrontSize('medium');

c_reacteur.addElementBack(new Ligne(null, 'Le réacteur est le système le plus important d’un vaisseau puisqu’il fournit de l’énergie à tous les autres systèmes.', 'space'));
c_reacteur.addElementBack(new Ligne(null, 'Tous les vaisseaux de taille G et inférieure n’ont, par défaut, qu’un seul réacteur mais les vaisseaux de taille M et G peuvent être équipés d’une salle de réacteur supplémentaire. Les vaisseaux de taille TG peuvent avoir deux réacteurs, les vaisseaux de taille Gig peuvent en avoir trois et les vaisseaux de taille C peuvent en avoir 4. Bien que certains vaisseaux fassent exception à cette règle, ils sont assez rares.', 'space'));
c_reacteur.addElementBack(new Ligne(null, 'Un réacteur dispose généralement d’un système de batteries auxiliaires utilisées en cas d’urgence pour fournir une énergie limitée, suffisamment pour maintenir uniquement les systèmes de survie, de gravité artificielle et de communication pendant 2d6 jours.'));


c_reacteur.setBackSize('medium');

vaisseau_book.addCarte(c_reacteur);	



// PROPULSEUR

var c_propulseur = new Carte('#vaisseau.nom_propulseur#', '#vaisseau.nomVo_propulseur#', 'SHIP', 'SHIP', 'vaisseau/PROPULSEUR', 'personnel');

c_propulseur.addElementEncart(new Parametre('Vitesse maximum', '#vaisseau.vitesseMax#' + ' hex'));		


var blockFront = new Block();
blockFront.addElement(new Parametre('Bonus de pilotage', '#vaisseau.mod_Pil_propulseur_aff#'));
blockFront.addElement(new Ligne(null, 'Les vaisseaux utilisent des propulseurs conventionnels pour se déplacer au sein du même système, pour naviguer dans le Drift quand ils y entrent, pour explorer et pour engager un combat.'));
c_propulseur.addElementFront(blockFront);
c_propulseur.setFrontSize('small');

c_propulseur.addElementBack(new Ligne(null, 'Les vaisseaux utilisent des propulseurs conventionnels pour se déplacer au sein du même système, pour naviguer dans le Drift quand ils y entrent, pour explorer et pour engager un combat.', 'space'));
c_propulseur.addElementBack(new Ligne(null, 'Ils sont prévus pour des vaisseaux d’une taille donnée et ils ne peuvent donc pas être installés sur un vaisseau qui n’a pas la bonne taille.', 'space'));
c_propulseur.addElementBack(new Ligne(null, 'La vitesse maximale des propulseurs d’un vaisseau octroie soit un bonus, soit un malus aux tests de Pilotage.', 'space'));
c_propulseur.addElementBack(new Ligne(null, 'On utilise également les propulseurs pour atterrir ou pour décoller d’une planète. Les vaisseaux de taille G ou inférieure le font généralement sans problème sur des planètes à gravité faible ou normale (sauf avec des conditions atmosphériques comme un vent violent ou une tempête). Le MJ détermine si oui ou non le pilote d’un vaisseau spatial doit tenter un test de Pilotage pour faire atterrir un vaisseau avec une vitesse inférieure à 8 sur une planète à forte gravité. En cas d’échec, le vaisseau peut s’écraser. En raison de leur gabarit, les vaisseaux qui ont une taille d’au moins TG ne peuvent atterrir sur une planète et doivent utiliser des navettes ou d’autres moyens pour transporter des biens et des personnes sur un monde ou à partir de ce monde.'));
c_propulseur.setBackSize('small');

vaisseau_book.addCarte(c_propulseur);	



// BLINDAGE

var c_blindage = new Carte('#vaisseau.nom_blindage#', '#vaisseau.nomVo_blindage#', 'SHIP', 'SHIP', 'vaisseau/BLINDAGE', 'personnel');

c_blindage.addElementEncart(new Parametre('Blindage', '+' + '#vaisseau.bonus_ca_blindage#'));		

var blockFront = new Block();
blockFront.addElement(new Parametre('Malus d\'IV', '#vaisseau.bonus_iv_blindage#'));
blockFront.addElement(new Parametre('Malus de manoeuvrabilité', '#vaisseau.distance_virage_blindage#'));

blockFront.addElement(new Ligne(null, 'Le blindage protège des armes à tir direct, déviant leur énergie et évitant des dégâts aux systèmes vitaux. Il octroie un bonus à la CA du vaisseau.'));
c_blindage.addElementFront(blockFront);
c_blindage.setFrontSize('small');

c_blindage.addElementBack(new Ligne(null, 'Le blindage protège des armes à tir direct, déviant leur énergie et évitant des dégâts aux systèmes vitaux. Il octroie un bonus à la CA du vaisseau.', 'space'));
c_blindage.addElementBack(new Ligne(null, 'Le coût d’un blindage dépend du bonus accordé et de la catégorie de taille du vaisseau.', 'space'));
c_blindage.addElementBack(new Ligne(null, 'Le blindage est un système passif et n’a besoin d’aucune UE pour fonctionner.', 'space'));
c_blindage.addElementBack(new Ligne(null, 'Cette protection est avant tout due à la masse du blindage, ce qui peut affecter la manoeuvrabilité du vaisseau (il a plus de difficultés à virer) et faciliter le verrouillage des armes autonomes adverses.'));
c_blindage.setBackSize('medium');

vaisseau_book.addCarte(c_blindage);	



// BOUCLIER

var c_bouclier = new Carte('#vaisseau.nom_bouclier#', '#vaisseau.nomVo_bouclier#', 'SHIP', 'SHIP', 'vaisseau/BOUCLIER', 'personnel');

c_bouclier.addElementEncart(new Parametre('Total des boucliers', '#vaisseau.bouclier#'));		
c_bouclier.addElementEncart(new Parametre('Bouclier moyen par arc', '#vaisseau.bouclier_repartition#'));		


var blockFront = new Block();
blockFront.addElement(new Parametre('Régénération des boucliers', '#vaisseau.bouclier_regen#'));
blockFront.addElement(new Parametre('Bouclier minimum par arc', '#vaisseau.bouclier_min#'));


blockFront.addElement(new Ligne(null, 'Le blindage protège des armes à tir direct, déviant leur énergie et évitant des dégâts aux systèmes vitaux. Il octroie un bonus à la CA du vaisseau.'));
c_bouclier.addElementFront(blockFront);
c_bouclier.setFrontSize('small');

c_bouclier.addElementBack(new Ligne(null, 'Tandis que presque tous les vaisseaux disposent d’un écran de protection pour éviter les dégâts dus aux débris qui flottent dans l’espace, cet écran ne les protège pas des armes laser, des missiles et des attaques plus dévastatrices.', 'space'));
c_bouclier.addElementBack(new Ligne(null, 'Contre ces menaces, un vaisseau peut être doté de boucliers d’énergie. Des projecteurs disposés autour de son armature génèrent une barrière qui absorbe les dégâts des attaques.', 'space'));
c_bouclier.addElementBack(new Ligne(null, 'Chaque attaque réduit le nombre de points de bouclier dans un arc donné jusqu’à ce que le bouclier protégeant cet arc soit épuisé. Après quoi, les dégâts dans cet arc réduisent les points de structure du vaisseau.', 'space'));
c_bouclier.addElementBack(new Ligne(null, 'Les points de bouclier se régénèrent avec le temps et peuvent de nouveau être utilisés. Cependant, cette régénération ne se produit que lorsque le vaisseau n’est pas engagé dans un combat ou qu’il ne subit plus de dégâts. Les boucliers doivent être reliés à un réacteur opérationnel pour pouvoir se régénérer.', 'space'));
c_bouclier.addElementBack(new Ligne(null, 'Au début d’un affrontement, quand l’équipage rejoint les postes de combat et que les boucliers sont activés, les points de bouclier doivent être répartis entre les quatre quadrants du vaisseau. On ne peut assigner moins de 10 % de cette valeur initiale à un quadrant au début d’un combat ou moins de 10 % des points de bouclier restant au moment où les boucliers sont réaffectés grâce à l’action \\"rééquilibrage\\" de l’officier scientifique.'));

c_bouclier.setBackSize('x-small');

vaisseau_book.addCarte(c_bouclier);	




// DEFENSES

var c_defenses = new Carte('#vaisseau.nom_contremesure#', '#vaisseau.nomVo_contremesure#', 'SHIP', 'SHIP', 'vaisseau/DEFENSES', 'personnel');

c_defenses.addElementEncart(new Parametre('Indice de vérouillage', '#vaisseau.bonus_iv_contremesure#'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Les systèmes de contre-mesures défensives protègent le vaisseau contre les armes autonomes, comme les missiles, et contre les détecteurs des vaisseaux ennemis.'));
c_defenses.addElementFront(blockFront);
c_defenses.setFrontSize('medium');

c_defenses.addElementBack(new Ligne(null, 'Les systèmes de contre-mesures défensives protègent le vaisseau contre les armes autonomes, comme les missiles, et contre les détecteurs des vaisseaux ennemis.', 'space'));
c_defenses.addElementBack(new Ligne(null, 'Pour cela, ces systèmes utilisent un ensemble complexe de détecteurs électroniques et d’équipements de transmission qui sont conçus pour brouiller les appareils ennemis et leur fournir de fausses indications. Les contre-mesures octroient un bonus à l’IV d’un vaisseau.', 'space'));

c_defenses.setBackSize('medium');

vaisseau_book.addCarte(c_defenses);	




// ARME_PROUE

var c_arme_proue = new Carte('#vaisseau.weapon_proue_nom#', '#vaisseau.weapon_proue_nomVo#', 'SHIP', 'SHIP', 'vaisseau/LASER', 'distance_ennemi_1c');

c_arme_proue.addElementEncart(new Parametre('Portée', '#vaisseau.weapon_proue_portee#'));	
c_arme_proue.addElementEncart(new Parametre('Dégâts', '#vaisseau.weapon_proue_degats#'));		
	

var blockFront = new Block();
blockFront.addElement(new Parametre('Vitesse', '#vaisseau.weapon_proue_vitesse#'));
blockFront.addElement(new Parametre('Propriétés', '#vaisseau.weapon_proue_propriete#'));	

blockFront.addElement(new Ligne(null, 'Canon laser de base, présent sur la plupart des vaisseaux. C\'est l\'arme la plus commune du Vaste.'));
c_arme_proue.addElementFront(blockFront);
c_arme_proue.setFrontSize('medium');

c_arme_proue.addElementBack(new Ligne(null, 'Canon laser de base, présent sur la plupart des vaisseaux. C\'est l\'arme la plus commune du Vaste..', 'space'));

c_arme_proue.setBackSize('medium');

vaisseau_book.addCarte(c_arme_proue);	



// ARME_TOURELLE

var c_arme_tourelle = new Carte('#vaisseau.weapon_tourelle_nom#', '#vaisseau.weapon_tourelle_nomVo#', 'SHIP', 'SHIP', 'vaisseau/LANCE_MISSILES', 'distance_ennemi_1c');

c_arme_tourelle.addElementEncart(new Parametre('Portée', '#vaisseau.weapon_tourelle_portee#'));	
c_arme_tourelle.addElementEncart(new Parametre('Dégâts', '#vaisseau.weapon_tourelle_degats#'));		
	

var blockFront = new Block();
blockFront.addElement(new Parametre('Vitesse', '#vaisseau.weapon_tourelle_vitesse#'));
blockFront.addElement(new Parametre('Propriétés', '#vaisseau.weapon_tourelle_propriete#'));	

blockFront.addElement(new Ligne(null, 'Canon laser de base, présent sur la plupart des vaisseaux. C\'est l\'arme la plus commune du Vaste.'));
c_arme_tourelle.addElementFront(blockFront);
c_arme_tourelle.setFrontSize('medium');

c_arme_tourelle.addElementBack(new Ligne(null, 'Canon laser de base, présent sur la plupart des vaisseaux. C\'est l\'arme la plus commune du Vaste..', 'space'));

c_arme_tourelle.setBackSize('medium');

vaisseau_book.addCarte(c_arme_tourelle);	






// ARMEMENT

var c_armement = new Carte('Armement du vaisseau', 'Weapon mount', 'SHIP', 'SHIP', 'vaisseau/WEAPON_MOUNT', 'all_ennemi');

c_armement.addElementEncart(new Parametre('Seuil de dégâts', '#vaisseau.seuil_degats#'));		
c_armement.addElementEncart(new Parametre('Seuil critique', '#vaisseau.seuil_critique#'));		

var blockFront = new Block('rowwrap');

var cases = new Block('cases');
var caseDys = new CheckBoxes('case withcheck');
caseDys.addCheckBox(new CheckBox('Dysfonction'));
cases.addElement(caseDys);

var caseDef = new CheckBoxes('case withcheck');
caseDef.addCheckBox(new CheckBox('Défaillance'));
cases.addElement(caseDef);

var caseDes = new CheckBoxes('case withcheck');
caseDes.addCheckBox(new CheckBox('Destruction'));
cases.addElement(caseDes);

var proue = new Parametre('Proue', '', null, null, 'align');
var poupe = new Parametre('Poupe', '', null, null, 'align');
var babord = new Parametre('Bâbord', '', null, null, 'align');
var tribort = new Parametre('Tribord', '', null, null, 'align');
var tourelle = new Parametre('Tourelle', '', null, null, 'align');

proue.addElement(cases);
poupe.addElement(cases);
babord.addElement(cases);
tribort.addElement(cases);
tourelle.addElement(cases);

blockFront.addElement(proue);
blockFront.addElement(poupe);
blockFront.addElement(babord);
blockFront.addElement(tribort);
blockFront.addElement(tourelle);

c_armement.addElementFront(blockFront);
c_armement.setFrontSize('x-small');

var backBlock = new Block('vertical');

var proue = new Parametre('Proue', '', null, null, 'align');
var weaponProue = new Block('vertical');
weaponProue.addElement(new Parametre('Nom', '#vaisseau.weapon_proue_nom#', null, '#vaisseau.weapon_proue_nomVO#', null));
weaponProue.addElement(new Parametre('Portée', '#vaisseau.weapon_proue_portee#', null, null, null));
weaponProue.addElement(new Parametre('Dégâts', '#vaisseau.weapon_proue_degats#', null, null, null));
weaponProue.addElement(new Parametre('Coûts', '#vaisseau.weapon_proue_cout#', null, null, null));
weaponProue.addElement(new Parametre('Vitesse', '#vaisseau.weapon_proue_vitesse#', null, null, null));
proue.addElement(weaponProue);

var poupe = new Parametre('Poupe', '', null, null, 'align');
var weaponPoupe = new Block('vertical');
weaponPoupe.addElement(new Parametre('Nom', '#vaisseau.weapon_poupe_nom#', null, '#vaisseau.weapon_poupe_nomVO#', null));
weaponPoupe.addElement(new Parametre('Portée', '#vaisseau.weapon_poupe_portee#', null, null, null));
weaponPoupe.addElement(new Parametre('Dégâts', '#vaisseau.weapon_poupe_degats#', null, null, null));
weaponPoupe.addElement(new Parametre('Coûts', '#vaisseau.weapon_poupe_cout#', null, null, null));
weaponPoupe.addElement(new Parametre('Vitesse', '#vaisseau.weapon_poupe_vitesse#', null, null, null));
poupe.addElement(weaponPoupe);

var babord = new Parametre('Bâbord', '', null, null, 'align');
var weaponBabord = new Block('vertical');
weaponBabord.addElement(new Parametre('Nom', '#vaisseau.weapon_babord_nom#', null, '#vaisseau.weapon_babord_nomVO#', null));
weaponBabord.addElement(new Parametre('Portée', '#vaisseau.weapon_babord_portee#', null, null, null));
weaponBabord.addElement(new Parametre('Dégâts', '#vaisseau.weapon_babord_degats#', null, null, null));
weaponBabord.addElement(new Parametre('Coûts', '#vaisseau.weapon_babord_cout#', null, null, null));
weaponBabord.addElement(new Parametre('Vitesse', '#vaisseau.weapon_babord_vitesse#', null, null, null));
babord.addElement(weaponBabord);

var tribord = new Parametre('Tribord', '', null, null, 'align');
var weaponTribord = new Block('vertical');
weaponTribord.addElement(new Parametre('Nom', '#vaisseau.weapon_tribord_nom#', null, '#vaisseau.weapon_tribord_nomVO#', null));
weaponTribord.addElement(new Parametre('Portée', '#vaisseau.weapon_tribord_portee#', null, null, null));
weaponTribord.addElement(new Parametre('Dégâts', '#vaisseau.weapon_tribord_degats#', null, null, null));
weaponTribord.addElement(new Parametre('Coûts', '#vaisseau.weapon_tribord_cout#', null, null, null));
weaponTribord.addElement(new Parametre('Vitesse', '#vaisseau.weapon_tribord_vitesse#', null, null, null));
tribord.addElement(weaponTribord);

var tourelle = new Parametre('Tourelle', '', null, null, 'align');
var weaponTourelle = new Block('vertical');
weaponTourelle.addElement(new Parametre('Nom', '#vaisseau.weapon_tourelle_nom#', null, '#vaisseau.weapon_tourelle_nomVO#', null));
weaponTourelle.addElement(new Parametre('Portée', '#vaisseau.weapon_tourelle_portee#', null, null, null));
weaponTourelle.addElement(new Parametre('Dégâts', '#vaisseau.weapon_tourelle_degats#', null, null, null));
weaponTourelle.addElement(new Parametre('Coûts', '#vaisseau.weapon_tourelle_cout#', null, null, null));
weaponTourelle.addElement(new Parametre('Vitesse', '#vaisseau.weapon_tourelle_vitesse#', null, null, null));
tourelle.addElement(weaponTourelle);

backBlock.addElement(proue);
backBlock.addElement(poupe);
backBlock.addElement(babord);
backBlock.addElement(tribord);
backBlock.addElement(tourelle);

c_armement.addElementBack(backBlock);
c_armement.setBackSize('max xx-small');

vaisseau_book.addCarte(c_armement);


//EQUIPEMENTS

var c_equipments = new Carte('Equipements du vaisseau', 'Equipments', 'SHIP', 'SHIP', 'vaisseau/EQUIPMENTS', 'personnel');

c_equipments.addElementEncart(new Parametre('Seuil de dégâts', '#vaisseau.seuil_degats#'));		
c_equipments.addElementEncart(new Parametre('Seuil critique', '#vaisseau.seuil_critique#'));		

var blockFront = new Block('rowwrap');

var cases = new Block('cases');
var caseDys = new CheckBoxes('case withcheck');
caseDys.addCheckBox(new CheckBox('Dysfonction'));
cases.addElement(caseDys);

var caseDef = new CheckBoxes('case withcheck');
caseDef.addCheckBox(new CheckBox('Défaillance'));
cases.addElement(caseDef);

var caseDes = new CheckBoxes('case withcheck');
caseDes.addCheckBox(new CheckBox('Destruction'));
cases.addElement(caseDes);

var survie = new Parametre('Systèmes de survie', '', null, null, 'align');
var detecteurs = new Parametre('Détecteurs', '', null, null, 'align');
var propulseurs = new Parametre('Propulseurs', '', null, null, 'align');
var reacteur = new Parametre('Réacteur', '', null, null, 'align');

survie.addElement(cases);
detecteurs.addElement(cases);
propulseurs.addElement(cases);
reacteur.addElement(cases);

blockFront.addElement(survie);
blockFront.addElement(detecteurs);
blockFront.addElement(propulseurs);
blockFront.addElement(reacteur);

c_equipments.addElementFront(blockFront);
c_equipments.setFrontSize('x-small');

c_equipments.addElementBack(new Ligne('Etats des équipements', null, 'space'));
c_equipments.addElementBack(new Ligne('Dysfonction', 'Un système avec un dysfonctionnement ne fonctionne pas au maximum de ses capacités. Les actions des membres de l’équipage en rapport avec ce système (à l’exception des actions d’ingénieur maintenir l’intégrité et bricolage) subissent un malus de –2.', 'space'));
c_equipments.addElementBack(new Ligne('Défaillance', 'Un système défaillant est difficile à contrôler. Les actions des membres de l’équipage en rapport avec ce système (à l’exception des actions d’ingénieur maintenir l’intégrité et bricolage) subissent un malus de –4. De plus, les membres d’équipage ne peuvent utiliser des actions d’optimisation avec ce système. Si le réacteur est défaillant, toutes les actions à bord du vaisseau qui n’impliquent pas le réacteur subissent un malus de –2 ; ce malus est cumulatif avec ceux des états critiques affectant d’autres systèmes.', 'space'));
c_equipments.addElementBack(new Ligne('Destruction', 'Un système détruit fonctionne au minimum de ses capacités. Les actions des membres de l’équipage en rapport avec ce système (à l’exception des actions d’ingénieur maintenir l’intégrité et bricolage et des actions d’équipage restreint ; voir page 326) échouent automatiquement. Si le réacteur est détruit, toutes les actions de l’équipage à bord du vaisseau qui n’impliquent pas le réacteur subissent un malus de –4 ; ce malus est cumulatif avec celles des états critiques affectant d’autres systèmes.', 'space'));
                                  
c_equipments.addElementBack(new Ligne('Conséquences des dommages', null, 'space'));
c_equipments.addElementBack(new Ligne('Systèmes de survie', 'Affecte toutes les actions du capitaine.', 'space'));
c_equipments.addElementBack(new Ligne('Détecteurs', 'Affecte toutes les actions de l’officier scientifique.', 'space'));
c_equipments.addElementBack(new Ligne('Propulseurs', 'Affecte toutes les actions de pilotage.', 'space'));
c_equipments.addElementBack(new Ligne('Réacteur', 'Affecte toutes les actions de l’ingénieur à l’exception de maintenir l’intégrité et bricolage ; un réacteur défaillant ou détruit affecte également les actions des autres membres d’équipage.', 'space'));

c_equipments.setBackSize('max xx-small');

vaisseau_book.addCarte(c_equipments);


//DEFENSES

var c_defenses = new Carte('Défense du vaisseau', 'Shield_mount', 'SHIP', 'SHIP', 'vaisseau/SHIELD_MOUNT', 'distance_ami_3c');

c_defenses.addElementEncart(new Parametre('Classe d\'armure', '#vaisseau.ca#'));		
c_defenses.addElementEncart(new Parametre('Indice de Vérouillage', '#vaisseau.iv#'));		

var block = new Block();
block.addElement(new Parametre('Points de structure', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/' + '#vaisseau.structure#'));

var boucliersRepartition = new Parametre('Boucliers', '', null, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
var blockBouclier = new Block();
blockBouclier.addElement(new Parametre('Proue', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/' + '#vaisseau.bouclier_repartition#'));
blockBouclier.addElement(new Parametre('Poupe', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/' + '#vaisseau.bouclier_repartition#'));
blockBouclier.addElement(new Parametre('Bâbord', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/' + '#vaisseau.bouclier_repartition#'));
blockBouclier.addElement(new Parametre('Tribord', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/' + '#vaisseau.bouclier_repartition#'));
boucliersRepartition.addElement(blockBouclier);
block.addElement(boucliersRepartition);


c_defenses.addElementFront(block);
c_defenses.setFrontSize('small');

c_defenses.addElementBack(new Ligne('Etats des équipements', null, 'space'));
c_defenses.addElementBack(new Ligne('Dysfonction', 'Un système avec un dysfonctionnement ne fonctionne pas au maximum de ses capacités. Les actions des membres de l’équipage en rapport avec ce système (à l’exception des actions d’ingénieur maintenir l’intégrité et bricolage) subissent un malus de –2.', 'space'));
c_defenses.addElementBack(new Ligne('Défaillance', 'Un système défaillant est difficile à contrôler. Les actions des membres de l’équipage en rapport avec ce système (à l’exception des actions d’ingénieur maintenir l’intégrité et bricolage) subissent un malus de –4. De plus, les membres d’équipage ne peuvent utiliser des actions d’optimisation avec ce système. Si le réacteur est défaillant, toutes les actions à bord du vaisseau qui n’impliquent pas le réacteur subissent un malus de –2 ; ce malus est cumulatif avec ceux des états critiques affectant d’autres systèmes.', 'space'));
c_defenses.addElementBack(new Ligne('Destruction', 'Un système détruit fonctionne au minimum de ses capacités. Les actions des membres de l’équipage en rapport avec ce système (à l’exception des actions d’ingénieur maintenir l’intégrité et bricolage et des actions d’équipage restreint ; voir page 326) échouent automatiquement. Si le réacteur est détruit, toutes les actions de l’équipage à bord du vaisseau qui n’impliquent pas le réacteur subissent un malus de –4 ; ce malus est cumulatif avec celles des états critiques affectant d’autres systèmes.', 'space'));
                                  
c_defenses.addElementBack(new Ligne('Conséquences des dommages', null, 'space'));
c_defenses.addElementBack(new Ligne('Systèmes de survie', 'Affecte toutes les actions du capitaine.', 'space'));
c_defenses.addElementBack(new Ligne('Détecteurs', 'Affecte toutes les actions de l’officier scientifique.', 'space'));
c_defenses.addElementBack(new Ligne('Propulseurs', 'Affecte toutes les actions de pilotage.', 'space'));
c_defenses.addElementBack(new Ligne('Réacteur', 'Affecte toutes les actions de l’ingénieur à l’exception de maintenir l’intégrité et bricolage ; un réacteur défaillant ou détruit affecte également les actions des autres membres d’équipage.', 'space'));

c_defenses.setBackSize('max xx-small');

vaisseau_book.addCarte(c_defenses);





// CAPITAINE

var c_capitaine = new Carte('Capitaine', 'Captain', 'SHIP', 'SHIP', 'vaisseau/CAPTAIN', 'personnel');

c_capitaine.addElementEncart(new Parametre('Phase d\'action', 'N\'importe laquelle'));		

var blockCapacites = new Block();

var encouragement = new Parametre('Encouragement', '');
var blockEnc = new Block();
blockEnc.addElement(new Ligne(null, 'Ajoute +2 à un test de compétence'));
blockEnc.addElement(new Ligne(null, '(<b>10</b> même compétence ou <b>15</b> charisme)'));
encouragement.addElement(blockEnc);
blockCapacites.addElement(encouragement);

var instruction = new Parametre('Instruction', '');
var blockIns = new Block();
blockIns.addElement(new Ligne(null, 'Ajoute +4 à un test de compétence (max 1/membre)'));
blockIns.addElement(new Ligne(null, '(<b>15+½</b> Bluff ou Intimidation)'));
instruction.addElement(blockIns);
blockCapacites.addElement(instruction);

var intimidation = new Parametre('Intimidation', '');
var blockInt = new Block();
blockInt.addElement(new Ligne(null, 'Ajoute +4 à un test de compétence (max 1/membre)'));
blockInt.addElement(new Ligne(null, '(<b>15+½</b> Bluff ou Intimidation)'));
intimidation.addElement(blockInt);
blockCapacites.addElement(intimidation);

var commandement = new Parametre('Commandement (nv6)', '');
var blockCom = new Block();
blockCom.addElement(new Ligne(null, '+1 action (différente)'));
blockCom.addElement(new Ligne(null, '(<b>1 PP + 15+½</b> même compétence)'));
commandement.addElement(blockCom);
blockCapacites.addElement(commandement);

var inspiration = new Parametre('Inspiration (nv12)', '');
var blockInsp = new Block();
blockInsp.addElement(new Ligne(null, 'Test de compétence avec avantage'));
blockInsp.addElement(new Ligne(null, '(<b>1 PP + 20+½</b> Diplomatie)'));
inspiration.addElement(blockInsp);
blockCapacites.addElement(inspiration);

c_capitaine.addElementFront(blockCapacites);
c_capitaine.setFrontSize('xx-small');


c_capitaine.addElementBack(new Ligne('Encouragement', 'Vous pouvez encourager un autre membre de l’équipage pour lui conférer un bonus à son action. Cela fonctionne comme aider quelqu’un (voir page 133), en accordant un bonus de +2 à un test requis pour une action si vous réussissez un test DD 10 en utilisant la même compétence. Vous pouvez accorder le même bonus en réussissant à la place un test de Diplomatie (DD = 15). Vous ne pouvez vous encourager vous-même.', 'space'));
c_capitaine.addElementBack(new Ligne('Instruction', 'Vous pouvez donner des instructions à un membre d’équipage pour qu’il soit plus performant. Vous accordez un bonus de +4 à une tâche précise en réussissant un test d’Intimidation (DD = 15 + 1,5 x l’échelon de votre vaisseau). Vous devez utiliser cette action avant le jet du test associé et vous ne pouvez octroyer ce bonus à un même personnage qu’une seule fois par combat. L’action instruction peut avoir des conséquences négatives si elle est utilisée sur des PNJ et vous ne pouvez l’utiliser sur vous-même.', 'space'));
c_capitaine.addElementBack(new Ligne('Provocation', 'Vous pouvez utiliser les systèmes de communication du vaisseau pour envoyer un message provocateur à un vaisseau ennemi. Choisissez un vaisseau adverse et une phase du combat (ingénierie, manoeuvre ou canonnage) puis tentez un test de Bluff ou d’Intimidation (DD = 15 + 1,5 x l’échelon du vaisseau ennemi). Si vous réussissez, tous les personnages ennemis agissant au cours de la phase choisie subissent un malus de –2 à tous leurs tests pendant 1d4 rounds ; le malus est de –4 si les tests ennemis sont effectués avec une action d’optimisation. Une fois utilisée contre un vaisseau ennemi, quel que soit le résultat, cette action ne peut plus être utilisée contre le même vaisseau au cours du même combat.', 'space'));
c_capitaine.addElementBack(new Ligne('Commandement (niv 6)', 'Vous pouvez accorder une action supplémentaire à un membre de l’équipage en dépensant 1 point de persévérance et en réussissant un test de compétence difficile au début de la phase au cours de laquelle le membre d’équipage agit normalement. Le type de test dépend du rôle de ce membre d’équipage : un test d’Informatique pour un officier scientifique, un test d’Ingénierie pour un ingénieur, un test de Canonnage (voir page 320) pour un canonnier et un test de Pilotage pour un pilote. Le DD du test est égal à 15 + 1,5 x l’échelon de votre vaisseau. Si le test réussit, le membre d’équipage peut effectuer deux actions ce round-ci (les deux au moment où il agirait normalement) mais il ne peut pas effectuer deux fois la même. Vous ne pouvez utiliser cette action sur vous.', 'space'));
c_capitaine.addElementBack(new Ligne('Inspiration (niv 12)', 'Vous pouvez dépenser 1 point de persévérance et utiliser votre action pour adresser un discours inspirant à votre équipage au cours d’une phase de combat. Vous devez réussir un test de Diplomatie (DD = 20 + 1,5 x l’échelon de votre vaisseau). Pour le restant de cette phase, vos alliés peuvent lancer deux fois les dés et choisir le meilleur résultat quand ils effectuent des actions d’équipage.', 'space'));
c_capitaine.setBackSize('xx-small');

vaisseau_book.addCarte(c_capitaine);					
					
					


// ENGINEER

var c_ingenieur = new Carte('Ingénieur', 'Engineer', 'SHIP', 'SHIP', 'vaisseau/ENGINEER', 'personnel');

c_ingenieur.addElementEncart(new Parametre('Phase d\'action', 'Ingéniérie'));		

var blockCapacites = new Block();

var encouragement = new Parametre('Bricolage', '');
var blockEnc = new Block();
blockEnc.addElement(new Ligne(null, 'Réduit d\'1 cran un état critique '));
blockEnc.addElement(new Ligne(null, '- Dysfonctionnement : (1 action + <b>10+½</b> Ingénierie) '));
blockEnc.addElement(new Ligne(null, '- Défaillance  : (2 actions + <b>15+½</b> Ingénierie) '));
blockEnc.addElement(new Ligne(null, '- Détruit  : (3 actions + <b>20+½</b> Ingénierie) '));

encouragement.addElement(blockEnc);

var instruction = new Parametre('Maintenir l\'intégrité', '');
var blockIns = new Block();
blockIns.addElement(new Ligne(null, 'Réduit de 2 crans un état critique pour 1 tour '));
blockIns.addElement(new Ligne(null, '(<b>15+½</b> Ingénierie)'));
instruction.addElement(blockIns);

var intimidation = new Parametre('Transfert', '');
var blockInt = new Block();
blockInt.addElement(new Ligne(null, '- Vitesse +2 hexagones'));
blockInt.addElement(new Ligne(null, '- Ajoute +2 aux tests d\'officiers scientifiques'));
blockInt.addElement(new Ligne(null, '- Armement, les \\"1\\" sont des \\"2\\"'));
blockInt.addElement(new Ligne(null, '- Régénère 5% de l\'UE du réacteur dans des boucliers'));
blockInt.addElement(new Ligne(null, '(<b>10+½</b> Ingénierie)'));
intimidation.addElement(blockInt);

var commandement = new Parametre('Suralimentation  (rg6)', '');
var blockCom = new Block();
blockCom.addElement(new Ligne(null, 'Triple transfert'));
blockCom.addElement(new Ligne(null, '(<b>1 PP + 15+½</b> Ingénierie)'));
commandement.addElement(blockCom);

var inspiration = new Parametre('Rafistolage rapide (rg12)', '');
var blockInsp = new Block();
blockInsp.addElement(new Ligne(null, 'Supprime l\'état critique pendant 1h '));
blockInsp.addElement(new Ligne(null, '(<b>1 PP + 20+½</b> Diplomatie)'));
inspiration.addElement(blockInsp);

blockCapacites.addElement(encouragement);
blockCapacites.addElement(instruction);
blockCapacites.addElement(intimidation);
blockCapacites.addElement(commandement);
blockCapacites.addElement(inspiration);

c_ingenieur.addElementFront(blockCapacites);
c_ingenieur.setFrontSize('xx-small');


c_ingenieur.addElementBack(new Ligne('Encouragement', 'Vous pouvez encourager un autre membre de l’équipage pour lui conférer un bonus à son action. Cela fonctionne comme aider quelqu’un (voir page 133), en accordant un bonus de +2 à un test requis pour une action si vous réussissez un test DD 10 en utilisant la même compétence. Vous pouvez accorder le même bonus en réussissant à la place un test de Diplomatie (DD = 15). Vous ne pouvez vous encourager vous-même.', 'space'));
c_ingenieur.addElementBack(new Ligne('Instruction', 'Vous pouvez donner des instructions à un membre d’équipage pour qu’il soit plus performant. Vous accordez un bonus de +4 à une tâche précise en réussissant un test d’Intimidation (DD = 15 + 1,5 x l’échelon de votre vaisseau). Vous devez utiliser cette action avant le jet du test associé et vous ne pouvez octroyer ce bonus à un même personnage qu’une seule fois par combat. L’action instruction peut avoir des conséquences négatives si elle est utilisée sur des PNJ et vous ne pouvez l’utiliser sur vous-même.', 'space'));
c_ingenieur.addElementBack(new Ligne('Provocation', 'Vous pouvez utiliser les systèmes de communication du vaisseau pour envoyer un message provocateur à un vaisseau ennemi. Choisissez un vaisseau adverse et une phase du combat (ingénierie, manoeuvre ou canonnage) puis tentez un test de Bluff ou d’Intimidation (DD = 15 + 1,5 x l’échelon du vaisseau ennemi). Si vous réussissez, tous les personnages ennemis agissant au cours de la phase choisie subissent un malus de –2 à tous leurs tests pendant 1d4 rounds ; le malus est de –4 si les tests ennemis sont effectués avec une action d’optimisation. Une fois utilisée contre un vaisseau ennemi, quel que soit le résultat, cette action ne peut plus être utilisée contre le même vaisseau au cours du même combat.', 'space'));
c_ingenieur.addElementBack(new Ligne('Commandement (niv 6)', 'Vous pouvez accorder une action supplémentaire à un membre de l’équipage en dépensant 1 point de persévérance et en réussissant un test de compétence difficile au début de la phase au cours de laquelle le membre d’équipage agit normalement. Le type de test dépend du rôle de ce membre d’équipage : un test d’Informatique pour un officier scientifique, un test d’Ingénierie pour un ingénieur, un test de Canonnage (voir page 320) pour un canonnier et un test de Pilotage pour un pilote. Le DD du test est égal à 15 + 1,5 x l’échelon de votre vaisseau. Si le test réussit, le membre d’équipage peut effectuer deux actions ce round-ci (les deux au moment où il agirait normalement) mais il ne peut pas effectuer deux fois la même. Vous ne pouvez utiliser cette action sur vous.', 'space'));
c_ingenieur.addElementBack(new Ligne('Inspiration (niv 12)', 'Vous pouvez dépenser 1 point de persévérance et utiliser votre action pour adresser un discours inspirant à votre équipage au cours d’une phase de combat. Vous devez réussir un test de Diplomatie (DD = 20 + 1,5 x l’échelon de votre vaisseau). Pour le restant de cette phase, vos alliés peuvent lancer deux fois les dés et choisir le meilleur résultat quand ils effectuent des actions d’équipage.', 'space'));
c_ingenieur.setBackSize('xx-small');

vaisseau_book.addCarte(c_ingenieur);					
					

					
					
// CANONNIER

var c_canonnier = new Carte('Canonnier', 'Gunner', 'SHIP', 'SHIP', 'vaisseau/GUNNER', 'personnel');

c_canonnier.addElementEncart(new Parametre('Phase d\'action', 'Canonnage'));		

var blockCapacites = new Block();

var bordee = new Parametre('Bordée (niv 6)', '', 1);
var blockBord = new Block();
blockBord.addElement(new Ligne(null, 'Utilise toutes les armes d\'un même arc (+ tourelle) avec un malus de -2'));
blockBord.addElement(new Ligne(null, '(<b>1 PP</b>)'));
bordee.addElement(blockBord);

var ciblage = new Parametre('Ciblage précis (niv 12)', '', 1);
var blockCib = new Block();
blockCib.addElement(new Ligne(null, 'Si aucun bouclier : dégâts critiques aléatoires'));
blockCib.addElement(new Ligne(null, '(<b>1 PP + 20+½</b> Ingénierie)'));
ciblage.addElement(blockCib);

blockCapacites.addElement(new Parametre('Test de canonnage', '1d20 + (Bonus de base à l\'attaque ou rang de Pilotage) + mod Dex + Bonus des Ordinateurs', 5));
blockCapacites.addElement(new Parametre('Tir', 'Utilise une des armes du vaisseau', 1));
blockCapacites.addElement(new Parametre('Tir à volonté', 'Utilise 2 armes avec un malus de -4', 1));
blockCapacites.addElement(bordee);
blockCapacites.addElement(ciblage);

c_canonnier.addElementFront(blockCapacites);
c_canonnier.setFrontSize('xx-small');


c_canonnier.addElementBack(new Ligne('Tir', 'Vous pouvez utiliser une des armes de votre vaisseau. Si vous utilisez une arme installée dans une tourelle, vous pouvez cibler un vaisseau dans n’importe quel arc.', 'space'));
c_canonnier.addElementBack(new Ligne('Feu à volonté', 'Vous pouvez utiliser jusqu’à deux armes du vaisseau quel que soit leur arc de tir. Chaque attaque est effectuée avec un malus de –4.', 'space'));
c_canonnier.addElementBack(new Ligne('Bordée (niv6)', 'Vous pouvez dépenser 1 point de persévérance pour faire feu avec toutes les armes situées sur un arc du vaisseau (y compris les armes montées sur des tourelles). Chaque arme peut cibler n’importe quel vaisseau dans cet arc. Toutes ces attaques subissent un malus de –2.', 'space'));
c_canonnier.addElementBack(new Ligne('Ciblage précis (niv12)', 'Vous pouvez effectuer une attaque extrêmement précise en dépensant 1 point de persévérance et en utilisant une arme de votre vaisseau contre une seule cible. Si l’attaque touche, et que les boucliers de ce quadrant du vaisseau ennemi sont épuisés avant votre attaque, vous infligez des dégâts critiques à un système déterminé aléatoirement. Si l’attaque devait normalement infliger des dégâts critiques, ses éventuels effets critiques s’appliquent également (ce qui signifie que votre attaque peut potentiellement infliger plusieurs dégâts critiques ; à chaque fois, déterminez normalement quel système est affecté).', 'space'));
c_canonnier.setBackSize('xx-small');

vaisseau_book.addCarte(c_canonnier);					
					


// OFFICIER SCIENTIFIQUE

var c_scientifique = new Carte('Officier scientifique', 'Science officer', 'SHIP', 'SHIP', 'vaisseau/OFFICER', 'personnel');

c_scientifique.addElementEncart(new Parametre('Phase d\'action', 'Manœuvre'));		

var blockCapacites = new Block();

var ciblage = new Parametre('Cyblage système', '');
var blockCib = new Block();
blockCib.addElement(new Ligne(null, 'Cible un système ennemi : coup critique sur 19 et 20', 'xxx-small'));
blockCib.addElement(new Ligne(null, '(<b>5+½</b> Informatique)'));
ciblage.addElement(blockCib);

var reequilibrage = new Parametre('Rééquilibrage', '');
var blockRee = new Block();
blockRee.addElement(new Ligne(null, '- Répartit l\'energie entre 2 boucliers (reste minimim 10%)', 'xxx-small'));
blockRee.addElement(new Ligne(null, '- répartit équitablement l\'energie entre tous les boucliers', 'xxx-small'));
blockRee.addElement(new Ligne(null, '(<b>10+½</b> Informatique)'));
reequilibrage.addElement(blockRee);

var scan = new Parametre('Scan', '');
var blockSca = new Block();
blockSca.addElement(new Ligne(null, 'Obtenir des informations sur le vaisseau ennemi'));
blockSca.addElement(new Ligne(null, '(<b>5+½</b> Informatique)'));
scan.addElement(blockSca);

var verouillage = new Parametre('Vérouillage (rg6)', '');
var blockVer = new Block();
blockVer.addElement(new Ligne(null, 'Bonus +2 aux tests de cannonage pendant 1 tour'));
blockVer.addElement(new Ligne(null, '(<b>1 PP + 5+½</b> informatique)'));
verouillage.addElement(blockVer);

var amplification = new Parametre('Amplification des contre-mesures (rg12)', '');
var blockAmp = new Block();
blockAmp.addElement(new Ligne(null, 'Désaventage aux jets de cannonage ennemis', 'xxx-small'));
blockAmp.addElement(new Ligne(null, '(<b>1 PP + 5+½</b>) Pilotage'));
amplification.addElement(blockAmp);

blockCapacites.addElement(ciblage);
blockCapacites.addElement(reequilibrage);
blockCapacites.addElement(scan);
blockCapacites.addElement(verouillage);
blockCapacites.addElement(amplification);

c_scientifique.addElementFront(blockCapacites);
c_scientifique.setFrontSize('xx-small');

c_scientifique.addElementBack(new Ligne('Cyblage système', 'Vous pouvez utiliser les détecteurs de votre vaisseau pour cibler un système précis sur un appareil ennemi. Cette action nécessite que votre vaisseau dispose de détecteurs opérationnels. Vous devez effectuer un test d’Informatique en appliquant les modificateurs des détecteurs. Le DD est égal à 5 + 1,5 x l’échelon du vaisseau ennemi + ses bonus de contre-mesures défensives. Si vous réussissez, choisissez un système (réacteur, propulseurs, systèmes de survie, détecteurs ou armement). La prochaine attaque effectuée par votre vaisseau qui touche le bâtiment ennemi inflige un coup critique sur un 19 ou un 20 naturel. Si cette attaque inflige des dégâts critiques, elle affecte le système choisi. Pour chaque autre éventuel dégât critique dû à l’attaque, déterminez le système affecté normalement. Les détecteurs de votre vaisseau ne peuvent cibler qu’un seul système spécifique d’un vaisseau ennemi à la fois, bien que cette action puisse être utilisée pour cibler des systèmes sur plusieurs vaisseaux.'));
c_scientifique.addElementBack(new Ligne('Rééquilibrage', 'Vous pouvez rééquilibrer les boucliers en redirigeant l’énergie d’un quadrant pour en protéger un autre. Avec un test réussi d’Informatique (DD = 10 + 1,5 x l’échelon de votre vaisseau), vous pouvez transférer des points de bouclier (PB) d’un quadrant vers un autre quadrant y compris vers un bouclier épuisé (après rééquilibrage, chaque bouclier doit avoir au moins 10 % du total actuel de points de boucliers). Vous pouvez aussi faire le total des PB de tous les boucliers restants et les répartir uniformément entre les quatre quadrants et attribuant les points en excès au quadrant de proue.'));
c_scientifique.addElementBack(new Ligne('Scan', 'Vous pouvez utiliser les détecteurs de votre vaisseau pour scanner un appareil ennemi afin d’obtenir des informations. Cela nécessite que votre vaisseau dispose de détecteurs opérationnels (voir page 299). Vous devez tenter un test d’Informatique, en appliquant les modificateurs des détecteurs du vaisseau. Vous pouvez tenter ce test sans être formé. Le DD du test est égal à 5 + 1,5 x l’échelon du vaisseau scanné + son bonus en contre-mesures défensives (voir page 299). Si ce test est réussi, vous obtenez la première information inconnue de la liste suivante. Par tranche de 5 points supérieure au DD du test, vous obtenez une information supplémentaire.'));
c_scientifique.addElementBack(new Ligne('Vérouillage (rg6)', 'Vous pouvez verrouiller les systèmes de ciblage de votre vaisseau sur un vaisseau ennemi. Vous devez dépenser 1 point de persévérance et tenter un test d’Informatique. Le DD est égal à 5 + 1,5 x l’échelon du vaisseau ciblé + son bonus de contre-mesures défensives. Si vous réussissez, les canonniers de votre vaisseau bénéficient d’un bonus de +2 à leurs tests de Canonnage contre cette cible pour le reste du round. Cette action ne peut être effectuée qu’une seule fois par round.'));
c_scientifique.addElementBack(new Ligne('Amplification des contre-mesures (niv12)', 'Vous pouvez tenter de tromper les systèmes de ciblage ennemis et ceux des projectiles autonomes en dépensant 1 point de persévérance et en tentant un jet d’Informatique. Le DD est égal à 5 + 1,5 x l’échelon du vaisseau ennemi + ses bonus de contre-mesures défensives. Si vous réussissez, les canonniers à bord du vaisseau ciblé lancent deux dés et prennent le moins bon résultat pour leurs tests de Canonnage au cours de ce round (y compris les tests pour les armes autonomes).'));
c_scientifique.setBackSize('xx-small');

vaisseau_book.addCarte(c_scientifique);					
					

					
// PILOTE

var c_pilote = new Carte('Pilote', 'Pilot', 'SHIP', 'SHIP', 'vaisseau/PILOT', 'personnel');

c_pilote.addElementEncart(new Parametre('Phase d\'action', 'Manœuvre'));		

var blockCapacites = new Block();

var manoeuvre = new Parametre('Manœuvre', '');
var blockMan = new Block();
blockMan.addElement(new Ligne(null, 'Avancer et virer en diminuant de 1 la distance de virage '));
blockMan.addElement(new Ligne(null, '(<b>15+½</b>) Pilotage'));
manoeuvre.addElement(blockBord);

var figure = new Parametre('Figure acrobatique', '');
var blockFig = new Block();
blockFig.addElement(new Ligne(null, 'Effectue une des figures de pilotage '));
blockFig.addElement(new Ligne(null, '(<b>Dépend de la figure</b>)'));
figure.addElement(blockFig);

var puissance = new Parametre('Pleine puissance (rg6)', '');
var blockPui = new Block();
blockPui.addElement(new Ligne(null, 'Avancer de 1.5 x la vitesse, la distance de virage augmente de 2 '));
blockPui.addElement(new Ligne(null, '(<b>1 PP</b>)'));
puissance.addElement(blockPui);

var tactique = new Parametre('Tactique audacieuse (rg12)', '');
var blockTaq = new Block();
blockTaq.addElement(new Ligne(null, 'Avancer et virer en diminuant de 2 la distance de virage, pas d\'attaque d\'oportunité, orientation finale libre '));
blockTaq.addElement(new Ligne(null, '(<b>1 PP + 20+½</b>) Pilotage'));
tactique.addElement(blockTaq);

blockCapacites.addElement(new Parametre('Propulsion', 'Avancer et virer normalement'));
blockCapacites.addElement(manoeuvre);
blockCapacites.addElement(figure);
blockCapacites.addElement(puissance);
blockCapacites.addElement(tactique);

c_pilote.addElementFront(blockCapacites);
c_pilote.setFrontSize('xx-small');


c_pilote.addElementBack(new Ligne('Propulsion', 'Vous déplacez votre vaisseau d’un nombre maximum d’hexagones égal à sa vitesse et vous pouvez virer librement en fonction de sa manoeuvrabilité. Cette action ne nécessite pas de test de compétence.', 'space'));
c_pilote.addElementBack(new Ligne('Manœuvre', 'Vous déplacez votre vaisseau d’un nombre maximum d’hexagones égal à sa vitesse. Vous pouvez aussi tenter un test de Pilotage (DD = 15 + 1,5 x l’échelon de votre vaisseau) pour réduire de 1 la distance à parcourir entre deux virages (minimum 0).', 'space'));
c_pilote.addElementBack(new Ligne('Figure acrobatique', 'Vous pouvez tenter n’importe laquelle des figures acrobatiques décrites dans les cartes correspondantes. Reportez-vous à la description de ces manoeuvres pour connaître le DD des tests de Pilotage requis et le résultat d’un test réussi ou raté.', 'space'));
c_pilote.addElementBack(new Ligne('Pleine puissance (niv6)', 'Vous pouvez dépenser 1 point de persévérance pour déplacer votre vaisseau à 1,5 x sa vitesse. Vous pouvez virer au cours de ce déplacement mais augmentez de 2 la distance entre chaque virage.', 'space'));
c_pilote.addElementBack(new Ligne('Tactique audacieuse (niv12)', 'Si vous avez un rang d’au moins 12 en Pilotage, vous pouvez dépenser 1 point de persévérance pour tenter un test de Pilotage (DD = 20 + 1,5 x l’échelon de votre vaisseau) afin d’effectuer des manoeuvres complexes. Vous pouvez déplacer votre vaisseau d’un nombre maximum d’hexagones égal à sa vitesse ; vous pouvez virer au cours de ce déplacement mais en réduisant de 2 la distance entre chaque virage (minimum 0). Vous pouvez traverser des hexagones occupés par des appareils ennemis sans provoquer d’attaques d’opportunité. À la fin du déplacement de votre appareil, vous pouvez orienter votre vaisseau dans n’importe quelle direction. Si vous ratez ce test, vous vous déplacez comme si vous aviez effectué l’action propulsion (mais vous perdez tout de même votre point de persévérance).', 'space'));
c_pilote.setBackSize('xx-small');

vaisseau_book.addCarte(c_pilote);					
					

					
// RETROCOMBUSTION

var c_backoff = new Carte('Rétro-combustion', 'Back-off', 'SHIP', 'SHIP', 'vaisseau/BACK_OFF', 'personnel');

c_backoff.addElementEncart(new Parametre('Difficulté', '10+½ Pilotage'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Recule jusqu\'à la moitié de la vitesse maximale', 'space'));
blockFront.addElement(new Parametre('En cas d\'echec de moins de 5', 'Recule d\'1 hexagone'));
blockFront.addElement(new Parametre('En cas d\'echec de 5 et plus', 'Pas de déplacement et malus de -4 à la CA et à l\'IV'));
c_backoff.addElementFront(blockFront);
c_backoff.setFrontSize('small');

c_backoff.addElementBack(new Ligne(null, 'Le vaisseau se déplace au maximum de la moitié de sa vitesse dans la direction de sa poupe sans changer d’orientation. Il peut virer pendant ce déplacement.', 'space'));
c_backoff.addElementBack(new Ligne(null, 'Pour réussir cette manoeuvre, il faut effectuer un test de Pilotage '));
c_backoff.addElementBack(new Ligne(null, '(DD = 10 + 1,5 x l’échelon de votre vaisseau)', 'space'));
c_backoff.addElementBack(new Ligne(null, 'Si ce test échoue, votre vaisseau ne recule que d’un seul hexagone.', 'space'));
c_backoff.addElementBack(new Ligne(null, 'Si vous ratez ce test d’au moins 5 points, votre vaisseau ne se déplace pas et subit un malus de –4 à sa CA et à son IV jusqu’au début du prochain round.', 'space'));
c_backoff.setBackSize('small');

vaisseau_book.addCarte(c_backoff);					
					


// BARREL_ROLL

var c_barrel = new Carte('Tonneau', 'Barrel-roll', 'SHIP', 'SHIP', 'vaisseau/BARREL_ROLL', 'personnel');

c_barrel.addElementEncart(new Parametre('Difficulté', '10+½ Pilotage'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Avance de la moitié de la vitesse maximale. Pour le prochain tour, les armes et bouclier bâbord et tribord sont inversés', 'space'));
blockFront.addElement(new Parametre('En cas d\'echec de moins de 5', 'Avance de la moitié de la vitesse maximale'));
blockFront.addElement(new Parametre('En cas d\'echec de 5 et plus', 'Avance de la moitié de la vitesse maximale et malus de -4 à la CA et à l\'IV'));
c_barrel.addElementFront(blockFront);
c_barrel.setFrontSize('small');

c_barrel.addElementBack(new Ligne(null, 'Le vaisseau se déplace de la moitié de sa vitesse au maximum et tourne autour de son axe central. Au cours de la prochaine Phase canonnage, les boucliers et les armes bâbord du vaisseau sont considérés comme étant installés sur l’arc tribord et vice versa. Le vaisseau reprend sa position normale au début du prochain round.', 'space'));
c_barrel.addElementBack(new Ligne(null, 'Pour effectuer cette figure, votre vaisseau doit être au maximum de taille G et vous devez réussir un test de Pilotage '));
c_barrel.addElementBack(new Ligne(null, '(DD = 10 + 1,5 x l’échelon de votre vaisseau)', 'space'));
c_barrel.addElementBack(new Ligne(null, 'Si le test échoue, le vaisseau se déplace de la moitié de sa vitesse mais il ne tourne pas sur lui-même.', 'space'));
c_barrel.addElementBack(new Ligne(null, 'Si vous ratez ce test d’au moins 5 points, votre vaisseau se déplace de la moitié de sa vitesse, ne tourne pas sur lui-même et subit un malus de –4 à sa CA et à son IV jusqu’au début du prochain round.', 'space'));
c_barrel.setBackSize('small');
					
vaisseau_book.addCarte(c_barrel);					


// EVADE

var c_evade = new Carte('Esquive', 'Evade', 'SHIP', 'SHIP', 'vaisseau/EVADE', 'personnel');

c_evade.addElementEncart(new Parametre('Difficulté', '10+½ Pilotage'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Avance et vire normalement. Jusqu\'à la fin du tour, la CA et l\'IV sont augmentés de +2', 'space'));
blockFront.addElement(new Parametre('En cas d\'echec de moins de 5', 'Avance et vire normalement'));
blockFront.addElement(new Parametre('En cas d\'echec de 5 et plus', 'Avance et vire normalement et malus de -2 à la CA et à l\'IV'));
c_evade.addElementFront(blockFront);
c_evade.setFrontSize('small');

c_evade.addElementBack(new Ligne(null, 'Le vaisseau se déplace au maximum de sa vitesse normale et peut virer normalement mais il bénéficie d’un bonus circonstanciel de +2 à sa CA et à son IV jusqu’au début du prochain round.', 'space'));
c_evade.addElementBack(new Ligne(null, 'Pour effectuer cette figure, vous devez réussir un test de Pilotage '));
c_evade.addElementBack(new Ligne(null, '(DD = 10 + 1,5 x l’échelon de votre vaisseau)', 'space'));
c_evade.addElementBack(new Ligne(null, 'Si le test échoue, le vaisseau se déplace normalement.', 'space'));
c_evade.addElementBack(new Ligne(null, 'Si vous ratez ce test d’au moins 5 points, le vaisseau se déplace normalement mais subit un malus de –2 à sa CA et à son IV jusqu’au début du prochain round.', 'space'));
c_evade.setBackSize('small');

vaisseau_book.addCarte(c_evade);					
					


// Flip

var c_flip = new Carte('Volte-face', 'Flip and burn', 'SHIP', 'SHIP', 'vaisseau/FLIP', 'personnel');

c_flip.addElementEncart(new Parametre('Difficulté', '15+½ Pilotage'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Avance jusqu\'à la moitié de la vitesse maximale puis tourne à 180°.', 'space'));
blockFront.addElement(new Parametre('En cas d\'echec', 'Avance mais ne se retourne pas'));
c_flip.addElementFront(blockFront);
c_flip.setFrontSize('small');

c_flip.addElementBack(new Ligne(null, 'Le vaisseau se déplace vers l’avant de la moitié de sa vitesse au maximum (sans tourner) et tourne de 180° pour faire face au côté de sa poupe à la fin de son mouvement.', 'space'));
c_flip.addElementBack(new Ligne(null, 'Pour effectuer cette figure, vous devez réussir un test de Pilotage '));
c_flip.addElementBack(new Ligne(null, '(DD = 15 + 1,5 x l’échelon de votre vaisseau)', 'space'));
c_flip.addElementBack(new Ligne(null, 'Si vous ratez ce test, le vaisseau se déplace de la moitié de sa vitesse vers l’avant mais ne se retourne pas.', 'space'));
c_flip.setBackSize('small');

vaisseau_book.addCarte(c_flip);	


				
// FLYBY

var c_flyby = new Carte('Passe tactique', 'Fly-by', 'SHIP', 'SHIP', 'vaisseau/FLYBY', 'personnel');

c_flyby.addElementEncart(new Parametre('Difficulté', '15+½ Pilotage'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Avance et vire normalement. Traverse une case adverse sans subir d\'attaque d\'opportunité, permet de tirer depuis 1 des arcs du vaisseau contre un des arcs ennemis', 'space'));
blockFront.addElement(new Parametre('En cas d\'echec', 'L\'ennemmi gagne une attaque d\'opportunité'));
c_flyby.addElementFront(blockFront);
c_flyby.setFrontSize('small');

c_flyby.addElementBack(new Ligne(null, 'Le vaisseau se déplace normalement mais il peut se déplacer dans un hexagone occupé par un vaisseau ennemi sans provoquer une attaque gratuite (comme cela est indiqué dans Se déplacer à travers des hexagones occupés par des vaisseaux ennemis). Au cours de la prochaine Phase canonnage, vous pouvez choisir un arc de tir de votre vaisseau et utiliser les armes qui s’y trouvent contre n’importe quel quadrant du vaisseau ennemi comme si ce dernier était à portée courte (la distance est de 1 hexagone).', 'space'));
c_flyby.addElementBack(new Ligne(null, 'Pour effectuer cette figure, vous devez réussir un test de Pilotage '));
c_flyby.addElementBack(new Ligne(null, '(DD = 15 + 1,5 x l’échelon de votre vaisseau)', 'space'));
c_flyby.addElementBack(new Ligne(null, 'Si vous ratez ce test Si vous ratez ce test, votre vaisseau se déplace comme indiqué précédemment mais vous suivez les règles normales pour attaquer (en vous basant sur la position finale de votre vaisseau et sa distance par rapport à l’objectif). De plus, votre déplacement provoque une attaque gratuite de ce vaisseau ennemi.', 'space'));
c_flyby.setBackSize('small');

vaisseau_book.addCarte(c_flyby);					


				
// SLIDE

var c_slide = new Carte('Dégagement', 'Slide', 'SHIP', 'SHIP', 'vaisseau/SLIDE', 'personnel');

c_slide.addElementEncart(new Parametre('Difficulté', '10+½ Pilotage'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'Avance en diagonal sans changer d\'orientation', 'space'));
blockFront.addElement(new Parametre('En cas d\'echec', 'Avance en ligne droite de la moitié de sa vitesse'));
c_slide.addElementFront(blockFront);
c_slide.setFrontSize('small');

c_slide.addElementBack(new Ligne(null, 'Le vaisseau se déplace au maximum à sa vitesse dans la direction de son arc bâbord avant ou tribord avant sans changer d’orientation.', 'space'));
c_slide.addElementBack(new Ligne(null, 'Pour effectuer cette figure, vous devez réussir un test de Pilotage '));
c_slide.addElementBack(new Ligne(null, '(DD = 15 + 1,5 x l’échelon de votre vaisseau)', 'space'));
c_slide.addElementBack(new Ligne(null, 'Si vous ratez ce test, le vaisseau se déplace au maximum de la moitié de sa vitesse en ligne droite et ne peut effectuer aucun virage.', 'space'));
c_slide.setBackSize('small');

vaisseau_book.addCarte(c_slide);	



// TURN

var c_turn = new Carte('Tourner sur place', 'Turn in place', 'SHIP', 'SHIP', 'vaisseau/TURN', 'personnel');

c_turn.addElementEncart(new Parametre('Difficulté', 'Aucune'));		

var blockFront = new Block();
blockFront.addElement(new Ligne(null, 'N\'avance pas mais permet de chosir l\'orientation du vaisseau', 'space'));
blockFront.addElement(new Ligne(null, 'Un malus à la CA et à l\'IV en fonction de la manoeuvrabilité'));

var malus = new Parametre('Malus');
var blockMalus = new Block();
blockMalus.addElement(new Ligne('bonne ou plus', 'aucun'));
blockMalus.addElement(new Ligne('médiocre', '-2 à la CA et à l\'IV'));
blockMalus.addElement(new Ligne('déplorable', '-4 à la CA et à l\'IV'));
malus.addElement(blockMalus);
blockFront.addElement(malus)

c_turn.addElementFront(blockFront);
c_turn.setFrontSize('small');

c_turn.addElementBack(new Ligne(null, 'Le vaisseau ne se déplace pas mais vous pouvez choisir n’importe quelle orientation.', 'space'));
c_turn.addElementBack(new Ligne(null, 'Les vaisseaux qui ont une manoeuvrabilité au moins bonne ne subissent aucun malus.', 'space'));
c_turn.addElementBack(new Ligne(null, 'S’il a une manoeuvrabilité médiocre, il subit un malus de -2 à sa CA et à son IV jusqu’au début du prochain round.', 'space'));
c_turn.addElementBack(new Ligne(null, 'Si la manoeuvrabilité du vaisseau est déplorable, il subit un malus de -4 à sa CA et à son IV jusqu’au début du prochain round.', 'space'));
c_turn.addElementBack(new Ligne(null, 'Cette figure ne nécessite aucun test de Pilotage.', 'space'));

c_turn.setBackSize('small');

vaisseau_book.addCarte(c_turn);					
																				

																				
vaisseau_book.print();		


starfinder.addBook(vaisseau_book);			
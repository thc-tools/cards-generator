var equipement_book = new Book('Equipement', true);

// CRISTAL

var c_cristal = new Carte('Tesson de cristal photonique', 'Shard of photon crystal', 'EQUIPMENT', 'SOLARIAN', 'equipement/PHOTON_SHARD', 'personnel');

c_cristal.addElementEncart(new Parametre('Dégâts supplémentaires', '+1 feu'));		
c_cristal.addElementEncart(new Parametre('Critique', 'Combustion (1d4)'));	

var block = new Block();
block.addElement(new Ligne(null, 'Un cristal photonique accompagne un coup porté d’énergie photonique compressée et inflige des dégâts supplémentaires de feu tout en pouvant enflammer la victime.'));
c_cristal.addElementFront(block);
c_cristal.setFrontSize('normal');

c_cristal.addElementBack(new Ligne('Combustion', 'Vous avez pris feu. Tant que vous avez cet état, chaque round au début de votre tour, avant de faire vos actions (ou de tenter le jet de sauvegarde de Réflexes décrit ci-dessous), vous subissez le montant de dégâts de feu indiqué (ou 1d6 dégâts de feu si l’effet à l’origine de l’état enflammé n’indique aucun montant). Les dégâts de feu provenant de plusieurs sources infligeant l’état enflammé sont cumulatifs. À la fin de chaque round pendant lequel vous êtes enflammé, vous pouvez effectuer un jet de Réflexes pour supprimer cet état. Le DD de ce jet de sauvegarde est égal à 10 + le montant de dégâts de feu infligés par l’état enflammé lors du round en cours. Si vous réussissez ce jet de sauvegarde, l’état enflammé disparaît. Vous pouvez effectuer un nouveau jet de sauvegarde chaque round pendant lequel vous avez cet état et vous bénéficiez d’un bonus de +2 pour chaque jet de sauvegarde que vous avez effectué lors des rounds consécutifs précédents. Vous pouvez également mettre automatiquement fin à cet état en plongeant dans une quantité d’eau suffisante. S’il n’y a pas assez d’eau à disposition, vous pouvez passer une action complexe à vous rouler par terre ou à étouffer le feu d’une manière ou d’une autre pour effectuer un nouveau jet de sauvegarde avec un bonus de +4 (plus les éventuels bonus conférés par les tentatives précédentes et consécutives ratées) et mettre un terme à l’état en cas de réussite.'));
c_cristal.setBackSize('small');

equipement_book.addCarte(c_cristal);	


// FUSION

var c_fusion = new Carte('Fusion de feu animique', 'Soulfire fusion', 'EQUIPMENT', 'SOLARIAN', 'equipement/SOULFIRE', 'personnel');

c_fusion.addElementEncart(new Parametre('Dégâts supplémentaires', '+Mod Charisme'));		

var block = new Block();
block.addElement(new Ligne(null, 'Ajoute le modificateur de charisme aux dégâts des armes solaires équipées d\'un crystal solarien'));
c_fusion.addElementFront(block);
c_fusion.setFrontSize('normal');

c_fusion.addElementBack(new Ligne(null, 'La fusion feu animique ne peut être appliquée qu\'aux cristaux d\'arme solarienne. Lorsque vous touchez une cible avec une arme solaire augmentée d\'un cristal d\'arme solarien avec la fusion de feu animique, vous ajoutez votre bonus de Charisme aux dégâts causés, en plus de votre bonus de Force.', 'space'));
c_fusion.setBackSize('normal');

equipement_book.addCarte(c_fusion);				


// BATTERY

var c_battery = new Carte('Batterie', 'Battery', 'EQUIPMENT', 'BATTERY', 'equipement/BATTERY', 'personnel');

c_battery.addElementEncart(new Parametre(' Nombre de charges max', '20'));		

var block = new Block();
var charge = new Parametre('Charges');
var charges = new CheckBoxes();
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charges.addCheckBox(new CheckBox());
charge.addElement(charges);
block.addElement(charge);

c_battery.addElementFront(block);
c_battery.setFrontSize('normal');

c_battery.addElementBack(new Ligne(null, 'Ce type de munitions alimente les armes à énergie ou les armes à projectiles en utilisant l’énergie stockée dans des batteries. Puisque l’énergie nécessaire à chacune de ces armes est variable, les plus puissantes consomment plus de charges par tir. Vous pouvez recharger une arme en la connectant à un générateur ou à une station de recharge pour remplir sa batterie. Vous pouvez aussi éjecter une batterie usée pour la remplacer par une batterie neuve.', 'space'));
c_battery.addElementBack(new Ligne(null, 'Recharger une batterie avec un générateur demande 1 minute par charge et seulement 1 round par charge avec une station de recharge. Éjecter une batterie et la remplacer est une action de mouvement. La plupart des batteries peuvent contenir 20 charges mais certaines versions haute capacité, fabriquées avec des matériaux rares, peuvent en contenir plus.', 'space'));
c_battery.addElementBack(new Ligne(null, 'La batterie d’une arme ne peut contenir plus de charges que sa capacité. Une arme équipée d’une batterie haute capacité fonctionne normalement avec une batterie basse capacité mais si une batterie contient moins de charges qu’il n’en faut pour utiliser l’arme, cette dernière ne tire pas.', 'space'));
c_battery.addElementBack(new Ligne(null, 'En plus des armes, les batteries peuvent alimenter une grande variété d’équipements dont les armures assistées et les appareils technologiques.', null));

c_battery.setBackSize('small');

equipement_book.addCarte(c_battery);					
					
					

equipement_book.print();

starfinder.addBook(equipement_book);
			
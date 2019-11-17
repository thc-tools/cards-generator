var capacite_book = new Book('Capacités');

// MANIFESTATION

var c_manif = new Carte('Manifestation solaire', 'Solar manifestation', 'SOLARIAN', 'SOLARIAN', 'competence/SOLAR', 'personnel');

c_manif.addElementEncart(new Parametre('Manifestation solaire', 'Arme solaire'));
c_manif.addElementEncart(new Parametre('Particule liée', 'Photon (bleu)'));

var block = new Block();
block.addElement(new Ligne(null, 'Une manifestation solaire brillante, quelle que soit sa forme, projette une faible lumière dans un rayon de 6 mètres.'));
block.addElement(new Ligne(null, 'En tant qu’action simple, vous pouvez masquer cette lumière, ou ces ténèbres, afin de vous fondre dans le décor ou être discret mais dès que vous activez un mode stellaire, la luminosité reviennent immédiatement.'));
c_manif.addElementFront(block);
c_manif.setFrontSize('small');

c_manif.addElementBack(new Ligne(null, 'Au niveau 1, vous gagnez une manifestation physique de votre puissance stellaire. La forme passive de cette manifestation solaire, quand elle n’est pas utilisée, est un fragment d’énergie stellaire un peu plus petit qu’un poing, qui flotte près de votre tête. Quand elle est activée, cette manifestation peut prendre deux formes : celle d’une arme, ou celle d’une armure. ', 'space'));
c_manif.addElementBack(new Ligne(null, 'Au premier niveau de solarien, vous devez choisir une de ces manifestations (soit l’armure, soit l’arme). Vous choisissez aussi si votre manifestation solaire (quelle que soit sa forme) brille légèrement d’une couleur semblable à celle d’une étoile (dont le bleu, le rouge, le blanc ou le jaune) ou si elle est aussi ténébreuse qu’un trou noir. Une manifestation solaire brillante, quelle que soit sa forme, projette une faible lumière dans un rayon de 6 mètres. ', 'space'));
c_manif.addElementBack(new Ligne(null, 'En tant qu’action simple, vous pouvez masquer cette lumière, ou ces ténèbres, afin de vous fondre dans le décor ou être discret mais dès que vous activez un mode stellaire, la luminosité ou les ténèbres reviennent immédiatement. Une fois effectués, ces choix ne peuvent être modifiés.', 'space'));
c_manif.addElementBack(new Ligne(null, 'Vous êtes le seul à pouvoir interagir avec votre manifestation solaire qu’elle soit sous forme de fragment, d’arme ou d’armure. Aucune autre créature et aucun effet ne peuvent avoir une quelconque influence sur votre manifestation solaire et on ne peut ni vous désarmer, ni détruire sa forme.', 'space'));
c_manif.setBackSize('small');

capacite_book.addCarte(c_manif);





// MODE

var c_mode = new Carte('Mode stellaire', 'Stellar mode', 'SOLARIAN', 'SOLARIAN', 'competence/STELLAR_MODE', 'personnel');

var param = new Parametre('Equilibre stellaire', '', null, null, 'align');
var checkBoxes = new CheckBoxes();
checkBoxes.addCheckBox(new CheckBox());
param.addElement(checkBoxes);
c_mode.addElementEncart(param);

var block = new Block();
block.addElement(new Ligne(null, 'Les forces stellaires auxquelles vous pouvez faire appel sont synchronisées soit avec les photons (représentant la chaleur, la lumière et le plasma émis par les étoiles), soit avec les gravitons (représentant la force gravitationnelle des étoiles qui leur permettent d’attirer les corps et de les emprisonner.', 'space'));
block.addElement(new Ligne(null, 'L’ultime manifestation de la	puissance des photons est la supernova.'));
block.addElement(new Ligne(null, 'L’ultime manifestation de la puissance des gravitons est le trou noir.'));
c_mode.addElementFront(block);
c_mode.setFrontSize('x-small');

c_mode.addElementBack(new Ligne(null, 'L’équilibre entre ces deux forces cosmiques opposées est la source de votre pouvoir et les modes stellaires représentent votre lien avec l’une ou l’autre de ces forces, ou les deux, un lien fluctuant en fonction de l’utilisation de vos révélations stellaires.', 'space'));
c_mode.addElementBack(new Ligne(null, 'Quand vous êtes en combat, vous accédez à un état d’alignement métaphysique avec les puissances cosmiques. Au début de votre premier tour de combat, si vous êtes conscient, vous devez opter pour un de ces trois modes : graviton, photon ou désynchronisé (voir ci-dessous). Si vous choisissez le mode graviton ou photon, vous gagnez 1 point d’harmonisation dans ce mode. Au début de chaque tour de combat suivant, soit vous conservez votre mode stellaire actuel, soit vous devenez désynchronisé. Si vous choisissez de conserver votre mode, vous gagnez un nouveau point d’harmonisation pour ce mode. Tant que vous avez 1 ou 2 points d’harmonisation dans un mode, vous êtes synchronisé avec ce mode. Une fois que vous avez 3 points, vous êtes harmonisé avec ce mode. Certaines de vos révélations stellaires sont des révélations ultimes qui ne peuvent être utilisées que si vous êtes harmonisé à un mode. Quand vous êtes harmonisé, vous ne pouvez gagner d’autres points d’harmonisation pour ce mode mais vous demeurez harmonisé jusqu’à la fin du combat, jusqu’à ce que votre mode stellaire se termine ou jusqu’à ce que vous soyez désynchronisé. Si vous choisissez d’être désynchronisé, vous perdez tous les points d’harmonisation que vous aviez acquis. Au début de votre prochain tour, vous pouvez opter pour un nouveau mode stellaire ou rester désynchronisé. À la fin d’un combat, votre mode stellaire se termine. Si vous perdez connaissance au cours d’une rencontre, vous êtes désynchronisé. Si vous reprenez connaissance et que la menace est toujours présente, vous pouvez choisir un mode stellaire dès votre premier tour après votre réveil comme si c’était votre premier round de combat. Si le combat se termine avant que vous ayez repris connaissance, votre mode stellaire s’achève. Si vous n’aviez pas choisi de mode stellaire, pour une raison ou pour une autre, vous êtes considéré comme désynchronisé en ce qui concerne vos révélations stellaires. Quand vous n’êtes pas en combat, vous ne pouvez avoir recours à un mode stellaire. Ce pouvoir ne se manifeste que dans des situations critiques au cours desquelles votre entraînement prend le dessus et connecte votre esprit à l’univers. Il est nécessaire que vous  couriez un danger pour que votre mode stellaire s’active, vous devez donc être confronté à un ennemi majeur. S’il y a un doute pour savoir si oui ou non vous pouvez avoir recours à vos modes, c’est au MJ de trancher. Cela signifie aussi que votre mode stellaire peut se terminer avant la fin de ce qui était à l’origine un combat dangereux, quand il ne reste plus que des adversaires mineurs contre lesquels vous ne craignez rien.', 'space'));
c_mode.setBackSize('xx-small');

capacite_book.addCarte(c_mode);

						

// PHOTON

var c_photon = new Carte('Mode photon', 'Photon mode', 'PHOTON', 'PHOTON', 'competence/PHOTON', 'personnel');

c_photon.addElementEncart(new Parametre('Bonus', '+1 Dégâts (intuition)'));		

var block = new Block();
block.addElement(new Ligne(null, 'Quand vous optez pour le mode photon, vous gagnez 1 point d’harmonisation photonique et vous êtes synchronisé avec les photons. Certaines de vos révélations stellaires sont des pouvoirs photoniques et ils sont plus puissants si vous êtes synchronisé avec les photons.'));
block.addElement(new Ligne(null, 'Tant que c’est le cas, vous bénéficiez d’un bonus d’intuition de +1 à vos jets de dégâts (ce qui inclut les jets de dégâts pour vos pouvoirs stellaires). Ce bonus augmente de 1 point tous les 6 niveaux de solarien.'));
c_photon.addElementFront(block);
c_photon.setFrontSize('x-small');

c_photon.addElementBack(new Ligne(null, 'Quand vous optez pour le mode photon, vous gagnez 1 point d’harmonisation photonique et vous êtes synchronisé avec les photons.', 'space'));
c_photon.addElementBack(new Ligne(null, 'Certaines de vos révélations stellaires sont des pouvoirs photoniques et ils sont plus puissants si vous êtes synchronisé avec les photons.', 'space'));
c_photon.addElementBack(new Ligne(null, 'Tant que c’est le cas, vous bénéficiez d’un bonus d’intuition de +1 à vos jets de dégâts (ce qui inclut les jets de dégâts pour vos pouvoirs stellaires).', 'space'));
c_photon.addElementBack(new Ligne(null, 'Ce bonus augmente de 1 point tous les 6 niveaux de solarien.', 'space'));
c_photon.setBackSize('medium');

capacite_book.addCarte(c_photon);					
					

// GRAVITON

var c_graviton = new Carte('Mode graviton', 'Graviton mode', 'GRAVITON', 'GRAVITON', 'competence/GRAVITON', 'personnel');

c_graviton.addElementEncart(new Parametre('Bonus', '+1 Reflexes (intuition)'));		

var block = new Block();
block.addElement(new Ligne(null, 'Quand vous optez pour le mode graviton, vous gagnez 1 point d’harmonisation gravitationnelle et vous êtes synchronisé avec les gravitons. Certaines de vos révélations stellaires sont des pouvoirs gravitationnels et ils sont plus puissants si vous êtes synchronisé avec les gravitons. '));
block.addElement(new Ligne(null, 'Tant que c’est le cas, vous bénéficiez d’un bonus d’intuition de +1 à vos jets de Réflexes. Ce bonus augmente de 1 point tous les 9 niveaux de solarien.'));
c_graviton.addElementFront(block);
c_graviton.setFrontSize('x-small');

c_graviton.addElementBack(new Ligne(null, 'Quand vous optez pour le mode graviton, vous gagnez 1 point d’harmonisation gravitationnelle et vous êtes synchronisé avec les gravitons.', 'space'));
c_graviton.addElementBack(new Ligne(null, 'Certaines de vos révélations stellaires sont des pouvoirs gravitationnels et ils sont plus puissants si vous êtes synchronisé avec les gravitons.', 'space'));
c_graviton.addElementBack(new Ligne(null, 'Tant que c’est le cas, vous bénéficiez d’un bonus d’intuition de +1 à vos jets de Réflexes. ', 'space'));
c_graviton.addElementBack(new Ligne(null, 'Ce bonus augmente de 1 point tous les 9 niveaux de solarien.		', 'space'));
c_graviton.setBackSize('medium');

capacite_book.addCarte(c_graviton);	



// SUPERNOVA

var c_supernova = new Carte('Supernova', 'Supernova', 'PHOTON', 'PHOTON', 'competence/SUPERNOVA', 'perso_sphere_3m');

c_supernova.addElementEncart(new Parametre('Temps d\'incantation', '1 action'));		
c_supernova.addElementEncart(new Parametre('Portée', '3m'));		
c_supernova.addElementEncart(new Parametre('Durée', 'Instantannée'));		

var block = new Block();
block.addElement(new Ligne(null, 'Inflige 1d6 points de dégâts de feu à toutes les créatures situées à moins de 3m (Augmente de 1d6 par niveau de solarien)'));
block.addElement(new Ligne(null, 'Une créature qui réussit un jet de Réflexes réduit les dégâts de moitié.'));
c_supernova.addElementFront(block);
c_supernova.setFrontSize('small');

c_supernova.addElementBack(new Ligne(null, 'Quand vous êtes harmonisé avec les photons, en tant qu’action simple, vous pouvez infliger 1d6 points de dégâts de feu plus 1d6 de dégâts de feu supplémentaires par niveau de solarien à toutes les créatures situées à moins de 3 mètres de vous. Une créature qui réussit un jet de Réflexes réduit les dégâts de moitié.', 'space'));
c_supernova.addElementBack(new Ligne(null, 'Au niveau 9, toutes les créatures sur 4,5 mètres autour de vous sont affectées.', 'space'));
c_supernova.addElementBack(new Ligne(null, 'Au niveau 17, vous pouvez augmenter cette portée à 6 mètres.', 'space'));
c_supernova.addElementBack(new Ligne(null, 'Après avoir utilisé cette révélation, vous êtes immédiatement désynchronisé. Supernova s’utilise comme une révélation ultime pour tous les pouvoirs qui y font référence.', 'space'));

c_supernova.setBackSize('medium');

capacite_book.addCarte(c_supernova);		



// BLACK_HOLE

var c_blackhole = new Carte('Trou noir', 'Black hole', 'GRAVITON', 'GRAVITON', 'competence/BLACKHOLE', 'perso_sphere_6m');

c_blackhole.addElementEncart(new Parametre('Temps d\'incantation', '1 action'));
c_blackhole.addElementEncart(new Parametre('Portée', '6m'));		
c_blackhole.addElementEncart(new Parametre('Durée', 'Instantannée'));				

var block = new Block();
block.addElement(new Ligne(null, 'Attire les créatures ciblées situées à moins de 6m'));
block.addElement(new Ligne(null, 'Une créature qui ne réussit pas son jet de Vigueur est attirée vers vous de 3m.'));
c_blackhole.addElementFront(block);
c_blackhole.setFrontSize('small');

c_blackhole.addElementBack(new Ligne(null, 'Quand vous êtes harmonisé avec les gravitons, en tant qu’action simple, vous pouvez attirer toutes les créatures situées à moins de 6 mètres de vous. Vous choisissez quelles créatures sont affectées et celles qui ne le sont pas. Chaque cible doit réussir un jet de Vigueur ou être attirée de 3 mètres vers vous. ', 'space'));
c_blackhole.addElementBack(new Ligne(null, 'La portée de cette révélation et la distance d’attraction augmentent de 1,50 mètre au niveau 5 et tous les 4 niveaux suivants. ', 'space'));
c_blackhole.addElementBack(new Ligne(null, 'Les	objets solides ne bloquent pas ce pouvoir mais toute créature qui en heurte un cesse de se rapprocher de vous. Les créatures déplacées par ce pouvoir ne provoquent pas d’attaques d’opportunités à cause de ce mouvement.', 'space'));
c_blackhole.addElementBack(new Ligne(null, 'Après avoir utilisé cette révélation, vous êtes immédiatement désynchronisé. Trou noir s’utilise comme une révélation ultime pour tous les pouvoirs qui y font référence.', 'space'));
c_blackhole.setBackSize('medium');

capacite_book.addCarte(c_blackhole);			
					
					

capacite_book.print();			


starfinder.addBook(capacite_book);
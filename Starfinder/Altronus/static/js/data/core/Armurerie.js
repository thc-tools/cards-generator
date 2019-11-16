//Armes

var front_solar_weapon = new Block();
front_solar_weapon.addElement(new Ligne(null,'Vous pouvez modeler votre fragment solaire pour lui donner la forme d’une arme de corps à corps constituée d’énergie stellaire.'));
front_solar_weapon.addElement(new Ligne(null,'Former ou disperser votre arme solaire est une action de mouvement qui demande le même effort que de dégainer ou de rengainer une arme.'));
var back_solar_weapon = [];
back_solar_weapon.push(new Ligne(null,'D’une main, vous pouvez modeler votre fragment solaire pour lui donner la forme d’une arme de corps à corps constituée d’énergie stellaire. Cette arme est faite de lumière ou de ténèbres solides, en fonction de l’apparence choisie pour votre manifestation solaire, mais elle peut avoir la forme de votre choix. Des armes de corps à corps normales comme les haches, les épées et les lances sont les plus communes mais d’autres formes, comme une grande rune d’énergie stellaire, une masse de vrilles éclatantes ou un gant de puissance recouvrant votre main, sont également possibles. L’aspect général de votre arme n’a aucune influence sur son fonctionnement et ne vous confère aucun pouvoir spécial comme une allonge. Une fois que vous avez défini son aspect général, vous ne pouvez en changer tant que vous n’avez pas gagné un niveau de solarien. Votre arme solaire s’utilise comme une arme de corps à corps cinétique évoluée à une main et vous savez automatiquement la manier.', true));
back_solar_weapon.push(new Ligne(null,'Au niveau 1, déterminez si votre arme inflige des dégâts contondants, tranchants ou perforants. Vous pouvez modifier le type de dégâts infligés à chaque fois que vous gagnez un niveau de solarien. Votre arme solaire inflige des dégâts égaux à 1d6 + votre modificateur de Force. Ces dégâts augmentent de +1d6 aux niveaux 6, 9, 12 puis à chaque niveau supplémentaire. Les cristaux de combat solariens (voir page 170) peuvent augmenter les dégâts de votre arme solaire.', true));
back_solar_weapon.push(new Ligne(null,'Former ou disperser votre arme solaire est une action de mouvement qui demande le même effort que de dégainer ou de rengainer une arme (et peut être combinée avec un déplacement en une seule action de mouvement ou utilisée avec le don Arme en main). Votre arme solaire se dissipe automatiquement si vous la lâchez.', true));
var solar_weapon = new Arme('Arme solaire', 'Solar weapon', 'SOLARIAN', 'equipement/SOLAR_WEAPON', '1d6', 'perforant', 1, 'feu', 'Combustion (1d4)', true, true, 'contact', null,  front_solar_weapon, 'small', back_solar_weapon, 'x-small');

starfinder.addArme(solar_weapon);

var front_pistolet_laser_azimut = new Block();
front_pistolet_laser_azimut.addElement(new Ligne(null,'Ce petit pistolet laser passe-partout est l’arme de base de tout membre d’équipage.'));
var back_pistolet_laser_azimut = [];
back_pistolet_laser_azimut.push(new Ligne(null,'Les armes légères peuvent être tenues et utilisées à une main et permettent d’effectuer des attaques à distance. Il existe de nombreux types d’armes légères mais les plus communes sont les pistolets. Elles nécessitent une batterie ou des munitions de la bonne taille et du bon type', true));
var pistolet_laser_azimut = new Arme('Pistolet laser azimut', 'Laser pistol azimuth', 'WEAPON', 'equipement/LASER_AZIMUTH', '1d4', 'feu', null, null, 'Combustion (1d4)', false, false, '24m', '20 charges de batterie', front_pistolet_laser_azimut, 'small', back_pistolet_laser_azimut, 'medium');

starfinder.addArme(pistolet_laser_azimut);

//Armures

var front_cached_armor = new Block();
front_cached_armor.addElement(new Ligne(null,'Cette armure lourde doit son nom à la fine fente de son casque qui ne dévoile que les yeux de l’utilisateur.'));
var back_cached_armor = [];
back_cached_armor.push(new Ligne(null,'Fabriquée par les kasathas, cette armure lourde doit son nom à la fine fente de son casque qui ne dévoile que les yeux de l’utilisateur. Un recycleur d’air permet à celui qui la porte de masquer complètement son visage. Une cuirasse en céramique, des épaulettes et des brassards renforcés ainsi que des grèves protègent l’utilisateur tout en facilitant l’exécution des gracieuses techniques de combat des kasathas.'));
var cached_armor = new Armure('Armure abritée', 'Hidden soldier armor', 'ARMOR', 'equipement/HIDDEN_SOLDIER', 5, 3, 2, '-2', '-1,5m', 1, front_cached_armor, 'small', back_cached_armor, 'normal');

starfinder.addArmure(cached_armor);










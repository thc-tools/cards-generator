//Armatures

var explorateur = new Armature('Explorateur', 'Explorator', 'M', 'Bonne', 55, 10, '1 arme légère', null, '1 arme légère', '1 arme légère', '1 arme légère', 4, 1, 6);

starfinder.addPieceVaisseau(explorateur);

//Réacteurs

var gray_pulsion = new Reacteur('Pulsion gris', 'Pulse gray', 100, 10);
var green_pulsion = new Reacteur('Pulsion vert', 'Pulse green', 150, 15);

starfinder.addPieceVaisseau(gray_pulsion);
starfinder.addPieceVaisseau(green_pulsion);

//Propulseurs

var m6 = new Propulseur('Propulseurs M6', 'M6 thrusters', 6, 1, 50, 3);
var m10 = new Propulseur('Propulseurs M10', 'M10 thrusters', 10, 0, 70, 5);

starfinder.addPieceVaisseau(m6);
starfinder.addPieceVaisseau(m10);

//Blindages

var blindage_mk1 = new Blindage('Blindage MK1', 'MK1 armor', 1, 0, 0);
var blindage_mk2 = new Blindage('Blindage MK2', 'MK2 armor', 2, 0, 0);
var blindage_mk3 = new Blindage('Blindage MK3', 'MK3 armor', 3, 0, 0);

starfinder.addPieceVaisseau(blindage_mk1);
starfinder.addPieceVaisseau(blindage_mk2);
starfinder.addPieceVaisseau(blindage_mk3);

// Contres-mesures

var defenses_mk1 = new Contremesure('Défenses MK1', 'MK1 defenses', 1, 1, 2);

starfinder.addPieceVaisseau(defenses_mk1);

//Boucliers

var b20 = new BouclierVaisseau('Boucliers de base 20', 'Basic Shields 20', 20, '1/min', 10, 3);
var b40 = new BouclierVaisseau('Boucliers de base 40', 'Basic Shields 40', 40, '1/min', 15, 5);

starfinder.addPieceVaisseau(b20);
starfinder.addPieceVaisseau(b40);

//Armes

var canon_laser_leger = new ArmeVaisseau('Canon laser léger', 'Light laser cannon', 'Courte', '2d4', '5 UE', '-', '-');
var canon_magnetique = new ArmeVaisseau('Canon magnétique', 'Coilgun', 'Longue', '4d4', '10 UE', '-', '-');
var lance_missiles_brisants = new ArmeVaisseau('Lance-missiles brisants', 'High explosive missile launcher', 'Longue', '4d8', '10 UE', '12 hex', 'Cadence limitée 5');

starfinder.addPieceVaisseau(canon_laser_leger);
starfinder.addPieceVaisseau(canon_magnetique);
starfinder.addPieceVaisseau(lance_missiles_brisants);


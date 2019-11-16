//Altronus

var altronus = new Personnage('Atronus/Trolanus', 'Atronus/Trolanus', 'Solarien', 'Kanabo', 'Xéno-chercheur', 'Chaotique neutre');

altronus.setNiveau(2);

altronus.setBaseCarac('For', 14);
altronus.setBaseCarac('Dex', 14);
altronus.setBaseCarac('Con', 14);
altronus.setBaseCarac('Int', 11);
altronus.setBaseCarac('Sag', 10);
altronus.setBaseCarac('Cha', 13);

//niv 1
altronus.addRangCompetence('Accrobatie', 1);
altronus.addRangCompetence('Athlétisme', 1);
altronus.addRangCompetence('Discrétion', 1);

//niv2
altronus.addRangCompetence('Sciences de la vie', 1);
altronus.addRangCompetence('Bluff', 1);
altronus.addRangCompetence('Déguisement', 1);

//niv3
//altronus.addRangCompetence('Discrétion', 1);
//altronus.addRangCompetence('Bluff', 1);
//altronus.addRangCompetence('Déguisement', 1);

altronus.addArmeName('Arme solaire');
altronus.addArmeName('Pistolet laser azimut');

altronus.addArmureName('Armure abritée');
altronus.equiperArmureName('Armure abritée');

//altronus.compute();

//var perso = altronus;

starfinder.addPersonnage(altronus);













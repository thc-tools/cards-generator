// Pink Albatros

var pink_albatros  = new Vaisseau('Pink Albatros', 'Pink Albatros', 'Pionnier Kévolari', 'Explorateur', 'Pulsion gris', 'Propulseurs M6');
pink_albatros.setBlindageName('Blindage MK3');
pink_albatros.setContremesureName('Défenses MK1');
pink_albatros.setBouclierName('Boucliers de base 20');

pink_albatros.addArmeName('proue', 'Canon laser léger');
pink_albatros.addArmeName('tourelle', 'Lance-missiles brisants');

pink_albatros.setEchelon(1);

//pink_albatros.compute();

//var vaisseau = pink_albatros;

starfinder.addVaisseau(pink_albatros);
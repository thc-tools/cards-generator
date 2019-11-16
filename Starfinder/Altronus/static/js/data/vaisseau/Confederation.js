// Tradition

var tradition = new Vaisseau('Tradition', 'Tradition', '5EE-classe-Pegasus', explorateur, green_pulsion, m10);
tradition.setBlindage(blindage_mk2);
tradition.setBouclier(b40);

tradition.addArme('babord', canon_laser_leger);
tradition.addArme('tribord', canon_laser_leger);
tradition.addArme('tourelle', canon_magnetique);

tradition.setEchelon(2);

tradition.compute();

var vaisseau = tradition;
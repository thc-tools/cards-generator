var yyyy = new Book('YYYYYYYY');




// XXXXXXXXX

var xxx = new Carte('XXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXX', 'XXXXXXXXXXXX', 'XXXXXXXXXXXXXX');

xxx.addElementEncart(new Parametre('XXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXX'));		

var block = new Block();
block.addElement(new Ligne(null, 'XXXXXXXXXXXXXXXXXXX'));
block.addElement(new Ligne(null, 'XXXXXXXXXXXXXXXXXXX'));
xxx.addElementFront(block);
xxx.setFrontSize('XXXX');

xxx.addElementBack(new Ligne(null, 'XXXXXXXXXXXXX', true));
xxx.setBackSize('XXXXXXXXXX');

yyy.addCarte(xxx);					
					
					

yyy.print();				
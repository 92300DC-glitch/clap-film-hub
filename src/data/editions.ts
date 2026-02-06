// Edition data - will eventually come from the database
// For now, static data scraped from ptitclap.com

export type JuryMember = {
  name: string;
  role: 'Président(e)' | 'Membre';
  photo: string;
};

export type PalmaresEntry = {
  prize: string;
  film: string;
  director: string;
  highlight?: boolean; // for main prizes vs finalistes
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type EditionData = {
  year: number;
  number: number;
  jury: JuryMember[];
  palmares: PalmaresEntry[];
  gallery: GalleryPhoto[];
  galleryCredit?: string;
};

export const editionsData: Record<string, EditionData> = {
  '2010': {
    year: 2010,
    number: 1,
    jury: [
      { name: 'Nakache et Toledano', role: 'Président(e)', photo: '/images/editions/2010/jury/nakache-toledano.jpg' },
      { name: 'Benoit Pétré', role: 'Membre', photo: '/images/editions/2010/jury/benoit-petre.jpg' },
      { name: 'Bernard Tanguy', role: 'Membre', photo: '/images/editions/2010/jury/bernard-tanguy.jpg' },
      { name: 'Elisa Tovati', role: 'Membre', photo: '/images/editions/2010/jury/elisa-tovati.jpg' },
      { name: 'Valentin Rebondy', role: 'Membre', photo: '/images/editions/2010/jury/valentin-rebondy.jpg' },
      { name: 'Eric Civanyan', role: 'Membre', photo: '/images/editions/2010/jury/eric-civanyan.jpg' },
      { name: 'Géraldine Desindes', role: 'Membre', photo: '/images/editions/2010/jury/geraldine-desindes.jpg' },
      { name: 'Frédéric Groetschel', role: 'Membre', photo: '/images/editions/2010/jury/frederic-groetschel.jpg' },
      { name: 'Laurent Daufes', role: 'Membre', photo: '/images/editions/2010/jury/laurent-daufes.jpg' },
      { name: 'Patrick Rouet', role: 'Membre', photo: '/images/editions/2010/jury/patrick-rouet.jpg' },
      { name: 'Philippe Lefebvre', role: 'Membre', photo: '/images/editions/2010/jury/philippe-lefebvre.jpg' },
      { name: 'Renaud Bertrand', role: 'Membre', photo: '/images/editions/2010/jury/renaud-bertrand.jpg' },
      { name: 'Thierry Ragobert', role: 'Membre', photo: '/images/editions/2010/jury/thierry-ragobert.jpg' },
    ],
    palmares: [
      { prize: 'Grand Prix du Jury', film: 'Le Syndrome du Timide', director: 'Pierre-Axel Vuillame-Prézeau', highlight: true },
      { prize: '2ème Prix du Jury', film: 'Planter des rêves', director: 'Pierre-Antoine Carpentier', highlight: true },
      { prize: '3ème Prix du Jury', film: 'La poupée', director: 'Alex Guéry', highlight: true },
      { prize: 'Prix du Public', film: 'Garde-fou', director: 'Slimane-Baptiste Berhoun', highlight: true },
      { prize: 'Finaliste', film: 'Fast trip', director: 'Florent Martin Lani' },
      { prize: 'Finaliste', film: 'Bail périmé', director: 'Vincent Morvan' },
      { prize: 'Finaliste', film: 'Le collectionneur de cris', director: 'Alexis Barbosa' },
      { prize: 'Finaliste', film: 'La roulette russe', director: 'Constantin Vanpel' },
      { prize: 'Finaliste', film: 'Derrière l\'artiste, son œuvre', director: 'Antoine Morineau' },
    ],
    gallery: Array.from({ length: 12 }, (_, i) => ({
      src: `/images/editions/2010/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Cérémonie édition 2010 - Photo ${i + 1}`,
    })),
    galleryCredit: 'Nadège Murez (Ville de Levallois)',
  },
  '2011': {
    year: 2011,
    number: 2,
    jury: [
      { name: 'Simon Lelouch', role: 'Président(e)', photo: '/images/editions/2011/jury/simon-lelouch.jpg' },
      { name: 'Arnaud Tsamere', role: 'Membre', photo: '/images/editions/2011/jury/arnaud-tsamere.jpg' },
      { name: 'Pascal Michel', role: 'Membre', photo: '/images/editions/2011/jury/pascal-michel.jpg' },
      { name: 'Fabienne Bichet', role: 'Membre', photo: '/images/editions/2011/jury/fabienne-bichet.jpg' },
      { name: 'Julien Hossein', role: 'Membre', photo: '/images/editions/2011/jury/julien-hossein.jpg' },
      { name: 'Elise Larnicol', role: 'Membre', photo: '/images/editions/2011/jury/elise-larnicol.jpg' },
      { name: 'Aurélie Montéa', role: 'Membre', photo: '/images/editions/2011/jury/aurelie-montea.jpg' },
      { name: 'Frédéric Groetschel', role: 'Membre', photo: '/images/editions/2011/jury/fabienne-bichet.jpg' },
      { name: 'Catherine Habib', role: 'Membre', photo: '/images/editions/2011/jury/catherine-habib.jpg' },
      { name: 'Marion Dumas', role: 'Membre', photo: '/images/editions/2011/jury/marion-dumas.jpg' },
      { name: 'Rodolphe Lanaro', role: 'Membre', photo: '/images/editions/2011/jury/rodolphe-lanaro.jpg' },
      { name: 'Pierre-Axel Vuillaume-Prézeau', role: 'Membre', photo: '/images/editions/2011/jury/pierre-axel-vuillaume.jpg' },
    ],
    palmares: [
      { prize: 'Grand Prix du Jury', film: 'Faute de temps', director: 'Zaven Najjar', highlight: true },
      { prize: '2ème Prix du Jury', film: 'La vieillesse dans la peau', director: 'Harry Bozino', highlight: true },
      { prize: '3ème Prix du Jury', film: 'Shy', director: 'Alex Guéry', highlight: true },
      { prize: 'Prix du Public', film: 'La vieillesse dans la peau', director: 'Harry Bozino', highlight: true },
      { prize: 'Prix d\'encouragement', film: 'Lol et les lolies', director: 'Romy Trajman', highlight: true },
    ],
    gallery: Array.from({ length: 16 }, (_, i) => ({
      src: `/images/editions/2011/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Cérémonie édition 2011 - Photo ${i + 1}`,
    })),
    galleryCredit: 'Nadège Murez (Ville de Levallois)',
  },
  '2012': {
    year: 2012,
    number: 3,
    jury: [
      { name: 'Arnaud Lemort', role: 'Président(e)', photo: '/images/editions/2012/jury/arnaud-lemort.jpg' },
      { name: 'Catherine Habib', role: 'Membre', photo: '/images/editions/2012/jury/celine-kamina.jpg' },
      { name: 'Stéphane Metzger', role: 'Membre', photo: '/images/editions/2012/jury/stephane-metzger.jpg' },
      { name: 'Jennifer Devoldère', role: 'Membre', photo: '/images/editions/2012/jury/jennifer-devoldere.jpg' },
      { name: 'Gyselle Soares', role: 'Membre', photo: '/images/editions/2012/jury/gyselle-soares.jpg' },
      { name: 'Mathieu Ouillon', role: 'Membre', photo: '/images/editions/2012/jury/mathieu-ouillon.jpg' },
      { name: 'Sébastien Courivaud', role: 'Membre', photo: '/images/editions/2012/jury/sebastien-courivaud.jpg' },
      { name: 'Frédéric Groetschel', role: 'Membre', photo: '/images/editions/2012/jury/arnaud-lemort.jpg' },
      { name: 'Zaven Najjar', role: 'Membre', photo: '/images/editions/2012/jury/zaven-najjar.jpg' },
      { name: 'Marion Dumas', role: 'Membre', photo: '/images/editions/2012/jury/arnaud-lemort.jpg' },
      { name: 'Céline Kamina', role: 'Membre', photo: '/images/editions/2012/jury/celine-kamina.jpg' },
    ],
    palmares: [
      { prize: 'Grand Prix du Jury', film: 'Casse-gueule', director: 'Clément Gonzalez', highlight: true },
      { prize: '2ème Prix du Jury', film: 'Tuer l\'ennui', director: 'Julien Paolini', highlight: true },
      { prize: '3ème Prix du Jury', film: 'Comme je peux', director: 'Elsa Michel', highlight: true },
      { prize: '3ème Prix du Jury ex-æquo', film: 'Les couillus', director: 'Uriel Jaouen Zrehen', highlight: true },
      { prize: 'Prix du Public', film: 'Chronique de l\'ennui', director: 'Jérémy Minui', highlight: true },
      { prize: 'Prix Dailymotion', film: 'J\'aurai toujours 13 ans', director: 'Alexis Guérineau Rieutord', highlight: true },
      { prize: 'Finaliste', film: 'It was nice meeting you', director: 'Harry Bozino' },
      { prize: 'Finaliste', film: 'Travelling through', director: 'Julie Anna Grignon' },
      { prize: 'Finaliste', film: 'Le bon plan', director: 'Florent Glardon' },
      { prize: 'Finaliste', film: 'La signature', director: 'Robin Bauzou' },
      { prize: 'Finaliste', film: 'Lapsus', director: 'Sarah Renau' },
      { prize: 'Finaliste', film: 'Le sniper', director: 'Yoann Garel' },
    ],
    gallery: Array.from({ length: 16 }, (_, i) => ({
      src: `/images/editions/2012/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Cérémonie édition 2012 - Photo ${i + 1}`,
    })),
    galleryCredit: 'Nadège Murez (Ville de Levallois) et Easy Shoot Photography',
  },
  '2013': {
    year: 2013,
    number: 4,
    jury: [
      { name: 'Philippe Lellouche', role: 'Président(e)', photo: '/images/editions/2013/jury/philippe-lellouche.jpg' },
      { name: 'Nicole Calfan', role: 'Membre', photo: '/images/editions/2013/jury/nicole-calfan.jpg' },
      { name: 'Virginie Caren', role: 'Membre', photo: '/images/editions/2013/jury/virginie-caren.jpg' },
      { name: 'Roméo Sarfati', role: 'Membre', photo: '/images/editions/2013/jury/romeo-sarfati.jpg' },
      { name: 'Anne-Christelle Rousselle', role: 'Membre', photo: '/images/editions/2013/jury/anne-christelle-rousselle.jpg' },
      { name: 'Laurent Artufel', role: 'Membre', photo: '/images/editions/2013/jury/laurent-artufel.jpg' },
      { name: 'Matthieu Gonet', role: 'Membre', photo: '/images/editions/2013/jury/matthieu-gonet.jpg' },
      { name: 'David Proux', role: 'Membre', photo: '/images/editions/2013/jury/david-proux.jpg' },
      { name: 'Frédéric Groetschel', role: 'Membre', photo: '/images/editions/2013/jury/philippe-lellouche.jpg' },
      { name: 'Gauthier Jurgensen', role: 'Membre', photo: '/images/editions/2013/jury/gauthier-jurgensen.jpg' },
      { name: 'Nathalie Corré', role: 'Membre', photo: '/images/editions/2013/jury/nathalie-corre.jpg' },
      { name: 'Yann Brolli', role: 'Membre', photo: '/images/editions/2013/jury/yann-brolli.jpg' },
      { name: 'Olivier Chauvin', role: 'Membre', photo: '/images/editions/2013/jury/olivier-chauvin.jpg' },
    ],
    palmares: [
      { prize: 'Grand Prix du Jury', film: 'As it used to be', director: 'Clément Gonzalez', highlight: true },
      { prize: '2ème Prix du Jury', film: 'Clean', director: 'Benjamin Bouhana', highlight: true },
      { prize: '3ème Prix du Jury', film: 'Tony', director: 'Princïa Car', highlight: true },
      { prize: '3ème Prix du Jury ex-æquo', film: 'Petit cœur', director: 'Lola Heude', highlight: true },
      { prize: 'Prix du Public', film: 'As it used to be', director: 'Clément Gonzalez', highlight: true },
      { prize: 'Prix Coup de Cœur Cinéma Epson', film: 'Mourir en paix', director: 'Jimmy Woha-Woha', highlight: true },
      { prize: 'Prix Dailymotion', film: 'Post-it war', director: 'Jérémie Normand', highlight: true },
      { prize: 'Prix des Enfants', film: 'Pourquoi pas Blanche-Neige pendant qu\'on y est', director: 'Joël Olivier' },
      { prize: 'Prix des Collégiens', film: 'Titi', director: 'Hugues Espinasse' },
      { prize: 'Prix des Lycéens', film: 'L\'Accordeur', director: 'Olivier Treiner' },
    ],
    gallery: Array.from({ length: 16 }, (_, i) => ({
      src: `/images/editions/2013/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Cérémonie édition 2013 - Photo ${i + 1}`,
    })),
    galleryCredit: 'Nadège Murez (Ville de Levallois)',
  },
  '2014': {
    year: 2014,
    number: 5,
    jury: [
      { name: 'Elodie Fontan', role: 'Président(e)', photo: '/images/editions/2014/jury/elodie-fontan.jpg' },
      { name: 'Baptiste Lecaplain', role: 'Membre', photo: '/images/editions/2014/jury/baptiste-lecaplain.jpg' },
      { name: 'Bernard Jeanjean', role: 'Membre', photo: '/images/editions/2014/jury/bernard-jeanjean.jpg' },
      { name: 'Alice Isaaz', role: 'Membre', photo: '/images/editions/2014/jury/alice-isaaz.jpg' },
      { name: 'Benjamin Bouhana', role: 'Membre', photo: '/images/editions/2014/jury/benjamin-bouhana.jpg' },
      { name: 'Olivier Chauvin', role: 'Membre', photo: '/images/editions/2014/jury/olivier-chauvin.jpg' },
      { name: 'Gérard Creps', role: 'Membre', photo: '/images/editions/2014/jury/gerard-creps.png' },
    ],
    palmares: [
      { prize: 'Grand Prix du Jury', film: 'Premier métro', director: 'Hugo P. Thomas', highlight: true },
      { prize: '2ème Prix du Jury', film: 'Shame and glasses', director: 'Alessandro Riconda', highlight: true },
      { prize: '3ème Prix du Jury', film: 'Glyn', director: 'Yann Gorriz', highlight: true },
      { prize: '3ème Prix du Jury ex-æquo', film: 'Quiproquo', director: 'Etienne Beydon, Lola Heude & Hippolyte Chauvin', highlight: true },
      { prize: 'Prix du Public', film: 'Premier métro', director: 'Hugo P. Thomas', highlight: true },
      { prize: 'Prix des Arts et Techniques – Mikros Image', film: 'Le doigt d\'honneur', director: 'Malika Pellicioli', highlight: true },
      { prize: 'Prix Coup de Cœur Cinéma Epson', film: 'Premier métro', director: 'Hugo P. Thomas', highlight: true },
      { prize: 'Prix d\'interprétation', film: 'Le rêve indien', director: 'Assia Bellaaquoul (Oulaya Amamra)', highlight: true },
      { prize: 'Prix des Enfants', film: 'La course', director: 'Koreen Valard' },
      { prize: 'Prix des Collégiens', film: 'Loup y-es tu ?', director: 'Baptiste Gondouin & Johann Dionnet' },
      { prize: 'Prix des Lycéens', film: 'La marque des champions', director: 'Stéphane Kazandjian' },
    ],
    gallery: Array.from({ length: 47 }, (_, i) => ({
      src: `/images/editions/2014/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Cérémonie édition 2014 - Photo ${i + 1}`,
    })),
    galleryCredit: 'Zohair Bijaoui (Ville de Levallois) et Easy Shoot Photography',
  },
  '2015': {
    year: 2015,
    number: 6,
    jury: [
      { name: 'Hervé Mimran', role: 'Président(e)', photo: '/images/editions/2015/jury/herve-mimran.png' },
      { name: 'Cynthia Pinet', role: 'Membre', photo: '/images/editions/2015/jury/cynthia-pinet.png' },
      { name: 'Alain Bouzigues', role: 'Membre', photo: '/images/editions/2015/jury/alain-bouzigues.png' },
      { name: 'Vincent Winterhalter', role: 'Membre', photo: '/images/editions/2015/jury/vincent-winterhalter.png' },
      { name: 'Thierry Ragobert', role: 'Membre', photo: '/images/editions/2015/jury/thierry-ragobert.png' },
      { name: 'Justine Thibaudat', role: 'Membre', photo: '/images/editions/2015/jury/justine-thibaudat.png' },
      { name: 'Clément Gonzalez', role: 'Membre', photo: '/images/editions/2015/jury/clement-gonzalez.png' },
      { name: 'Gérard Creps', role: 'Membre', photo: '/images/editions/2015/jury/gerard-creps.png' },
      { name: 'Olivier Chauvin', role: 'Membre', photo: '/images/editions/2015/jury/olivier-chauvin.png' },
    ],
    palmares: [
      { prize: 'Grand Prix du Jury', film: 'Perrault, La Fontaine, Mon Cul !', director: 'Hugo P. Thomas, Zoran et Ludovic Boukherma', highlight: true },
      { prize: '2ème Prix du Jury', film: 'Qui de nous deux', director: 'Benjamin Bouhana', highlight: true },
      { prize: '3ème Prix du Jury', film: 'Une minute de silence', director: 'Guillaume Renusson', highlight: true },
      { prize: 'Prix du Public', film: 'Qui de nous deux', director: 'Benjamin Bouhana', highlight: true },
      { prize: 'Prix des Arts et Techniques – Mikros Image', film: 'The lost and the last', director: 'Valentin Bordeau', highlight: true },
      { prize: 'Prix Coup de Cœur Cinéma Epson', film: 'Perrault, La Fontaine, Mon Cul !', director: 'Hugo P. Thomas, Zoran et Ludovic Boukherma', highlight: true },
      { prize: 'Prix de la Musique de Films – UCMF', film: 'Jumble up', director: 'Léo Karmann (musique Sylvain Morizet)', highlight: true },
      { prize: 'Prix des Enfants', film: 'Crevette', director: 'Sophie Galibert' },
      { prize: 'Prix des Collégiens', film: 'Règlement de conte', director: 'Fatma Benyoub' },
      { prize: 'Prix des Lycéens', film: 'Yantra', director: 'Jérémy Minui' },
    ],
    gallery: Array.from({ length: 63 }, (_, i) => ({
      src: `/images/editions/2015/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Cérémonie édition 2015 - Photo ${i + 1}`,
    })),
    galleryCredit: 'Zohair Bijaoui (Ville de Levallois) et Pascal Potier (Visual Press Agency)',
  },
  '2016': {
    year: 2016,
    number: 7,
    jury: [
      { name: 'Abel Jafri', role: 'Membre', photo: '/images/editions/2016/jury/abel-jafri.jpg' },
      { name: 'Roland Nguyen', role: 'Membre', photo: '/images/editions/2016/jury/roland-nguyen.jpg' },
      { name: 'Annabelle Milot', role: 'Membre', photo: '/images/editions/2016/jury/annabelle-milot.jpg' },
      { name: 'Nadia Le Bihen Demmou', role: 'Membre', photo: '/images/editions/2016/jury/nadia-le-bihen-demmou.jpg' },
      { name: 'Marie Jolivet', role: 'Membre', photo: '/images/editions/2016/jury/marie-jolivet.jpg' },
      { name: 'Olivier Doran', role: 'Membre', photo: '/images/editions/2016/jury/olivier-doran.jpg' },
      { name: 'Gary Kikoïne', role: 'Membre', photo: '/images/editions/2016/jury/gary-kikoine.jpg' },
      { name: 'Olivier Chauvin', role: 'Membre', photo: '/images/editions/2016/jury/olivier-chauvin.jpg' },
    ],
    palmares: [
      { prize: 'Grand Prix du Jury', film: 'Goût bacon', director: 'Bahia, Jennifer, Cirée, Maxence, Adil, Bilel, Yacine et Daniel', highlight: true },
      { prize: '2ème Prix du Jury', film: 'Sonar', director: 'Mohammad Salam', highlight: true },
      { prize: '3ème Prix du Jury', film: 'Paper Piano', director: 'Hyunki Min', highlight: true },
      { prize: 'Prix du Public', film: 'À-bras-le-corps', director: 'Manon Gaurin', highlight: true },
      { prize: 'Prix Mikros Image', film: 'An American Short Story', director: 'Antony Renault', highlight: true },
      { prize: 'Prix des Enfants', film: 'Château de sable', director: 'Quentin Deleau, Lucie Foncelle, Maxime Goudal, Julien Paris et Sylvain Robert' },
      { prize: 'Prix des Collégiens', film: 'Héros', director: 'Benoît Martin' },
      { prize: 'Prix des Lycéens', film: 'Destino', director: 'Zangro' },
    ],
    gallery: Array.from({ length: 38 }, (_, i) => ({
      src: `/images/editions/2016/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Cérémonie édition 2016 - Photo ${i + 1}`,
    })),
    galleryCredit: 'Zohair Bijaoui (Ville de Levallois), Marceau Uguen et Visual Press Agency',
  },
};

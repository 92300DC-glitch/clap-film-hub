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
};

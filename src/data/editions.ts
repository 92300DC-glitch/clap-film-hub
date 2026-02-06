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
};

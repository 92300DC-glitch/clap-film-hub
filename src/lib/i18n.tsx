import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.films': 'Films',
    'nav.participate': 'Participer',
    'nav.jury': 'Jury',
    'nav.ceremony': 'Cérémonie',
    'nav.prizes': 'Prix',
    'nav.education': 'Éducation à l\'image',
    'nav.partners': 'Partenaires',
    'nav.archives': 'Archives',
    'nav.press': 'Presse',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Festival Ptit Clap',
    'hero.subtitle': 'Festival du court-métrage',
    'hero.cta.participate': 'Participer',
    'hero.cta.discover': 'Découvrir les films',
    'hero.countdown.days': 'Jours',
    'hero.countdown.hours': 'Heures',
    'hero.countdown.minutes': 'Minutes',
    'hero.countdown.seconds': 'Secondes',
    'hero.countdown.until': 'Fin de l\'appel à films',
    
    // Sections
    'section.featuredFilms': 'Films à la une',
    'section.featuredFilms.subtitle': 'Découvrez les courts-métrages qui ont marqué notre festival',
    'section.jury': 'Le Jury',
    'section.jury.subtitle': 'Des professionnels passionnés au service du cinéma',
    'section.partners': 'Nos Partenaires',
    'section.partners.subtitle': 'Ils nous soutiennent et rendent le festival possible',
    'section.viewAll': 'Voir tout',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.cookies': 'Gestion des cookies',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.retry': 'Réessayer',
    'common.readMore': 'Lire la suite',
    'common.seeMore': 'Voir plus',
    'common.back': 'Retour',
    'common.send': 'Envoyer',
    'common.submit': 'Soumettre',
    'common.download': 'Télécharger',
    'common.sending': 'Envoi en cours...',
    
    // Films
    'films.title': 'Catalogue des films',
    'films.search': 'Rechercher un film...',
    'films.filter.edition': 'Édition',
    'films.filter.status': 'Statut',
    'films.filter.prize': 'Prix',
    'films.filter.genre': 'Genre',
    'films.filter.country': 'Pays',
    'films.sort.alphabetical': 'Alphabétique',
    'films.sort.recent': 'Plus récent',
    'films.sort.popular': 'Populaire',
    'films.sort.random': 'Aléatoire',
    'films.noResults': 'Aucun film trouvé',
    'films.videoNotAvailable': 'Film non disponible en ligne – visible en projection / sur demande',
    
    // Participate page
    'participate.title': 'Participer au Festival',
    'participate.subtitle': 'Soumettez votre court-métrage et rejoignez l\'aventure',
    'participate.dates': 'Dates clés',
    'participate.conditions': 'Conditions de participation',
    'participate.faq': 'Questions fréquentes',
    'participate.cta': 'Déposer mon film',
    'participate.date.open': 'Ouverture des inscriptions',
    'participate.date.close': 'Clôture des inscriptions',
    'participate.date.selection': 'Annonce de la sélection officielle',
    'participate.date.ceremony': 'Cérémonie de remise des prix',
    'participate.condition.1': 'Film produit après janvier 2023',
    'participate.condition.2': 'Durée maximale : 15 minutes',
    'participate.condition.3': 'Fiction uniquement (pas de documentaire, film d\'animation ou film 3D)',
    'participate.condition.4': 'Réalisateurs âgés de 15 à 25 ans',
    'participate.condition.5': 'Dialogues en français ou sous-titres français obligatoires',
    'participate.condition.6': 'Sous-titres incrustés dans la vidéo de préférence (les fichiers SRT peuvent poser problème en projection)',
    'participate.condition.7': 'Un seul court-métrage par participant',
    'participate.condition.8': 'Tous pays de production acceptés',
    'participate.faq.cost.q': 'Combien coûte l\'inscription ?',
    'participate.faq.cost.a': 'L\'inscription est entièrement gratuite pour tous les films.',
    'participate.faq.multiple.q': 'Puis-je soumettre plusieurs films ?',
    'participate.faq.multiple.a': 'Oui, vous pouvez soumettre plusieurs films, mais chaque film doit faire l\'objet d\'une inscription séparée.',
    'participate.faq.notification.q': 'Quand serai-je informé de la sélection ?',
    'participate.faq.notification.a': 'Les réalisateurs sélectionnés seront informés par email au plus tard le 15 mai 2026.',
    'participate.faq.premiere.q': 'Mon film doit-il être inédit ?',
    'participate.faq.premiere.a': 'Non, le film peut avoir été diffusé dans d\'autres festivals ou en ligne.',
    'participate.faq.screening.q': 'Comment se passe la projection ?',
    'participate.faq.screening.a': 'Les films sélectionnés seront projetés lors de la semaine du festival dans une salle de cinéma parisienne.',
    'participate.faq.prizes.q': 'Quels sont les prix décernés ?',
    'participate.faq.prizes.a': 'Le festival décerne plusieurs prix dont le Grand Prix, le Prix du Public et le Prix du Jury. Consultez la page Prix pour plus de détails.',
    'participate.faq.presence.q': 'Dois-je être présent lors du festival ?',
    'participate.faq.presence.a': 'La présence des réalisateurs sélectionnés est vivement encouragée mais pas obligatoire.',
    'participate.faq.contact.q': 'Comment puis-je contacter l\'équipe ?',
    'participate.faq.contact.a': 'Vous pouvez nous contacter via le formulaire de contact ou par email à inscriptions@ptitclap.fr',
    
    // Prizes page
    'prizes.title': 'Les Prix',
    'prizes.subtitle': 'Récompenses décernées lors du festival',
    'prizes.amount': 'Dotation',
    'prizes.sponsor': 'Sponsor',
    'prizes.grand': 'Grand Prix',
    'prizes.grand.desc': 'Décerné au meilleur court-métrage de la compétition officielle.',
    'prizes.jury': 'Prix du Jury',
    'prizes.jury.desc': 'Récompense un film remarqué pour sa qualité artistique et technique.',
    'prizes.public': 'Prix du Public',
    'prizes.public.desc': 'Attribué par le vote du public pendant le festival.',
    'prizes.first': 'Prix de la Première Œuvre',
    'prizes.first.desc': 'Encourage un réalisateur pour son tout premier court-métrage.',
    'prizes.young': 'Prix du Jury Jeune',
    'prizes.young.desc': 'Décerné par un jury composé de lycéens et étudiants en cinéma.',
    
    // Ceremony page
    'ceremony.title': 'La Cérémonie',
    'ceremony.subtitle': 'Rejoignez-nous pour la remise des prix',
    'ceremony.location': 'Lieu',
    'ceremony.date': 'Date',
    'ceremony.access': 'Accès',
    'ceremony.tickets': 'Billetterie',
    'ceremony.time': 'Cérémonie de remise des prix',
    'ceremony.metro': 'Métro',
    'ceremony.parking': 'Parking',
    'ceremony.book': 'Réserver mes places',
    'ceremony.open': 'La cérémonie est ouverte au public. Réservez vos places dès maintenant !',
    
    // Education page
    'education.title': 'Éducation à l\'image',
    'education.subtitle': 'Sensibiliser les jeunes au 7ème art',
    'education.programs': 'Nos programmes',
    'education.stats.students': 'Élèves sensibilisés',
    'education.stats.schools': 'Établissements partenaires',
    'education.stats.screenings': 'Projections scolaires',
    'education.stats.years': 'Années d\'engagement',
    'education.program.screenings': 'Projections scolaires',
    'education.program.screenings.desc': 'Des séances de projection suivies de débats avec les réalisateurs dans les établissements scolaires de la région.',
    'education.program.workshops': 'Ateliers de réalisation',
    'education.program.workshops.desc': 'Initiation à la création audiovisuelle pour les classes de primaire et collège, encadrée par des professionnels.',
    'education.program.young': 'Prix du Jury Jeune',
    'education.program.young.desc': 'Un jury de lycéens et étudiants en cinéma décerne son propre prix parmi les films en compétition.',
    'education.program.resources': 'Ressources pédagogiques',
    'education.program.resources.desc': 'Des dossiers pédagogiques accompagnent chaque film pour faciliter leur exploitation en classe.',
    'education.cta.title': 'Vous êtes enseignant ?',
    'education.cta.text': 'Contactez-nous pour organiser une projection ou un atelier dans votre établissement.',
    'education.cta.button': 'Nous contacter',
    
    // Partners page
    'partners.title': 'Nos Partenaires',
    'partners.become': 'Devenir partenaire',
    'partners.form.name': 'Nom de l\'organisation',
    'partners.form.email': 'Email',
    'partners.form.message': 'Message',
    
    // Press page
    'press.title': 'Espace Presse',
    'press.kit': 'Kit presse',
    'press.releases': 'Communiqués',
    'press.contact': 'Contact presse',
    
    // Contact page
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Une question ? N\'hésitez pas à nous contacter',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre@email.fr',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.placeholder': 'Objet de votre message',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Votre message...',
    'contact.form.success': 'Message envoyé avec succès',
    'contact.form.success.desc': 'Nous vous répondrons dans les plus brefs délais.',
    
    // Jury page
    'jury.title': 'Le Jury {year}',
    'jury.president': 'Président(e) du Jury',
    'jury.members': 'Membres du Jury',
    
    // Archives
    'archives.title': 'Archives',
    'archives.subtitle': 'Retour sur les éditions précédentes',
    'archives.edition': 'Édition {year}',
    'archives.palmares': 'Palmarès',
    'archives.selection': 'Sélection officielle',
    'archives.gallery': 'Galerie photos',
    'archives.films': 'films',
    'archives.view': 'Voir le palmarès',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.films': 'Films',
    'nav.participate': 'Participate',
    'nav.jury': 'Jury',
    'nav.ceremony': 'Ceremony',
    'nav.prizes': 'Prizes',
    'nav.education': 'Film Education',
    'nav.partners': 'Partners',
    'nav.archives': 'Archives',
    'nav.press': 'Press',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Ptit Clap Festival',
    'hero.subtitle': 'Short Film Festival',
    'hero.cta.participate': 'Participate',
    'hero.cta.discover': 'Discover Films',
    'hero.countdown.days': 'Days',
    'hero.countdown.hours': 'Hours',
    'hero.countdown.minutes': 'Minutes',
    'hero.countdown.seconds': 'Seconds',
    'hero.countdown.until': 'Call for films ends',
    
    // Sections
    'section.featuredFilms': 'Featured Films',
    'section.featuredFilms.subtitle': 'Discover the short films that made our festival special',
    'section.jury': 'The Jury',
    'section.jury.subtitle': 'Passionate professionals dedicated to cinema',
    'section.partners': 'Our Partners',
    'section.partners.subtitle': 'They support us and make the festival possible',
    'section.viewAll': 'View all',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Settings',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.retry': 'Retry',
    'common.readMore': 'Read more',
    'common.seeMore': 'See more',
    'common.back': 'Back',
    'common.send': 'Send',
    'common.submit': 'Submit',
    'common.download': 'Download',
    
    // Films
    'films.title': 'Film Catalog',
    'films.search': 'Search films...',
    'films.filter.edition': 'Edition',
    'films.filter.status': 'Status',
    'films.filter.prize': 'Prize',
    'films.filter.genre': 'Genre',
    'films.filter.country': 'Country',
    'films.sort.alphabetical': 'Alphabetical',
    'films.sort.recent': 'Most Recent',
    'films.sort.popular': 'Popular',
    'films.sort.random': 'Random',
    'films.noResults': 'No films found',
    'films.videoNotAvailable': 'Film not available online – viewable at screenings / on request',
    
    // Participate page
    'participate.title': 'Participate in the Festival',
    'participate.subtitle': 'Submit your short film and join the adventure',
    'participate.dates': 'Key Dates',
    'participate.conditions': 'Participation Requirements',
    'participate.faq': 'Frequently Asked Questions',
    'participate.cta': 'Submit My Film',
    'participate.date.open': 'Registration opens',
    'participate.date.close': 'Registration closes',
    'participate.date.selection': 'Official selection announcement',
    'participate.date.ceremony': 'Award ceremony',
    'participate.condition.1': 'Film produced after January 2023',
    'participate.condition.2': 'Maximum duration: 15 minutes',
    'participate.condition.3': 'Fiction only (no documentary, animation or 3D film)',
    'participate.condition.4': 'Directors aged 15 to 25 years old',
    'participate.condition.5': 'French dialogue or French subtitles required',
    'participate.condition.6': 'Burned-in subtitles preferred (separate SRT files may cause issues during screening)',
    'participate.condition.7': 'One short film per participant only',
    'participate.condition.8': 'All production countries accepted',
    'participate.faq.cost.q': 'How much does registration cost?',
    'participate.faq.cost.a': 'Registration is completely free for all films.',
    'participate.faq.multiple.q': 'Can I submit multiple films?',
    'participate.faq.multiple.a': 'Yes, you can submit multiple films, but each film must be registered separately.',
    'participate.faq.notification.q': 'When will I be notified of the selection?',
    'participate.faq.notification.a': 'Selected directors will be notified by email no later than May 15, 2026.',
    'participate.faq.premiere.q': 'Does my film need to be a premiere?',
    'participate.faq.premiere.a': 'No, the film may have been shown at other festivals or online.',
    'participate.faq.screening.q': 'How does the screening work?',
    'participate.faq.screening.a': 'Selected films will be screened during the festival week in a Parisian cinema.',
    'participate.faq.prizes.q': 'What prizes are awarded?',
    'participate.faq.prizes.a': 'The festival awards several prizes including the Grand Prize, Audience Award, and Jury Prize. See the Prizes page for details.',
    'participate.faq.presence.q': 'Do I need to be present at the festival?',
    'participate.faq.presence.a': 'The presence of selected directors is strongly encouraged but not mandatory.',
    'participate.faq.contact.q': 'How can I contact the team?',
    'participate.faq.contact.a': 'You can contact us via the contact form or by email at inscriptions@ptitclap.fr',
    
    // Prizes page
    'prizes.title': 'The Prizes',
    'prizes.subtitle': 'Awards presented at the festival',
    'prizes.amount': 'Prize',
    'prizes.sponsor': 'Sponsor',
    'prizes.grand': 'Grand Prize',
    'prizes.grand.desc': 'Awarded to the best short film in official competition.',
    'prizes.jury': 'Jury Prize',
    'prizes.jury.desc': 'Recognizes a film noted for its artistic and technical quality.',
    'prizes.public': 'Audience Award',
    'prizes.public.desc': 'Awarded by audience vote during the festival.',
    'prizes.first': 'First Work Prize',
    'prizes.first.desc': 'Encourages a director for their very first short film.',
    'prizes.young': 'Young Jury Prize',
    'prizes.young.desc': 'Awarded by a jury of high school and film students.',
    
    // Ceremony page
    'ceremony.title': 'The Ceremony',
    'ceremony.subtitle': 'Join us for the award ceremony',
    'ceremony.location': 'Location',
    'ceremony.date': 'Date',
    'ceremony.access': 'Access',
    'ceremony.tickets': 'Tickets',
    'ceremony.time': 'Award ceremony',
    'ceremony.metro': 'Metro',
    'ceremony.parking': 'Parking',
    'ceremony.book': 'Book my seats',
    'ceremony.open': 'The ceremony is open to the public. Book your seats now!',
    
    // Education page
    'education.title': 'Film Education',
    'education.subtitle': 'Introducing young audiences to cinema',
    'education.programs': 'Our Programs',
    'education.stats.students': 'Students reached',
    'education.stats.schools': 'Partner schools',
    'education.stats.screenings': 'School screenings',
    'education.stats.years': 'Years of commitment',
    'education.program.screenings': 'School screenings',
    'education.program.screenings.desc': 'Screening sessions followed by discussions with directors in regional schools.',
    'education.program.workshops': 'Filmmaking workshops',
    'education.program.workshops.desc': 'Introduction to audiovisual creation for primary and middle school classes, led by professionals.',
    'education.program.young': 'Young Jury Prize',
    'education.program.young.desc': 'A jury of high school and film students awards their own prize among the competing films.',
    'education.program.resources': 'Educational resources',
    'education.program.resources.desc': 'Educational materials accompany each film to facilitate their use in the classroom.',
    'education.cta.title': 'Are you a teacher?',
    'education.cta.text': 'Contact us to organize a screening or workshop at your school.',
    'education.cta.button': 'Contact us',
    
    // Partners page
    'partners.title': 'Our Partners',
    'partners.become': 'Become a Partner',
    'partners.form.name': 'Organization Name',
    'partners.form.email': 'Email',
    'partners.form.message': 'Message',
    
    // Press page
    'press.title': 'Press Area',
    'press.kit': 'Press Kit',
    'press.releases': 'Press Releases',
    'press.contact': 'Press Contact',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have a question? Don\'t hesitate to contact us',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Subject of your message',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.success': 'Message sent successfully',
    'contact.form.success.desc': 'We will get back to you as soon as possible.',
    
    // Common additions
    'common.sending': 'Sending...',
    
    // Jury page
    'jury.title': 'The {year} Jury',
    'jury.president': 'Jury President',
    'jury.members': 'Jury Members',
    
    // Archives
    'archives.title': 'Archives',
    'archives.subtitle': 'Look back at previous editions',
    'archives.edition': '{year} Edition',
    'archives.palmares': 'Award Winners',
    'archives.selection': 'Official Selection',
    'archives.gallery': 'Photo Gallery',
    'archives.films': 'films',
    'archives.view': 'View winners',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export function I18nProvider({ children, defaultLanguage = 'fr' }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language;
      if (stored && (stored === 'fr' || stored === 'en')) {
        return stored;
      }
    }
    return defaultLanguage;
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }, []);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    let text = translations[language][key] || translations['fr'][key] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }
    
    return text;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export function useTranslation() {
  const { t, language } = useI18n();
  return { t, language };
}

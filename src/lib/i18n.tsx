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
    'hero.countdown.until': 'avant la prochaine édition',
    
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
    
    // Prizes page
    'prizes.title': 'Les Prix',
    'prizes.subtitle': 'Récompenses décernées lors du festival',
    
    // Ceremony page
    'ceremony.title': 'La Cérémonie',
    'ceremony.subtitle': 'Rejoignez-nous pour la remise des prix',
    'ceremony.location': 'Lieu',
    'ceremony.date': 'Date',
    'ceremony.access': 'Accès',
    'ceremony.tickets': 'Billetterie',
    
    // Education page
    'education.title': 'Éducation à l\'image',
    'education.subtitle': 'Sensibiliser les jeunes au 7ème art',
    
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
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.success': 'Message envoyé avec succès',
    
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
    'hero.countdown.until': 'until the next edition',
    
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
    
    // Prizes page
    'prizes.title': 'The Prizes',
    'prizes.subtitle': 'Awards presented at the festival',
    
    // Ceremony page
    'ceremony.title': 'The Ceremony',
    'ceremony.subtitle': 'Join us for the award ceremony',
    'ceremony.location': 'Location',
    'ceremony.date': 'Date',
    'ceremony.access': 'Access',
    'ceremony.tickets': 'Tickets',
    
    // Education page
    'education.title': 'Film Education',
    'education.subtitle': 'Introducing young audiences to cinema',
    
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
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.success': 'Message sent successfully',
    
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

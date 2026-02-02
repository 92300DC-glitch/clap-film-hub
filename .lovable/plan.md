

# 🎬 Refonte du site Festival Ptit Clap

## Vision du projet
Un site web moderne et dynamique aux couleurs **bleu et or** qui célèbre le court-métrage avec une expérience utilisateur fluide, un catalogue de films riche, et un système de vote du public intégré.

---

## Phase 1 : Fondations & Pages Festival (Priorité haute)

### 🏠 Homepage impactante
- Hero plein écran avec vidéo/image de fond, titre du festival et **compteur** jusqu'à la prochaine édition
- 2 CTA principaux : **"Participer"** et **"Découvrir les films"**
- Section films à la une (gagnants + sélection)
- Focus Jury (3 profils en avant)
- Partenaires (logos par catégorie avec animation au survol)
- Footer avec liens réseaux sociaux

### 📄 Pages informatives
- **Participer / Inscription** : Dates clés, conditions, FAQ, CTA vers plateforme de dépôt
- **Prix** : Liste des prix avec montants et sponsors
- **Cérémonie** : Lieu, date, carte interactive, accès, billetterie
- **Éducation à l'image** : Actions jeune public avec chiffres clés
- **Partenaires** : Grille logos + formulaire "devenir partenaire"
- **Presse** : Kit presse téléchargeable, communiqués, contacts
- **Contact** : Formulaire sécurisé + carte

### 🌐 Internationalisation (FR/EN)
- Système de basculement langue dans le header
- Contenus traduits avec fallback FR → EN

---

## Phase 2 : Catalogue Films & Fiches détaillées

### 🎞️ Page catalogue `/films`
- Grille de cartes avec affiche, titre, réalisateur, badges prix
- **Recherche** texte (titre, réalisateur, tags)
- **Filtres** : Édition, statut (sélection/finaliste/gagnant), prix, genre, pays
- **Tris** : Alphabétique, par édition, popularité, aléatoire
- Pagination ou scroll infini

### 📋 Fiche film `/films/[slug]`
- Affiche + galerie de stills
- Titre, synopsis FR/EN, métadonnées (durée, pays, langue, année)
- **Lecteur vidéo** embed (YouTube/Vimeo) si autorisé
- Crédits complets (réalisateur, scénario, image, son, montage...)
- Badges prix remportés
- Films similaires "Voir aussi"
- Boutons partage réseaux sociaux

---

## Phase 3 : Jury & Archives

### 👥 Jury `/jury`
- Introduction du jury de l'édition en cours
- Mise en avant du/de la président(e) (carte premium)
- Grille des membres avec photo, bio courte, liens sociaux

### 🗂️ Archives `/archives`
- Grille de toutes les éditions (2010 → aujourd'hui)
- Chaque carte : affiche, année, numéro d'édition

### 📅 Page édition `/archives/[année]`
- Hero avec affiche de l'édition
- Palmarès (liste des prix avec films gagnants)
- Jury de l'édition
- Sélection des films
- Galerie photos (optionnel)

### 👤 Profils personnes `/personnes/[slug]`
- Photo, bio, liens sociaux
- Filmographie sur le site

---

## Phase 4 : Vote du public

### 🗳️ Système de vote
- Vote en période définie (dates configurables)
- Protection anti-fraude :
  - Validation par email (OTP)
  - Limite de votes par utilisateur
  - Rate limiting
- Affichage des résultats après clôture
- Intégration avec le prix "Prix du public"

---

## Phase 5 : Back-office Admin

### 🔐 Authentification
- Login sécurisé `/admin`
- Rôles : Admin (tout) / Éditeur (contenus)

### ✏️ Gestion des contenus
- **Éditions** : Créer, éditer, archiver
- **Films** : CRUD complet avec upload images, embed vidéo
- **Personnes** : Jurés, réalisateurs, avec photos et bios
- **Prix** : Configuration par édition
- **Partenaires** : Logos et catégories
- **Pages statiques** : Éditeur de contenu FR/EN
- **Vote** : Ouverture/fermeture, résultats

### 📊 Tableau de bord
- Statistiques de visites
- Films les plus vus
- État du vote en cours

---

## Aspects techniques

### 🗄️ Base de données (Supabase)
Tables principales : `editions`, `films`, `people`, `film_credits`, `awards`, `edition_jury`, `partners`, `pages`, `votes`

### 🎨 Design
- Palette **bleu profond + or/jaune** + accents blancs
- Typographies modernes et impactantes
- Micro-interactions (hover, transitions douces)
- Design responsive mobile-first

### ⚡ Performance & SEO
- Images optimisées avec lazy-loading
- URLs propres avec slugs
- Métadonnées OpenGraph complètes
- Données structurées (Event, VideoObject)

### 🔒 Conformité
- Bandeau cookies avec gestion consentement
- Analytics avec événements trackés
- Mentions légales, politique de confidentialité

---

## Données initiales
- 1 édition courante avec 10 films exemple
- 6 membres de jury
- 12 partenaires
- Structure prête pour importer vos archives existantes


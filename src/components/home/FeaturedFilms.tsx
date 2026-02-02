import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

// Mock data for featured films
const featuredFilms = [
  {
    id: '1',
    slug: 'le-dernier-souffle',
    title: 'Le Dernier Souffle',
    director: 'Marie Dupont',
    year: 2025,
    duration: '18 min',
    country: 'France',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
    awards: ['Grand Prix'],
  },
  {
    id: '2',
    slug: 'nuit-blanche',
    title: 'Nuit Blanche',
    director: 'Thomas Martin',
    year: 2025,
    duration: '12 min',
    country: 'Belgique',
    posterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
    awards: ['Prix du Public'],
  },
  {
    id: '3',
    slug: 'l-envol',
    title: "L'Envol",
    director: 'Sophie Bernard',
    year: 2025,
    duration: '15 min',
    country: 'Suisse',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
    awards: ['Prix du Jury'],
  },
  {
    id: '4',
    slug: 'entre-deux-mondes',
    title: 'Entre Deux Mondes',
    director: 'Lucas Petit',
    year: 2025,
    duration: '20 min',
    country: 'Canada',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
    awards: [],
  },
];

export function FeaturedFilms() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-background relative">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-accent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header - Brutalist */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-accent font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
              Sélection
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase tracking-tighter leading-[0.9]">
              {t('section.featuredFilms')}
            </h2>
            <div className="w-24 h-1 bg-accent mt-6" />
          </div>
          <Button 
            asChild 
            className="bg-transparent border-4 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-wider px-8 py-6 h-auto transition-all duration-150 hover:shadow-brutal-white"
          >
            <Link to="/films" className="flex items-center gap-3">
              {t('section.viewAll')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Films Grid - Brutalist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredFilms.map((film, index) => (
            <Link
              key={film.id}
              to={`/films/${film.slug}`}
              className="group relative bg-muted border-2 border-muted hover:border-accent transition-all duration-150 hover:-translate-y-2 hover:shadow-brutal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Poster */}
              <div className="aspect-[2/3] overflow-hidden relative">
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
                {/* Harsh overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Awards Badges */}
              {film.awards.length > 0 && (
                <div className="absolute top-0 left-0">
                  {film.awards.map((award) => (
                    <div 
                      key={award} 
                      className="bg-accent text-accent-foreground px-3 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2"
                    >
                      <Trophy className="h-3 w-3" />
                      {award}
                    </div>
                  ))}
                </div>
              )}

              {/* Info */}
              <div className="p-4 border-t-2 border-muted group-hover:border-accent transition-colors">
                <h3 className="text-lg font-black text-foreground uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
                  {film.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium mb-3">{film.director}</p>
                <div className="flex items-center gap-3 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                  <span>{film.year}</span>
                  <span className="w-1 h-1 bg-accent" />
                  <span>{film.duration}</span>
                  <span className="w-1 h-1 bg-accent" />
                  <span>{film.country}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

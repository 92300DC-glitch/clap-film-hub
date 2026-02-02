import { Link } from 'react-router-dom';
import { ArrowRight, Award, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {t('section.featuredFilms')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('section.featuredFilms.subtitle')}
            </p>
          </div>
          <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
            <Link to="/films" className="flex items-center gap-2">
              {t('section.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFilms.map((film) => (
            <Link
              key={film.id}
              to={`/films/${film.slug}`}
              className="group relative rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-card-hover transition-all duration-300"
            >
              {/* Poster */}
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Awards Badges */}
              {film.awards.length > 0 && (
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {film.awards.map((award) => (
                    <Badge 
                      key={award} 
                      className="bg-accent text-accent-foreground border-0 shadow-gold"
                    >
                      <Trophy className="h-3 w-3 mr-1" />
                      {award}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                  {film.title}
                </h3>
                <p className="text-white/70 text-sm mb-2">{film.director}</p>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <span>{film.year}</span>
                  <span>•</span>
                  <span>{film.duration}</span>
                  <span>•</span>
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

import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { useState } from 'react';

// Mock films data
const allFilms = [
  { id: '1', slug: 'le-dernier-souffle', title: 'Le Dernier Souffle', director: 'Marie Dupont', year: 2025, duration: '18 min', country: 'France', posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop', awards: ['Grand Prix'], genre: 'Drame' },
  { id: '2', slug: 'nuit-blanche', title: 'Nuit Blanche', director: 'Thomas Martin', year: 2025, duration: '12 min', country: 'Belgique', posterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop', awards: ['Prix du Public'], genre: 'Thriller' },
  { id: '3', slug: 'l-envol', title: "L'Envol", director: 'Sophie Bernard', year: 2025, duration: '15 min', country: 'Suisse', posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop', awards: ['Prix du Jury'], genre: 'Animation' },
  { id: '4', slug: 'entre-deux-mondes', title: 'Entre Deux Mondes', director: 'Lucas Petit', year: 2025, duration: '20 min', country: 'Canada', posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop', awards: [], genre: 'Documentaire' },
  { id: '5', slug: 'silence', title: 'Silence', director: 'Emma Laurent', year: 2024, duration: '22 min', country: 'France', posterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop', awards: [], genre: 'Drame' },
  { id: '6', slug: 'la-traversee', title: 'La Traversée', director: 'Paul Moreau', year: 2024, duration: '16 min', country: 'France', posterUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop', awards: ['Grand Prix'], genre: 'Aventure' },
  { id: '7', slug: 'memoires', title: 'Mémoires', director: 'Julie Chen', year: 2024, duration: '14 min', country: 'France', posterUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop', awards: [], genre: 'Expérimental' },
  { id: '8', slug: 'lombre-du-soir', title: "L'Ombre du Soir", director: 'Marc Durand', year: 2023, duration: '19 min', country: 'Belgique', posterUrl: 'https://images.unsplash.com/photo-1505775561242-727b7fba20f0?w=400&h=600&fit=crop', awards: ['Prix du Public'], genre: 'Thriller' },
];

export default function Films() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFilms = allFilms.filter(film => 
    film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.director.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('films.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explorez notre catalogue de courts-métrages sélectionnés depuis 2010
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b bg-background sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('films.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtres
            </Button>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Trier
            </Button>
          </div>
        </div>
      </section>

      {/* Films Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {filteredFilms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFilms.map((film) => (
                <Link
                  key={film.id}
                  to={`/films/${film.slug}`}
                  className="group relative rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="aspect-[2/3] overflow-hidden">
                    <img
                      src={film.posterUrl}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  {film.awards.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {film.awards.map((award) => (
                        <Badge key={award} className="bg-accent text-accent-foreground border-0 shadow-gold">
                          <Trophy className="h-3 w-3 mr-1" />
                          {award}
                        </Badge>
                      ))}
                    </div>
                  )}
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
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">{t('films.noResults')}</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

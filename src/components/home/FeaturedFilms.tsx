import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

import poster2024 from '@/assets/archives/2024.jpg';
import poster2023 from '@/assets/archives/2023.jpg';
import poster2022 from '@/assets/archives/2022.jpg';
import poster2021 from '@/assets/archives/2021.jpg';

const featuredEditions = [
  { year: 2024, number: 15, posterUrl: poster2024 },
  { year: 2023, number: 14, posterUrl: poster2023 },
  { year: 2022, number: 13, posterUrl: poster2022 },
  { year: 2021, number: 12, posterUrl: poster2021 },
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
            <Link to="/archives" className="flex items-center gap-3">
              {t('section.viewAll')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Editions Grid - Brutalist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredEditions.map((edition, index) => (
            <Link
              key={edition.year}
              to={`/archives/${edition.year}`}
              className="group relative bg-muted border-2 border-muted hover:border-accent transition-all duration-150 hover:-translate-y-2 hover:shadow-brutal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Poster */}
              <div className="aspect-[2/3] overflow-hidden relative">
                <img
                  src={edition.posterUrl}
                  alt={`Édition ${edition.year}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Edition badge */}
              <div className="absolute top-0 left-0 bg-accent text-accent-foreground px-3 py-2 text-xs font-black uppercase tracking-wider">
                {edition.number}ème édition
              </div>

              {/* Info */}
              <div className="p-4 border-t-2 border-muted group-hover:border-accent transition-colors">
                <h3 className="text-lg font-black text-foreground uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
                  Édition {edition.year}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

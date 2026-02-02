import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const editions = [
  { year: 2025, number: 15, posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop', filmsCount: 45 },
  { year: 2024, number: 14, posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop', filmsCount: 42 },
  { year: 2023, number: 13, posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop', filmsCount: 38 },
  { year: 2022, number: 12, posterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop', filmsCount: 40 },
  { year: 2021, number: 11, posterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop', filmsCount: 35 },
  { year: 2020, number: 10, posterUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop', filmsCount: 30 },
  { year: 2019, number: 9, posterUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop', filmsCount: 36 },
  { year: 2018, number: 8, posterUrl: 'https://images.unsplash.com/photo-1505775561242-727b7fba20f0?w=400&h=600&fit=crop', filmsCount: 32 },
];

export default function Archives() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('archives.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('archives.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editions.map((edition) => (
              <Link
                key={edition.year}
                to={`/archives/${edition.year}`}
                className="group relative rounded-xl overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={edition.posterUrl}
                    alt={`Édition ${edition.year}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  #{edition.number}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edition.filmsCount} films</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    Édition {edition.year}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-accent transition-colors">
                    Voir le palmarès
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from '@/components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '@/lib/i18n';
import { ArrowLeft, Play, Share2, Clock, Globe, Film, Calendar, Trophy, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Mock film data
const filmData: Record<string, any> = {
  'le-dernier-souffle': {
    id: '1',
    title: 'Le Dernier Souffle',
    titleEn: 'The Last Breath',
    director: 'Marie Dupont',
    year: 2025,
    duration: 18,
    country: 'France',
    language: 'Français',
    genre: 'Drame',
    synopsis: 'Un homme face à ses derniers instants revit les moments qui ont marqué sa vie. Entre regrets et acceptation, il doit faire la paix avec son passé pour pouvoir partir sereinement.',
    synopsisEn: 'A man facing his final moments relives the moments that marked his life. Between regrets and acceptance, he must make peace with his past in order to leave peacefully.',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=900&fit=crop',
    stills: [
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoIsPublic: true,
    awards: ['Grand Prix 2025'],
    credits: [
      { role: 'Réalisation', name: 'Marie Dupont' },
      { role: 'Scénario', name: 'Marie Dupont, Pierre Leroy' },
      { role: 'Image', name: 'Jean-Paul Mercier' },
      { role: 'Son', name: 'Caroline Blanc' },
      { role: 'Montage', name: 'Luc Martin' },
      { role: 'Musique', name: 'Olivier Faure' },
    ],
    edition: { year: 2025, number: 15 },
  },
};

export default function FilmDetail() {
  const { slug } = useParams();
  const { t, language } = useTranslation();
  const film = slug ? filmData[slug] : null;

  if (!film) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Film non trouvé</h1>
          <Button asChild>
            <Link to="/films">Retour aux films</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button asChild variant="ghost" className="gap-2">
          <Link to="/films">
            <ArrowLeft className="h-4 w-4" />
            {t('common.back')}
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Poster & Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <AspectRatio ratio={2/3}>
                  <img
                    src={film.posterUrl}
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>

              {/* Awards */}
              {film.awards.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {film.awards.map((award: string) => (
                    <Badge key={award} className="bg-accent text-accent-foreground border-0 shadow-gold text-sm py-1.5 px-3">
                      <Trophy className="h-4 w-4 mr-1.5" />
                      {award}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Quick Stats */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{film.duration} min</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span>{film.country} • {film.language}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{film.year}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Film className="h-4 w-4" />
                  <span>{film.genre}</span>
                </div>
              </div>

              {/* Share */}
              <Button variant="outline" className="w-full mt-6 gap-2">
                <Share2 className="h-4 w-4" />
                Partager
              </Button>
            </div>
          </div>

          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="mb-2 text-accent font-medium">
              Édition {film.edition.year}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {film.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Un film de {film.director}
            </p>

            {/* Video Player */}
            {film.videoIsPublic ? (
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <AspectRatio ratio={16/9}>
                  <iframe
                    src={film.videoUrl}
                    title={film.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </AspectRatio>
              </div>
            ) : (
              <div className="mb-8 rounded-xl bg-muted flex items-center justify-center aspect-video">
                <div className="text-center p-8">
                  <Play className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">{t('films.videoNotAvailable')}</p>
                </div>
              </div>
            )}

            {/* Synopsis */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Synopsis</h2>
              <p className="text-foreground/80 leading-relaxed">
                {language === 'en' && film.synopsisEn ? film.synopsisEn : film.synopsis}
              </p>
            </div>

            {/* Stills Gallery */}
            {film.stills && film.stills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Galerie</h2>
                <div className="grid grid-cols-2 gap-4">
                  {film.stills.map((still: string, index: number) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img src={still} alt={`${film.title} - Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Credits */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Équipe technique</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {film.credits.map((credit: { role: string; name: string }, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <User className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <div className="text-sm text-muted-foreground">{credit.role}</div>
                      <div className="font-medium">{credit.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

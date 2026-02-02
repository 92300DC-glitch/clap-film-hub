import { Layout } from '@/components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '@/lib/i18n';
import { ArrowLeft, Trophy, Users, Film, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data for editions
const editionData: Record<string, any> = {
  '2025': {
    year: 2025,
    number: 15,
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=1200&fit=crop',
    ceremonyDate: '15 Juin 2025',
    venue: 'Le Grand Rex, Paris',
    palmares: [
      { prize: 'Grand Prix', film: 'Le Dernier Souffle', director: 'Marie Dupont', slug: 'le-dernier-souffle' },
      { prize: 'Prix du Public', film: 'Nuit Blanche', director: 'Thomas Martin', slug: 'nuit-blanche' },
      { prize: 'Prix du Jury', film: "L'Envol", director: 'Sophie Bernard', slug: 'l-envol' },
    ],
    jury: [
      { name: 'Claire Fontaine', role: 'Présidente', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
      { name: 'Jean-Marc Leblanc', role: 'Membre', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
      { name: 'Amélie Rousseau', role: 'Membre', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    ],
    filmsCount: 45,
  },
};

export default function ArchiveEdition() {
  const { year } = useParams();
  const { t } = useTranslation();
  const edition = year ? editionData[year] : null;

  if (!edition) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Édition non trouvée</h1>
          <Button asChild>
            <Link to="/archives">Retour aux archives</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${edition.posterUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="text-primary-foreground mb-6 hover:bg-primary-foreground/10">
            <Link to="/archives" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t('common.back')}
            </Link>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-accent text-accent-foreground border-0 text-lg px-4 py-1">
              #{edition.number}
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('archives.edition', { year: edition.year })}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {edition.ceremonyDate}
            </span>
            <span className="flex items-center gap-2">
              <Film className="h-5 w-5" />
              {edition.filmsCount} films
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Palmarès */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Trophy className="h-6 w-6 text-accent" />
                {t('archives.palmares')}
              </h2>
              <div className="space-y-4">
                {edition.palmares.map((item: any, index: number) => (
                  <Link
                    key={index}
                    to={`/films/${item.slug}`}
                    className="block p-6 bg-card rounded-xl border hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
                          {item.prize}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {item.film}
                        </h3>
                        <p className="text-muted-foreground">Réalisé par {item.director}</p>
                      </div>
                      <Trophy className="h-8 w-8 text-accent shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Jury */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Users className="h-6 w-6 text-accent" />
                Le Jury
              </h2>
              <div className="space-y-4">
                {edition.jury.map((member: any, index: number) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full mt-6">
                <Link to="/jury">Voir le jury complet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

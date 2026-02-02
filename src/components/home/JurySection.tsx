import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

// Mock jury data
const juryMembers = [
  {
    id: '1',
    slug: 'claire-fontaine',
    name: 'Claire Fontaine',
    role: 'Présidente du Jury',
    title: 'Réalisatrice',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    isPresident: true,
  },
  {
    id: '2',
    slug: 'jean-marc-leblanc',
    name: 'Jean-Marc Leblanc',
    role: 'Membre du Jury',
    title: 'Producteur',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    isPresident: false,
  },
  {
    id: '3',
    slug: 'amelie-rousseau',
    name: 'Amélie Rousseau',
    role: 'Membre du Jury',
    title: 'Critique de cinéma',
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    isPresident: false,
  },
];

export function JurySection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {t('section.jury')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('section.jury.subtitle')}
            </p>
          </div>
          <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
            <Link to="/jury" className="flex items-center gap-2">
              {t('section.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Jury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {juryMembers.map((member) => (
            <Link
              key={member.id}
              to={`/personnes/${member.slug}`}
              className="group relative"
            >
              <div className={`relative rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300 ${member.isPresident ? 'ring-2 ring-accent' : ''}`}>
                {/* Photo */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* President Badge */}
                {member.isPresident && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-gold">
                    <Star className="h-4 w-4 fill-current" />
                    Président(e)
                  </div>
                )}

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-sm">{member.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

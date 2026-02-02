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
    <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      {/* Diagonal stripe decoration */}
      <div className="absolute inset-0 stripe-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Brutalist */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-accent font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
              Édition 2026
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase tracking-tighter leading-[0.9]">
              {t('section.jury')}
            </h2>
            <div className="w-24 h-1 bg-accent mt-6" />
          </div>
          <Button 
            asChild 
            className="bg-transparent border-4 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-wider px-8 py-6 h-auto transition-all duration-150 hover:shadow-brutal-white"
          >
            <Link to="/jury" className="flex items-center gap-3">
              {t('section.viewAll')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Jury Grid - Brutalist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {juryMembers.map((member, index) => (
            <Link
              key={member.id}
              to={`/personnes/${member.slug}`}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative bg-background border-4 ${member.isPresident ? 'border-accent shadow-brutal' : 'border-foreground/20 hover:border-accent'} transition-all duration-150 hover:-translate-y-2 hover:shadow-brutal`}>
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  {/* Diagonal overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent opacity-60" />
                </div>

                {/* President Badge */}
                {member.isPresident && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center gap-2">
                    <Star className="h-4 w-4 fill-current" />
                    Président(e)
                  </div>
                )}

                {/* Info */}
                <div className="p-6 border-t-4 border-inherit">
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider">{member.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

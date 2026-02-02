import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Star, Linkedin, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JuryMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  isPresident: boolean;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const juryMembers: JuryMember[] = [
  {
    id: '1',
    name: 'Claire Fontaine',
    title: 'Réalisatrice',
    bio: "Claire Fontaine est une réalisatrice primée dont les courts-métrages ont été sélectionnés dans plus de 50 festivals internationaux. Son dernier film Lumière d'hiver a remporté le Prix du Jury à Cannes.",
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    isPresident: true,
    socials: { linkedin: '#', twitter: '#', website: '#' },
  },
  {
    id: '2',
    name: 'Jean-Marc Leblanc',
    title: 'Producteur',
    bio: "Producteur expérimenté avec plus de 20 ans dans l'industrie du cinéma. Il a produit plusieurs longs-métrages acclamés par la critique et soutient activement les jeunes talents.",
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    isPresident: false,
    socials: { linkedin: '#' },
  },
  {
    id: '3',
    name: 'Amélie Rousseau',
    title: 'Critique de cinéma',
    bio: "Critique au Monde depuis 15 ans, Amélie Rousseau est une voix respectée du cinéma français. Elle anime également une émission hebdomadaire sur France Culture.",
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    isPresident: false,
    socials: { twitter: '#', website: '#' },
  },
  {
    id: '4',
    name: 'Thomas Berger',
    title: 'Directeur de la photographie',
    bio: "Directeur de la photographie primé, Thomas a collaboré avec les plus grands réalisateurs français. Son travail sur la lumière est reconnu internationalement.",
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    isPresident: false,
    socials: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'Sophie Mercier',
    title: 'Actrice',
    bio: "Actrice de théâtre et de cinéma, Sophie a joué dans plus de 30 films. Elle est particulièrement engagée dans la promotion du court-métrage.",
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    isPresident: false,
    socials: { twitter: '#' },
  },
  {
    id: '6',
    name: 'Antoine Duval',
    title: 'Compositeur',
    bio: "Compositeur de musiques de films, Antoine a signé les bandes originales de nombreux courts et longs-métrages. Il enseigne également au Conservatoire de Paris.",
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    isPresident: false,
    socials: { website: '#' },
  },
];

export default function Jury() {
  const { t } = useTranslation();
  const president = juryMembers.find(m => m.isPresident);
  const members = juryMembers.filter(m => !m.isPresident);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('jury.title', { year: 2026 })}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('section.jury.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* President */}
          {president && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                <Star className="h-6 w-6 text-accent fill-accent" />
                {t('jury.president')}
              </h2>
              <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden ring-2 ring-accent">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="aspect-square md:aspect-auto">
                    <img src={president.photoUrl} alt={president.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{president.name}</h3>
                    <p className="text-accent font-medium mb-4">{president.title}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{president.bio}</p>
                    <div className="flex items-center gap-3">
                      {president.socials.linkedin && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={president.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {president.socials.twitter && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={president.socials.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {president.socials.website && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={president.socials.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Members */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">{t('jury.members')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div key={member.id} className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square">
                    <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-3">{member.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex items-center gap-2">
                      {member.socials.linkedin && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.socials.twitter && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.socials.website && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.socials.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

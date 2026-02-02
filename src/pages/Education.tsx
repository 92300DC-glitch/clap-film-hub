import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { GraduationCap, Users, School, Film, BookOpen, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { icon: Users, value: '12 000+', label: 'Élèves sensibilisés' },
  { icon: School, value: '150', label: 'Établissements partenaires' },
  { icon: Film, value: '300', label: 'Projections scolaires' },
  { icon: Award, value: '10', label: 'Années d\'engagement' },
];

const programs = [
  {
    title: 'Projections scolaires',
    description: 'Des séances de projection suivies de débats avec les réalisateurs dans les établissements scolaires de la région.',
    icon: Film,
  },
  {
    title: 'Ateliers de réalisation',
    description: 'Initiation à la création audiovisuelle pour les classes de primaire et collège, encadrée par des professionnels.',
    icon: GraduationCap,
  },
  {
    title: 'Prix du Jury Jeune',
    description: 'Un jury de lycéens et étudiants en cinéma décerne son propre prix parmi les films en compétition.',
    icon: Award,
  },
  {
    title: 'Ressources pédagogiques',
    description: 'Des dossiers pédagogiques accompagnent chaque film pour faciliter leur exploitation en classe.',
    icon: BookOpen,
  },
];

export default function Education() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('education.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">Nos programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program) => (
              <Card key={program.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Vous êtes enseignant ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contactez-nous pour organiser une projection ou un atelier dans votre établissement.
          </p>
          <a 
            href="mailto:education@ptitclap.fr"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </Layout>
  );
}

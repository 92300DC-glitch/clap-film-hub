import { Layout } from '@/components/layout/Layout';
import { Baby, Film, School, Users, Heart, Star } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    title: 'Les Tout-petits Claps',
    description:
      'Depuis 2016, une action à destination des établissements d\'accueil des jeunes enfants (crèches) est mise en place. Chaque année, c\'est plus de 550 enfants qui profitent de ces projections. Les séances se déroulent au cinéma Pathé de Levallois parfaitement adapté à l\'accueil des tout-petits. Des courts-métrages d\'animation de moins de 35 minutes sélectionnés avec soin sont diffusés lors de ces projections. L\'objectif de cette action est de proposer aux très jeunes enfants une première expérience culturelle en collectivité.',
  },
  {
    icon: Film,
    title: 'Les longs métrages suivis d\'un débat',
    description:
      'Afin de permettre aux élèves des classes de CM1 et CM2 d\'appréhender le débat et la critique cinématographique, le Festival Ptit Clap a mis en place trois projections de longs métrages par an. Ces longs métrages sont sélectionnés auprès de petites sociétés de production indépendantes. L\'objectif est de présenter un film qui n\'a pas été commercialisé dans de grandes salles de cinéma et qui sera probablement une découverte pour chaque jeune spectateur. Des documents pédagogiques rédigés par nos soins sont également proposés et envoyés aux enseignants afin de faciliter le travail et l\'échange en classe.',
  },
  {
    icon: School,
    title: 'Découverte de programmes de courts métrages pour les maternelles',
    description:
      'Les élèves des écoles maternelles (petite, moyenne et grande section) de la Ville de Levallois bénéficient de projections de courts métrages dédiées à leur jeune âge. Trois sessions sont proposées chaque année. En amont, des outils pédagogiques ludiques (jeux, coloriages, explications diverses…) sont envoyés aux enseignants afin de préparer au mieux la séance et leur permettre d\'échanger avec les élèves une fois en classe.',
  },
  {
    icon: Star,
    title: 'Les compétitions jeune public',
    description:
      'Élémentaire, collège, lycée : chaque année les élèves découvrent une programmation de courts métrages spécialement adaptée à leur âge. Les élèves visionnent les courts métrages puis votent pour leur préféré à l\'issue de la séance. Cela nous permet de remettre les 3 Prix de la Jeunesse lors de la cérémonie officielle du Festival (Prix des Enfants, Prix des Collégiens et Prix des Lycéens).',
  },
  {
    icon: Heart,
    title: 'La compétition du Prix des Seniors',
    description:
      'Depuis plusieurs années, le festival a pour objectif de faire découvrir le format court au jeune public. Aujourd\'hui à travers cette initiative, nous souhaitons nous orienter vers un public trop souvent mis à la marge mais très enclin à de nouvelles sorties culturelles. Sur le même principe que les compétitions jeune public, les spectateurs découvrent une programmation de courts-métrages puis votent pour leur film préféré. Des discussions viennent clôturer les séances. En 2023, nous avons ainsi pu remettre le tout premier Prix des Seniors.',
  },
];

export default function Education() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-16 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/education-image-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight mb-4">
            Éducation à l'image
          </h1>
          <p className="text-primary-foreground/90 text-lg lg:text-xl max-w-3xl leading-relaxed">
            Tout au long de l'année, les élèves des écoles de Levallois sont
            régulièrement conviés à découvrir des courts et longs métrages qui
            suscitent leur intérêt et permettent une approche éducative de leur
            rapport à l'image.
          </p>
        </div>
      </section>

      {/* Image hero */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <img
            src="/images/education-image-hero.jpg"
            alt="Enfants au cinéma"
            className="w-full max-w-4xl mx-auto border-4 border-border shadow-lg"
          />
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 bg-card border-2 border-border hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <program.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-foreground">
                    {program.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <Users className="h-8 w-8 text-accent shrink-0 mt-1" />
            <div>
              <p className="text-primary-foreground leading-relaxed mb-6">
                L'année est ponctuée par de nombreux événements autour du cinéma :
                rencontres avec des personnalités du cinéma, ateliers jeune public,
                projections pour les seniors ou encore avant-premières.
              </p>
              <p className="text-primary-foreground leading-relaxed mb-6">
                Le Festival Ptit Clap est devenu un tremplin incontournable
                permettant à la jeune création cinématographique d'être mise en
                lumière auprès de la profession du 7ème art et du grand public.
              </p>
              <p className="text-primary-foreground/90 leading-relaxed italic border-l-4 border-accent pl-4">
                Que ce soit pour les réalisateurs émergents ou pour les jeunes
                spectateurs des écoles, le festival est aujourd'hui un évènement
                fédérateur et attendu pour démocratiser, découvrir et célébrer
                ensemble le court-métrage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

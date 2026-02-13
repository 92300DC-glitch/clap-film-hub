import { Layout } from '@/components/layout/Layout';
import { Trophy, Award, Users, Star, Heart, UserRound, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Prizes() {
  const prizes = [
    {
      name: 'Grand Prix du Jury',
      amount: '1 500 €',
      sponsor: 'DEVOTEAM',
      logo: '/images/sponsors/devoteam.png',
      icon: Trophy,
      featured: true,
    },
    {
      name: 'Deuxième Prix du Jury',
      amount: '1 000 €',
      sponsor: 'ABE COURTAGE',
      logo: '/images/sponsors/abe-courtage.png',
      icon: Award,
      featured: false,
    },
    {
      name: 'Troisième Prix du Jury',
      amount: '500 €',
      sponsor: 'MARKET OFFICE',
      logo: '/images/sponsors/market-office.png',
      icon: Star,
      featured: false,
    },
    {
      name: "Prix d'interprétation féminine",
      amount: '500 €',
      sponsor: 'AXIALYS',
      logo: '/images/sponsors/axialys.png',
      icon: UserRound,
      featured: false,
    },
    {
      name: "Prix d'interprétation masculine",
      amount: '500 €',
      sponsor: 'MARKET OFFICE',
      logo: '/images/sponsors/market-office.png',
      icon: UserRound,
      featured: false,
    },
    {
      name: 'Prix du Public',
      amount: '1 000 €',
      sponsor: 'FONDATION BNP PARIBAS',
      logo: '/images/sponsors/fondation-bnp-paribas.png',
      icon: Heart,
      featured: false,
    },
    {
      name: 'Prix des Enfants',
      amount: '500 €',
      sponsor: 'EIFFAGE',
      logo: '/images/sponsors/eiffage.jpg',
      icon: Users,
      featured: false,
    },
    {
      name: 'Prix des Collégiens',
      amount: '500 €',
      sponsor: 'EIFFAGE',
      logo: '/images/sponsors/eiffage.jpg',
      icon: GraduationCap,
      featured: false,
    },
    {
      name: 'Prix des Lycéens',
      amount: '500 €',
      sponsor: 'EIFFAGE',
      logo: '/images/sponsors/eiffage.jpg',
      icon: GraduationCap,
      featured: false,
    },
    {
      name: 'Prix des Seniors',
      amount: '500 €',
      sponsor: 'COGEP LIFE',
      logo: '/images/sponsors/cogep-life.png',
      icon: Users,
      featured: false,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Les Prix
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Découvrez les prix décernés lors de la cérémonie officielle du P'tit Clap
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <Card
                key={`${prize.name}-${index}`}
                className={prize.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-accent shadow-gold' : ''}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${prize.featured ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary'}`}>
                    <prize.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{prize.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Dotation</p>
                      <p className="text-2xl font-bold text-accent">{prize.amount}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                      <p className="text-xs text-muted-foreground">Offert par</p>
                      <div className="h-10 flex items-center">
                        <img
                          src={prize.logo}
                          alt={prize.sponsor}
                          className="max-h-10 max-w-[120px] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

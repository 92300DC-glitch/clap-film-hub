import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Trophy, Award, Users, Star, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Prizes() {
  const { t } = useTranslation();

  const prizes = [
    {
      nameKey: 'prizes.grand',
      amount: '3 000 €',
      descKey: 'prizes.grand.desc',
      sponsor: 'Région Île-de-France',
      icon: Trophy,
      featured: true,
    },
    {
      nameKey: 'prizes.jury',
      amount: '1 500 €',
      descKey: 'prizes.jury.desc',
      sponsor: 'CNC',
      icon: Award,
      featured: false,
    },
    {
      nameKey: 'prizes.public',
      amount: '1 000 €',
      descKey: 'prizes.public.desc',
      sponsor: 'Ville de Paris',
      icon: Heart,
      featured: false,
    },
    {
      nameKey: 'prizes.first',
      amount: '1 000 €',
      descKey: 'prizes.first.desc',
      sponsor: 'SACD',
      icon: Star,
      featured: false,
    },
    {
      nameKey: 'prizes.young',
      amount: '500 €',
      descKey: 'prizes.young.desc',
      sponsor: 'Académie de Paris',
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
            {t('prizes.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('prizes.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prizes.map((prize) => (
              <Card 
                key={prize.nameKey} 
                className={prize.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-accent shadow-gold' : ''}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${prize.featured ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary'}`}>
                    <prize.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{t(prize.nameKey)}</CardTitle>
                  <CardDescription>{t(prize.descKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{t('prizes.amount')}</p>
                      <p className="text-2xl font-bold text-accent">{prize.amount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{t('prizes.sponsor')}</p>
                      <p className="font-medium text-foreground">{prize.sponsor}</p>
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

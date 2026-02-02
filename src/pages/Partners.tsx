import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';

const partnerCategories = [
  {
    name: 'Partenaires Principaux',
    partners: [
      { name: 'Région Île-de-France', logoUrl: 'https://via.placeholder.com/200x80?text=R%C3%A9gion+IDF', website: '#' },
      { name: 'Ville de Paris', logoUrl: 'https://via.placeholder.com/200x80?text=Ville+de+Paris', website: '#' },
      { name: 'CNC', logoUrl: 'https://via.placeholder.com/200x80?text=CNC', website: '#' },
    ],
    size: 'large',
  },
  {
    name: 'Partenaires Médias',
    partners: [
      { name: 'France Culture', logoUrl: 'https://via.placeholder.com/160x60?text=France+Culture', website: '#' },
      { name: 'Télérama', logoUrl: 'https://via.placeholder.com/160x60?text=T%C3%A9l%C3%A9rama', website: '#' },
      { name: 'Les Inrocks', logoUrl: 'https://via.placeholder.com/160x60?text=Les+Inrocks', website: '#' },
      { name: 'Konbini', logoUrl: 'https://via.placeholder.com/160x60?text=Konbini', website: '#' },
    ],
    size: 'medium',
  },
  {
    name: 'Partenaires Institutionnels',
    partners: [
      { name: 'SACD', logoUrl: 'https://via.placeholder.com/140x50?text=SACD', website: '#' },
      { name: 'SCAM', logoUrl: 'https://via.placeholder.com/140x50?text=SCAM', website: '#' },
      { name: 'Procirep', logoUrl: 'https://via.placeholder.com/140x50?text=Procirep', website: '#' },
      { name: 'ADAMI', logoUrl: 'https://via.placeholder.com/140x50?text=ADAMI', website: '#' },
      { name: 'SPEDIDAM', logoUrl: 'https://via.placeholder.com/140x50?text=SPEDIDAM', website: '#' },
    ],
    size: 'small',
  },
];

export default function Partners() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('partners.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ils nous soutiennent et rendent le festival possible
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {partnerCategories.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8 text-center">
                {category.name}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                {category.partners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  >
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className={cn(
                        "object-contain",
                        category.size === 'large' && "h-16 lg:h-20",
                        category.size === 'medium' && "h-12 lg:h-16",
                        category.size === 'small' && "h-10 lg:h-12"
                      )}
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become Partner Form */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Handshake className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-2xl">{t('partners.become')}</CardTitle>
                <CardDescription>
                  Rejoignez notre réseau de partenaires et soutenez le court-métrage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">{t('partners.form.name')}</Label>
                    <Input id="org-name" placeholder="Nom de votre organisation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('partners.form.email')}</Label>
                    <Input id="email" type="email" placeholder="contact@organisation.fr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('partners.form.message')}</Label>
                    <Textarea id="message" placeholder="Décrivez votre projet de partenariat..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {t('common.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

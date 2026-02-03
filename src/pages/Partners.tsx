import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Handshake } from 'lucide-react';

// Import partner logos
import logoHautsDeSeine from '@/assets/partners/hauts-de-seine.png';
import logo3JConstructions from '@/assets/partners/3j-constructions.jpg';
import logoDevoteam from '@/assets/partners/devoteam.png';
import logoAmbassador from '@/assets/partners/ambassador.png';
import logoFondationBNP from '@/assets/partners/fondation-bnp-paribas.png';
import logoAxialys from '@/assets/partners/axialys.png';
import logoABE from '@/assets/partners/abe.png';
import logoCogep from '@/assets/partners/cogep.png';
import logoCommeJaime from '@/assets/partners/comme-jaime.png';
import logoYass from '@/assets/partners/yass.png';
import logoFG from '@/assets/partners/fg.png';
import logoTooGood from '@/assets/partners/too-good.png';
import logoShortFilmDepot from '@/assets/partners/shortfilmdepot.png';
import logoSoOuest from '@/assets/partners/so-ouest.jpeg';
import logoHappySenior from '@/assets/partners/happy-senior.jpg';
import logoPatheLevallois from '@/assets/partners/pathe-levallois.png';
import logo48hFilmProject from '@/assets/partners/48h-film-project.png';
import logoFringaleCulturelle from '@/assets/partners/fringale-culturelle.jpg';
import logoMarketOffice from '@/assets/partners/market-office.png';
import logoStudyrama from '@/assets/partners/studyrama.png';

// Partners data
const partners = [
  { id: '1', name: 'Hauts-de-Seine - Le Département', logo: logoHautsDeSeine },
  { id: '2', name: 'Fondation BNP Paribas', logo: logoFondationBNP },
  { id: '3', name: 'Pathé Levallois', logo: logoPatheLevallois },
  { id: '4', name: 'Devoteam', logo: logoDevoteam },
  { id: '5', name: 'Comme J\'aime', logo: logoCommeJaime },
  { id: '6', name: 'Radio FG', logo: logoFG },
  { id: '7', name: 'Too Good To Go', logo: logoTooGood },
  { id: '8', name: 'Short Film Depot', logo: logoShortFilmDepot },
  { id: '9', name: 'So Ouest', logo: logoSoOuest },
  { id: '10', name: 'Happy Senior', logo: logoHappySenior },
  { id: '11', name: '48 Hour Film Project', logo: logo48hFilmProject },
  { id: '12', name: 'La Fringale Culturelle', logo: logoFringaleCulturelle },
  { id: '13', name: '3J Constructions', logo: logo3JConstructions },
  { id: '14', name: 'Ambassador', logo: logoAmbassador },
  { id: '15', name: 'Axialys', logo: logoAxialys },
  { id: '16', name: 'ABE', logo: logoABE },
  { id: '17', name: 'Cogep', logo: logoCogep },
  { id: '18', name: 'Yass', logo: logoYass },
  { id: '19', name: 'Market Office', logo: logoMarketOffice },
  { id: '20', name: 'Studyrama', logo: logoStudyrama },
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
            {t('section.partners.subtitle')}
          </p>
        </div>
      </section>

      {/* Partners Grid - Brutalist */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative p-4 lg:p-6 bg-white border-2 border-transparent hover:border-accent transition-all duration-150 hover:-translate-y-1 hover:shadow-brutal"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner Form */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-foreground/20">
              <CardHeader className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-accent flex items-center justify-center">
                  <Handshake className="h-7 w-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">{t('partners.become')}</CardTitle>
                <CardDescription>
                  {t('partners.become.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">{t('partners.form.name')}</Label>
                    <Input id="org-name" placeholder="Nom de votre organisation" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('partners.form.email')}</Label>
                    <Input id="email" type="email" placeholder="contact@organisation.fr" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('partners.form.message')}</Label>
                    <Textarea id="message" placeholder="Décrivez votre projet de partenariat..." rows={4} className="border-2" />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase tracking-wider">
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

import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { MapPin, Calendar, Clock, Train, Car, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Ceremony() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('ceremony.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('ceremony.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    {t('ceremony.date')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">Samedi 15 Juin 2026</p>
                  <p className="text-muted-foreground flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4" />
                    19h00 - Cérémonie de remise des prix
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    {t('ceremony.location')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-foreground">Le Grand Rex</p>
                  <p className="text-muted-foreground">1 Boulevard Poissonnière</p>
                  <p className="text-muted-foreground">75002 Paris, France</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="h-5 w-5 text-accent" />
                    {t('ceremony.access')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Train className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Métro</p>
                      <p className="text-sm text-muted-foreground">Ligne 8, 9 - Station Bonne Nouvelle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Parking</p>
                      <p className="text-sm text-muted-foreground">Parking Indigo - Boulevard Bonne Nouvelle</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Ticket className="h-5 w-5" />
                    {t('ceremony.tickets')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    La cérémonie est ouverte au public. Réservez vos places dès maintenant !
                  </p>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Réserver mes places
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2158413261146!2d2.347326!3d48.870556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sLe%20Grand%20Rex!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de la cérémonie"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from '@/components/layout/Layout';
import { MapPin, Calendar, Clock, Train, Car, Bus, Ticket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Ceremony() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Badge className="bg-accent text-accent-foreground border-0 text-lg px-4 py-1 mb-4">
            17ème édition
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight mb-4">
            Cérémonie Officielle
          </h1>
          <p className="text-primary-foreground/90 text-lg lg:text-xl max-w-3xl">
            La cérémonie officielle du Festival Ptit Clap réunit le jury, les
            réalisateurs finalistes et le public pour la projection des courts
            métrages en compétition et la remise des prix.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              {/* Date & Heure */}
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Date & Horaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-black text-foreground uppercase">
                    Samedi 6 Juin 2026
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4" />
                    14h00 — 18h00
                  </p>
                </CardContent>
              </Card>

              {/* Lieu */}
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Lieu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-foreground">
                    Cinéma Pathé Levallois
                  </p>
                  <p className="text-muted-foreground">
                    28 rue d'Alsace — Centre Commercial So Ouest
                  </p>
                  <p className="text-muted-foreground">
                    92300 Levallois-Perret
                  </p>
                </CardContent>
              </Card>

              {/* Accès */}
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="h-5 w-5 text-accent" />
                    Accès
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Train className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold">Métro</p>
                      <p className="text-sm text-muted-foreground">
                        Ligne 3 — Pont de Levallois – Bécon ou Anatole France
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Train className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold">Transilien</p>
                      <p className="text-sm text-muted-foreground">
                        Ligne L — Gare de Levallois
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold">Bus</p>
                      <p className="text-sm text-muted-foreground">
                        Lignes 84, 92, 93, 163, 174
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold">Parking</p>
                      <p className="text-sm text-muted-foreground">
                        Parking So Ouest
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Billetterie */}
              <Card className="bg-accent/5 border-2 border-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Ticket className="h-5 w-5" />
                    Billetterie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.eventbrite.fr/e/billets-ceremonie-officielle-du-festival-ptit-clap-1982436637348?aff=oddtdtcreator&_gl=1*ougq5g*_up*MQ..*_ga*MTEyNzEzMzc5My4xNzc3OTA1MzAy*_ga_TQVES5V6SH*czE3Nzc5MDUzMDAkbzEkZzAkdDE3Nzc5MDUzMDAkajYwJGwwJGgw&keep_tld=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 text-sm font-black uppercase tracking-wider bg-accent text-accent-foreground border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all duration-150"
                  >
                    Inscription à la cérémonie officielle
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-full min-h-[400px] overflow-hidden shadow-lg border-2 border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.3!2d2.2835!3d48.8935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8b1f3e7c3d%3A0x2c7e8f4c3a9b0d1e!2sCin%C3%A9ma%20Path%C3%A9%20Levallois!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cinéma Pathé Levallois"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

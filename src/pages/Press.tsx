import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Download, FileText, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const pressReleases = [
  { date: '15 Mars 2026', title: 'Annonce du jury de la 16ème édition', url: '#' },
  { date: '1er Mars 2026', title: 'Ouverture des inscriptions 2026', url: '#' },
  { date: '20 Juin 2025', title: 'Palmarès de la 15ème édition', url: '#' },
  { date: '15 Mai 2025', title: 'Sélection officielle 2025 dévoilée', url: '#' },
];

const mediaArticles = [
  { source: 'Télérama', title: 'Ptit Clap, pépinière de talents', url: '#' },
  { source: 'Les Inrocks', title: 'Le court-métrage à l\'honneur', url: '#' },
  { source: 'Konbini', title: '10 courts à ne pas manquer', url: '#' },
];

export default function Press() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('press.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ressources et informations pour les journalistes et médias
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Press Kit */}
            <div className="lg:col-span-1">
              <Card className="bg-accent/5 border-accent sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-accent" />
                    {t('press.kit')}
                  </CardTitle>
                  <CardDescription>
                    Téléchargez notre dossier de presse complet avec logos, photos et informations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm italic">Bientôt disponible</p>
                  <Button disabled className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                    <Download className="h-4 w-4" />
                    Télécharger le kit presse
                  </Button>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-accent" />
                    {t('press.contact')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="mailto:ptitclap@ville-levallois.fr" className="text-accent hover:underline text-sm block">
                    ptitclap@ville-levallois.fr
                  </a>
                  <a href="tel:+33147157677" className="text-foreground hover:text-accent text-sm block">
                    +33 1 47 15 76 77
                  </a>
                  <p className="text-muted-foreground text-sm">
                    25 rue de la Gare<br />
                    92300 Levallois-Perret
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Press Releases & Articles */}
            <div className="lg:col-span-2 space-y-12">
              {/* Communiqués */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-accent" />
                  {t('press.releases')}
                </h2>
                <div className="space-y-4">
                  {pressReleases.map((release, index) => (
                    <a
                      key={index}
                      href={release.url}
                      className="block p-4 bg-card rounded-lg border hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{release.date}</p>
                          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {release.title}
                          </h3>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* In the Media */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Ils parlent de nous</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mediaArticles.map((article, index) => (
                    <a
                      key={index}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-card rounded-lg border hover:shadow-md transition-shadow group"
                    >
                      <p className="text-sm text-accent font-medium mb-1">{article.source}</p>
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

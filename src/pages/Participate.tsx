import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Calendar, FileText, HelpCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const keyDates = [
  { date: '1er Mars 2026', event: 'Ouverture des inscriptions' },
  { date: '30 Avril 2026', event: 'Clôture des inscriptions' },
  { date: '15 Mai 2026', event: 'Annonce de la sélection officielle' },
  { date: '15 Juin 2026', event: 'Cérémonie de remise des prix' },
];

const conditions = [
  'Court-métrage de fiction, animation ou documentaire',
  'Durée maximale : 30 minutes générique compris',
  'Film achevé après le 1er janvier 2024',
  'Première ou deuxième œuvre du réalisateur',
  'Sous-titres français obligatoires pour les films non francophones',
  'Format de projection : DCP ou fichier HD',
];

const faq = [
  { question: 'Combien coûte l\'inscription ?', answer: 'L\'inscription est entièrement gratuite pour tous les films.' },
  { question: 'Puis-je soumettre plusieurs films ?', answer: 'Oui, vous pouvez soumettre plusieurs films, mais chaque film doit faire l\'objet d\'une inscription séparée.' },
  { question: 'Quand serai-je informé de la sélection ?', answer: 'Les réalisateurs sélectionnés seront informés par email au plus tard le 15 mai 2026.' },
  { question: 'Mon film doit-il être inédit ?', answer: 'Non, le film peut avoir été diffusé dans d\'autres festivals ou en ligne.' },
  { question: 'Comment se passe la projection ?', answer: 'Les films sélectionnés seront projetés lors de la semaine du festival dans une salle de cinéma parisienne.' },
  { question: 'Quels sont les prix décernés ?', answer: 'Le festival décerne plusieurs prix dont le Grand Prix, le Prix du Public et le Prix du Jury. Consultez la page Prix pour plus de détails.' },
  { question: 'Dois-je être présent lors du festival ?', answer: 'La présence des réalisateurs sélectionnés est vivement encouragée mais pas obligatoire.' },
  { question: 'Comment puis-je contacter l\'équipe ?', answer: 'Vous pouvez nous contacter via le formulaire de contact ou par email à inscriptions@ptitclap.fr' },
];

export default function Participate() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('participate.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {t('participate.subtitle')}
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
            <ExternalLink className="mr-2 h-5 w-5" />
            {t('participate.cta')}
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  {t('participate.dates')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyDates.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className="bg-accent/10 text-accent font-semibold px-3 py-1.5 rounded text-sm min-w-[120px] text-center">
                        {item.date}
                      </div>
                      <div className="text-foreground">{item.event}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  {t('participate.conditions')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {conditions.map((condition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
                <HelpCircle className="h-6 w-6 text-accent" />
                {t('participate.faq')}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

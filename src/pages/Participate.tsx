import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Calendar, FileText, HelpCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Participate() {
  const { t } = useTranslation();

  const keyDates = [
    { date: '1er Mars 2026', eventKey: 'participate.date.open' },
    { date: '30 Avril 2026', eventKey: 'participate.date.close' },
    { date: '15 Mai 2026', eventKey: 'participate.date.selection' },
    { date: '15 Juin 2026', eventKey: 'participate.date.ceremony' },
  ];

  const conditions = [
    'participate.condition.1',
    'participate.condition.2',
    'participate.condition.3',
    'participate.condition.4',
    'participate.condition.5',
    'participate.condition.6',
  ];

  const faq = [
    { questionKey: 'participate.faq.cost.q', answerKey: 'participate.faq.cost.a' },
    { questionKey: 'participate.faq.multiple.q', answerKey: 'participate.faq.multiple.a' },
    { questionKey: 'participate.faq.notification.q', answerKey: 'participate.faq.notification.a' },
    { questionKey: 'participate.faq.premiere.q', answerKey: 'participate.faq.premiere.a' },
    { questionKey: 'participate.faq.screening.q', answerKey: 'participate.faq.screening.a' },
    { questionKey: 'participate.faq.prizes.q', answerKey: 'participate.faq.prizes.a' },
    { questionKey: 'participate.faq.presence.q', answerKey: 'participate.faq.presence.a' },
    { questionKey: 'participate.faq.contact.q', answerKey: 'participate.faq.contact.a' },
  ];

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
                      <div className="text-foreground">{t(item.eventKey)}</div>
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
                  {conditions.map((conditionKey, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{t(conditionKey)}</span>
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
                    <AccordionTrigger className="text-left">{t(item.questionKey)}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {t(item.answerKey)}
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

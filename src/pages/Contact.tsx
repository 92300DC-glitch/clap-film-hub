import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import contactImage from '@/assets/contact-festival.jpg';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Photo du festival - Style brutaliste */}
            <div className="border-4 border-accent shadow-[8px_8px_0_hsl(var(--accent))]">
              <img 
                src={contactImage} 
                alt="Festival Ptit Clap - Cérémonie"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-6">
              <Card className="border-4 border-foreground/20">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl font-black uppercase tracking-wider mb-6 border-b-4 border-accent pb-4">
                    {t('contact.info')}
                  </h2>
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold uppercase text-sm tracking-wider text-foreground/60 mb-1">{t('contact.phone')}</h3>
                        <a href="tel:+33147157677" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                          +33 1 47 15 76 77
                        </a>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold uppercase text-sm tracking-wider text-foreground/60 mb-1">Email</h3>
                        <a href="mailto:ptitclap@ville-levallois.fr" className="text-lg font-bold text-foreground hover:text-accent transition-colors break-all">
                          ptitclap@ville-levallois.fr
                        </a>
                      </div>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold uppercase text-sm tracking-wider text-foreground/60 mb-1">{t('contact.address')}</h3>
                        <p className="text-lg font-bold text-foreground">
                          25 rue de la Gare<br />
                          92300 Levallois-Perret
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map - Style brutaliste */}
              <div className="h-[250px] border-4 border-foreground/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.8!2d2.2876!3d48.8936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f9a4c5e5e5f%3A0x0!2s25+Rue+de+la+Gare%2C+92300+Levallois-Perret!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="25 rue de la Gare, Levallois-Perret"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// Mock partners data grouped by category
const partnersByCategory = {
  'Partenaires Principaux': [
    { id: '1', name: 'Région Île-de-France', logoUrl: 'https://via.placeholder.com/200x80?text=R%C3%A9gion+IDF' },
    { id: '2', name: 'Ville de Paris', logoUrl: 'https://via.placeholder.com/200x80?text=Ville+de+Paris' },
    { id: '3', name: 'CNC', logoUrl: 'https://via.placeholder.com/200x80?text=CNC' },
  ],
  'Partenaires Médias': [
    { id: '4', name: 'France Culture', logoUrl: 'https://via.placeholder.com/160x60?text=France+Culture' },
    { id: '5', name: 'Télérama', logoUrl: 'https://via.placeholder.com/160x60?text=T%C3%A9l%C3%A9rama' },
    { id: '6', name: 'Les Inrocks', logoUrl: 'https://via.placeholder.com/160x60?text=Les+Inrocks' },
    { id: '7', name: 'Konbini', logoUrl: 'https://via.placeholder.com/160x60?text=Konbini' },
  ],
  'Partenaires Institutionnels': [
    { id: '8', name: 'SACD', logoUrl: 'https://via.placeholder.com/140x50?text=SACD' },
    { id: '9', name: 'SCAM', logoUrl: 'https://via.placeholder.com/140x50?text=SCAM' },
    { id: '10', name: 'Procirep', logoUrl: 'https://via.placeholder.com/140x50?text=Procirep' },
    { id: '11', name: 'ADAMI', logoUrl: 'https://via.placeholder.com/140x50?text=ADAMI' },
    { id: '12', name: 'SPEDIDAM', logoUrl: 'https://via.placeholder.com/140x50?text=SPEDIDAM' },
  ],
};

export function PartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            {t('section.partners')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('section.partners.subtitle')}
          </p>
        </div>

        {/* Partners by Category */}
        <div className="space-y-12">
          {Object.entries(partnersByCategory).map(([category, partners], categoryIndex) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
                {category}
              </h3>
              <div className={cn(
                "flex flex-wrap items-center justify-center gap-8",
                categoryIndex === 0 ? "gap-12" : "gap-6 lg:gap-10"
              )}>
                {partners.map((partner) => (
                  <a
                    key={partner.id}
                    href="#"
                    className="group relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  >
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className={cn(
                        "object-contain",
                        categoryIndex === 0 ? "h-16 lg:h-20" : "h-10 lg:h-14"
                      )}
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

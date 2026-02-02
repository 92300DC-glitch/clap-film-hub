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
    <section className="py-20 lg:py-32 bg-background relative">
      {/* Corner decoration */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-accent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header - Brutalist */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
            Ils nous soutiennent
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase tracking-tighter leading-[0.9] mb-6">
            {t('section.partners')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Partners by Category - Brutalist */}
        <div className="space-y-16">
          {Object.entries(partnersByCategory).map(([category, partners], categoryIndex) => (
            <div key={category}>
              <h3 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-8 text-center">
                — {category} —
              </h3>
              <div className={cn(
                "flex flex-wrap items-center justify-center",
                categoryIndex === 0 ? "gap-8 lg:gap-12" : "gap-6 lg:gap-8"
              )}>
                {partners.map((partner) => (
                  <a
                    key={partner.id}
                    href="#"
                    className="group relative p-4 bg-muted border-2 border-transparent hover:border-accent transition-all duration-150 hover:-translate-y-1 hover:shadow-brutal"
                    title={partner.name}
                  >
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className={cn(
                        "object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300",
                        categoryIndex === 0 ? "h-12 lg:h-16" : "h-8 lg:h-12"
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

import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

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

// Partners data
const partners = [
  { id: '1', name: 'Hauts-de-Seine - Le Département', logo: logoHautsDeSeine },
  { id: '2', name: 'Fondation BNP Paribas', logo: logoFondationBNP },
  { id: '3', name: 'Devoteam', logo: logoDevoteam },
  { id: '4', name: 'Comme J\'aime', logo: logoCommeJaime },
  { id: '5', name: '3J Constructions', logo: logo3JConstructions },
  { id: '6', name: 'Ambassador', logo: logoAmbassador },
  { id: '7', name: 'Axialys', logo: logoAxialys },
  { id: '8', name: 'ABE', logo: logoABE },
  { id: '9', name: 'Cogep', logo: logoCogep },
  { id: '10', name: 'Yass', logo: logoYass },
];

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
            {t('section.partners.support')}
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase tracking-tighter leading-[0.9] mb-6">
            {t('section.partners')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Partners Grid - Brutalist */}
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
  );
}

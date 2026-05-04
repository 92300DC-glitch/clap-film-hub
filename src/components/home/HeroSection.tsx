import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';
import { Countdown } from './Countdown';

// Ceremony date: June 6, 2026 at 14:00
const NEXT_FESTIVAL_DATE = new Date('2026-06-06T14:00:00');
export function HeroSection() {
  const {
    t
  } = useTranslation();
  return <section className="relative min-h-screen flex items-end overflow-hidden bg-[hsl(220,80%,8%)]">
    {/* Video Background - Full coverage with brutalist overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image */}
        <img src="/images/hero-bg.jpg" alt="Festival Ptit Clap" className="absolute inset-0 w-full h-full object-cover" />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,80%,8%)] via-[hsl(220,80%,8%,0.7)] to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,80%,8%)] via-[hsl(220,80%,8%,0.3)] to-[hsl(220,80%,8%,0.5)] z-10" />
        {/* Brutalist color overlay */}
        <div className="absolute inset-0 z-20 mix-blend-multiply bg-[hsl(220,70%,20%,0.5)]" />
        {/* Grain texture effect */}
        <div className="absolute inset-0 z-20 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>


      {/* Main Content - Brutalist Layout */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-6 md:pt-8 pb-12 md:pb-20 relative z-20">
        <div className="max-w-[90vw] md:max-w-none">
          {/* Massive Title - Breaking the grid */}
          <div className="relative mb-6 md:mb-8">
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-primary-foreground leading-[0.85] tracking-tighter uppercase">
              <span className="block -ml-[2vw]">PTIT</span>
              <span className="block text-accent ml-[5vw] md:ml-[10vw]">CLAP</span>
            </h1>
            {/* Decorative strike-through */}
            <div className="absolute top-1/2 left-0 w-full h-1 md:h-2 bg-accent/30 -rotate-2" />
          </div>

          {/* Subtitle - Stark contrast */}
          <p className="text-lg md:text-2xl lg:text-3xl text-primary-foreground/60 font-light tracking-wide mb-8 md:mb-12 max-w-xl border-l-4 border-accent pl-4 md:pl-6">
            {t('hero.subtitle')}
          </p>

          {/* Countdown - Raw style */}
          <div className="mb-10 md:mb-16">
            <Countdown targetDate={NEXT_FESTIVAL_DATE} />
          </div>

          {/* CTAs - Brutalist buttons */}
          <div className="flex-col sm:flex-row gap-4 md:gap-6 py-0 pb-[50px] flex items-start justify-start">
            <Button asChild size="lg" className="bg-accent text-[hsl(220,80%,8%)] hover:bg-accent/90 text-base md:text-lg font-black uppercase tracking-wider px-8 md:px-12 py-6 md:py-8 h-auto border-4 border-accent hover:border-primary-foreground transition-all duration-150 hover:-translate-y-1 hover:translate-x-1 shadow-[4px_4px_0_hsl(45,100%,50%)] hover:shadow-[8px_8px_0_hsl(45,100%,50%)]">
              <a href="https://www.eventbrite.fr/e/billets-ceremonie-officielle-du-festival-ptit-clap-1982436637348?aff=oddtdtcreator&_gl=1*ougq5g*_up*MQ..*_ga*MTEyNzEzMzc5My4xNzc3OTA1MzAy*_ga_TQVES5V6SH*czE3Nzc5MDUzMDAkbzEkZzAkdDE3Nzc5MDUzMDAkajYwJGwwJGgw&keep_tld=true" target="_blank" rel="noopener noreferrer">
                S'inscrire à la cérémonie
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-accent z-30" />
      
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-20 md:w-32 h-20 md:h-32 border-l-4 md:border-l-8 border-t-4 md:border-t-8 border-accent z-30" />
    </section>;
}
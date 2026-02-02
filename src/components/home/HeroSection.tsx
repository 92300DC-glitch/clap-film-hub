import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';
import { Countdown } from './Countdown';

// Next festival date (example: June 15, 2026)
const NEXT_FESTIVAL_DATE = new Date('2026-06-15T19:00:00');

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[hsl(220,80%,8%)]">
      {/* YouTube Video Background - Positioned asymmetrically */}
      <div className="absolute top-0 right-0 w-[70%] h-[85%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[hsl(220,80%,8%)] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,80%,8%)] via-transparent to-transparent z-10" />
        <iframe
          src="https://www.youtube.com/embed/weDPXZkooSQ?autoplay=1&mute=1&loop=1&playlist=weDPXZkooSQ&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none grayscale-[30%] contrast-125"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Festival background video"
        />
        {/* Harsh geometric overlay */}
        <div className="absolute inset-0 z-20 mix-blend-multiply bg-[hsl(220,70%,15%,0.4)]" />
      </div>


      {/* Main Content - Brutalist Layout */}
      <div className="container mx-auto px-4 pb-12 md:pb-20 relative z-20">
        <div className="max-w-[95vw] md:max-w-none">
          {/* Massive Title - Breaking the grid */}
          <div className="relative mb-6 md:mb-8">
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-primary-foreground leading-[0.85] tracking-tighter uppercase">
              <span className="block -ml-[2vw]">P'TIT</span>
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
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-[hsl(220,80%,8%)] hover:bg-accent/90 text-base md:text-lg font-black uppercase tracking-wider px-8 md:px-12 py-6 md:py-8 h-auto border-4 border-accent hover:border-primary-foreground transition-all duration-150 hover:-translate-y-1 hover:translate-x-1 shadow-[4px_4px_0_hsl(45,100%,50%)] hover:shadow-[8px_8px_0_hsl(45,100%,50%)]"
            >
              <Link to="/participer">
                {t('hero.cta.participate')}
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg"
              className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-[hsl(220,80%,8%)] text-base md:text-lg font-bold uppercase tracking-wider px-8 md:px-12 py-6 md:py-8 h-auto transition-all duration-150"
            >
              <Link to="/films">
                {t('hero.cta.discover')}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-accent z-30" />
      
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-20 md:w-32 h-20 md:h-32 border-l-4 md:border-l-8 border-t-4 md:border-t-8 border-accent z-30" />
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';
import { Countdown } from './Countdown';

// Call for films deadline: March 31, 2026 at 23:59:59
const NEXT_FESTIVAL_DATE = new Date('2026-03-31T23:59:59');
export function HeroSection() {
  const {
    t
  } = useTranslation();
  return <section className="relative min-h-screen flex items-end overflow-hidden bg-[hsl(220,80%,8%)]">
    {/* Video Background - Full coverage with brutalist overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Video container - covers entire area */}
        <iframe src="https://www.youtube.com/embed/0E2_ioUr_VQ?autoplay=1&mute=1&loop=1&playlist=0E2_ioUr_VQ&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&playsinline=1&vq=hd1080" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none" allow="autoplay; encrypted-media" allowFullScreen title="Festival background video" />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,80%,8%)] via-[hsl(220,80%,8%,0.7)] to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,80%,8%)] via-[hsl(220,80%,8%,0.3)] to-[hsl(220,80%,8%,0.5)] z-10" />
        {/* Brutalist color overlay */}
        <div className="absolute inset-0 z-20 mix-blend-multiply bg-[hsl(220,70%,20%,0.5)]" />
        {/* Grain texture effect */}
        <div className="absolute inset-0 z-20 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>


      {/* Main Content - Brutalist Layout */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-12 md:pt-16 pb-12 md:pb-20 relative z-20">
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
              <a href="https://shortfilmdepot.com/fr/festival/85" target="_blank" rel="noopener noreferrer">
                {t('hero.cta.participate')}
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-[hsl(220,80%,8%)] text-base md:text-lg font-bold uppercase tracking-wider px-8 md:px-12 py-6 md:py-8 h-auto transition-all duration-150">
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
    </section>;
}
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';
import { Countdown } from './Countdown';

// Next festival date (example: June 15, 2026)
const NEXT_FESTIVAL_DATE = new Date('2026-06-15T19:00:00');

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45 100% 50% / 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, hsl(45 100% 50% / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Play className="h-4 w-4" />
            <span>Édition 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-slide-up">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-primary-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>

          {/* Countdown */}
          <div className="mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Countdown targetDate={NEXT_FESTIVAL_DATE} />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-lg px-8 py-6 h-auto"
            >
              <Link to="/participer">
                {t('hero.cta.participate')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg"
              className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-lg px-8 py-6 h-auto"
            >
              <Link to="/films">
                {t('hero.cta.discover')}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

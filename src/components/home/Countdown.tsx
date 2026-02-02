import { useEffect, useState } from 'react';
import { useTranslation } from '@/lib/i18n';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: t('hero.countdown.days') },
    { value: timeLeft.hours, label: t('hero.countdown.hours') },
    { value: timeLeft.minutes, label: t('hero.countdown.minutes') },
    { value: timeLeft.seconds, label: t('hero.countdown.seconds') },
  ];

  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-foreground/50 text-xs font-bold uppercase tracking-[0.3em]">
        {t('hero.countdown.until')}
      </p>
      <div className="flex items-center gap-2 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-muted border-2 border-accent px-3 py-2 sm:px-6 sm:py-4 min-w-[50px] sm:min-w-[80px] relative">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent -translate-x-0.5 -translate-y-0.5" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent translate-x-0.5 -translate-y-0.5" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent -translate-x-0.5 translate-y-0.5" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent translate-x-0.5 translate-y-0.5" />
                
                <span className="text-2xl sm:text-5xl font-black text-accent countdown-number block text-center">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-foreground/50 mt-2 font-bold uppercase tracking-[0.2em]">
                {unit.label}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-xl sm:text-4xl font-black text-accent/30 -mt-6">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

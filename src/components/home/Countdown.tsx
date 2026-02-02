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
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-5 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                <span className="text-2xl sm:text-4xl font-bold text-accent countdown-number">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground/70 mt-2 uppercase tracking-wider">
                {unit.label}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-2xl sm:text-4xl font-bold text-accent/50 -mt-6">:</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-primary-foreground/60 text-sm">
        {t('hero.countdown.until')}
      </p>
    </div>
  );
}

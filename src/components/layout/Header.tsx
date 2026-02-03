import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import logoPtitClap from '@/assets/logo-ptit-clap.png';

const navItems = [
  { key: 'nav.films', href: '/films' },
  { key: 'nav.participate', href: '/participer' },
  { key: 'nav.jury', href: '/jury' },
  { key: 'nav.ceremony', href: '/ceremonie' },
  { key: 'nav.prizes', href: '/prix' },
  { key: 'nav.archives', href: '/archives' },
  { key: 'nav.partners', href: '/partenaires' },
  { key: 'nav.contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useI18n();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoPtitClap} 
              alt="Festival Ptit Clap" 
              className="h-8 lg:h-10"
            />
          </Link>

          {/* Desktop Navigation - Brutalist */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-150",
                  location.pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted border-b-2 border-transparent hover:border-accent"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center border-2 border-foreground/30 rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('fr')}
                className={cn(
                  "px-3 py-1.5 text-sm font-bold uppercase tracking-wider transition-colors",
                  language === 'fr'
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/70 hover:bg-muted"
                )}
              >
                FR
              </button>
              <div className="w-px h-6 bg-foreground/30" />
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-3 py-1.5 text-sm font-bold uppercase tracking-wider transition-colors",
                  language === 'en'
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/70 hover:bg-muted"
                )}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground hover:bg-accent hover:text-accent-foreground border-2 border-foreground/30 hover:border-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Brutalist */}
        {isOpen && (
          <nav className="lg:hidden py-6 border-t-2 border-accent/30 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-150 border-l-4",
                    location.pathname === item.href
                      ? "bg-accent text-accent-foreground border-accent"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted border-transparent hover:border-accent"
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

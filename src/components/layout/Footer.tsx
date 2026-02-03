import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/ptitclap', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/ptitclap', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/ptitclap', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/ptitclap', label: 'YouTube' },
];

const quickLinks = [
  { key: 'nav.films', href: '/films' },
  { key: 'nav.participate', href: '/participer' },
  { key: 'nav.jury', href: '/jury' },
  { key: 'nav.archives', href: '/archives' },
];

const infoLinks = [
  { key: 'nav.press', href: '/presse' },
  { key: 'nav.partners', href: '/partenaires' },
  { key: 'nav.education', href: '/education' },
  { key: 'nav.contact', href: '/contact' },
];

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t-4 border-accent">
      {/* Top accent bar */}
      <div className="h-2 bg-accent" />
      
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand - Brutalist */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent flex items-center justify-center group-hover:shadow-brutal transition-all">
                  <span className="font-black text-accent-foreground text-xl">PC</span>
                </div>
                <span className="font-black text-2xl uppercase tracking-tight">
                  PTIT<span className="text-accent">CLAP</span>
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 border-l-4 border-accent pl-4">
              Festival du court-métrage célébrant la créativité et le talent des réalisateurs émergents depuis 2010.
            </p>
            {/* Social Links - Brutalist */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-muted border-2 border-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-150 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-accent uppercase tracking-wider mb-6 text-sm">Festival</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-black text-accent uppercase tracking-wider mb-6 text-sm">Informations</h3>
            <ul className="space-y-4">
              {infoLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Brutalist */}
          <div>
            <h3 className="font-black text-accent uppercase tracking-wider mb-6 text-sm">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:ptitclap@ville-levallois.fr"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-muted border-2 border-foreground/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-bold text-sm">ptitclap@ville-levallois.fr</span>
              </a>
              <a
                href="tel:+33147157677"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-muted border-2 border-foreground/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-bold text-sm">+33 1 47 15 76 77</span>
              </a>
            </div>
            <p className="text-muted-foreground text-sm border-l-4 border-muted pl-4 mt-4">
              25 rue de la Gare<br />
              92300 Levallois-Perret
            </p>
          </div>
        </div>

        {/* Bottom Bar - Brutalist */}
        <div className="mt-16 pt-8 border-t-2 border-muted">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              © {currentYear} Festival Ptit Clap — {t('footer.rights')}
            </p>
            <div className="flex items-center gap-8">
              <Link
                to="/mentions-legales"
                className="text-muted-foreground hover:text-accent text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {t('footer.legal')}
              </Link>
              <Link
                to="/confidentialite"
                className="text-muted-foreground hover:text-accent text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <button
                className="text-muted-foreground hover:text-accent text-sm font-medium uppercase tracking-wider transition-colors"
                onClick={() => {/* TODO: Open cookie consent */}}
              >
                {t('footer.cookies')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Film, Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Film className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl">Ptit Clap</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Festival du court-métrage célébrant la créativité et le talent des réalisateurs émergents depuis 2010.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Festival</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Informations</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Contact</h3>
            <a
              href="mailto:contact@ptitclap.fr"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm mb-4"
            >
              <Mail className="h-4 w-4" />
              contact@ptitclap.fr
            </a>
            <p className="text-primary-foreground/70 text-sm">
              Association Ptit Clap<br />
              Paris, France
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Festival Ptit Clap. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/mentions-legales"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                {t('footer.legal')}
              </Link>
              <Link
                to="/confidentialite"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <button
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
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

import { Layout } from '@/components/layout/Layout';
import { useTranslation } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import poster2010 from '@/assets/archives/2010.jpg';
import poster2011 from '@/assets/archives/2011.jpg';
import poster2012 from '@/assets/archives/2012.jpg';
import poster2013 from '@/assets/archives/2013.jpg';
import poster2014 from '@/assets/archives/2014.jpg';
import poster2015 from '@/assets/archives/2015.jpg';
import poster2016 from '@/assets/archives/2016.jpg';
import poster2017 from '@/assets/archives/2017.jpg';
import poster2018 from '@/assets/archives/2018.jpeg';
import poster2019 from '@/assets/archives/2019.jpg';
import poster2020 from '@/assets/archives/2020.jpg';
import poster2021 from '@/assets/archives/2021.jpg';
import poster2022 from '@/assets/archives/2022.jpg';
import poster2023 from '@/assets/archives/2023.jpg';
import poster2024 from '@/assets/archives/2024.jpg';

const editions = [
  { year: 2024, number: 15, posterUrl: poster2024 },
  { year: 2023, number: 14, posterUrl: poster2023 },
  { year: 2022, number: 13, posterUrl: poster2022 },
  { year: 2021, number: 12, posterUrl: poster2021 },
  { year: 2020, number: 11, posterUrl: poster2020 },
  { year: 2019, number: 10, posterUrl: poster2019 },
  { year: 2018, number: 9, posterUrl: poster2018 },
  { year: 2017, number: 8, posterUrl: poster2017 },
  { year: 2016, number: 7, posterUrl: poster2016 },
  { year: 2015, number: 6, posterUrl: poster2015 },
  { year: 2014, number: 5, posterUrl: poster2014 },
  { year: 2013, number: 4, posterUrl: poster2013 },
  { year: 2012, number: 3, posterUrl: poster2012 },
  { year: 2011, number: 2, posterUrl: poster2011 },
  { year: 2010, number: 1, posterUrl: poster2010 },
];

export default function Archives() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t('archives.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('archives.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editions.map((edition) => (
              <Link
                key={edition.year}
                to={`/archives/${edition.year}`}
                className="group relative rounded-xl overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={edition.posterUrl}
                    alt={`Édition ${edition.year}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {edition.number}ème édition
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {t('archives.edition', { year: edition.year })}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-accent transition-colors">
                    {t('archives.view')}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

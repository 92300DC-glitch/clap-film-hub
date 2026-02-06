import { Layout } from '@/components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Camera, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { editionsData } from '@/data/editions';
import { useState } from 'react';

// Import poster images
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

const posters: Record<string, string> = {
  '2010': poster2010, '2011': poster2011, '2012': poster2012, '2013': poster2013,
  '2014': poster2014, '2015': poster2015, '2016': poster2016, '2017': poster2017,
  '2018': poster2018, '2019': poster2019, '2020': poster2020, '2021': poster2021,
  '2022': poster2022, '2023': poster2023, '2024': poster2024,
};

const editionNumbers: Record<string, number> = {
  '2010': 1, '2011': 2, '2012': 3, '2013': 4, '2014': 5,
  '2015': 6, '2016': 7, '2017': 8, '2018': 9, '2019': 10,
  '2020': 11, '2021': 12, '2022': 13, '2023': 14, '2024': 15,
};

export default function ArchiveEdition() {
  const { year } = useParams();
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  const edition = year ? editionsData[year] : null;
  const poster = year ? posters[year] : null;
  const editionNumber = year ? editionNumbers[year] : null;

  if (!edition && !poster) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Édition non trouvée</h1>
          <Button asChild>
            <Link to="/archives">Retour aux archives</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // If we have no detailed data yet but have a poster, show a minimal page
  if (!edition && poster) {
    return (
      <Layout>
        <section className="relative bg-primary py-16 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <Button asChild variant="ghost" className="text-primary-foreground mb-6 hover:bg-primary-foreground/10">
              <Link to="/archives" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux archives
              </Link>
            </Button>
            <Badge className="bg-accent text-accent-foreground border-0 text-lg px-4 py-1 mb-4">
              {editionNumber === 1 ? '1ère' : `${editionNumber}ème`} édition
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight">
              Édition {year}
            </h1>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 flex justify-center">
            <img src={poster} alt={`Affiche édition ${year}`} className="max-w-md w-full shadow-lg" />
          </div>
        </section>
      </Layout>
    );
  }

  const ordinalLabel = edition!.number === 1 ? '1ère' : `${edition!.number}ème`;

  return (
    <Layout>
      {/* Hero with poster background */}
      <section className="relative bg-primary py-16 lg:py-24 overflow-hidden">
        {poster && (
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(30px) saturate(0.5)',
            }}
          />
        )}
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="text-primary-foreground mb-6 hover:bg-primary-foreground/10">
            <Link to="/archives" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux archives
            </Link>
          </Button>
          <Badge className="bg-accent text-accent-foreground border-0 text-lg px-4 py-1 mb-4 inline-block">
            {ordinalLabel} édition
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight mb-2">
            Édition {edition!.year}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Poster + Palmarès side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Poster */}
          {poster && (
            <div className="lg:col-span-4">
              <img
                src={poster}
                alt={`Affiche ${ordinalLabel} édition - ${edition!.year}`}
                className="w-full shadow-lg border-4 border-border"
              />
            </div>
          )}

          {/* Palmarès */}
          <div className={poster ? 'lg:col-span-8' : 'lg:col-span-12'}>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
              <Trophy className="h-7 w-7 text-accent" />
              Palmarès
            </h2>

            <div className="space-y-3">
              {edition!.palmares.filter(p => p.highlight).map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-card border-2 border-border hover:border-accent transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge className="bg-accent/10 text-accent border-accent/20 mb-2 font-bold uppercase text-xs tracking-wide">
                        <Award className="h-3 w-3 mr-1" />
                        {item.prize}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.film}
                      </h3>
                      <p className="text-muted-foreground">de {item.director}</p>
                    </div>
                    {index === 0 && <Star className="h-8 w-8 text-accent shrink-0 fill-accent" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Finalistes */}
            {edition!.palmares.some(p => !p.highlight) && (
              <div className="mt-8">
                <h3 className="text-lg font-bold uppercase tracking-wide text-muted-foreground mb-4">
                  Finalistes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edition!.palmares.filter(p => !p.highlight).map((item, index) => (
                    <div key={index} className="p-4 bg-muted/50 border border-border">
                      <p className="font-semibold text-foreground">{item.film}</p>
                      <p className="text-sm text-muted-foreground">de {item.director}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Jury */}
        {edition!.jury.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
              <Users className="h-7 w-7 text-accent" />
              Le Jury
            </h2>

            {/* Président(e)s */}
            {edition!.jury.filter(m => m.role === 'Président(e)').length > 0 && (
              <div className="mb-8">
                {edition!.jury.filter(m => m.role === 'Président(e)').map((member, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 bg-card border-2 border-accent mb-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 object-cover border-2 border-border"
                    />
                    <div>
                      <Badge className="bg-accent text-accent-foreground border-0 mb-2 uppercase text-xs tracking-wide font-bold">
                        {edition!.jury.filter(m => m.role === 'Président(e)').length > 1 ? 'Présidents du Jury' : 'Président(e) du Jury'}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Membres */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {edition!.jury.filter(m => m.role === 'Membre').map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="aspect-square overflow-hidden border-2 border-border mb-3 bg-muted">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {edition!.gallery.length > 0 && (
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2 flex items-center gap-3">
              <Camera className="h-7 w-7 text-accent" />
              Galerie photos
            </h2>
            {edition!.galleryCredit && (
              <p className="text-sm text-muted-foreground mb-8">
                Crédit photo : {edition!.galleryCredit}
              </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {edition!.gallery.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxPhoto(photo.src)}
                  className="aspect-[4/3] overflow-hidden border-2 border-border hover:border-accent transition-colors cursor-pointer bg-muted"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxPhoto(null)}
        >
          <img
            src={lightboxPhoto}
            alt="Photo agrandie"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-accent transition-colors"
            onClick={() => setLightboxPhoto(null)}
          >
            ×
          </button>
        </div>
      )}
    </Layout>
  );
}

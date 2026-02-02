import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedFilms } from '@/components/home/FeaturedFilms';
import { JurySection } from '@/components/home/JurySection';
import { PartnersSection } from '@/components/home/PartnersSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedFilms />
      <JurySection />
      <PartnersSection />
    </Layout>
  );
};

export default Index;

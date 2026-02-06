import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedFilms } from '@/components/home/FeaturedFilms';

import { PartnersSection } from '@/components/home/PartnersSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedFilms />
      
      <PartnersSection />
    </Layout>
  );
};

export default Index;

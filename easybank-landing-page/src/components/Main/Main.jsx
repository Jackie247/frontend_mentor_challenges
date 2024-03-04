import React from 'react';
import Hero from '../Hero/Hero';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import ArticlesSection from '../ArticlesSection/ArticlesSection';
import Footer from '../Footer/Footer';

export default function Main() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <ArticlesSection />
      <Footer />
    </main>
  );
}

import React from 'react';
import Hero from '../Hero/Hero';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import ArticlesSection from '../ArticlesSection/ArticlesSection';

export default function Main() {
  return (
    <main className="z-40">
      <Hero />
      <FeaturesSection />
      <ArticlesSection />
    </main>
  );
}

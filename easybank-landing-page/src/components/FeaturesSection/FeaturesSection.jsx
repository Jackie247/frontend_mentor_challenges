import React from 'react';
import Feature from '../Feature/Feature';
import featureData from '../../data/features.json';

export default function FeaturesSection() {
  return (
    <section className="bg-light-grayish-blue py-20">
      <div className="flex flex-col items-center px-2 mb-6">
        <h2 className="text-3xl px-8 text-center">Why choose Easybank?</h2>
        <p className="my-4 text-center text-grayish-blue">
          We leverage Open Banking to turn your bank account into your finanacial hub.
          Control your finances like never before.
        </p>
      </div>

      {
        featureData.map((data) => (
          <Feature
            key={data.id}
            img={data.imgSrc}
            title={data.title}
            description={data.description}
          />
        ))
        }
    </section>
  );
}

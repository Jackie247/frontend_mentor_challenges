import React from 'react';
import Feature from '../Feature/Feature';
import featureData from '../../data/features.json';

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-light-grayish-blue py-20 xl:px-28 xl:py-24">
      <div className="px-2 mb-6 sm:text-start sm:w-[500px]">
        <h2 className="text-3xl px-8 text-center sm:text-left xl:px-6">Why choose Easybank?</h2>
        <p className="my-4 text-center text-grayish-blue sm:text-left sm:px-8 xl:px-6">
          We leverage Open Banking to turn your bank account into your finanacial hub.
          Control your finances like never before.
        </p>
      </div>
      <div className="sm:flex xl:px-6 xl:justify-between">
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
      </div>
    </section>
  );
}

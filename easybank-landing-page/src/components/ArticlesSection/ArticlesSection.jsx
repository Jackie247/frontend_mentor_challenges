import React from 'react';
import Article from '../Article/Article';
import articleData from '../../data/articles.json';

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-14 px-4 bg-very-light-gray xl:px-28">
      <h2 className="text-3xl my-8 text-center xl:text-start xl:px-6">Latest Articles</h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-items-center xl:flex xl:justify-evenly">
        {articleData.map((data) => (
          <Article
            key={data.id}
            img={data.imgSrc}
            author={data.author}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>

    </section>
  );
}

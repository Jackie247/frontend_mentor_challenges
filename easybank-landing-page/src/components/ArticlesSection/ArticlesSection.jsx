import React from 'react';
import Article from '../Article/Article';
import articleData from '../../data/articles.json';

export default function ArticlesSection() {
  return (
    <section className="py-14 px-4 bg-very-light-gray">
      <h2 className="text-3xl my-8 text-center">Latest Articles</h2>
      {articleData.map((data) => (
        <Article
          key={data.id}
          img={data.imgSrc}
          author={data.author}
          title={data.title}
          description={data.description}
        />
      ))}
    </section>
  );
}

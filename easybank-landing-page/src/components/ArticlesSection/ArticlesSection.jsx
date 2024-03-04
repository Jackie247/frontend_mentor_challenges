import React from 'react';
import Article from '../Article/Article';
import articleData from '../../data/articles.json';

export default function ArticlesSection() {
  return (
    <section>
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

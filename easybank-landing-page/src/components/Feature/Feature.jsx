import React from 'react';

export default function Feature({ img, title, description }) {
  return (
    <article className="flex flex-col items-center px-2 my-4 sm:items-start">
      <img className="sm:self-left" src={img} alt="" />
      <span className="my-4 text-xl sm:text-left">{title}</span>
      <p className="text-grayish-blue text-center mb-2 px-2 xl:text-left xl:px-0 xl:text-sm xl:max-w-48">{description}</p>
    </article>
  );
}

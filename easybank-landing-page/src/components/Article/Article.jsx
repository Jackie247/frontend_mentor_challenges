import React from 'react';

export default function Article({
  img, author, title, description,
}) {
  return (
    <article className="flex flex-col items-center px-2 my-4">
      <img src={img} alt="" />
      <span>{author}</span>
      <span className="my-4 text-xl">{title}</span>
      <p className="text-grayish-blue text-center mb-2 px-2">{description}</p>
    </article>
  );
}

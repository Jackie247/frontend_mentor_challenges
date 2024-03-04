import React from 'react';

export default function Article({
  img, author, title, description,
}) {
  return (
    <article className="flex flex-col items-center my-4 bg-white">
      <img className="max-h-48 w-full rounded-tr-md rounded-tl-md" src={img} alt="" />
      <div className="p-6 flex flex-col">
        <span className="text-xs text-grayish-blue">
          {`By ${author}`}
        </span>
        <span className="my-2 text-xl text-dark-blue">{title}</span>
        <p className="text-grayish-blue mb-2">{description}</p>
      </div>
    </article>
  );
}

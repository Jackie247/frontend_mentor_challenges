import React from 'react';

export default function Article({
  img, author, title, description,
}) {
  return (
    <article className="flex flex-col items-center my-4 bg-white sm:my-0 sm:py-4 sm:max-w-96 xl:py-0 xl:rounded">
      <img className="max-h-48 w-full rounded-tr-md rounded-tl-md sm:max-w-80 sm:rounded-none xl:rounded-tr xl:rounded-tl xl:h-64 xl:max-w-96 max-h-72" src={img} alt="" />
      <div className="p-6 flex flex-col sm:px-8">
        <span className="text-xs text-grayish-blue xl:text-md">
          {`By ${author}`}
        </span>
        <span className="my-2 text-xl text-dark-blue xl:text-xl">{title}</span>
        <p className="text-grayish-blue mb-2 xl:text-lg xl:pr-4">{description}</p>
      </div>
    </article>
  );
}

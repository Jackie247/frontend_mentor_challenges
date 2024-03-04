import React from 'react';

export default function Hero() {
  return (
    <section className="pb-20">
      <div>
        <img className="absolute z-10 top-0 -mt-14 px-2" src="/images/image-mockups.png" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="400">
          <defs>
            <linearGradient id="c" x1="0%" x2="99.58%" y1="36.139%" y2="63.745%">
              <stop offset="0%" stopColor="#33D35E" />
              <stop offset="100%" stopColor="#2AB6D9" />
            </linearGradient>
            <filter id="a" width="116.9%" height="158.7%" x="-10.8%" y="-28.8%" filterUnits="objectBoundingBox">
              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="38.5" />
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0" />
            </filter>
            <path id="b" d="M42.46 162.61l70.744 70.76a100 100 0 0070.719 29.298h11.03a100 100 0 0170.719 29.298l75.718 75.736A100 100 0 00412.109 397H633.78c27.507 0 49.805-22.299 49.805-49.805a49.805 49.805 0 00-14.583-35.213l-52.835-52.848c-7.359-7.36-7.357-19.294.003-26.653a18.846 18.846 0 0113.325-5.518c10.408 0 18.846-8.438 18.846-18.846 0-4.997-1.985-9.79-5.518-13.325L534.747 86.691a100 100 0 00-70.72-29.298H352.013a97.948 97.948 0 01-69.267-28.696A97.948 97.948 0 00213.477 0H84.94c-19.435 0-35.19 15.755-35.19 35.19a35.19 35.19 0 0010.304 24.88L77.65 77.669c9.715 9.717 9.713 25.47-.004 35.185a24.88 24.88 0 01-17.59 7.285c-13.742 0-24.88 11.14-24.88 24.88a24.88 24.88 0 007.284 17.59z" />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(-94 -34)">
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill="#2D314D" xlinkHref="#b" />
            <path fill="url(#c)" d="M256.46 163.61l70.744 70.76a100 100 0 0070.719 29.298h11.03a100 100 0 0170.719 29.298l75.718 75.736A100 100 0 00626.109 398H847.78c27.507 0 49.805-22.299 49.805-49.805a49.805 49.805 0 00-14.583-35.213l-52.835-52.848c-7.359-7.36-7.357-19.294.003-26.653a18.846 18.846 0 0113.325-5.518c10.408 0 18.846-8.438 18.846-18.846 0-4.997-1.985-9.79-5.518-13.325L748.747 87.691a100 100 0 00-70.72-29.298H566.013a97.948 97.948 0 01-69.267-28.696A97.948 97.948 0 00427.477 1H298.94c-19.435 0-35.19 15.755-35.19 35.19a35.19 35.19 0 0010.304 24.88l17.595 17.599c9.715 9.717 9.713 25.47-.004 35.185a24.88 24.88 0 01-17.59 7.285c-13.742 0-24.88 11.14-24.88 24.88a24.88 24.88 0 007.284 17.59z" />
          </g>
        </svg>
      </div>
      <div>
        <h1 className="text-4xl text-center">Next generation digital banking</h1>
        <p className="my-6 text-center text-grayish-blue">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending,saving, budgeting, investing, and much more.
        </p>
        <div className="flex justify-center">
          <button className="gradient-background p-2 px-6 rounded-full" type="button"> Request invite </button>
        </div>
      </div>
    </section>
  );
}

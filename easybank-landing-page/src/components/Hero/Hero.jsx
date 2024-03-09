import React from 'react';

export default function Hero() {
  return (
    <section className="pb-20 sm:pb-0 sm:relative sm:py-10 lg:py-18">
      {/* SVG CONTAINERS */}
      <div>
        {/* MOBILE HERO */}
        <img className="absolute z-10 top-0 -mt-14 px-2 min-h-[450px] max-h-[450px] w-full sm:min-h-[500px] sm:max-h-[500px] sm:w-1/2 sm:right-0 xl:max-h-[900px] xl:max-w-[600px]" src="/images/image-mockups.png" alt="" />
        <svg className="w-full sm:hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="400">
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
        {/* TABLET HERO */}
        <svg className="hidden sm:block sm:absolute lg:hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1271" height="1034">
          <defs>
            <linearGradient id="c" x1="0%" x2="99.58%" y1="36.147%" y2="63.736%">
              <stop offset="0%" stopColor="#33D35E" />
              <stop offset="100%" stopColor="#2AB6D9" />
            </linearGradient>
            <filter id="a" width="104.9%" height="135.9%" x="-4.8%" y="-17.6%" filterUnits="objectBoundingBox">
              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="38.5" />
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0" />
            </filter>
            <path id="b" d="M69.445 572.84L203.73 707.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L855.85 430.11a100 100 0 00-70.708-29.287H550.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z" />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(400, 0)">
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill="#2D314D" xlinkHref="#b" />
            <path fill="url(#c)" d="M207.445 265.84L341.73 400.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L993.85 123.11a100 100 0 00-70.708-29.287H688.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z" />
          </g>
        </svg>
        <svg className="hidden sm:block sm:absolute lg:hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1271" height="1034">
          <defs>
            <linearGradient id="c" x1="0%" x2="99.58%" y1="36.147%" y2="63.736%">
              <stop offset="0%" stopColor="#33D35E" />
              <stop offset="100%" stopColor="#2AB6D9" />
            </linearGradient>
            <filter id="a" width="104.9%" height="135.9%" x="-4.8%" y="-17.6%" filterUnits="objectBoundingBox">
              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="38.5" />
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0" />
            </filter>
            <path id="b" d="M69.445 572.84L203.73 707.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L855.85 430.11a100 100 0 00-70.708-29.287H550.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z" />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(550, -100)">
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill="#38AD57" xlinkHref="#b" />
            <path fill="url(#c)" d="M207.445 265.84L341.73 400.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L993.85 123.11a100 100 0 00-70.708-29.287H688.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z" />
          </g>
        </svg>
        {/* DESKTOP HERO */}
        <svg className="hidden sm:block sm:absolute sm:hidden lg:block lg:right-0 lg:scale-125" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1271" height="1034">
          <defs>
            <linearGradient id="c" x1="0%" x2="99.58%" y1="36.147%" y2="63.736%">
              <stop offset="0%" stopColor="#33D35E" />
              <stop offset="100%" stopColor="#2AB6D9" />
            </linearGradient>
            <filter id="a" width="104.9%" height="135.9%" x="-4.8%" y="-17.6%" filterUnits="objectBoundingBox">
              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="38.5" />
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0" />
            </filter>
            <path id="b" d="M69.445 572.84 203.73 707.112a100 100 0 0 0 70.708 29.286h70.693a100 100 0 0 1 70.708 29.287l161.04 161.027A100 100 0 0 0 647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 0 0-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0 1 21.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 0 0-9.025-21.788L855.85 430.11a100 100 0 0 0-70.708-29.287H550.7a100 100 0 0 1-70.708-29.287l-35.253-35.25A100 100 0 0 0 374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0 0 16.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 0 1-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0 0 11.915 28.764z" />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(575, 150)">
            <use xlinkHref="#b" fill="#000" filter="url(#a)" />
            <use xlinkHref="#b" fill="#2D314D" />
            <path fill="url(#c)" d="M207.445 265.84 341.73 400.112a100 100 0 0 0 70.708 29.286h70.693a100 100 0 0 1 70.708 29.287l161.04 161.027A100 100 0 0 0 785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 0 0-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0 1 21.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 0 0-9.025-21.788L993.85 123.11a100 100 0 0 0-70.708-29.287H688.7a100 100 0 0 1-70.708-29.287l-35.253-35.25A100 100 0 0 0 512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0 0 16.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 0 1-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0 0 11.915 28.764z" />
          </g>
        </svg>
        <svg className="hidden sm:block sm:absolute sm:hidden lg:block lg:right-0 lg:scale-125" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1271" height="1034">
          <defs>
            <linearGradient id="c" x1="0%" x2="99.58%" y1="36.147%" y2="63.736%">
              <stop offset="0%" stopColor="#33D35E" />
              <stop offset="100%" stopColor="#2AB6D9" />
            </linearGradient>
            <filter id="a" width="104.9%" height="135.9%" x="-4.8%" y="-17.6%" filterUnits="objectBoundingBox">
              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="38.5" />
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0" />
            </filter>
            <path id="b" d="M69.445 572.84 203.73 707.112a100 100 0 0 0 70.708 29.286h70.693a100 100 0 0 1 70.708 29.287l161.04 161.027A100 100 0 0 0 647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 0 0-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0 1 21.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 0 0-9.025-21.788L855.85 430.11a100 100 0 0 0-70.708-29.287H550.7a100 100 0 0 1-70.708-29.287l-35.253-35.25A100 100 0 0 0 374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0 0 16.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 0 1-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0 0 11.915 28.764z" />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(675, 0)">
            <use xlinkHref="#b" fill="#000" filter="url(#a)" />
            <use xlinkHref="#b" fill="#38AD57" />
            <path fill="url(#c)" d="M207.445 265.84 341.73 400.112a100 100 0 0 0 70.708 29.286h70.693a100 100 0 0 1 70.708 29.287l161.04 161.027A100 100 0 0 0 785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 0 0-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0 1 21.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 0 0-9.025-21.788L993.85 123.11a100 100 0 0 0-70.708-29.287H688.7a100 100 0 0 1-70.708-29.287l-35.253-35.25A100 100 0 0 0 512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0 0 16.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 0 1-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0 0 11.915 28.764z" />
          </g>
        </svg>
      </div>

      {/* HERO TEXT */}
      <div className="sm:bg-very-light-gray xl:px-20 xl:py-32 ">
        <div className="sm:w-[500px] sm:p-16 md:max-w-[800px] xl:w-[1200px]">
          <h1 className="text-4xl text-center sm:text-left sm:text-4xl xl:text-5xl">Next generation digital banking</h1>
          <p className="my-6 text-center text-grayish-blue sm:text-left sm:text-md xl:text-lg xl:max-w-[400px]">
            Take your financial life online. Your Easybank account will be a one-stop-shop for
            spending,saving, budgeting, investing, and much more.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="gradient-background p-2 px-6 rounded-full" type="button"> Request invite </button>
          </div>
        </div>
      </div>
    </section>
  );
}

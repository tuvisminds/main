import React from "react";

/*
 * TuvisMinds logo — "Tuvis" (Sanskrit: growth) rendered as a minimal
 * sprout mark on a navy tile, with a plain-type wordmark.
 */
export const Logo = ({ withTagline = false }: { withTagline?: boolean }) => {
  return (
    <span className="flex items-center space-x-3">
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-10 w-10 flex-shrink-0"
      >
        <defs>
          <linearGradient id="tm-leaf" x1="10" y1="34" x2="38" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1899a8" />
            <stop offset="1" stopColor="#9ccb46" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="#16243d" />
        {/* stem */}
        <path
          d="M24 40V24"
          stroke="url(#tm-leaf)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* left leaf */}
        <path
          d="M24 27c-7.2 0-13-5.8-13-13 7.2 0 13 5.8 13 13Z"
          fill="url(#tm-leaf)"
        />
        {/* right leaf */}
        <path
          d="M24 21c0-6 4.8-10.8 10.8-10.8 0 6-4.8 10.8-10.8 10.8Z"
          fill="#2bb9c7"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-2xl font-extrabold tracking-tight">
          <span className="text-minds-navy dark:text-white">Tuvis</span>
          <span className="text-tuvis-teal dark:text-tuvis-cyan">Minds</span>
        </span>
        {withTagline && (
          <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500">
            Growth, by design
          </span>
        )}
      </span>
    </span>
  );
};

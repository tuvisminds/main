import React from "react";

/*
 * Abstract hero artwork: an ascending path of connected nodes (growth,
 * minds) over a navy field with concentric arcs — replaces stock imagery.
 */
export const HeroVisual = () => {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract illustration of connected growth"
      className="w-full max-w-[560px] h-auto rounded-2xl shadow-2xl"
    >
      <defs>
        <linearGradient id="hv-bg" x1="0" y1="560" x2="560" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d1830" />
          <stop offset="1" stopColor="#1d3252" />
        </linearGradient>
        <linearGradient id="hv-line" x1="80" y1="470" x2="480" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1899a8" />
          <stop offset="0.7" stopColor="#2bb9c7" />
          <stop offset="1" stopColor="#9ccb46" />
        </linearGradient>
        <radialGradient id="hv-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#2bb9c7" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2bb9c7" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="560" rx="24" fill="url(#hv-bg)" />

      {/* faint grid */}
      <g stroke="#ffffff" strokeOpacity="0.05">
        {[80, 160, 240, 320, 400, 480].map((x) => (
          <line key={`v${x}`} x1={x} y1="40" x2={x} y2="520" />
        ))}
        {[120, 200, 280, 360, 440].map((y) => (
          <line key={`h${y}`} x1="40" y1={y} x2="520" y2={y} />
        ))}
      </g>

      {/* concentric arcs, bottom left */}
      <g stroke="#2bb9c7" strokeOpacity="0.18" fill="none">
        <circle cx="120" cy="470" r="60" />
        <circle cx="120" cy="470" r="100" />
        <circle cx="120" cy="470" r="140" />
        <circle cx="120" cy="470" r="180" strokeOpacity="0.1" />
      </g>

      {/* soft glow behind apex */}
      <circle cx="440" cy="150" r="130" fill="url(#hv-glow)" />

      {/* ascending connected path */}
      <path
        d="M90 460 L180 400 L250 420 L330 310 L390 330 L470 160"
        stroke="url(#hv-line)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* area fill under path */}
      <path
        d="M90 460 L180 400 L250 420 L330 310 L390 330 L470 160 L470 500 L90 500 Z"
        fill="url(#hv-line)"
        opacity="0.08"
      />

      {/* nodes */}
      {[
        [90, 460, 6, "#1899a8"],
        [180, 400, 7, "#1899a8"],
        [250, 420, 6, "#2bb9c7"],
        [330, 310, 8, "#2bb9c7"],
        [390, 330, 6, "#2bb9c7"],
      ].map(([cx, cy, r, c], i) => (
        <g key={i}>
          <circle cx={Number(cx)} cy={Number(cy)} r={Number(r) + 6} fill={String(c)} opacity="0.18" />
          <circle cx={Number(cx)} cy={Number(cy)} r={Number(r)} fill={String(c)} />
        </g>
      ))}

      {/* apex: sprout node */}
      <circle cx="470" cy="160" r="22" fill="#16243d" stroke="#2bb9c7" strokeWidth="2" />
      <path d="M470 172v-9" stroke="#9ccb46" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M470 164c-4.6 0-8.3-3.7-8.3-8.3 4.6 0 8.3 3.7 8.3 8.3Z" fill="#9ccb46" />
      <path d="M470 160.5c0-3.8 3.1-6.9 6.9-6.9 0 3.8-3.1 6.9-6.9 6.9Z" fill="#2bb9c7" />

      {/* caption chips */}
      <g fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="600">
        <rect x="72" y="66" width="168" height="34" rx="17" fill="#ffffff" fillOpacity="0.07" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="94" cy="83" r="4" fill="#9ccb46" />
        <text x="106" y="88" fill="#e6eef8">Purposeful ventures</text>

        <rect x="300" y="470" width="152" height="34" rx="17" fill="#ffffff" fillOpacity="0.07" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="322" cy="487" r="4" fill="#2bb9c7" />
        <text x="334" y="492" fill="#e6eef8">Accountable AI</text>
      </g>
    </svg>
  );
};

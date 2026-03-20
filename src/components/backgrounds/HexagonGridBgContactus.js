import React from "react";

function HexagonGridBgContactus() {
  return (
    <section
      className="relative w-full py-20 px-6 flex items-center justify-center overflow-hidden mt-10"
      style={{
        background: `linear-gradient(
          to bottom,
          #0b0c10,
           rgba(142, 143, 55, 0.1),
          #0b0c10
        )`,
      }}
    >
   
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexPattern"
            width="100"
            height="87"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="50,0 100,25 100,62 50,87 0,62 0,25"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,215,0,0.2)" 
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>

    
      <div className="relative z-10 max-w-7xl w-full">
      
        <div className="">
      
          <div className="rounded-xl bg-white/10 backdrop-blur-sm shadow-xl p-6 text-white hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Casting Operations (Mumbai)
            </h3>
            <p className="text-sm mb-1">
              Sea View Side, Shiv Galli, Versova, Mumbai - 400061
            </p>
            <p className="text-xs text-gray-400 italic mb-2">(Internal Team Only: No Artist Walk-ins)</p>
            <p className="text-sm mb-4">
              <a
                href="mailto:castingjeevan@gmail.com"
                className="hover:text-[var(--brand-secondary)] transition"
              >
                📧 castingjeevan@gmail.com
              </a>
            </p>
            <div className="rounded-lg overflow-hidden shadow-md h-56">
              <iframe
                title="Versova Mumbai Map"
                src="https://maps.google.com/maps?q=19.1334,72.8167&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="eager"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HexagonGridBgContactus;

import React, { useState } from "react";
import ContactUsModal from "../../screens/ContactUsModal";

function Stat({ label, value, suffix = "+", duration = 1500 }) {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / value));
    const timer = setInterval(() => {
      start += 1;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--card-background)] backdrop-blur-md px-5 py-6 shadow-lg">
      <div className="text-4xl md:text-5xl font-extrabold text-white tabular-nums">
        {count}
        <span className="text-[var(--brand-secondary)]">{suffix}</span>
      </div>
      <div className="mt-2 text-sm md:text-base text-white/70">{label}</div>
    </div>
  );
}

function HexagonGridBgHome() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(
          to bottom,
          #0b0c10,               
          rgba(142, 143, 55, 0.1),
          #0b0c10               
        )`,
      }}
    >
      {/* Hexagon Pattern Background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hexPattern" width="100" height="87" patternUnits="userSpaceOnUse">
            <polygon
              points="50,0 100,25 100,62 50,87 0,62 0,25"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,215,0,0.2)" // goldish theme
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
         Every Superstar Was Once a Fresh Face
        </h2>
        <p className="mt-3 md:mt-4 text-sm md:text-lg text-white/80 max-w-3xl mx-auto">
          A dedicated platform for professional talent acquisition. We connect fresh faces with major film and commercial projects through a streamlined scouting process. Submit your profile for active project shortlisting
        </p>

        <button
          onClick={() => setOpen(true)}
          className="group mt-4 inline-flex items-center gap-2 rounded-sm px-5 py-2 bg-[var(--brand-secondary)] text-black font-semibold hover:bg-brand-secondary-hover hover:translate-y-[-1px] transition"
        >
          Submit Your Profile
        </button>

        {/* Stats Grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Stat label="Talent Profiles" value={100} suffix="K+" duration={1600} />
          <Stat label="Projects Completed" value={200} suffix="+" duration={1700} />
          <Stat label="Auditions Held" value={500} suffix="K+" duration={1800} />
          <Stat label="Success Rate" value={95} suffix="%" duration={2000} />
        </div>
      </div>

      <ContactUsModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default HexagonGridBgHome;

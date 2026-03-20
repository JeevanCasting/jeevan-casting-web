import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
function HexagonGridBgAbout() {
  const [projects, setProjects] = useState(0);
  const [talentNetwork, setTalentNetwork] = useState(0);
  const [team, setTeam] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let projectsTarget = 120;
    let clientsTarget = 100;
    let countriesTarget = 20;

    let interval = setInterval(() => {
      setProjects((p) => (p < projectsTarget ? p + 2 : projectsTarget));
      setTalentNetwork((c) => (c < clientsTarget ? c + 1 : clientsTarget));
      setTeam((ct) => (ct < countriesTarget ? ct + 1 : countriesTarget));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
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
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,215,0,0.2)"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-12">
        {/* Left side text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About Our Mission
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Our mission is to eliminate the chaos of casting by providing a
            streamlined and transparent bridge between visionary filmmakers and
            authentic talent. We are dedicated to making the search for the
            'Perfect Face' faster and more efficient, ensuring every script gets
            the soul it deserves.
          </p>
          <div>
              <Link to="/submit-profile"
              className="group mt-4 inline-flex items-center gap-2 rounded-sm px-5 py-2 bg-[var(--brand-secondary)] text-black font-semibold  hover:bg-brand-secondary-hover  hover:translate-y-[-1px] transition"
            >
              Join Us
              </Link>

          </div>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="grid grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[var(--brand-secondary)]">
                {projects}+
              </h2>
              <p className="mt-1 text-sm">Projects Completed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[var(--brand-secondary)]">
                {talentNetwork}K+
              </h2>
              <p className="mt-1 text-sm">Talent Network</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[var(--brand-secondary)]">
                {team}+
              </h2>
              <p className="mt-1 text-sm">Dedicated Team</p>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-white text-lg">
            <li>✔ Expert Casting Solutions</li>
            <li>✔ Pan-India Talent Scouting</li>
            <li>✔ Professional Acting Workshops</li>
            <li>✔ Influencer & Creator Casting</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HexagonGridBgAbout;

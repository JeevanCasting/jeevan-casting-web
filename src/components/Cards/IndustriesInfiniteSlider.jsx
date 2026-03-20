import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

const industries = [
  { name: "Bollywood Films", icon: "🎬" },
  { name: "Regional Cinema", icon: "🎭" },
  { name: "OTT Platforms", icon: "📺" },
  { name: "TV Serials", icon: "📻" },
  { name: "Web Series", icon: "💻" },
  { name: "Advertisements", icon: "📢" },
];

export default function IndustriesInfiniteSlider() {
  const [offsetX, setOffsetX] = useState(0);
  const speed = 0.1; // px per frame approx
  const cardWidth = 120; // approximate card width in px + gap if any
  const gap = 32; // gap between cards (Tailwind gap-8 is 2rem = 32px)
  const totalWidth = industries.length * (cardWidth + gap);

  useAnimationFrame((_, delta) => {
    setOffsetX((prev) => {
      let newX = prev - speed * delta;
      if (Math.abs(newX) > totalWidth) {
        return 0; // reset to start seamless loop
      }
      return newX;
    });
  });

  // Duplicate industries array for seamless loop
  const repeatedIndustries = [...industries, ...industries];

  return (
    <div className="py-16 bg-black/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Platforms We Cast For
        </h2>
        <motion.div
          style={{ transform: `translateX(${offsetX}px)` }}
          className="flex space-x-8"
        >
          {repeatedIndustries.map((industry, index) => (
            <div
              key={index}
              className="relative text-center cursor-pointer w-30 min-w-[120px] flex-shrink-0"
            >
              <div className="w-20 h-20 bg-white/10 shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[var(--brand-secondary-hover)] ring-2 ring-white/10 backdrop-blur-md transition-colors duration-300">
                <span className="text-4xl">{industry.icon}</span>
              </div>
              <h3 className="text-white font-medium text-base">
                {industry.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

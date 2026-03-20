import React from "react";
import { motion } from "framer-motion";
import centerImage from "../../assests/projectImages/ad1cent.jpg";
import tlImage from "../../assests/projectImages/ad1tl.jpg";
import trImage from "../../assests/projectImages/ad1tr.jpg";
import brImage from "../../assests/projectImages/ad1br.png";

const Project1Images = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
      className="w-full flex justify-center items-center overflow-hidden"
    >
      {/* SCALE WRAPPER */}
      <div
        className="
          origin-center
          will-change-transform
          scale-[0.65]
          sm:scale-[0.75]
          md:scale-[0.9]
          lg:scale-100
          transition-transform duration-300
        "
      >
        {/* MAIN CANVAS */}
        <div className="relative w-[900px] h-[520px] mx-auto">
          {/* Main Image */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       border border-[var(--brand-secondary)] z-20
                       w-[420px] h-[260px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src={centerImage}
              alt="Main Project"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/800x600/38bdf8/ffffff?text=Main";
              }}
            />
          </div>

          {/* Top Left */}
          <div
            className="absolute top-[70px] left-[160px] lg:left-[140px]
                       border border-[var(--brand-secondary)] z-50
                       h-[200px] w-[160px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src={tlImage}
              alt="Top Left"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right */}
          <div
            className="absolute bottom-[60px] lg:right-[160px] right-[170px]
                       border border-[var(--brand-secondary)] z-20
                       w-[240px] h-[150px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src={brImage}
              alt="Bottom Right"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

           {/* top right */}
          <div
            className="absolute top-[60px] lg:right-[150px] right-[170px]
                       border border-[var(--brand-secondary)] z-30
                      h-[180px] w-[140px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src={trImage}
              alt="Extra"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project1Images;

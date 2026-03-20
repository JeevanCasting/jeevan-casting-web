import React from "react";
import { motion } from "framer-motion";

function HoverFlipCard({
  index,
  name,
  role,
  description,
  backText,
  image,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      style={{ perspective: "1400px" }}
      className="group mt-20 w-full max-w-xs mx-auto aspect-[3/4] relative"
    >
      {/* CARD WRAPPER */}
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* ---------------- FRONT ---------------- */}

        <div className="
          absolute inset-0
          [backface-visibility:hidden]
          flex flex-col items-center justify-center
          px-6
          border border-yellow-400/20
          bg-gradient-to-br from-yellow-400/10 via-black/70 to-black
          backdrop-blur-2xl
          shadow-[0_0_60px_rgba(255,215,0,0.15)]
          rounded-md
        ">

          {/* Glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),transparent_60%)] opacity-60"></div>

          {/* Image */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="
              w-32 h-48
              bg-black
              rounded-sm
              overflow-hidden
              shadow-[0_0_35px_rgba(255,215,0,0.45)]
              relative
            ">
              {/* LEFT FILM HOLES */}
              <div className="absolute left-0 top-0 w-3 h-full flex flex-col justify-around items-center bg-black z-10">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-zinc-800 rounded-sm"></div>
                ))}
              </div>

              {/* RIGHT FILM HOLES */}
              <div className="absolute right-0 top-0 w-3 h-full flex flex-col justify-around items-center bg-black z-10">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-zinc-800 rounded-sm"></div>
                ))}
              </div>

              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="mt-20 text-center z-10">
            <h2 className="text-2xl font-bold tracking-wide text-yellow-300">
              {name}
            </h2>

            <p className="mt-1 text-sm text-yellow-100/80 uppercase tracking-widest">
              {role}
            </p>

            <div className="w-12 h-[2px] bg-yellow-400 mx-auto my-4"></div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* ---------------- BACK ---------------- */}

        <div className="
          absolute inset-0
          [transform:rotateY(180deg)]
          [backface-visibility:hidden]
          flex flex-col justify-center
          px-8 text-center
          border border-yellow-400/20
          bg-gradient-to-br from-black via-black to-yellow-400/10
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(255,215,0,0.18)]
          rounded-md
        ">
          <h2 className="text-2xl font-bold text-yellow-300">
            About {name}
          </h2>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto my-4"></div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {backText}
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Trusted for{" "}
            <span className="text-yellow-300 font-semibold">
              professionalism, range, and camera confidence.
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default HoverFlipCard;

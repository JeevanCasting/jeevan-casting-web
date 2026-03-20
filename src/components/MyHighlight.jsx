import React from "react";
import { motion } from "framer-motion";

const MyHighlight = () => {
  return (
    <section
      style={{
        backgroundImage: "url('./reelRoll.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor: "#0b0b0b00", // important for multiply
      }}
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dark overlay for cinematic feel */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Owner Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
       className="
  flex-shrink-0
  w-60 h-60
  sm:w-72 sm:h-72
  lg:w-80 lg:h-80
  rounded-full
  border
  border-[var(--brand-secondary)]
  border-2
  overflow-hidden
  drop-shadow-[0_0_20px_rgba(255,248,41,0.85)]
  hover:drop-shadow-[0_0_40px_rgba(255,248,41,0.55)]
  transition-all
  duration-500
"

        >
          <img
            src="/jeevan.png"
            alt="Owner Abhishek Kumar Jeevan"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--brand-secondary)]">
            Jeevan
          </h2>

          <p className="mt-2 text-lg sm:text-xl text-white font-semibold">
            Founder & Casting Director
          </p>

          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Led by{" "}
            <span className="text-[var(--brand-secondary)] font-semibold">
              Founder and Casting Director Abhishek Kumar (Jeevan),
            </span>
           {" "}Jeevan Casting serves as a professional and transparent bridge in the filmmaking world, connecting visionary filmmakers with a diverse network of emerging and seasoned talent across India. We are dedicated to bringing every project’s vision to life through end-to-end casting solutions, fresh talent discovery, and professional acting workshops.

          </p>

          <button
            className="
            mt-6
            inline-flex
            items-center
            justify-center
            px-7 py-3
            rounded-sm
            bg-[var(--brand-secondary)]
            text-black
            font-semibold
            shadow-[0_0_30px_rgba(255,248,41,0.35)]
            hover:bg-[var(--brand-secondary-hover)]
            hover:scale-105
            transition
            duration-300
          "
          >
            More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MyHighlight;

import React from "react";
import Project1Images from "../components/Cards/Project1Images";
import BouncyText from "../components/BouncyText";
import HexagonGridBgHome from "../components/backgrounds/HexagonGridBgHome";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import MyHighlight from "../components/MyHighlight";
import OrbitReels from "../components/OrbitReels";
import ServicesCarousel1 from "../components/Cards/ServicesCarousel1";
import Project2Images from "../components/Cards/Project2Images";
import { Link } from "react-router-dom";
import FlippingCardCarousel from "../components/Cards/FlippingCardCarousel";

function Home() {
  return (
    <div className="bg-[var(--brand-primary)] overflow-x-hidden lg:pt-0">
      {/* HERO SECTION */}
      <div className="relative flex justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        >
          <source src="/aivideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative w-full max-w-7xl p-4 sm:p-6 lg:p-10 pb-20 flex flex-col lg:flex-row items-center gap-10 z-10">
          <div className="flex-1 pt-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl xl:text-5xl font-extrabold tracking-tight text-white break-words">
              Jeevan Casting Company — The Center of Refined Talent.
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-300 break-words">
              by <span className="text-white/90">Jeevan Casting</span> —
              Bollywood • Films • Web Series • Ads
            </p>
            <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-[var(--brand-secondary)] break-words">
              Pan-India Discovery.
              <span className="text-white"> Precision Casting.</span> Aligning
              Every
              <span className="text-white"> Talent</span> with the Director's
              Vision.
            </p>
            <p className="mt-5 text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto lg:mx-0 break-words">
              Jeevan Casting simplifies the journey between
              <span className="text-white font-semibold ml-1">
                talent and filmmakers.
              </span>{" "}
              With our Pan-India network,
              <span className="text-white font-semibold">
                {" "}
                we scout fresh faces and seasoned actors
              </span>{" "}
              for films, web series, and ads. From end-to-end casting support to
              professional workshops led by industry experts, we ensure every
              artist is camera-ready and every project finds its perfect fit.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/submit-profile"
                className="rounded-sm px-6 py-3 bg-[var(--brand-secondary)] text-black font-semibold shadow hover:opacity-90 transition"
              >
                Submit Your Profile
              </Link>
              <a
                href="/contact"
                className="rounded-sm px-5 py-3 border border-white/20 text-white hover:bg-white/5 transition"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md px-4"></div>

        <div className="relative z-20 text-white text-center w-full">
          <MyHighlight />
          <div className="max-w-8xl mx-auto sm:px-6 lg:px-16 pb-16">
            <div className="my-10">
              <BouncyText
                text="What We do ?"
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold"
              />
            </div>
            <ServicesCarousel1 />
             <div className="my-10">
              <BouncyText
                text="Celebrities We Worked With"
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold"
              />
            </div>
             <FlippingCardCarousel/>
            <div className="my-10">
              <BouncyText
                text="A Glimpse of Our Work"
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold"
              />
            </div>

            {/* PROJECT 1 */}
            <div className="mt-12 flex flex-col lg:flex-row items-center gap-12 mx-auto">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Project1Images />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Ad Casting : Bandhan Mutual Fund 1947
                </h1>
                <p className="mt-2 text-gray-400 text-sm">Date: 2024-25</p>
                <p className="mt-5 text-sm sm:text-base text-slate-300 break-words">
                  Acting as a strategic partner to the director, we transformed
                  a grand period vision into reality through nationwide talent
                  scouting.{" "}
                  <span className="text-white font-semibold">
                    Curating fresh and expressive faces,
                  </span>{" "}
                  we delivered a seamless and time-efficient casting process,
                  bringing{" "}
                  <span className="text-white font-semibold">
                    authenticity and emotional depth
                  </span>{" "}
                  to this patriotic narrative.
                </p>
                <a
                  href="https://www.instagram.com/reel/DNTHI9UO8lF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 rounded-sm px-5 py-2 bg-[var(--brand-secondary)] text-black font-semibold hover:bg-brand-secondary-hover hover:translate-y-[-1px] transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="mt-16 flex flex-col lg:flex-row-reverse items-center gap-12 mx-auto mb-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Project2Images />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Ad Casting : JK Super Cement
                </h1>
                <p className="mt-2 text-gray-400 text-sm">Date: 2025-26</p>
                <p className="mt-5 text-sm sm:text-base text-slate-300 break-words">
                  Solid casting for a solid brand. For JK Super Cement, we
                  transformed the creative brief into a carefully curated lineup
                  of authentic and expressive talent.{" "}
                  <span className="text-white font-semibold">
                    Guided by precision scouting and a deep alignment with the
                    director's vision,
                  </span>{" "}
                  we assembled a cast that truly reflects{" "}
                  <span className="text-white font-semibold">
                    strength, credibility, and excellence.
                  </span>
                </p>
                <a
                  href="https://www.instagram.com/reel/DR4fiADjsay/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 rounded-sm px-5 py-2 bg-[var(--brand-secondary)] text-black font-semibold hover:bg-brand-secondary-hover hover:translate-y-[-1px] transition"
                >
                  View Project
                </a>
              </div>
            </div>

            <OrbitReels />
          </div>
        </div>
      </section>

      <section className="relative">
        <HexagonGridBgHome />
      </section>
    </div>
  );
}

export default Home;

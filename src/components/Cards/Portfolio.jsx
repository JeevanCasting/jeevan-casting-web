import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Talent Discovery & Scouting",
    description:
      "We conduct nationwide scouting to discover a diverse range of fresh talent and experienced performers. Our approach is tailored to the script's demands, ensuring excellence in every cast through a modern, 360-degree scouting process",
     pointSections: [{
      heading: "Our Talent Sources",
       points: [
      {
        name: "Elite Database:",
        desc: "Direct access to Celebrity, Known, and Semi-Known actors for high-impact roles.",
      },
      {
        name: "The Best Trained Talent:",
        desc: "A rigorous selection of professionally trained actors from top institutes and theater backgrounds.",
      },
      {
        name: "Fresh Face Discovery:",
        desc: "Constantly identifying new talent to bring a fresh perspective to the screen.",
      },
      {
        name: "Real-Life Personalities (Non-Actors):",
        desc: "Sourcing authentic individuals to provide a raw, natural feel to realistic cinema and ad films.",
      },
       {
        name: "Digital Influencers:",
        desc: "ntegrating influencers and digital creators to maximize reach and trend-driven engagement.",
      },
       {
        name: "Pan-India Network:",
        desc: "While we are deeply rooted in Mumbai, our scouting network extends across India to find the perfect cultural and linguistic match for your script.",
      },
    ],}],
    category: "Talent Acquisition",
    image:
      "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Casting Direction & Services",
    subtitle: "Precision | Speed | End-to-End Excellence",
    description:
      "Jeevan Casting delivers expert, comprehensive casting solutions tailored for Feature Films, OTT Series, and High-Impact Commercials. We understand that in the fast-paced world of production, timing is as critical as the talent itself. Our agency specializes in a research-driven approach, ensuring every character is more than just a face—they are a perfect performance match.",
     pointSections: [{
      heading: "",
      points: [
      { name: "Strategic Research:", desc: "We dive deep into the script to understand the nuances of every role." },
      { name: "Rapid Turnaround:", desc: "Optimized for the ad world, we provide high-quality shortlisting within the tightest deadlines." },
      { name: "Complete Process Management:", desc: "From initial brief and scouting to screen tests, final shortlisting, and contract coordination." },
      { name: "Diverse Talent Pool:", desc: "Instant access to a curated network of established stars, trained actors, and fresh discoveries." },
    ],},],
    category: "Casting Direction",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Artist Development & Workshops",
    subtitle: "Transforming Talent into Professionals",
    description:
      "A great performance is built on preparation. At Jeevan Casting, we don't just find talent; we nurture it. Our specialized Acting, Camera, and Casting Workshops are designed to bridge the gap between 'aspiring' and 'professional'. Led by the industry's finest trainers, we ensure every artist—from kids to adults—is equipped to handle the pressure of a real set with confidence.",
    pointSections: [
      {
        heading: "Our Training Expertise",
        points: [
          { name: "Acting & Performance Mastery:", desc: "Focus on emotional range, dialogue delivery, and character building led by seasoned trainers." },
          { name: "Specialized Casting Workshops:", desc: "Exclusive sessions that teach you how to decode a character brief and what casting directors actually look for." },
          { name: "Camera & Technical Comfort:", desc: "Real-time workshops to help actors understand camera angles, lighting, and hit their marks with precision." },
          { name: "Kids' Special Program:", desc: "Nurturing young talent in a fun yet professional environment to build confidence for ads and films." },
          { name: "Audition Techniques:", desc: "Specialized modules on mastering self-tapes, slate/intro videos, and cracking live auditions." },
        ],
      },
      {
        heading: "Key Benefits of Our Workshops",
        points: [
          { name: "Direct Industry Insight:", desc: "Gain a professional understanding of how the casting process works in Bollywood and the Ad world." },
          { name: "Performance Polishing:", desc: "Get personalized feedback to improve your body language and on-camera presence." },
          { name: "Audition Ready:", desc: "Walk away with the skills to create professional-grade self-tapes that get noticed." },
          { name: "Professional Networking:", desc: "Get a chance to be in the direct database of Jeevan Casting for upcoming prestigious projects." },
          { name: "Confidence Building:", desc: "Overcome camera shyness and performance anxiety through regular mock-audition sessions." },
        ],
      },
    ],
    category: "Artist Development",
    image:
      "https://images.unsplash.com/photo-1570834322056-ba3e2994ab85?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Single = ({ item, index }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const [showMore, setShowMore] = useState(false);

  const isOdd = index % 2 != 0;

  return (
    <section className="h-auto md:h-[80vh] flex items-center justify-center px-4 py-4 md:py-0">
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1366px] w-full ${
          !isOdd ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          ref={ref}
          style={{
            y: typeof window !== "undefined" && window.innerWidth > 768 ? y : 0,
          }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            {/* LEFT film holes */}
            <div className="absolute -left-6 top-0 h-full hidden border border-[var(--brand-secondary-hover)] p-1 sm:flex flex-col justify-between py-3">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-8 bg-[var(--brand-secondary)] rounded-sm opacity-80 shadow-[0_0_8px_rgba(255,248,41,0.6)]"
                />
              ))}
            </div>

            {/* RIGHT film holes */}
            <div className="absolute -right-6 top-0 h-full hidden border border-[var(--brand-secondary-hover)] p-1 sm:flex flex-col justify-between py-3">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-8 bg-[var(--brand-secondary)] rounded-sm opacity-80 shadow-[0_0_8px_rgba(255,248,41,0.6)]"
                />
              ))}
            </div>

            {/* IMAGE FRAME */}
            <div
              className="
        relative
        overflow-hidden
        bg-black
        rounded-sm
        border border-white/10
        shadow-[0_0_40px_rgba(255,248,41,0.15)]
        group-hover:shadow-[0_0_80px_rgba(255,248,41,0.35)]
        transition-all
        duration-500
      "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
          w-full
          max-w-[520px]
          aspect-[16/9]
          object-cover
          group-hover:scale-110
          transition-transform
          duration-700
        "
              />

              {/* Cinematic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1 flex flex-col gap-6 text-white p-4 md:p-0 text-center md:text-left ">
          <h4 className="text-[var(--brand-secondary)] font-semibold">
            {item.category}
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold ">{item.title}</h2>
          {item.subtitle && (
            <p className="text-[var(--brand-secondary)] text-sm font-semibold tracking-widest uppercase">
              {item.subtitle}
            </p>
          )}
          <p className="text-base md:text-lg text-gray-200 font-light text-justify leading-relaxed">
            {item.description}
          </p>


          {/* Learn More toggle for service 3 */}
          {item.pointSections && (
            <>
             
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden space-y-6"
                  >
                    {item.pointSections.map((section, si) => (
                      <div key={si}>
                        <h4 className="text-[var(--brand-secondary)] font-bold mb-2">{section.heading}</h4>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {section.points.map((p, pi) => (
                            <li key={pi}><span className="font-semibold text-white">{p.name}</span> {p.desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
               <button
                onClick={() => setShowMore(!showMore)}
                className="w-40 md:w-48 px-6 py-2 bg-[var(--brand-secondary)] text-[var(--brand-primary)] font-semibold rounded-sm hover:bg-[var(--brand-secondary-hover)] transition mx-auto md:mx-0"
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
            </>
          )}

          {!item.pointSections && (
            <button className="w-40 md:w-48 px-6 py-2 bg-[var(--brand-secondary)] text-[var(--brand-primary)] font-semibold rounded-sm hover:bg-[var(--brand-secondary-hover)] transition mx-auto md:mx-0">
              Learn More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative" ref={ref}>
      <div className="max-w-6xl mx-auto py-10">
        {services.map((item, idx) => (
          <Single key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

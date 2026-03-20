import React from "react";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import BlurryCardWithIcon from "../components/Cards/BlurryCardWithIcon";
import { Camera, Users, Star, Award } from "lucide-react";
import BlurryImageCard from "../components/Cards/BlurryImageCard";
import BouncyText from "../components/BouncyText";
import JourneyTimeline from "../components/JourneyTimeline";

function About() {
  const services = [
    {
      title: "Talent Discovery",
      description:
        "Scouting fresh faces and seasoned talent across India to find the perfect fit for every screen",
      Icon: Users,
    },
    {
      title: "Casting Direction",
      description:
        "Providing expert casting solutions for Bollywood, OTT, and Ads with a focus on precision and speed.",
      Icon: Camera,
    },
    {
      title: "Acting Workshops",
      description:
        "Empowering aspiring actors with technical skills, audition prep, and industry insights to ace every role.",
      Icon: Star,
    },
    {
      title: "Strategic Casting",
      description:
        "Bridging the gap between filmmakers and artists with a transparent, time-saving, and hassle-free process.",
      Icon: Award,
    },
  ];

  const team = [
    {
      title: "Casting Directors",
      description:
        "Visionary experts dedicated to finding the perfect face for every soul, ensuring a seamless match between the    script and the artist.",
      Image:
        "https://images.unsplash.com/photo-1598267416816-2fc7a6058eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Talent Scouts",
      description:
        "Our boots on the ground, traveling across India to discover hidden gems and fresh, authentic voices for the industry.",
      Image:
        "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Casting Associates",
      description:
        "Professional bridge-makers who manage auditions, shortlist talent, and ensure smooth coordination between creators and actors.",
      Image:
        "https://images.unsplash.com/photo-1518930259200-3e5b29f42096?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Casting Assistants",
      description:
        "Detail-oriented support team handling database management, scheduling, and day-to-day casting logistics efficiently.",
      Image:
        "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="bg-[var(--brand-primary)] overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>

        <div className="relative z-20 text-white text-center">
          <div className="m-10">
            <BouncyText
              text={`Who Are we ?`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div className="max-w-8xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
  Finding the perfect cast for a Director and the right script for an Actor
  has long been a complex and time-consuming struggle. After entering
  Bollywood in <span className="font-semibold">2017</span>, I experienced
  these industry gaps firsthand.
</p>

<p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 mt-3">
  To solve this, we founded{" "}
  <span className="font-semibold text-[var(--brand-secondary)]">
    Jeevan Casting
  </span>
  . We have transformed the traditional casting hustle into a{" "}
  <span className="text-white font-semibold">seamless</span>,{" "}
  <span className="text-white font-semibold">transparent</span>, and{" "}
  <span className="text-white font-semibold">time-efficient</span> process.
</p>

<p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 mt-3">
  Our mission is to bridge the gap between{" "}
  <span className="text-white font-semibold">visionary filmmakers</span> and{" "}
  <span className="text-white font-semibold">authentic talent</span>, making
  the journey from{" "}
  <span className="font-semibold text-[var(--brand-secondary)]">
    "Script to Screen"
  </span>{" "}
  faster and easier than ever.
</p>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-[var(--brand-secondary)] mt-5">
              Simplifying Casting, Amplifying Talent. Streamlining the Soul of
              Every Script.
            </p>
          </div>

          <div className="m-10">
            <BouncyText
              text={`Our Journey`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>

          <div className="m-10">
            <JourneyTimeline />
          </div>
          <div className="m-10">
            <BouncyText
              text={`Our Vision`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div
            className="grid gap-6 mt-20 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4"
          >
            {services.map((service, idx) => (
              <BlurryCardWithIcon
                key={idx}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
          <div className="m-10">
            <BouncyText
              text={`Our Team`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div
            className="grid gap-6 mt-20 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4"
          >
            {team.map((team, idx) => (
              <BlurryImageCard
                key={idx}
                title={team.title}
                description={team.description}
                Image={team.Image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <HexagonGridBgAbout />
      </section>
    </div>
  );
}

export default About;

"use client";
import { useState, useEffect } from "react";
import HoverFlipCard from "./HoverFlipCard";

const FlippingCardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const actors = [
    {
      name: "Hritik Roshan",
      role: "Lead Role",
      description:
        "Known for his incredible range and method acting approach in both commercial and indie films.",
      backText:
        "From comedy to thriller, Rajkummar brings authenticity to every character. His dedication to craft and natural screen presence makes him a director's favorite for challenging roles.",
      image:
        "https://www.hungamaexpress.com/assets/uploads/updates/2025-10-10/34590_1294848_roshan_updates.jpg",
    },
    {
      name: "Rajkummar Rao",
      role: "Versatile Actor",
      description:
        "Known for his incredible range and method acting approach in both commercial and indie films.",
      backText:
        "From comedy to thriller, Rajkummar brings authenticity to every character. His dedication to craft and natural screen presence makes him a director's favorite for challenging roles.",
      image:
        "https://media.themoviedb.org/t/p/w600_and_h900_face/ttBY7Y8x4NCpXfGS9Tc1NN8ISos.jpg",
    },
    {
      name: "Kiara Advani",
      role: "Leading Lady",
      description:
        "Rising star known for her charm, versatility, and strong screen presence across genres.",
      backText:
        "Kiara's journey from debut to stardom showcases her commitment to diverse roles. Her ability to connect with audiences and adapt to different characters makes her highly sought after.",
      image: "https://etimg.etb2bimg.com/photo/127877489.cms",
    },
    {
      name: "Vicky Kaushal",
      role: "Method Actor",
      description:
        "Acclaimed for his intense performances and ability to completely transform for roles.",
      backText:
        "Vicky's commitment to character preparation is legendary. His powerful performances in both mainstream and art films have established him as one of the finest actors of his generation.",
      image:
        "https://static.toiimg.com/thumb/msid-66088619,width-400,resizemode-4/66088619.jpg",
    },
    {
      name: "Alia Bhatt",
      role: "Powerhouse Performer",
      description:
        "Young talent with exceptional emotional range and natural acting ability.",
      backText:
        "Alia's evolution as an actor has been remarkable. Her ability to portray complex emotions with ease and her dedication to each role makes her one of the most bankable stars today.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/alia-bhatt-l-oreal-portrait-6835da9236829.jpg?crop=1.00xw:1.00xh;0,0",
    },
    {
      name: "Ayushmann Khurrana",
      role: "Content King",
      description:
        "Known for choosing unconventional scripts and delivering memorable performances.",
      backText:
        "Ayushmann's choice of socially relevant films combined with his natural acting style has created a unique niche. His ability to balance entertainment with meaningful content is unmatched.",
      image:
        "https://img.indiaforums.com/person/480x360/0/9946-ayushmann-khurrana.webp?c=5nF5B1",
    },
    {
      name: "Kriti Sanon",
      role: "Dynamic Actress",
      description:
        "Talented performer known for her dedication and versatility across different film genres.",
      backText:
        "Kriti's journey showcases her growth as an actor. Her commitment to fitness, dance, and acting skills makes her perfect for both commercial entertainers and content-driven films.",
      image:
        "https://assets.gqindia.com/photos/66975c347beb6bd77eff079b/1:1/w_1080,h_1080,c_limit/Kriti-Sanon-buys-a-2000-sq-ft-plot-in-Alibaug-in-the-same-luxury-project-as-Amitabh-Bachchan-Heres-how-many-crores-the-actress-splurged.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, actors.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [actors.length, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, actors.length - slidesToShow);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, actors.length - slidesToShow);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlide = Math.max(0, actors.length - slidesToShow);

  return (
    <div className="max-w-8xl mx-auto px-4 relative overflow-hidden mt-10">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out py-5"
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
        }}
      >
        {actors.map((actor, index) => (
          <div
            key={index}
            className="flex-none px-1"
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <HoverFlipCard {...actor} index={index} />
          </div>
        ))}
      </div>

      {/* Dots + Buttons */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-[var(--brand-secondary-hover)] text-white flex items-center justify-center border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/50 transition-all duration-300"
        >
          ◀
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[var(--brand-secondary)]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-[var(--brand-secondary-hover)] text-white flex items-center justify-center border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/50 transition-all duration-300"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default FlippingCardCarousel;

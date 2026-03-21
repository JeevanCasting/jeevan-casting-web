"use client";
import { useState, useEffect } from "react";
import ProductCard1 from "./ProductCard1";

const ServicesCarousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);



  const services = [
    {
      title: "TALENT ACQUISITION",
      description:
        "We conduct nationwide scouting for fresh talent and experienced performers, ensuring diversity and excellence in every cast. Beyond traditional casting, we actively scout real-life personalities, influencers, and unconventional faces to bring a unique, authentic energy to every project",
      category: "Talent Discovery & Scouting",
      image:
        "https://media.istockphoto.com/id/1667842630/photo/judges-clapping-to-a-contestant-in-a-music-contest.webp?a=1&b=1&s=612x612&w=0&k=20&c=XH-NHD-9G_schc9q7AOruFQN1dt3tYcdAhv0_1Uhibk=",
    },
    {
      title: "CASTING DIRECTION & SERVICES",
      description:
        "Jeevan Casting provides expert end-to-end solutions for Films, TV, and Ads. From research-driven films to urgent commercials, the agency ensures a 'perfect fit' within any timeline, connecting filmmakers with a diverse pool of established and fresh talent.",
      category: "Precision | Smooth & Fast End-to-End Process",
      image:
        "https://lh3.googleusercontent.com/d/1Nf5jaBr3teVBqMVvL-fktcufvaZpiPWR",
    },
    {
      title: "ARTIST DEVELOPMENT & WORKSHOPS",
      description:
        "Specialized camera and acting workshops led by industry-best trainers for aspiring talent and kids. We streamline the journey from audition techniques to final shoot execution, ensuring every actor is confident, professional, and industry-ready",
      category: "Transforming Talent into Professionals",
      image:
        "https://media.istockphoto.com/id/1479807935/photo/young-girl-performing-contemporary-dance-on-dark-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=nQJpTsX_IBcFzaB5L-M2uafE0Vm0M2mo0BW0dpnY8o0=",
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
        const maxSlide = Math.max(0, services.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlide = Math.max(0, services.length - slidesToShow);

  return (
    <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out py-5"
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-none px-2" // small gap between cards
            style={{ width: `${100 / slidesToShow}%` }} // each card width = container / visible cards
          >
            <ProductCard1 {...service} />
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

export default ServicesCarousel1;

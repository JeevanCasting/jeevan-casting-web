import Portfolio from "../components/Cards/Portfolio";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";
import IndustriesInfiniteSlider from "../components/Cards/IndustriesInfiniteSlider";
import BouncyText from "../components/BouncyText";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";

function Services() {
  return (
    <div className="w-full lg:pt-0  bg-[var(--brand-primary)]">
      {/* Hero Section with Video */}
      <div className="relative h-[50vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-60 pointer-events-none"
        >
          <source src="/cctv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <BouncyText
            text="Our Casting Services"
            className="text-4xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight mb-4"
          />
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            From talent discovery to production support, we provide
            comprehensive casting solutions for Bollywood, regional cinema, and
            digital content.
          </p>
        </div>
      </div>

      {/* Canvas Background Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16 text-white">
          {/* Services Carousel */}
          <div className="py-10  ">
            <div 
            
            className="max-w-6xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Casting Solutions</h2>
       
              <p className="text-gray-300 max-w-8xl mx-auto">
                Jeevan Casting is dedicated to connecting exceptional talent
                with the right opportunities in film, television, web series,
                and advertising. We act as a bridge between aspiring actors and
                visionary directors, ensuring every project finds the perfect
                cast. Our team carefully analyzes talent through auditions,
                screen tests, and profile evaluations, focusing on performance,
                versatility, and on-screen presence. By understanding both the
                creative vision of directors and the strengths of artists, we
                streamline the casting process and save valuable production
                time. Whether launching fresh faces or sourcing experienced
                performers, we are committed to building meaningful
                collaborations that bring stories to life.
              </p>

               <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of casting services
                designed to bring your creative vision to life.
              </p>
            </div>
          </div>

          <Portfolio />
          {/* Value Proposition */}
          <div className="py-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {
              [
                {
    icon: "🎭",
    title: "Complete Casting Partner",
    desc: "From first brief to final cut, we manage the entire talent journey.",
  },
  {
    icon: "⭐",
    title: "Talent Discovery",
    desc: "Scouting the unseen—finding fresh faces and iconic personalities nationwide.",
  },
  {
    icon: "🎬",
    title: "Acting & Casting Workshops",
    desc: "Turning aspirants into professionals with camera-ready skills and audition mastery.",
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    desc: "Trusted for 200+ successful projects across Films, OTT, and Commercials.",
  },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-[var(--brand-primary)]">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Slider */}
      <IndustriesInfiniteSlider />

      {/* Hexagon Background */}
      <section className="relative">
        <HexagonGridBgAbout />
      </section>

      {/* Call to Action */}
      <div className="py-16 bg-[var(--brand-primary)] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Looking for the Perfect Cast?
          </h2>
          <p className="text-xl text-white mb-8">
            Discover our casting services or connect with us for a customized
            casting solution tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="px-8 py-2 bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/80 text-[var(--brand-primary)] font-semibold rounded-sm transition transform hover:scale-105"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="px-8 py-2 bg-transparent border-2 border-[var(--brand-secondary)] text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)] hover:text-[var(--brand-primary)] font-semibold rounded-sm transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

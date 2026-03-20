import React, { useEffect, useRef, useState } from "react";

export default function DemoCard() {
  const [view, setView] = useState("kompass"); // 'kompass' | 'traditional'
  const featuresRef = useRef([]);

  // Simple fade/slide-in using IntersectionObserver
  useEffect(() => {
    const els = featuresRef.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("feature-in");
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="w-full px-4 py-10 md:py-14 bg-[#0b0c10] flex justify-center">
      {/* Inline keyframes + minimal custom CSS */}
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(239,1,99,0.0); }
          50% { box-shadow: 0 0 28px rgba(239,1,99,0.35); }
        }
        .sphere {
          background: radial-gradient(closest-side, #1f2533, #0f1220 70%, #0b0c10 100%);
          position: relative;
          isolation: isolate;
        }
        .sphere::before {
          /* rotating "scan" band (360° inspection) */
          content: "";
          position: absolute;
          inset: -8%;
          border-radius: 9999px;
          background:
            conic-gradient(from 0deg, rgba(0,0,0,0) 0 70%, rgba(239,1,99,0.5) 71% 74%, rgba(0,0,0,0) 75% 100%),
            radial-gradient(closest-side, rgba(239,1,99,0.15), rgba(0,0,0,0) 65%);
          animation: spinSlow 6s linear infinite;
          z-index: -1;
          filter: blur(0.5px);
        }
        .sphere:hover::after {
          /* hover: reveal inspection layers */
          opacity: 1;
          transform: scale(1);
        }
        .sphere::after {
          content: "";
          position: absolute;
          inset: 12%;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(0,255,255,0.12), rgba(0,0,0,0) 55%),
            radial-gradient(circle at 35% 60%, rgba(239,1,99,0.15), rgba(0,0,0,0) 50%);
          opacity: 0;
          transform: scale(0.9);
          transition: all .5s ease;
        }
        .feature {
          opacity: 0; transform: translateY(10px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .feature-in {
          opacity: 1; transform: translateY(0);
        }
        .toggle-pill {
          transition: transform .35s ease;
        }
        .metric-card {
          transition: opacity .35s ease, transform .35s ease;
        }
        .metric-enter {
          opacity: 0; transform: translateY(8px);
        }
        .metric-enter-active {
          opacity: 1; transform: translateY(0);
        }
      `}</style>

      <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-[#0d0f16]/90 backdrop-blur p-6 md:p-10 shadow-[0_0_60px_rgba(239,1,99,0.12)]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Animated Sphere */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full sphere animate-[floatSoft_5s_ease-in-out_infinite] ring-1 ring-white/10">
            {/* subtle neon ring */}
            <div className="absolute inset-0 rounded-full border border-[#ef0163]/20 pointer-events-none animate-[pulseGlow_3s_ease-in-out_infinite]"></div>
          </div>

          {/* Title + Tagline */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-white">
              Kompass Vision AI
            </h1>
            <p className="mt-2 text-[#9aa4b2] text-base md:text-lg">
              by <span className="text-white/90">Jidoka Technologies</span>
            </p>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-cyan-300">
              360° Cognitive Product Inspection at <span className="text-[#ef0163]">12,000 PPM</span>
            </p>

            <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
              Next-gen automated visual inspection powered by patented CNN + memory-based AI.
              Achieve <span className="text-white font-semibold">99.9% accuracy</span> with
              <span className="text-white font-semibold"> 200+ high-res images in 0.8s</span>,
              reduced false positives, and seamless MES/ERP integration.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            { label: "12,000 PPM speed" },
            { label: "99.9% accuracy" },
            { label: "200+ images captured in 0.8s" },
            { label: "Patented CNN + memory-based AI" },
            { label: "MES/ERP integration" },
            { label: "Trains on < 10 good samples" },
          ].map((f, i) => (
            <div
              key={i}
              ref={(el) => (featuresRef.current[i] = el)}
              className="feature flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* inline SVG bullet icon */}
              <svg className="mt-0.5 w-5 h-5 flex-none text-[#ef0163]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" opacity="0.35"/>
                <path d="M8 12l2.5 2.5L16 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-slate-200">{f.label}</p>
            </div>
          ))}
        </div>

        {/* Comparison Toggle */}
        <div className="mt-10">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-white text-xl font-semibold">Kompass vs Traditional Vision Systems</h3>
            <div className="relative w-72 h-10 bg-white/5 border border-white/10 rounded-full p-1">
              <div
                className={`absolute top-1 h-8 w-[calc(50%-4px)] bg-[#111626] border border-white/10 rounded-full toggle-pill ${
                  view === "kompass" ? "left-1" : "left-[calc(50%+3px)]"
                }`}
              />
              <div className="relative z-10 grid grid-cols-2 h-full text-sm font-medium">
                <button
                  onClick={() => setView("kompass")}
                  className={`rounded-full ${view === "kompass" ? "text-cyan-300" : "text-slate-300/80"}`}
                >
                  Kompass
                </button>
                <button
                  onClick={() => setView("traditional")}
                  className={`rounded-full ${view === "traditional" ? "text-[#ef0163]" : "text-slate-300/80"}`}
                >
                  Traditional
                </button>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Left */}
            <div className={`metric-card rounded-2xl bg-white/5 border border-white/10 p-5 ${view === "kompass" ? "" : "opacity-50"}`}>
              <h4 className="text-white font-semibold mb-3">Kompass Vision AI</h4>
              <ul className="space-y-3 text-slate-200/90">
                <li className="flex justify-between"><span>Throughput</span><span className="font-semibold text-cyan-300">12,000 PPM</span></li>
                <li className="flex justify-between"><span>Accuracy</span><span className="font-semibold text-cyan-300">99.9%</span></li>
                <li className="flex justify-between"><span>Images / Cycle</span><span className="font-semibold text-cyan-300">200+ in 0.8s</span></li>
                <li className="flex justify-between"><span>False Positives</span><span className="font-semibold text-cyan-300">↓ 40–60%</span></li>
                <li className="flex justify-between"><span>Training Data</span><span className="font-semibold text-cyan-300">&lt; 10 good samples</span></li>
                <li className="flex justify-between"><span>Integration</span><span className="font-semibold text-cyan-300">MES/ERP, auto-correction</span></li>
                <li className="flex justify-between"><span>Deployment</span><span className="font-semibold text-cyan-300">&lt; 6 weeks</span></li>
              </ul>
            </div>
            {/* Right */}
            <div className={`metric-card rounded-2xl bg-white/2 border border-white/10 p-5 ${view === "traditional" ? "" : "opacity-50"}`}>
              <h4 className="text-white font-semibold mb-3">Traditional Vision</h4>
              <ul className="space-y-3 text-slate-200/90">
                <li className="flex justify-between"><span>Throughput</span><span className="font-semibold text-[#ef0163]">Lower</span></li>
                <li className="flex justify-between"><span>Accuracy</span><span className="font-semibold text-[#ef0163]">Lower</span></li>
                <li className="flex justify-between"><span>Images / Cycle</span><span className="font-semibold text-[#ef0163]">Limited angles</span></li>
                <li className="flex justify-between"><span>False Positives</span><span className="font-semibold text-[#ef0163]">Higher</span></li>
                <li className="flex justify-between"><span>Training Data</span><span className="font-semibold text-[#ef0163]">Hundreds+ samples</span></li>
                <li className="flex justify-between"><span>Integration</span><span className="font-semibold text-[#ef0163]">Basic/Manual</span></li>
                <li className="flex justify-between"><span>Deployment</span><span className="font-semibold text-[#ef0163]">Months</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => {}}
            className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-[#ef0163] text-white font-semibold hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(239,1,99,0.35)] transition"
          >
            Download Datasheet
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v11m0 0l-4-4m4 4l4-4M5 19h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => {}}
            className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            Get in Touch
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

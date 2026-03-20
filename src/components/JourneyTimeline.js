import React from "react";

const journey = [
  {
    year: "2017-2018",
    title: "Entry Into Bollywood",
    desc: "Debut with Super 30, starting the journey to understand and simplify the casting process.",
  },
  {
    year: "2018-2019",
    title: "Building Experience",
    desc: "Refining the craft through extensive workshops and auditions to master acting technicalities",
  },
  {
    year: "2019-2020",
    title: "Industry Connections",
    desc: "Established strong networks with leading casting directors, actors, and filmmakers across the industry.",
  },
  {
    year: "2020-2024",
    title: "Casting Expertise",
    desc: "Collaborated on casting projects under industry-leading companies and top casting directors.",
  },
  {
    year: "2024-Present",
    title: "Casting Initiative",
    desc: "Completed 200+ projects, providing expert casting for ads, films, and web series.",
  },
];

function JourneyTimeline() {
  return (
    <div className="w-full py-16 text-white">
      <div className="hidden md:flex justify-center items-start gap-0">
        {journey.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className={`w-50 h-50 flex items-center justify-center
                ${
                  index % 2 === 0
                    ? "border-t-4 border-r-4"
                    : "border-b-4 border-r-4"
                }
                border-dashed border-[var(--brand-secondary)]`}
            >
              <div  className={`text-center px-3 ${
                  index % 2 === 0
                    ? "mt-2"
                    : "mb-2"
                }`}>
                <h4 className="font-bold text-[var(--brand-secondary)]">
                  {item.title}
                </h4>
                <p className="text-[12px] md:text-[13px] lg:text-[14px] text-gray-300 text-justify">
                  {item.desc}
                </p>
              </div>
            </div>

            <span
              className={`absolute text-white font-semibold ${
                index % 2 === 0 ? "-top-8" : "-bottom-8"
              }`}
            >
              {item.year}
            </span>

            <div
              className={`absolute bg-[var(--brand-secondary)] rounded-full h-4 w-4 
                ${
                  index % 2 === 0
                    ? "top-0  -translate-y-1/2 "
                    : "bottom-0  translate-y-1/2 "
                }`}
            />
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col items-center">
        {journey.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className={`w-40 h-40 flex items-center justify-center
                ${
                  index % 2 === 0
                    ? "border-t-4 border-r-4"
                    : "border-t-4 border-l-4"
                }
                border-dashed border-[var(--brand-secondary)]`}
            >
              <div className="text-center px-3">
                <h4 className="font-bold text-[var(--brand-secondary)]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>

            <span
              className={`absolute top-1/2 -translate-y-1/2 font-semibold text-white
                ${index % 2 === 0 ? "-right-24" : "-left-24"}`}
            >
              {item.year}
            </span>

            <div
              className={`absolute bg-[var(--brand-secondary)] rounded-full h-4 w-4
    ${
      index % 2 === 0
        ? "right-0 top-1/2 -translate-y-1/2 translate-x-[6px]"
        : "left-0 top-1/2 -translate-y-1/2 -translate-x-[6px]"
    }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JourneyTimeline;

import React from "react";

function BlurryImageCard({title, description,Image}) {
  return (
    <div className="relative max-w-sm mx-auto rounded-xl border border-[var(--brand-secondary)]/30 shadow-lg overflow-hidden backdrop-blur-sm bg-gradient-to-br from-yellow-400/10 via-[var(--brand-accent)]/5 to-transparent transition-transform hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-yellow-400/20 to-[var(--brand-accent)]/20 blur-3xl opacity-30 -z-10"></div>

      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        <img
          src={Image}
          alt="Smart Industry"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 text-[var(--brand-secondary)]">
          {title}
        </h2>
        <p className="text-base text-gray-200 leading-relaxed">
         {description}
        </p>
      </div>
    </div>
  );
}

export default BlurryImageCard;

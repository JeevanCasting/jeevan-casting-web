import React, { useState } from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";

export default function InstallAppBanner() {
  const { isInstallable, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || dismissed) return null;

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3
                 bg-black border border-[#f5c518] rounded-sm shadow-2xl
                 px-4 py-3 w-[calc(100%-2rem)] max-w-sm"
      role="banner"
      aria-label="Install Jeevan Casting app"
    >
      <img src="/logo.png" alt="Jeevan Casting" className="w-9 h-9 rounded object-contain flex-shrink-0" />

      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight">Jeevan Casting</p>
        <p className="text-gray-400 text-xs truncate">Install for quick access</p>
      </div>

      <button
        onClick={install}
        className="flex-shrink-0 bg-[#f5c518] text-black text-xs font-bold
                   px-3 py-1.5 rounded-sm hover:brightness-110 transition"
      >
        Install
      </button>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="flex-shrink-0 text-gray-500 hover:text-white transition text-lg leading-none"
      >
        ✕
      </button>
    </div>
  );
}

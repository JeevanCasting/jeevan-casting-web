import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer  className="bg-[var(--brand-primary)] text-[var(--neutral-bg-light)] pt-14">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <img src="./logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            </div>
            <h2 className="text-xl font-bold tracking-wide">Jeevan Casting</h2>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed text-justify">
            Connecting world-class production houses with the industry's most expressive faces. From films to commercials, Jeevan Casting ensures perfection in every character we discover.
          </p>
        </div>

       

        {/* LOCATIONS */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[var(--brand-secondary)] mb-3">Our Locations</h3>
          <div className="space-y-4 text-sm text-neutral-300">
            <div>
              <p className="text-white font-semibold mb-1">Casting Operations (Mumbai)</p>
              <p className="leading-relaxed">Sea View Side, Shiv Galli, Versova,<br />Mumbai - 400061</p>
              <p className="text-xs text-neutral-500 mt-1 italic">Internal Team Only: No Artist Walk-ins</p>
               <p>
              <span className="mr-1">📧</span>
              <a href="mailto:castingjeevan@gmail.com" className="hover:text-[var(--brand-secondary)] transition">
                castingjeevan@gmail.com
              </a>
            </p>
            </div>
           
          </div>
        </div>
 {/* CONTACT */}
        <div className="text-center md:text-left">
          {/* <h3 className="text-lg font-semibold text-[var(--brand-secondary)] mb-3">Contact</h3> */}
           <div>
              <p className="text-white font-semibold mb-1">Technical & Data Center (Bangalore)</p>
              <p className="leading-relaxed">Film City - 560116</p>
              <p className="text-xs text-neutral-500 mt-1 italic">For Backend & Data Management</p>
            </div>
          <div className="space-y-2 text-sm text-neutral-300">
           
          </div>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[var(--brand-secondary)] mb-3">Follow Us</h3>
          <p className="text-sm text-neutral-400 leading-relaxed mb-5">
            Stay updated with casting calls, auditions, and success stories. Follow us on social media to never miss your next big break.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/jeevan_casting/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/jiwan.kumar.355138"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-white/10 py-5">
        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Jeevan Casting. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;

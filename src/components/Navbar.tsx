"use client";

import { useState, useEffect } from "react";
import { Sparkles, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-md" : "bg-transparent pt-6 pb-2"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white tracking-tight">Elle's Massage Spa</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-white font-medium text-sm">
          <a href="#home" className="hover:text-spa-accent transition-colors">Home</a>
          <a href="#services" className="hover:text-spa-accent transition-colors">Services</a>
          <a href="#reviews" className="hover:text-spa-accent transition-colors">Reviews</a>
          <a href="#location" className="hover:text-spa-accent transition-colors">Location</a>
        </nav>

        <button
          type="button"
          className="hidden sm:flex items-center gap-2 text-sm font-medium bg-[#8b9b8b] text-white px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors shadow-sm cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          Book Now
        </button>
      </div>
    </header>
  );
}

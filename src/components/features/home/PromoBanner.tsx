"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Summer Sales: Up to 40% Off!",
    description: "Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.",
    image: "/Image/SummerSaleImage.png",
    bg: "from-secondary to-[#c2185b]",
    icon: "/Image/IconSumemrSale.png"
  },
  {
    title: "Member Secret Deals",
    description: "Sign in to see hidden prices for thousands of properties. Save an extra 10% or more!",
    image: "/Image/MainImg.png", // Reusing main image for demo
    bg: "from-[#003580] to-[#006ce4]",
    icon: "/Image/IconSumemrSale.png"
  },
  {
    title: "Fly for Less this Autumn",
    description: "Book your flights now and get double points on your T-Goda account. Limited time offer.",
    image: "/Image/Bangkok.png",
    bg: "from-[#1a237e] to-[#4a148c]",
    icon: "/Image/IconSumemrSale.png"
  }
];

export default function PromoBanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mb-16 relative group">
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-r ${slides[current].bg} flex flex-col md:flex-row items-center justify-between p-8 md:p-12 md:h-[420px] transition-all duration-1000`}>

        {/* Abstract background shapes */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>

        {/* Summer Sale Icon Background */}
        <div className="absolute top-1/2 left-[60%] -translate-y-[74%] -translate-x-1/2 opacity-30 w-70 h-70 pointer-events-none">
          <img
            src={slides[current].icon}
            alt="Promo Icon"
            className="w-full h-full object-contain animate-float"
          />
        </div>

        <div className="relative z-10 w-full md:w-1/2 text-white mb-8 md:mb-0 animate-in slide-in-from-left duration-700">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
            {slides[current].title}
          </h2>
          <p className="text-white/90 text-base mb-8 max-w-md">
            {slides[current].description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" className="bg-white text-secondary hover:bg-gray-100 font-bold px-8 h-12 rounded-xl transition-transform hover:scale-105 active:scale-95">
              Explore Deals
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-bold px-8 h-12 rounded-xl">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-[40%] flex justify-end animate-in slide-in-from-right duration-700">
          <div className="relative w-72 h-72 md:w-80 md:h-80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] rounded-[60px] overflow-hidden animate-float transition-all duration-700 hover:scale-105 hover:rotate-3 cursor-pointer group/img">
            <img
              src={slides[current].image}
              alt="Promo"
              className="w-full h-full object-cover rounded-[60px]"
            />
            <div className="absolute inset-0 rounded-[60px] border border-white/20 pointer-events-none group-hover/img:border-white/40 transition-colors"></div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

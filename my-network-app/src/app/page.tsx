"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import About from "./about/page";
import PlansPage from "./plans/page";

const slides = [
  {
    title: "Fast & Reliable Internet",
    subtitle: "Stay connected wherever you are with iVodaNet's blazing fast Wi-Fi.",
    img: "/hero1.jpg",
  },
  {
    title: "Unlimited Coverage",
    subtitle: "Experience seamless internet in your city or town.",
    img: "/hero2.jpg",
  },
  {
    title: "Affordable Packages",
    subtitle: "Pick a package that suits your lifestyle and budget.",
    img: "/hero3.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">

      {/* Hero Section with Image Slider */}
      <section className="relative h-[500px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white mb-6">{slide.subtitle}</p>
              <div className="space-x-4">
                <a
                  href="/plans"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                  View Plans
                </a>
                <a
                  href="/login"
                  className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Plans Preview */}
      <PlansPage />

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-950">How It Works</h2>
          <div className="grid grid-cols-1 text-gray-950 md:grid-cols-4 gap-8">
            {[
              { step: "Choose a Plan", icon: "📦" },
              { step: "Sign Up", icon: "📝" },
              { step: "Get Connected", icon: "📶" },
              { step: "Enjoy", icon: "😊" },
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="font-medium">{item.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
    </div>
  );
}

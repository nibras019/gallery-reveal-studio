import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Entrance animation for the entire hero section
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" });

    // Animation for the title
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.5"
    );

    // Animation for the subtitle
    tl.fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.7"
    );

    // Animation for the CTA buttons
    tl.fromTo(ctaRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // ScrollTrigger for parallax effect
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5
      }
    });
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-12">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      {/* Floating particles - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-20 w-3 h-3 bg-white/20 rounded-full animate-pulse" />
      <div className="hidden md:block absolute top-40 right-32 w-2 h-2 bg-white/30 rounded-full animate-bounce" />
      <div className="hidden md:block absolute bottom-32 left-1/4 w-1 h-1 bg-white/25 rounded-full animate-ping" />

      <div className="container mx-auto text-center relative z-10 py-16 sm:py-20">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-8xl font-extralight tracking-wider mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
        >
          DUBAI LUXE
        </h1>
        
        <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8" />
        
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12 px-4"
        >
          Architectural Mastery & Interior Excellence in the Heart of Emirates.
          <br className="hidden sm:block" />
          Discover our premium portfolio of luxury developments.
        </p>

        <div ref={ctaRef} className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:items-center sm:justify-center">
          <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
            Explore Projects
          </button>
          <button className="w-full sm:w-auto border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/5 transition-all duration-300 text-sm sm:text-base">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator - adjusted for mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown size={20} className="sm:w-6 sm:h-6" />
      </div>
    </section>
  );
};

export default HeroSection;

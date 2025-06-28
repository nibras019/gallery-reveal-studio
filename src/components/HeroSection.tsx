
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Enhanced background animation
    gsap.fromTo(backgroundRef.current, {
      scale: 1.1,
      opacity: 0.8
    }, {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "power2.out"
    });

    // Entrance animation for the entire hero section
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" });

    // Enhanced title animation with letter reveal
    if (titleRef.current) {
      const letters = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = letters.map(letter => 
        letter === ' ' ? ' ' : `<span class="inline-block hero-letter">${letter}</span>`
      ).join('');
      
      tl.fromTo('.hero-letter', {
        y: 100,
        opacity: 0,
        rotationX: -90,
        scale: 0.5
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.08,
        ease: "back.out(1.4)"
      }, "-=0.5");
    }

    // Animation for the subtitle with typewriter effect
    tl.fromTo(subtitleRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );

    // Animation for the CTA buttons
    tl.fromTo(ctaRef.current?.children || [],
      { y: 80, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "back.out(1.2)" },
      "-=0.6"
    );

    // Floating animation for letters
    gsap.to('.hero-letter', {
      y: -8,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    // ScrollTrigger for parallax effect
    gsap.to(heroRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8
      }
    });

  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with video-like effect */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxmaWx0ZXIgaWQ9Im5vaXNlIj4KPGZLVHV2dWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20" />
      
      {/* Enhanced floating particles */}
      <div className="hidden md:block absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-pulse blur-sm" />
      <div className="hidden md:block absolute top-40 right-32 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="hidden md:block absolute bottom-32 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      <div className="hidden lg:block absolute top-60 right-1/4 w-1 h-1 bg-white/40 rounded-full" style={{ animation: 'pulse 4s infinite' }} />

      <div className="container mx-auto text-center relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
        {/* Enhanced main title */}
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-extralight tracking-wider mb-8 sm:mb-12"
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 25%, #ffffff 50%, #e9ecef 75%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 20px rgba(255,255,255,0.1))'
          }}
        >
          DUBAI LUXE
        </h1>
        
        {/* Enhanced decorative elements */}
        <div className="flex items-center justify-center space-x-4 mb-8 sm:mb-12">
          <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-white/30" />
          <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse" />
          <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent via-white/60 to-white/30" />
        </div>
        
        {/* Enhanced subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl lg:max-w-5xl mx-auto leading-relaxed font-light mb-12 sm:mb-16 px-4"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          Architectural Mastery & Interior Excellence in the Heart of Emirates.
          <br className="hidden sm:block" />
          <span className="text-white/80">Discover our premium portfolio of luxury developments.</span>
        </p>

        {/* Enhanced CTA section */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <button className="group relative w-full sm:w-auto overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10 flex items-center text-sm sm:text-base font-light">
              Explore Projects
              <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </span>
          </button>
          <button className="group w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <span className="text-sm sm:text-base font-light">Get in Touch</span>
          </button>
        </div>

        {/* Enhanced stats preview */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto mb-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extralight text-white mb-1">150+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extralight text-white mb-1">25+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Awards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extralight text-white mb-1">14</div>
            <div className="text-gray-400 text-xs sm:text-sm">Years</div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="text-xs mb-2 tracking-wider uppercase">Scroll</div>
          <ChevronDown size={24} className="animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

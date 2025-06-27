
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero entrance animations
    tl.fromTo(titleRef.current, {
      y: 120,
      opacity: 0,
      scale: 0.8,
      rotationX: 30
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 2,
      ease: "power3.out"
    })
    .fromTo(subtitleRef.current, {
      y: 80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.2")
    .fromTo(ctaRef.current, {
      y: 60,
      opacity: 0,
      scale: 0.9
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.4)"
    }, "-=0.8")
    .fromTo(scrollIndicatorRef.current, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // Parallax scroll effect
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(titleRef.current, {
          yPercent: -progress * 50,
          opacity: 1 - progress * 0.8,
          duration: 0.3
        });
        gsap.to(subtitleRef.current, {
          yPercent: -progress * 30,
          opacity: 1 - progress * 0.6,
          duration: 0.3
        });
      }
    });

    // Floating animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%), url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80") center/cover'
      }}
    >
      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-6xl lg:text-8xl xl:text-9xl font-extralight tracking-wider mb-8 text-white leading-tight"
        >
          LUXURY
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
            REDEFINED
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light"
        >
          Experience architectural excellence in the heart of Dubai. Where innovation meets luxury, 
          and every detail reflects the pinnacle of sophisticated design and craftsmanship.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-12 py-4 bg-white text-black font-light tracking-wide uppercase transition-all duration-500 hover:bg-transparent hover:text-white border-2 border-white overflow-hidden">
            <span className="relative z-10">Explore Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
          
          <button className="group flex items-center gap-3 px-8 py-4 text-white font-light tracking-wide uppercase border border-white/30 hover:border-white/60 transition-all duration-300">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Story
          </button>
        </div>

        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-light tracking-wider uppercase">Discover More</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

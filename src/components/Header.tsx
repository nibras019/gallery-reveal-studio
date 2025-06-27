
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Enhanced title animation with 3D letter reveal
    if (titleRef.current) {
      const letters = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = letters.map(letter => 
        letter === ' ' ? ' ' : `<span class="inline-block letter">${letter}</span>`
      ).join('');
      
      tl.fromTo(titleRef.current.children, 
        { 
          y: 120, 
          opacity: 0,
          rotationX: -90,
          rotationZ: 15,
          scale: 0.5,
          transformOrigin: "bottom center"
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          duration: 1.5,
          stagger: 0.05,
          ease: "back.out(1.4)"
        }
      );
    }

    // Enhanced subtitle with parallax effect
    tl.fromTo(subtitleRef.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
        rotationX: 15
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8"
    );

    // Enhanced decorative line with glow effect
    tl.fromTo(decorRef.current,
      {
        scaleX: 0,
        opacity: 0,
        rotationZ: 45
      },
      {
        scaleX: 1,
        opacity: 1,
        rotationZ: 0,
        duration: 2,
        ease: "elastic.out(1, 0.5)"
      }, "-=1.2"
    );

    // Scroll-triggered animations for header
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Parallax effect for title
        gsap.to(titleRef.current, {
          yPercent: -progress * 50,
          scale: 1 - progress * 0.1,
          opacity: 1 - progress * 0.3,
          duration: 0.3
        });
        
        // Parallax for subtitle
        gsap.to(subtitleRef.current, {
          yPercent: -progress * 30,
          opacity: 1 - progress * 0.5,
          duration: 0.3
        });
        
        // Decorative line fade
        gsap.to(decorRef.current, {
          scaleX: 1 - progress * 0.5,
          opacity: 1 - progress * 0.7,
          duration: 0.3
        });
      }
    });

    // Floating animation for letters
    gsap.to('.letter', {
      y: -5,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 1,
        from: "random"
      }
    });

  }, []);

  return (
    <header ref={headerRef} className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Enhanced background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-16 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        
        <div className="text-center mb-8 relative z-10">
          <h1 
            ref={titleRef}
            className="text-5xl lg:text-8xl font-extralight tracking-wider mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            DUBAI LUXE
          </h1>
          
          {/* Enhanced decorative line with glow */}
          <div className="relative mb-8">
            <div 
              ref={decorRef}
              className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto relative"
            ></div>
            <div className="absolute inset-0 w-32 h-px bg-white/50 mx-auto blur-sm"></div>
          </div>
          
          <p 
            ref={subtitleRef}
            className="reveal-text text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Architectural Mastery & Interior Excellence in the Heart of Emirates. 
            <br className="hidden lg:block" />
            Discover our premium portfolio of luxury developments and design innovations.
          </p>
        </div>
      </div>
      
      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </header>
  );
};

export default Header;

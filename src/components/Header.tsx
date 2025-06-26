
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Enhanced title animation with letter reveal
    if (titleRef.current) {
      const letters = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = letters.map(letter => 
        letter === ' ' ? ' ' : `<span class="inline-block">${letter}</span>`
      ).join('');
      
      tl.fromTo(titleRef.current.children, 
        { 
          y: 100, 
          opacity: 0,
          rotationX: -90,
          transformOrigin: "bottom center"
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: "power4.out"
        }
      );
    }

    // Subtitle with elegant slide up
    tl.fromTo(subtitleRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5"
    );

    // Decorative line animation
    tl.fromTo(decorRef.current,
      {
        scaleX: 0,
        opacity: 0
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.8"
    );

  }, []);

  return (
    <header className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20"></div>
        
        <div className="text-center mb-8 relative">
          <h1 
            ref={titleRef}
            className="text-5xl lg:text-8xl font-extralight tracking-wider mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
          >
            Design Gallery
          </h1>
          
          {/* Decorative line */}
          <div 
            ref={decorRef}
            className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
          ></div>
          
          <p 
            ref={subtitleRef}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Immersive spaces crafted for extraordinary experiences. 
            <br className="hidden lg:block" />
            Explore our portfolio of architectural and interior design projects.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Building, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Floating entrance animation
    tl.fromTo(statsRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotationX: 45
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        end: "bottom 20%"
      }
    });

    // Individual stat animations with counter effect
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.fromTo('.stat-card', {
          y: 80,
          opacity: 0,
          scale: 0.5,
          rotationY: 45
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          ease: "back.out(1.4)"
        });

        // Counter animation
        numbersRef.current.forEach((el, index) => {
          if (el) {
            const endValue = parseInt(el.textContent || '0');
            gsap.fromTo(el, {
              textContent: "0"
            }, {
              textContent: endValue.toString(),
              duration: 2,
              delay: index * 0.2,
              ease: "power2.out",
              snap: { textContent: 1 },
              onUpdate: function() {
                if (el) {
                  el.textContent = Math.ceil(Number(this.targets()[0].textContent)).toString();
                }
              }
            });
          }
        });
      }
    });

    // Parallax scroll effect
    gsap.to('.stat-card', {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, []);

  const stats = [
    { icon: Building, value: 150, label: 'Luxury Projects', suffix: '+' },
    { icon: Users, value: 500, label: 'Happy Clients', suffix: '+' },
    { icon: Award, value: 25, label: 'Design Awards', suffix: '+' },
    { icon: Star, value: 14, label: 'Years Excellence', suffix: '' }
  ];

  return (
    <section ref={statsRef} className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          {/* Background glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl" />
          
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="stat-card text-center relative group"
              >
                {/* Card background with glassmorphism */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all duration-500" />
                
                {/* Floating icon */}
                <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 lg:mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-sm group-hover:blur-md transition-all duration-500" />
                    <div className="relative w-full h-full bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white/80 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  
                  {/* Animated number */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extralight mb-2 sm:mb-3 text-white">
                    <span 
                      ref={el => {
                        if (el) numbersRef.current[index] = el;
                      }}
                      className="inline-block"
                    >
                      {stat.value}
                    </span>
                    <span className="text-white/60">{stat.suffix}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-400 text-xs sm:text-sm font-light tracking-wide uppercase leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Hover effect particles - hidden on mobile */}
                <div className="hidden sm:block absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="hidden sm:block absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;

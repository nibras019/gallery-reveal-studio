
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Building, Star, Trophy, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Enhanced entrance animation
    gsap.fromTo(statsRef.current, {
      y: 120,
      opacity: 0,
      scale: 0.9,
      rotationX: 30
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1.8,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 85%"
      }
    });

    // Individual stat animations with enhanced counter effect
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 75%",
      onEnter: () => {
        gsap.fromTo('.enhanced-stat-card', {
          y: 100,
          opacity: 0,
          scale: 0.7,
          rotationY: 25
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          stagger: {
            amount: 1,
            from: "start"
          },
          ease: "back.out(1.6)"
        });

        // Enhanced counter animation
        numbersRef.current.forEach((el, index) => {
          if (el) {
            const endValue = parseInt(el.getAttribute('data-value') || '0');
            gsap.fromTo(el, {
              textContent: "0"
            }, {
              textContent: endValue.toString(),
              duration: 2.5,
              delay: index * 0.3,
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

    // Enhanced parallax and floating effects
    gsap.to('.enhanced-stat-card', {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    });

  }, []);

  const stats = [
    { icon: Building, value: 150, label: 'Luxury Projects', suffix: '+', color: 'from-blue-400 to-blue-600' },
    { icon: Users, value: 500, label: 'Happy Clients', suffix: '+', color: 'from-green-400 to-green-600' },
    { icon: Trophy, value: 25, label: 'Design Awards', suffix: '+', color: 'from-yellow-400 to-yellow-600' },
    { icon: Target, value: 98, label: 'Success Rate', suffix: '%', color: 'from-purple-400 to-purple-600' },
    { icon: Star, value: 14, label: 'Years Excellence', suffix: '', color: 'from-pink-400 to-pink-600' },
    { icon: Award, value: 5, label: 'International', suffix: '', color: 'from-indigo-400 to-indigo-600' }
  ];

  return (
    <section ref={statsRef} className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 relative">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="enhanced-stat-card text-center relative group cursor-pointer"
              >
                {/* Enhanced card background with glassmorphism */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-700 shadow-2xl" />
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-700`} />
                
                {/* Enhanced content */}
                <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                  {/* Floating icon with enhanced effects */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-md group-hover:blur-lg group-hover:opacity-30 transition-all duration-700`} />
                    <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border border-white/20">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white/80 group-hover:text-white transition-colors duration-700" />
                    </div>
                  </div>
                  
                  {/* Enhanced animated number */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extralight mb-2 sm:mb-3 text-white group-hover:scale-110 transition-transform duration-500">
                    <span 
                      ref={el => {
                        if (el) {
                          numbersRef.current[index] = el;
                          el.setAttribute('data-value', stat.value.toString());
                        }
                      }}
                      className="inline-block"
                    >
                      {stat.value}
                    </span>
                    <span className="text-white/60 group-hover:text-white/80 transition-colors duration-500">{stat.suffix}</span>
                  </div>
                  
                  {/* Enhanced label */}
                  <div className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm font-light tracking-wide uppercase transition-colors duration-500 leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Enhanced hover effect particles */}
                <div className="hidden sm:block absolute -top-2 -right-2 w-3 h-3 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="hidden sm:block absolute -bottom-2 -left-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce" />
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;

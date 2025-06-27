
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Hammer, CheckCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation with letter reveal
    if (titleRef.current) {
      const letters = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = letters.map(letter => 
        letter === ' ' ? ' ' : `<span class="inline-block process-letter" style="opacity: 0; transform: translateY(50px);">${letter}</span>`
      ).join('');
      
      gsap.to('.process-letter', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      });
    }

    // Enhanced process steps animation
    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top 70%",
      onEnter: () => {
        // Timeline line progressive reveal
        gsap.fromTo('.timeline-line', {
          scaleY: 0,
          transformOrigin: "top"
        }, {
          scaleY: 1,
          duration: 2.5,
          ease: "power2.out"
        });

        // Progressive step reveal
        gsap.fromTo('.process-step', {
          x: -150,
          opacity: 0,
          scale: 0.5,
          rotationY: -45
        }, {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          stagger: {
            amount: 2,
            from: "start"
          },
          ease: "back.out(1.2)"
        });

        // Progress bar animation
        gsap.fromTo(progressBarRef.current, {
          scaleX: 0,
          transformOrigin: "left"
        }, {
          scaleX: 1,
          duration: 3,
          ease: "power2.out",
          delay: 0.5
        });
      }
    });

    // Enhanced floating animations with variety
    gsap.to('.process-icon', {
      y: (index) => -8 - (index % 3) * 2,
      rotation: (index) => (index % 2 === 0) ? 5 : -5,
      duration: 3 + Math.random(),
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.4
    });

    // Interactive hover effects
    const processCards = document.querySelectorAll('.process-card');
    processCards.forEach((card, index) => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 5,
          z: 50,
          duration: 0.6,
          ease: "power3.out"
        });
        gsap.to(card.querySelector('.process-number'), {
          scale: 1.2,
          color: "#ffffff",
          duration: 0.4
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.6,
          ease: "power3.out"
        });
        gsap.to(card.querySelector('.process-number'), {
          scale: 1,
          color: "rgba(255,255,255,0.1)",
          duration: 0.4
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const processes = [
    {
      icon: Lightbulb,
      title: 'Concept & Vision',
      description: 'We begin with understanding your vision and transforming ideas into conceptual designs that reflect luxury and functionality.',
      number: '01',
      details: ['Initial consultation', 'Vision mapping', 'Concept sketches', 'Feasibility study']
    },
    {
      icon: Palette,
      title: 'Design Development',
      description: 'Our expert designers create detailed plans, 3D visualizations, and material selections that bring your vision to life.',
      number: '02',
      details: ['3D modeling', 'Material selection', 'Color schemes', 'Technical drawings']
    },
    {
      icon: Hammer,
      title: 'Construction & Build',
      description: 'Premium construction with meticulous attention to detail, using only the finest materials and craftsmanship.',
      number: '03',
      details: ['Project management', 'Quality control', 'Premium materials', 'Skilled craftsmen']
    },
    {
      icon: CheckCircle,
      title: 'Completion & Handover',
      description: 'Final touches, quality assurance, and handover of your luxury space, ready to exceed your expectations.',
      number: '04',
      details: ['Final inspection', 'Quality assurance', 'Client walkthrough', 'Handover ceremony']
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 
            ref={titleRef}
            className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8"
          >
            Our Process
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <div 
            ref={progressBarRef}
            className="w-64 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 mx-auto mb-8 rounded-full"
          />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A seamless journey from concept to completion, crafted with precision and passion for luxury excellence.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-7xl mx-auto">
          {/* Enhanced timeline line */}
          <div className="timeline-line absolute left-12 top-0 w-1 h-full bg-gradient-to-b from-amber-400/30 via-white/40 to-amber-400/30 transform origin-top scale-y-0 rounded-full" />
          
          <div className="space-y-24">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <div 
                  key={index}
                  className={`process-step flex items-center gap-16 ${
                    index % 2 === 1 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Enhanced timeline dot */}
                  <div className="absolute left-12 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transform -translate-x-1/2 border-4 border-black shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full animate-ping opacity-30" />
                    <div className="absolute inset-1 bg-white/20 rounded-full animate-pulse" />
                  </div>

                  {/* Enhanced process card */}
                  <div className="flex-1 group process-card" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="relative p-10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-700 shadow-2xl">
                      {/* Card glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Process number */}
                      <div className="process-number absolute top-6 right-6 text-6xl font-extralight text-white/10 group-hover:text-white/20 transition-colors duration-500">
                        {process.number}
                      </div>

                      {/* Enhanced icon */}
                      <div className="process-icon w-20 h-20 mb-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-300/10 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500" />
                        <div className="relative w-full h-full bg-gradient-to-br from-white/15 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10">
                          <Icon className="w-10 h-10 text-amber-400 group-hover:text-yellow-300 transition-colors duration-500" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-3xl font-light mb-6 text-white group-hover:text-amber-100 transition-colors duration-500">
                        {process.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-8 text-lg group-hover:text-gray-200 transition-colors duration-500">
                        {process.description}
                      </p>

                      {/* Enhanced details list */}
                      <ul className="space-y-3">
                        {process.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                            <ArrowRight className="w-4 h-4 text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="text-sm font-light tracking-wide">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Enhanced decorative elements */}
                      <div className="absolute top-6 left-6 w-3 h-3 bg-amber-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                      <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

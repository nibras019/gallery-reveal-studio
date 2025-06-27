
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Hammer, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%"
      }
    });

    // Process steps animation
    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.fromTo('.process-step', {
          x: -100,
          opacity: 0,
          scale: 0.6,
          rotationX: 30
        }, {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: {
            amount: 1.5,
            from: "start"
          },
          ease: "back.out(1.4)"
        });

        // Timeline line animation
        gsap.fromTo('.timeline-line', {
          scaleY: 0
        }, {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          delay: 0.5
        });
      }
    });

    // Floating animation for icons
    gsap.to('.process-icon', {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

  }, []);

  const processes = [
    {
      icon: Lightbulb,
      title: 'Concept & Vision',
      description: 'We begin with understanding your vision and transforming ideas into conceptual designs that reflect luxury and functionality.',
      number: '01'
    },
    {
      icon: Palette,
      title: 'Design Development',
      description: 'Our expert designers create detailed plans, 3D visualizations, and material selections that bring your vision to life.',
      number: '02'
    },
    {
      icon: Hammer,
      title: 'Construction & Build',
      description: 'Premium construction with meticulous attention to detail, using only the finest materials and craftsmanship.',
      number: '03'
    },
    {
      icon: CheckCircle,
      title: 'Completion & Handover',
      description: 'Final touches, quality assurance, and handover of your luxury space, ready to exceed your expectations.',
      number: '04'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8"
          >
            Our Process
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A seamless journey from concept to completion, crafted with precision and passion for luxury.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line absolute left-8 top-0 w-px h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20 transform origin-top scale-y-0" />
          
          <div className="space-y-20">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <div 
                  key={index}
                  className={`process-step flex items-center gap-12 ${
                    index % 2 === 1 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 border-4 border-black">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30" />
                  </div>

                  {/* Process number */}
                  <div className="text-8xl font-extralight text-white/10 min-w-[120px] text-center">
                    {process.number}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 group">
                    <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all duration-500">
                      {/* Icon */}
                      <div className="process-icon w-16 h-16 mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-xl blur-sm" />
                        <div className="relative w-full h-full bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-8 h-8 text-white/80" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-light mb-4 text-white group-hover:text-white transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {process.description}
                      </p>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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

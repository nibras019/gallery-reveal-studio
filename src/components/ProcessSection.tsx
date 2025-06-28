import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Cog, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate section entrance
    tl.fromTo(sectionRef.current, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate title
    tl.fromTo(titleRef.current, {
      opacity: 0,
      y: -30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

    // Animate timeline
    gsap.fromTo(timelineRef.current, {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%"
      }
    });
  }, []);

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Consultation",
      description: "Understanding your vision, requirements, and aspirations through detailed consultation sessions.",
      details: ["Site analysis", "Client briefing", "Vision alignment", "Budget planning"]
    },
    {
      icon: Palette,
      title: "Concept & Design",
      description: "Creating innovative design concepts that blend functionality with aesthetic excellence.",
      details: ["Conceptual sketches", "3D visualizations", "Material selection", "Design refinement"]
    },
    {
      icon: Cog,
      title: "Development & Planning",
      description: "Detailed planning and development of technical specifications and project timelines.",
      details: ["Technical drawings", "Project scheduling", "Permit coordination", "Quality planning"]
    },
    {
      icon: CheckCircle,
      title: "Execution & Delivery",
      description: "Flawless execution with attention to every detail, ensuring exceptional results.",
      details: ["Construction oversight", "Quality control", "Timeline management", "Final delivery"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-white/5 relative overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto lg:px-12">
        {/* Enhanced header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extralight tracking-wider mb-6 sm:mb-8 text-white"
          >
            Our Process
          </h2>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            A systematic approach to creating extraordinary architectural experiences
          </p>
        </div>

        {/* Process Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line - hidden on mobile, vertical on tablet, horizontal on desktop */}
          <div className="hidden sm:block absolute top-8 left-8 sm:left-1/2 sm:top-0 w-px sm:w-full sm:h-px h-full bg-gradient-to-b sm:bg-gradient-to-r from-white/20 via-white/60 to-white/20 sm:transform sm:-translate-x-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step relative group">
                  {/* Step card */}
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-black/60 transition-all duration-500 relative overflow-hidden">
                    {/* Step number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 text-sm font-light">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 group-hover:text-white transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-3 sm:mb-4 text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-1 sm:space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-500 text-xs sm:text-sm flex items-center">
                          <div className="w-1 h-1 bg-white/40 rounded-full mr-2 sm:mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Hover effects - simplified for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                  </div>

                  {/* Connection dots - only on larger screens */}
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-500" />
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

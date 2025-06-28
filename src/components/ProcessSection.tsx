
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Cog, CheckCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced section entrance
    gsap.fromTo(sectionRef.current, {
      opacity: 0,
      y: 80
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    // Enhanced title animation
    gsap.fromTo(titleRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%"
      }
    });

    // Enhanced timeline animation
    gsap.fromTo('.process-step-enhanced', {
      opacity: 0,
      scale: 0.8,
      y: 100,
      rotationY: 45
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      rotationY: 0,
      duration: 1.5,
      stagger: {
        amount: 1.2,
        from: "start"
      },
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 75%"
      }
    });

    // Parallax effect for process cards
    gsap.to('.process-step-enhanced', {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, []);

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Consultation",
      description: "Understanding your vision, requirements, and aspirations through detailed consultation sessions.",
      details: ["Site analysis", "Client briefing", "Vision alignment", "Budget planning"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Palette,
      title: "Concept & Design",
      description: "Creating innovative design concepts that blend functionality with aesthetic excellence.",
      details: ["Conceptual sketches", "3D visualizations", "Material selection", "Design refinement"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Cog,
      title: "Development & Planning",
      description: "Detailed planning and development of technical specifications and project timelines.",
      details: ["Technical drawings", "Project scheduling", "Permit coordination", "Quality planning"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "Execution & Delivery",
      description: "Flawless execution with attention to every detail, ensuring exceptional results.",
      details: ["Construction oversight", "Quality control", "Timeline management", "Final delivery"],
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 relative overflow-hidden px-4 sm:px-6">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent" />
      
      <div className="container mx-auto lg:px-12 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-wider mb-8 text-white"
          >
            Our Process
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-white/30" />
            <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse" />
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent via-white/60 to-white/30" />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl lg:max-w-5xl mx-auto leading-relaxed px-4">
            A systematic approach to creating extraordinary architectural experiences through proven methodology and innovative thinking
          </p>
        </div>

        {/* Enhanced Process Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Enhanced timeline connector */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step-enhanced relative group">
                  {/* Enhanced step card */}
                  <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-black/80 hover:border-white/20 transition-all duration-700 overflow-hidden group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Step number with enhanced styling */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/60 text-sm font-light border border-white/20 group-hover:bg-white/20 transition-all duration-500">
                      {index + 1}
                    </div>

                    {/* Enhanced icon with gradient background */}
                    <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 rounded-2xl blur-sm group-hover:opacity-30 group-hover:blur-md transition-all duration-500`} />
                      <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/30 transition-all duration-500">
                        <Icon className="w-10 h-10 text-white/80 group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Enhanced content */}
                    <h3 className="text-xl lg:text-2xl font-light mb-4 text-white leading-tight text-center group-hover:scale-105 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 text-center transition-colors duration-500">
                      {step.description}
                    </p>

                    {/* Enhanced details list */}
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-500 group-hover:text-gray-400 text-sm flex items-center transition-colors duration-500">
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Enhanced hover effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl`} />
                    
                    {/* Arrow connector for larger screens */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-white/30 group-hover:text-white/50 transition-colors duration-500">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  {/* Enhanced connection indicator */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full group-hover:bg-white/40 group-hover:scale-125 transition-all duration-500 z-10" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center mt-16 sm:mt-20">
          <button className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10 flex items-center text-lg font-light">
              Start Your Project Journey
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Palette, Settings, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.fromTo('.service-card', {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 15
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
          ease: "power3.out"
        });
      }
    });

    // Floating animation for service cards
    gsap.to('.service-card', {
      y: -15,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

  }, []);

  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative structures that define Dubai's evolving skyline with modern elegance.",
      features: ["Residential Design", "Commercial Architecture", "Mixed-Use Developments"]
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Luxury interior spaces with premium materials and bespoke furnishings.",
      features: ["Luxury Residences", "Corporate Interiors", "Hospitality Design"]
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "End-to-end coordination ensuring seamless execution from concept to completion.",
      features: ["Timeline Management", "Quality Control", "Budget Optimization"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extralight tracking-wider mb-6 sm:mb-8 text-white">
            Our Services
          </h2>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Comprehensive design solutions tailored to Dubai's unique landscape
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
                  {/* Floating icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-3 sm:mb-4 text-white tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-500 text-xs sm:text-sm flex items-center">
                        <div className="w-1 h-1 bg-white/40 rounded-full mr-2 sm:mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-500 text-sm sm:text-base">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

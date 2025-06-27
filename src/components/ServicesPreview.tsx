
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Palette, Home, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      title: 'Architecture',
      description: 'Innovative architectural solutions that blend modern aesthetics with functional excellence.',
      features: ['Commercial Buildings', 'Residential Complexes', 'Mixed-Use Developments']
    },
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Luxury interior spaces that reflect sophistication and comfort in every detail.',
      features: ['Residential Interiors', 'Commercial Spaces', 'Hospitality Design']
    },
    {
      icon: Palette,
      title: 'Project Management',
      description: 'End-to-end project execution with meticulous attention to quality and timeline.',
      features: ['Construction Management', 'Quality Control', 'Timeline Optimization']
    },
    {
      icon: Compass,
      title: 'Consultation',
      description: 'Expert guidance from concept to completion, ensuring your vision becomes reality.',
      features: ['Design Consultation', 'Feasibility Studies', 'Investment Advisory']
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8 text-white">
            Our Expertise
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive luxury services tailored to exceed your expectations and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="service-card group relative"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:from-white/12 group-hover:to-white/8 transition-all duration-700" />
                
                {/* Content */}
                <div className="relative p-8 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-xl blur-sm group-hover:blur-md transition-all duration-500" />
                    <div className="relative w-full h-full bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light mb-4 text-white group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

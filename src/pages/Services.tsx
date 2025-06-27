
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building2, Palette, Settings, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Services animation
    if (servicesRef.current) {
      gsap.fromTo('.service-card',
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%"
          }
        }
      );
    }
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative architectural solutions that blend modern design with regional influences, creating iconic structures that define Dubai's evolving skyline."
    },
    {
      icon: Palette,
      title: "Interior Design", 
      description: "Luxury interior spaces that reflect sophistication and comfort, incorporating premium materials and bespoke furnishings."
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "End-to-end project coordination ensuring seamless execution from concept to completion with attention to every detail."
    },
    {
      icon: Lightbulb,
      title: "Design Consulting",
      description: "Strategic design guidance and consultation services to help clients realize their vision for exceptional living and working spaces."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-black to-purple-900/15" />
        <div ref={heroRef} className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8">
            Our Services
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8" />
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Comprehensive design solutions that transform spaces into extraordinary experiences, 
            tailored to the unique landscape and lifestyle of Dubai.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
                  <service.icon className="w-12 h-12 mb-6 text-white/80 group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-light mb-4 tracking-wide">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-light text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Consultation', 'Concept', 'Development', 'Delivery'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                  {index + 1}
                </div>
                <h4 className="text-lg font-light mb-2">{step}</h4>
                <p className="text-gray-400 text-sm">
                  {index === 0 && "Understanding your vision and requirements"}
                  {index === 1 && "Creating innovative design concepts"}
                  {index === 2 && "Refining and developing the design"}
                  {index === 3 && "Flawless execution and completion"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

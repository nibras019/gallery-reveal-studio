
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Users, Building, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo('.stat-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-black to-blue-900/15" />
        <div ref={heroRef} className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8">
            About Dubai Luxe
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8" />
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Since 2010, we have been at the forefront of luxury architectural design and interior excellence, 
            transforming Dubai's skyline with innovative and sophisticated projects.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <Building className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-3xl font-light mb-2">150+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="stat-item text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-3xl font-light mb-2">50+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="stat-item text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-3xl font-light mb-2">25+</div>
              <div className="text-gray-400 text-sm">Design Awards</div>
            </div>
            <div className="stat-item text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-3xl font-light mb-2">14</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in the heart of Dubai, we began with a vision to redefine luxury living 
                through exceptional architectural design and world-class interior solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our team of international designers and architects brings together diverse 
                perspectives to create spaces that embody the spirit of modern Dubai while 
                honoring traditional Middle Eastern aesthetics.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we continue to push boundaries, creating iconic developments that 
                set new standards for luxury and innovation in the region.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

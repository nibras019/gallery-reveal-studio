
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Team cards entrance animation
    gsap.fromTo('.team-card', {
      y: 150,
      opacity: 0,
      rotationY: 45,
      scale: 0.7
    }, {
      y: 0,
      opacity: 1,
      rotationY: 0,
      scale: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });

    // Floating animation for team cards
    gsap.to('.team-card', {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

  }, []);

  const teamMembers = [
    {
      name: "Ahmed Al-Rashid",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Leading architectural innovation with 15+ years of experience in luxury developments."
    },
    {
      name: "Sarah Mitchell",
      role: "Interior Design Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b4b02a2e?w=400&h=400&fit=crop&crop=face",
      bio: "Crafting exceptional interior experiences that blend luxury with functionality."
    },
    {
      name: "Omar Hassan",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Ensuring flawless project execution from concept to completion."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-white/5 relative overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extralight tracking-wider mb-6 sm:mb-8 text-white">
            Our Team
          </h2>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            Meet the visionaries behind Dubai's most prestigious architectural projects
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card group relative">
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:from-white/15 group-hover:to-white/10 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative p-6 sm:p-8">
                {/* Image */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-white/60 text-sm sm:text-base mb-4 sm:mb-6">
                    {member.role}
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 group-hover:text-gray-300 transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group/btn">
                      <Linkedin className="w-4 h-4 text-white/60 group-hover/btn:text-white transition-colors duration-300" />
                    </button>
                    <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group/btn">
                      <Mail className="w-4 h-4 text-white/60 group-hover/btn:text-white transition-colors duration-300" />
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

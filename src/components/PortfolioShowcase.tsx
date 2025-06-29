
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PortfolioShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    // Animate showcase items
    gsap.fromTo('.showcase-item', {
      y: 100,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });

    // Parallax for background images
    gsap.to('.showcase-bg', {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, []);

  const projects = [
    {
      title: "Burj Vista Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      description: "Luxury high-rise living with panoramic city views"
    },
    {
      title: "Emirates Business Hub",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      description: "Modern corporate headquarters with innovative design"
    },
    {
      title: "Dubai Marina Towers",
      category: "Mixed-Use",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      description: "Iconic twin towers redefining the marina skyline"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="container mx-auto lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extralight tracking-wider mb-6 sm:mb-8 text-white">
            Portfolio Showcase
          </h2>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            Explore our signature projects that have shaped Dubai's architectural landscape
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative mb-12 sm:mb-16">
          <div className="relative h-64 sm:h-80 lg:h-[70vh] rounded-2xl overflow-hidden">
            <div 
              className="showcase-bg absolute inset-0 transition-all duration-700"
              style={{
                backgroundImage: `url(${projects[activeProject].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="text-white/60 text-sm sm:text-base mb-2">
                    {projects[activeProject].category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base max-w-md">
                    {projects[activeProject].description}
                  </p>
                </div>
                <button className="group flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <span className="mr-2 text-sm sm:text-base">View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`showcase-item relative cursor-pointer group transition-all duration-500 ${
                activeProject === index ? 'ring-2 ring-white/30' : ''
              }`}
              onClick={() => setActiveProject(index)}
            >
              <div className="relative h-32 sm:h-40 lg:h-48 rounded-xl overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="text-white text-sm sm:text-base font-light">
                    {project.title}
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="group flex items-center mx-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/20 transition-all duration-300">
            <span className="mr-2 sm:mr-3 text-sm sm:text-base">View Full Portfolio</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;

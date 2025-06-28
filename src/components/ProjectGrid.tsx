
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/project';

gsap.registerPlugin(ScrollTrigger);

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current && headerRef.current) {
      const items = gridRef.current.querySelectorAll('.project-grid-item');
      
      // Enhanced header animation
      gsap.fromTo(headerRef.current.children, {
        y: 60,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%"
        }
      });

      // Enhanced grid entrance with mobile-friendly animations
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 90%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(items, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotationX: 20
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            stagger: {
              amount: 0.8,
              from: "start",
              ease: "power2.out"
            },
            ease: "back.out(1.1)"
          });
        }
      });

      // Mobile-friendly parallax effect
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        gsap.to(items, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]);

  return (
    <div className="relative">
      {/* Enhanced header section */}
      <div ref={headerRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-wider mb-4 sm:mb-6 lg:mb-8 text-white">
          Featured Projects
        </h2>
        <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4 sm:mb-6 lg:mb-8" />
        <div className="w-32 sm:w-48 lg:w-64 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 mx-auto mb-6 sm:mb-8 lg:mb-12 rounded-full" />
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
          Discover our portfolio of exceptional luxury developments that define architectural excellence in Dubai.
        </p>
      </div>

      <div 
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 pb-12 sm:pb-16 lg:pb-20 relative"
        style={{ perspective: '1000px' }}
      >
        {/* Enhanced grid background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/3 via-transparent to-transparent pointer-events-none" />
        
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
            index={index}
          />
        ))}
        
        {/* Mobile-friendly floating decorations */}
        <div className="hidden sm:block absolute top-20 right-20 w-4 lg:w-6 h-4 lg:h-6 bg-amber-400/20 rounded-full animate-pulse" />
        <div className="hidden sm:block absolute bottom-32 left-24 w-2 lg:w-3 h-2 lg:h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="hidden md:block absolute top-1/2 right-1/4 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-yellow-300/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default ProjectGrid;

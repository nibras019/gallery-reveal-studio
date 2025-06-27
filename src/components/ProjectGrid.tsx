
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

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.project-grid-item');
      
      // Enhanced ScrollTrigger animation with 3D effects
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 85%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(items, {
            opacity: 0,
            y: 150,
            scale: 0.6,
            rotationX: 30,
            rotationY: 15,
            z: -200
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            z: 0,
            duration: 1.2,
            stagger: {
              amount: 1,
              from: "start",
              ease: "power2.out"
            },
            ease: "power3.out"
          });
        },
        onLeave: () => {
          gsap.to(items, {
            opacity: 0.6,
            scale: 0.95,
            duration: 0.3,
            stagger: 0.05
          });
        },
        onEnterBack: () => {
          gsap.to(items, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.05
          });
        }
      });

      // Individual item scroll animations
      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 90%",
          end: "bottom 10%",
          onEnter: () => {
            gsap.to(item, {
              y: -10,
              duration: 2,
              ease: "power1.inOut",
              yoyo: true,
              repeat: -1,
              delay: index * 0.2
            });
          }
        });
      });

      // Parallax effect for grid items
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-20 relative"
    >
      {/* Grid background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none" />
      
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
          index={index}
        />
      ))}
      
      {/* Floating grid decorations */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-16 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default ProjectGrid;

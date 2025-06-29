
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

      // Enhanced grid entrance with magnetic effect
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 85%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(items, {
            opacity: 0,
            y: 200,
            scale: 0.4,
            rotationX: 45,
            rotationY: 25,
            z: -300
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            z: 0,
            duration: 1.8,
            stagger: {
              amount: 1.5,
              from: "random",
              ease: "power2.out"
            },
            ease: "back.out(1.2)"
          });
        },
        onLeave: () => {
          gsap.to(items, {
            opacity: 0.7,
            scale: 0.95,
            duration: 0.4,
            stagger: 0.05
          });
        },
        onEnterBack: () => {
          gsap.to(items, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.05
          });
        }
      });

      // Enhanced individual item animations
      items.forEach((item, index) => {
        // Floating animation with unique timing
        gsap.to(item, {
          y: -15 + (index % 3) * 5,
          rotation: (index % 2 === 0) ? 1 : -1,
          duration: 3 + Math.random() * 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.3
        });

        // Magnetic mouse interaction
        const handleMouseMove = (e: MouseEvent) => {
          const rect = (item as HTMLElement).getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) * 0.1;
          const deltaY = (e.clientY - centerY) * 0.1;

          gsap.to(item, {
            x: deltaX,
            y: deltaY,
            rotationY: deltaX * 0.1,
            rotationX: -deltaY * 0.1,
            duration: 0.6,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(item, {
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        };

        item.addEventListener('mousemove', handleMouseMove);
        item.addEventListener('mouseleave', handleMouseLeave);
      });

      // Enhanced parallax with layered movement
      gsap.to(items, {
        yPercent: (index) => -15 - (index % 3) * 5,
        ease: "none",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

      // Grid morphing effect
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(items, {
            scale: 1 + progress * 0.02,
            rotationZ: progress * 2,
            duration: 0.3
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]);

  return (
    <div className="relative">
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-20 relative"
        style={{ perspective: '1000px' }}
      >
        {/* Enhanced grid background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/5 via-transparent to-transparent pointer-events-none" />
        
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
            index={index}
          />
        ))}
        
        {/* Enhanced floating decorations */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-amber-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-24 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-300/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default ProjectGrid;

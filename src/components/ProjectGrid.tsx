
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
      
      // Initial animation for grid items
      gsap.fromTo(items, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8 
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8, 
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [projects]);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-20"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;

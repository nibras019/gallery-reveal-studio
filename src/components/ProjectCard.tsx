
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    if (!card || !image || !overlay) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        rotationY: 3,
        rotationX: 1,
        z: 50,
        duration: 0.6,
        ease: "power3.out"
      });

      gsap.to(image, {
        scale: 1.1,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 0.6,
        ease: "power3.out"
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="project-grid-item cursor-pointer group perspective-1000"
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/5] shadow-2xl">
        <img
          ref={imageRef}
          src={project.featuredImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-black/60 opacity-0 flex items-end p-6"
        >
          <div className="text-white">
            <h3 className="text-xl lg:text-2xl font-light mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2 uppercase tracking-wide">
              {project.category} • {project.year}
            </p>
            <p className="text-sm text-gray-400 line-clamp-2">
              {project.shortDescription}
            </p>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

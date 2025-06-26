
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;
    const details = detailsRef.current;
    const border = borderRef.current;

    if (!card || !image || !overlay || !title || !details || !border) return;

    // Initial state
    gsap.set(border, { scaleX: 0, scaleY: 0 });

    const handleMouseEnter = () => {
      const tl = gsap.timeline();
      
      // Card transformation with enhanced 3D effect
      tl.to(card, {
        scale: 1.08,
        rotationY: 8,
        rotationX: 3,
        z: 100,
        duration: 0.8,
        ease: "power3.out"
      })
      
      // Image zoom with parallax effect
      .to(image, {
        scale: 1.2,
        rotationZ: -2,
        duration: 1.2,
        ease: "power3.out"
      }, 0)
      
      // Overlay fade without backdrop blur
      .to(overlay, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, 0.2)
      
      // Border animation
      .to(border, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out"
      }, 0.1)
      
      // Text animations
      .fromTo(title, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, 0.3)
      
      .fromTo(details, {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      }, 0.4);
    };

    const handleMouseLeave = () => {
      const tl = gsap.timeline();
      
      tl.to(card, {
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 0.6,
        ease: "power3.out"
      })
      
      .to(image, {
        scale: 1,
        rotationZ: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 0)
      
      .to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out"
      }, 0)
      
      .to(border, {
        scaleX: 0,
        scaleY: 0,
        duration: 0.4,
        ease: "power2.in"
      }, 0)
      
      .to([title, details], {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      }, 0);
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
      className="project-grid-item cursor-pointer group perspective-1000 relative"
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated border */}
      <div 
        ref={borderRef}
        className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-lg"
        style={{ transformOrigin: 'center' }}
      />
      
      <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/5] shadow-2xl">
        <img
          ref={imageRef}
          src={project.featuredImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 flex items-end p-8"
        >
          <div className="text-white w-full">
            <h3 
              ref={titleRef}
              className="text-2xl lg:text-3xl font-light mb-3 tracking-wide"
            >
              {project.title}
            </h3>
            <div ref={detailsRef}>
              <p className="text-sm text-gray-300 mb-3 uppercase tracking-widest font-medium">
                {project.category} • {project.year}
              </p>
              <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                {project.shortDescription}
              </p>
              {project.location && (
                <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">
                  {project.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced arrow indicator */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20">
          <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      </div>
    </div>
  );
};

export default ProjectCard;

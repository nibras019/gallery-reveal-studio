
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Eye } from 'lucide-react';
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;
    const details = detailsRef.current;
    const border = borderRef.current;
    const button = buttonRef.current;
    const arrow = arrowRef.current;

    if (!card || !image || !overlay || !title || !details || !border || !button || !arrow) return;

    // Initial state
    gsap.set(border, { scaleX: 0, scaleY: 0 });
    gsap.set(button, { scale: 0, opacity: 0 });

    // Check if mobile
    const isMobile = window.innerWidth < 768;

    const handleMouseEnter = () => {
      const tl = gsap.timeline();
      
      // Card transformation - reduced for mobile
      tl.to(card, {
        scale: isMobile ? 1.02 : 1.05,
        rotationY: isMobile ? 2 : 5,
        rotationX: isMobile ? 1 : 2,
        z: isMobile ? 20 : 50,
        duration: 0.6,
        ease: "power3.out"
      })
      
      // Image zoom
      .to(image, {
        scale: isMobile ? 1.05 : 1.15,
        duration: 0.8,
        ease: "power3.out"
      }, 0)
      
      // Overlay fade
      .to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.1)
      
      // Border animation
      .to(border, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.5,
        ease: "power2.out"
      }, 0.1)
      
      // Enhanced button animation
      .to(button, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, 0.2)
      
      // Arrow animation
      .to(arrow, {
        rotation: 45,
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out"
      }, 0.4)
      
      // Text animations
      .fromTo(title, {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out"
      }, 0.2)
      
      .fromTo(details, {
        y: 15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out"
      }, 0.3);
    };

    const handleMouseLeave = () => {
      const tl = gsap.timeline();
      
      tl.to(card, {
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 0.5,
        ease: "power3.out"
      })
      
      .to(image, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      }, 0)
      
      .to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      
      .to(border, {
        scaleX: 0,
        scaleY: 0,
        duration: 0.3,
        ease: "power2.in"
      }, 0)
      
      .to(button, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      }, 0)
      
      .to(arrow, {
        rotation: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      
      .to([title, details], {
        y: 15,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      }, 0);
    };

    // Enhanced button click animation
    const handleButtonClick = (e: Event) => {
      e.stopPropagation();
      
      // Button press animation
      gsap.timeline()
        .to(button, {
          scale: 0.9,
          duration: 0.1,
          ease: "power2.inOut"
        })
        .to(button, {
          scale: 1.1,
          duration: 0.2,
          ease: "back.out(2)"
        })
        .to(button, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out"
        });

      // Ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'absolute inset-0 bg-white/20 rounded-full animate-ping';
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
      
      onClick();
    };

    if (!isMobile) {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    
    button.addEventListener('click', handleButtonClick);

    return () => {
      if (!isMobile) {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
      button.removeEventListener('click', handleButtonClick);
    };
  }, [onClick]);

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
        className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-lg"
        style={{ transformOrigin: 'center' }}
      />
      
      <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/5] shadow-xl sm:shadow-2xl">
        <img
          ref={imageRef}
          src={project.featuredImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 flex items-end p-4 sm:p-6 lg:p-8"
        >
          <div className="text-white w-full">
            <h3 
              ref={titleRef}
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light mb-2 sm:mb-3 tracking-wide"
            >
              {project.title}
            </h3>
            <div ref={detailsRef}>
              <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 uppercase tracking-widest font-medium">
                {project.category} • {project.year}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 sm:line-clamp-3 leading-relaxed mb-3 sm:mb-4">
                {project.shortDescription}
              </p>
              {project.location && (
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 sm:mb-4">
                  {project.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced animated button */}
        <button
          ref={buttonRef}
          className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 group/btn"
          onClick={(e) => e.stopPropagation()}
        >
          <div ref={arrowRef} className="relative">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover/btn:scale-110 transition-transform duration-200" />
          </div>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Mobile-friendly view indicator */}
        <div className="sm:hidden absolute bottom-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
          <Eye className="w-4 h-4 text-white" />
        </div>
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none" />
      </div>
    </div>
  );
};

export default ProjectCard;

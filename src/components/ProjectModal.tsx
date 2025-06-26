
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const modal = modalRef.current;
    const content = contentRef.current;
    const backdrop = backdropRef.current;

    if (!modal || !content || !backdrop) return;

    // Initial setup
    gsap.set(modal, { opacity: 0 });
    gsap.set(content, { scale: 0.8, y: 50, opacity: 0 });
    gsap.set(backdrop, { backdropFilter: 'blur(0px)' });

    // Animation timeline
    const tl = gsap.timeline();
    
    tl.to(modal, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(backdrop, {
      backdropFilter: 'blur(10px)',
      duration: 0.4,
      ease: "power2.out"
    }, 0)
    .to(content, {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }, 0.1);

    // Prevent scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    const modal = modalRef.current;
    const content = contentRef.current;

    if (!modal || !content) return;

    const tl = gsap.timeline({
      onComplete: onClose
    });

    tl.to(content, {
      scale: 0.8,
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    })
    .to(modal, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, 0.1);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div 
        ref={backdropRef}
        className="absolute inset-0 bg-black/80"
      />
      
      <div 
        ref={contentRef}
        className="relative bg-white text-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Image Gallery */}
          <div className="relative bg-gray-100">
            <div className="relative h-full min-h-[300px] md:min-h-[500px]">
              <img
                src={project.galleryImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {project.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
            <div>
              <div className="mb-6">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  {project.category} • {project.year}
                </p>
                <h2 className="text-3xl lg:text-4xl font-light mb-4">{project.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {(project.client || project.location) && (
                <div className="mb-6 grid grid-cols-2 gap-4">
                  {project.client && (
                    <div>
                      <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">Client</p>
                      <p className="text-gray-900">{project.client}</p>
                    </div>
                  )}
                  {project.location && (
                    <div>
                      <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">Location</p>
                      <p className="text-gray-900">{project.location}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {project.bodyContent}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button 
                onClick={handleClose}
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

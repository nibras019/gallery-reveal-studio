
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';
import CategoryFilter from '@/components/CategoryFilter';
import Header from '@/components/Header';
import { mockProjects, categories } from '@/data/mockData';
import { Project } from '@/types/project';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const heroBackgroundRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling
    gsap.registerPlugin(ScrollTrigger);
    
    // Enhanced page load animations
    const tl = gsap.timeline();
    
    // Background animation with parallax setup
    gsap.set(heroBackgroundRef.current, { scale: 1.2 });
    
    // Background parallax animation
    gsap.to(heroBackgroundRef.current, {
      yPercent: -30,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Header entrance with enhanced effects
    tl.from(headerRef.current, {
      y: -150,
      opacity: 0,
      scale: 0.95,
      duration: 1.8,
      ease: "power4.out"
    })
    
    // Filter section with staggered animation
    .from(filterRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1.2")
    
    // Main content reveal
    .from(mainRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out"
    }, "-=0.8");

    // Advanced scroll-triggered animations for content sections
    ScrollTrigger.create({
      trigger: filterRef.current,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => {
        gsap.fromTo('.filter-button', {
          x: -50,
          opacity: 0,
          scale: 0.8
        }, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)"
        });
      }
    });

    // Project grid entrance animation
    ScrollTrigger.create({
      trigger: '.project-grid',
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo('.project-grid-item', {
          y: 120,
          opacity: 0,
          scale: 0.7,
          rotationY: 15
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: {
            amount: 0.6,
            from: "start",
            ease: "power2.out"
          },
          ease: "power3.out"
        });
      }
    });

    // Floating elements animation
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Text reveal animations for any text elements
    const textElements = document.querySelectorAll('.reveal-text');
    textElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(element, {
            y: 50,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
          });
        }
      });
    });

    // Scroll progress indicator
    gsap.to('.scroll-progress', {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(mockProjects);
    } else {
      setFilteredProjects(mockProjects.filter(project => 
        project.category === selectedCategory
      ));
    }
  }, [selectedCategory]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Scroll progress indicator */}
      <div className="scroll-progress fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 origin-left scale-x-0 z-50" />
      
      {/* Enhanced animated background with parallax */}
      <div 
        ref={heroBackgroundRef}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-black to-blue-900/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="floating-element fixed top-20 right-10 w-2 h-2 bg-white/20 rounded-full" />
      <div className="floating-element fixed top-1/3 left-10 w-1 h-1 bg-white/30 rounded-full" />
      <div className="floating-element fixed bottom-1/4 right-1/4 w-1.5 h-1.5 bg-white/15 rounded-full" />
      
      <div ref={contentWrapperRef} className="relative z-10">
        <div ref={headerRef}>
          <Header />
        </div>

        <main ref={mainRef} className="container mx-auto px-6 lg:px-12 relative">
          <div ref={filterRef} className="mb-16">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <div className="project-grid">
            <ProjectGrid
              projects={filteredProjects}
              onProjectClick={handleProjectClick}
            />
          </div>
        </main>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
      
      {/* Enhanced noise texture with animation */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxmaWx0ZXIgaWQ9Im5vaXNlIj4KPGZLVHV2dWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-repeat animate-pulse" />
    </div>
  );
};

export default Index;

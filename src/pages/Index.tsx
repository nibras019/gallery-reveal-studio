
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

  useEffect(() => {
    // Enhanced page load animations
    const tl = gsap.timeline();
    
    // Background animation
    gsap.to('body', {
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      duration: 2,
      ease: "power2.out"
    });
    
    // Header entrance
    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    })
    
    // Filter section
    .from(filterRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    
    // Main content reveal
    .from(mainRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.6");

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to('.project-grid-item', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        });
      }
    });

    // Parallax background effect
    gsap.to('.bg-gradient', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top bottom",
        end: "bottom top",
        scrub: true
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
      {/* Animated background gradients */}
      <div className="bg-gradient fixed inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div ref={headerRef}>
        <Header />
      </div>

      <main ref={mainRef} className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={filterRef} className="mb-16">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
        />
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
      
      {/* Subtle noise texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxmaWx0ZXIgaWQ9Im5vaXNlIj4KPGZLVHV2dWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-repeat" />
    </div>
  );
};

export default Index;

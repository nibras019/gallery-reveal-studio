
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

  useEffect(() => {
    // Page load animations
    const tl = gsap.timeline();
    
    tl.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(filterRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

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
    <div className="min-h-screen bg-black text-white">
      <div ref={headerRef}>
        <Header />
      </div>

      <main className="container mx-auto px-6 lg:px-12">
        <div ref={filterRef} className="mb-12">
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
    </div>
  );
};

export default Index;

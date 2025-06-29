
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';
import CategoryFilter from '@/components/CategoryFilter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HeroStats from '@/components/HeroStats';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import { mockProjects, categories } from '@/data/mockData';
import { Project } from '@/types/project';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Enhanced Featured Projects section animation
    if (sectionRef.current && titleRef.current && lineRef.current && filterRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Title animation with letter reveal effect
      const titleText = titleRef.current.textContent;
      if (titleText) {
        titleRef.current.innerHTML = titleText.split('').map(char => 
          char === ' ' ? ' ' : `<span class="inline-block letter-reveal">${char}</span>`
        ).join('');

        tl.fromTo('.letter-reveal', {
          y: 100,
          opacity: 0,
          rotationX: -90,
          scale: 0.5
        }, {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          ease: "back.out(1.7)"
        });
      }

      // Decorative line animation with glow effect
      tl.fromTo(lineRef.current, {
        scaleX: 0,
        opacity: 0
      }, {
        scaleX: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power3.out"
      }, "-=0.8");

      // Filter animation
      tl.fromTo(filterRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5");

      // Floating animation for title letters
      gsap.to('.letter-reveal', {
        y: -3,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          amount: 2,
          from: "random"
        },
        delay: 1
      });

      // Parallax effect for the entire section
      gsap.to(sectionRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

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
      <Navigation />
      
      {/* Scroll progress indicator */}
      <div className="scroll-progress fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 origin-left scale-x-0 z-50" />
      
      <div className="relative z-10">
        <HeroSection />
        <HeroStats />
        <AboutPreview />
        <ServicesPreview />
        <PortfolioShowcase />

        <main ref={sectionRef} className="container mx-auto px-6 lg:px-12 relative py-20">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent opacity-50 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/5 via-transparent to-transparent pointer-events-none" />

          {/* Floating decorative elements */}
          <div className="absolute top-10 right-20 w-6 h-6 bg-amber-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-24 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-300/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />

          <div className="text-center mb-16 relative">
            <h2 
              ref={titleRef}
              className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8 text-white perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Featured Projects
            </h2>
            <div 
              ref={lineRef}
              className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12 relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/50 blur-sm" />
            </div>
          </div>

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

        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
      </div>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
      
      {/* Enhanced noise texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxmaWx0ZXIgaWQ9Im5vaXNlIj4KPGZLVHV2dWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-repeat animate-pulse" />
    </div>
  );
};

export default Index;

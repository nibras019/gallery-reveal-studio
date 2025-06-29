
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Phone } from 'lucide-react';
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
  const filterRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    // CTA buttons animation
    if (ctaRef.current) {
      gsap.fromTo('.cta-button',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%"
          }
        }
      );
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
        
        {/* CTA Buttons Section */}
        <section ref={ctaRef} className="py-20 bg-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light mb-4">Explore Our World</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover our story, services, and how we can transform your vision into reality
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Link to="/about" className="cta-button group">
                <div className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg p-8 transition-all duration-300 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-white/80 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-light mb-3">About Us</h3>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300">
                    Learn about our journey and expertise in luxury design
                  </p>
                  <div className="flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm">Discover More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link to="/services" className="cta-button group">
                <div className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg p-8 transition-all duration-300 text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-white/80 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-light mb-3">Our Services</h3>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300">
                    Explore our comprehensive design and architectural solutions
                  </p>
                  <div className="flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm">View Services</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link to="/contact" className="cta-button group">
                <div className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg p-8 transition-all duration-300 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-white/80 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-light mb-3">Contact Us</h3>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300">
                    Ready to start your luxury design journey with us?
                  </p>
                  <div className="flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm">Get In Touch</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <ServicesPreview />
        <PortfolioShowcase />

        <main className="container mx-auto px-6 lg:px-12 relative py-20">
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8 text-white">
              Featured Projects
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12" />
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

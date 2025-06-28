
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Category } from '@/types/project';

gsap.registerPlugin(ScrollTrigger);

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    // Enhanced ScrollTrigger animations
    ScrollTrigger.create({
      trigger: filterRef.current,
      start: "top 95%",
      end: "bottom 10%",
      onEnter: () => {
        // Background animation
        gsap.fromTo(backgroundRef.current, {
          scale: 0.9,
          opacity: 0,
          rotationZ: isMobile ? 0 : 3
        }, {
          scale: 1,
          opacity: 0.5,
          rotationZ: 0,
          duration: 1.2,
          ease: "power3.out"
        });

        // Staggered button animations
        gsap.fromTo('.filter-button', {
          x: isMobile ? 0 : -40,
          y: isMobile ? 30 : 0,
          opacity: 0,
          scale: 0.8
        }, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: "start",
            ease: "power2.out"
          },
          ease: "back.out(1.2)"
        });
      }
    });

  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    
    // Enhanced filter animation
    const tl = gsap.timeline();
    
    tl.to('.project-grid-item', {
      scale: 0.9,
      opacity: 0.5,
      duration: 0.4,
      stagger: {
        amount: 0.2,
        from: "random"
      },
      ease: "power2.inOut"
    })
    .to('.project-grid-item', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: {
        amount: 0.4,
        from: "start"
      },
      ease: "back.out(1.1)"
    }, "+=0.1");

    // Active button animation
    const clickedButton = document.querySelector(`[data-category="${categoryId}"]`);
    if (clickedButton) {
      gsap.timeline()
        .to(clickedButton, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.inOut"
        })
        .to(clickedButton, {
          scale: 1.05,
          duration: 0.2,
          ease: "back.out(2)"
        })
        .to(clickedButton, {
          scale: 1,
          duration: 0.15,
          ease: "power2.out"
        });
    }
  };

  return (
    <div className="relative mb-8 sm:mb-12 lg:mb-16" ref={filterRef}>
      {/* Enhanced background with mobile optimization */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-white/3 sm:bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-full transform scale-105 sm:scale-110 opacity-50"
      />
      
      {/* Mobile-friendly decorative elements */}
      <div className="hidden sm:block absolute -top-2 lg:-top-4 -left-2 lg:-left-4 w-4 lg:w-8 h-4 lg:h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse" />
      <div className="hidden sm:block absolute -bottom-2 lg:-bottom-4 -right-2 lg:-right-4 w-3 lg:w-6 h-3 lg:h-6 bg-gradient-to-tl from-white/15 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6 relative z-10 p-4 sm:p-6 lg:p-8">
        {categories.map((category, index) => (
          <button
            key={category.id}
            data-category={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              filter-button relative px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-4 rounded-full border transition-all duration-300 text-xs sm:text-sm lg:text-base font-light tracking-wide
              hover:scale-105 sm:hover:scale-110 backdrop-blur-sm transform-gpu
              ${selectedCategory === category.id
                ? 'bg-white/15 sm:bg-white/20 text-white border-white/40 shadow-lg sm:shadow-xl shadow-white/10'
                : 'bg-white/5 sm:bg-white/8 text-gray-300 border-gray-500/30 hover:border-white/40 hover:bg-white/10 hover:text-white'
              }
            `}
          >
            {/* Enhanced button glow effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              selectedCategory === category.id 
                ? 'bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-100' 
                : 'opacity-0'
            }`} />
            
            <span className="relative z-10 whitespace-nowrap">{category.name}</span>
            
            {/* Enhanced active indicator */}
            {selectedCategory === category.id && (
              <>
                <div className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-white/20 sm:border-white/30 animate-ping" />
              </>
            )}
          </button>
        ))}
      </div>
      
      {/* Mobile-optimized floating particles */}
      <div className="hidden md:block absolute top-1/2 left-2 lg:left-4 w-0.5 lg:w-1 h-0.5 lg:h-1 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="hidden lg:block absolute top-1/4 right-4 lg:right-8 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default CategoryFilter;

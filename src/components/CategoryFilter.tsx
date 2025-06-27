
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
    // Enhanced ScrollTrigger animations
    ScrollTrigger.create({
      trigger: filterRef.current,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => {
        // Background animation
        gsap.fromTo(backgroundRef.current, {
          scale: 0.8,
          opacity: 0,
          rotationZ: 5
        }, {
          scale: 1,
          opacity: 0.5,
          rotationZ: 0,
          duration: 1.5,
          ease: "power3.out"
        });

        // Staggered button animations
        gsap.fromTo('.filter-button', {
          x: -60,
          opacity: 0,
          scale: 0.7,
          rotationY: -15
        }, {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: {
            amount: 0.8,
            from: "start",
            ease: "power2.out"
          },
          ease: "back.out(1.4)"
        });
      },
      onLeave: () => {
        gsap.to('.filter-button', {
          scale: 0.95,
          opacity: 0.7,
          duration: 0.3,
          stagger: 0.05
        });
      },
      onEnterBack: () => {
        gsap.to('.filter-button', {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05
        });
      }
    });

    // Floating animation for the background
    gsap.to(backgroundRef.current, {
      y: -15,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    
    // Enhanced filter animation with 3D effects
    const tl = gsap.timeline();
    
    tl.to('.project-grid-item', {
      scale: 0.8,
      opacity: 0.3,
      rotationY: -20,
      z: -100,
      duration: 0.6,
      stagger: {
        amount: 0.4,
        from: "random"
      },
      ease: "power2.inOut"
    })
    .to('.project-grid-item', {
      scale: 1,
      opacity: 1,
      rotationY: 0,
      z: 0,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        from: "start"
      },
      ease: "back.out(1.2)"
    }, "+=0.2");

    // Active button animation with enhanced effects
    const clickedButton = document.querySelector(`[data-category="${categoryId}"]`);
    if (clickedButton) {
      gsap.timeline()
        .to(clickedButton, {
          scale: 0.9,
          rotationZ: -2,
          duration: 0.15,
          ease: "power2.inOut"
        })
        .to(clickedButton, {
          scale: 1.05,
          rotationZ: 0,
          duration: 0.25,
          ease: "back.out(2)"
        })
        .to(clickedButton, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
    }

    // Ripple effect
    gsap.fromTo('.filter-background-glow', {
      scale: 0.5,
      opacity: 0.8
    }, {
      scale: 1.5,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  };

  return (
    <div className="relative mb-16" ref={filterRef}>
      {/* Enhanced background with multiple layers */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full transform scale-110 opacity-50"
      />
      <div className="filter-background-glow absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-full opacity-0" />
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse" />
      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-tl from-white/15 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 relative z-10 p-8">
        {categories.map((category, index) => (
          <button
            key={category.id}
            data-category={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              filter-button relative px-8 py-4 rounded-full border transition-all duration-500 text-sm lg:text-base font-light tracking-wide
              hover:scale-110 hover:shadow-2xl backdrop-blur-sm transform-gpu perspective-1000
              ${selectedCategory === category.id
                ? 'bg-white/20 text-white border-white/40 shadow-xl shadow-white/10'
                : 'bg-white/5 text-gray-300 border-gray-500/30 hover:border-white/40 hover:bg-white/10 hover:text-white'
              }
            `}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Enhanced button glow effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              selectedCategory === category.id 
                ? 'bg-gradient-to-r from-white/15 via-white/10 to-white/15 opacity-100 shadow-inner' 
                : 'opacity-0'
            }`} />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
            
            <span className="relative z-10">{category.name}</span>
            
            {/* Enhanced active indicator */}
            {selectedCategory === category.id && (
              <>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
              </>
            )}
          </button>
        ))}
      </div>
      
      {/* Additional floating particles */}
      <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/4 right-8 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default CategoryFilter;

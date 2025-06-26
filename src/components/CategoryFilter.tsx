
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Category } from '@/types/project';

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
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current.children,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    
    // Enhanced filter animation
    const tl = gsap.timeline();
    
    tl.to('.project-grid-item', {
      scale: 0.9,
      opacity: 0.4,
      rotationY: -10,
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
      rotationY: 0,
      duration: 0.6,
      stagger: {
        amount: 0.3,
        from: "random"
      },
      ease: "power3.out"
    });

    // Button press animation
    const clickedButton = document.querySelector(`[data-category="${categoryId}"]`);
    if (clickedButton) {
      gsap.to(clickedButton, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <div className="relative mb-16">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full transform scale-110 opacity-50" />
      
      <div 
        ref={filterRef}
        className="flex flex-wrap justify-center gap-4 lg:gap-6 relative z-10 p-8"
      >
        {categories.map((category, index) => (
          <button
            key={category.id}
            data-category={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              relative px-8 py-4 rounded-full border transition-all duration-500 text-sm lg:text-base font-light tracking-wide
              hover:scale-110 hover:shadow-2xl backdrop-blur-sm
              ${selectedCategory === category.id
                ? 'bg-white/20 text-white border-white/40 shadow-xl shadow-white/10'
                : 'bg-white/5 text-gray-300 border-gray-500/30 hover:border-white/40 hover:bg-white/10 hover:text-white'
              }
            `}
          >
            {/* Button glow effect */}
            <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
              selectedCategory === category.id 
                ? 'bg-gradient-to-r from-white/10 to-white/5 opacity-100' 
                : 'opacity-0'
            }`} />
            
            <span className="relative z-10">{category.name}</span>
            
            {/* Active indicator */}
            {selectedCategory === category.id && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>
      
      {/* Animated background indicator */}
      <div 
        ref={indicatorRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full opacity-20 animate-pulse"
      />
    </div>
  );
};

export default CategoryFilter;

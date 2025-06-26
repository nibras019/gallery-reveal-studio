
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

  useEffect(() => {
    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current.children,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    
    // Animate filter change
    gsap.to('.project-grid-item', {
      scale: 0.8,
      opacity: 0.3,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to('.project-grid-item', {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out"
        });
      }
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6" ref={filterRef}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`
            px-6 py-3 rounded-full border transition-all duration-300 text-sm lg:text-base
            hover:scale-105 hover:shadow-lg
            ${selectedCategory === category.id
              ? 'bg-white text-black border-white shadow-lg'
              : 'bg-transparent text-white border-gray-600 hover:border-white hover:bg-white/10'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

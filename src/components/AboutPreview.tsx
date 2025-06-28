
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Users, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for the main image
    gsap.to(imageRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Content animation
    gsap.fromTo(contentRef.current?.children || [], {
      x: 100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%"
      }
    });

    // Image reveal animation
    gsap.fromTo(imageRef.current, {
      scale: 1.2,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%"
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div 
              ref={imageRef}
              className="relative h-64 sm:h-80 lg:h-[600px] rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
                alt="Dubai Luxe Architecture Projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-light text-white mb-1">150+</div>
                <div className="text-gray-300 text-sm">Luxury Projects</div>
              </div>
              
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extralight tracking-wider mb-4 sm:mb-6 text-white">
                About Dubai Luxe
              </h2>
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-white to-transparent mb-6 sm:mb-8" />
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
              For over a decade, Dubai Luxe has been at the forefront of architectural innovation, 
              creating iconic structures that define the city's evolving skyline. We specialize in 
              luxury residential, commercial, and mixed-use developments that embody the spirit of modern Dubai.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8">
              Our award-winning team combines international expertise with local insights, delivering 
              exceptional projects that exceed expectations. From concept to completion, we ensure 
              every detail reflects our commitment to excellence and innovation.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-xl font-light text-white">500M+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Project Value</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-xl font-light text-white">50+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Expert Team</div>
              </div>
            </div>

            <button className="group flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
              <span className="mr-2 sm:mr-3">Discover Our Story</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

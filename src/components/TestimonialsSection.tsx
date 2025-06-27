
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section entrance animation
    gsap.fromTo(sectionRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    // Cards animation
    ScrollTrigger.create({
      trigger: cardsRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.fromTo('.testimonial-card', {
          y: 120,
          opacity: 0,
          scale: 0.7,
          rotationY: 25
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.4,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          ease: "back.out(1.2)"
        });
      }
    });

    // Floating animation for quote icons
    gsap.to('.quote-icon', {
      y: -15,
      rotation: 5,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

  }, []);

  const testimonials = [
    {
      name: 'Sarah Al-Mansouri',
      role: 'CEO, Emirates Holdings',
      content: 'Dubai Luxe transformed our headquarters into a masterpiece. Their attention to detail and luxury finish exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b4b02a2e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mohammed Hassan',
      role: 'Real Estate Developer',
      content: 'Working with Dubai Luxe was exceptional. They delivered a world-class residential project that has become the benchmark in Dubai.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Elena Petrov',
      role: 'Hotel Owner',
      content: 'The luxury hotel design by Dubai Luxe has received international acclaim. Their vision brought our hospitality dreams to life.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl transform -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8">
            Client Stories
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our distinguished clients who have experienced the Dubai Luxe difference.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card relative group"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:from-white/15 group-hover:to-white/10 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Quote icon */}
                <div className="quote-icon mb-6">
                  <Quote className="w-12 h-12 text-white/20 transform rotate-180" />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-amber-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 leading-relaxed mb-8 text-lg group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.content}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-light text-lg group-hover:text-white transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

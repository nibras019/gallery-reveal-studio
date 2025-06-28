
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo('.contact-item', {
      y: 80,
      opacity: 0,
      scale: 0.9
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
      
      <div className="container mx-auto lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extralight tracking-wider mb-6 sm:mb-8 text-white">
            Get In Touch
          </h2>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your architectural vision to life? Contact our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          <div className="contact-item text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-light mb-2">Location</h3>
            <p className="text-gray-400 text-sm">DIFC, Dubai, UAE</p>
          </div>

          <div className="contact-item text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Phone className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-light mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+971 4 123 4567</p>
          </div>

          <div className="contact-item text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Mail className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-light mb-2">Email</h3>
            <p className="text-gray-400 text-sm">hello@dubailuxe.ae</p>
          </div>

          <div className="contact-item text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Clock className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-light mb-2">Hours</h3>
            <p className="text-gray-400 text-sm">Sun - Thu, 9AM - 6PM</p>
          </div>
        </div>

        <div className="text-center">
          <button className="group flex items-center mx-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300">
            <span className="mr-3">Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;

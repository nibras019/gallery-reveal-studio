
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(footerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            end: "bottom 20%"
          }
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-black/90 border-t border-white/10 py-12 sm:py-16 mt-16 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-light tracking-wider text-white mb-4 sm:mb-6">DUBAI LUXE</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Crafting exceptional architectural experiences and luxury interior designs 
              in the heart of Dubai. Where vision meets reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-light text-white mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">DIFC, Dubai, UAE</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 flex-shrink-0" />
                <span className="text-sm">+971 4 123 4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <span className="text-sm">hello@dubailuxe.ae</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-light text-white mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-gray-300 transition-colors cursor-pointer">Architectural Design</li>
              <li className="hover:text-gray-300 transition-colors cursor-pointer">Interior Design</li>
              <li className="hover:text-gray-300 transition-colors cursor-pointer">Project Management</li>
              <li className="hover:text-gray-300 transition-colors cursor-pointer">Luxury Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 Dubai Luxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


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
    <footer ref={footerRef} className="bg-black/90 border-t border-white/10 py-16 mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-light tracking-wider text-white mb-6">DUBAI LUXE</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting exceptional architectural experiences and luxury interior designs 
              in the heart of Dubai. Where vision meets reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3" />
                <span className="text-sm">DIFC, Dubai, UAE</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3" />
                <span className="text-sm">+971 4 123 4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3" />
                <span className="text-sm">hello@dubailuxe.ae</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light text-white mb-6">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Project Management</li>
              <li>Luxury Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Dubai Luxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <Link to="/" className="text-xl sm:text-2xl font-light tracking-wider text-white">
            DUBAI LUXE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-white ${
                  location.pathname === item.path 
                    ? 'text-white border-b border-white/30' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 sm:pb-6 border-t border-white/10 mt-4">
            <div className="pt-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 text-sm font-light tracking-wide transition-all duration-300 rounded-lg ${
                    location.pathname === item.path 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

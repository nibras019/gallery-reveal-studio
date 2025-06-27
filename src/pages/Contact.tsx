
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Form animation
    if (formRef.current) {
      gsap.fromTo('.form-element',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%"
          }
        }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-black to-purple-900/15" />
        <div ref={heroRef} className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extralight tracking-wider mb-8">
            Contact Us
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8" />
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Ready to transform your space? Let's discuss your vision and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mt-1 mr-4 text-white/80" />
                  <div>
                    <h4 className="font-light mb-1">Address</h4>
                    <p className="text-gray-400">
                      Dubai International Financial Centre<br />
                      Level 15, Gate Building<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mt-1 mr-4 text-white/80" />
                  <div>
                    <h4 className="font-light mb-1">Phone</h4>
                    <p className="text-gray-400">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mt-1 mr-4 text-white/80" />
                  <div>
                    <h4 className="font-light mb-1">Email</h4>
                    <p className="text-gray-400">hello@dubailuxe.ae</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-light mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p>Friday - Saturday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="form-element">
                  <label htmlFor="name" className="block text-sm font-light mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>
                
                <div className="form-element">
                  <label htmlFor="email" className="block text-sm font-light mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>
                
                <div className="form-element">
                  <label htmlFor="message" className="block text-sm font-light mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors resize-vertical"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="form-element w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg px-6 py-3 text-white font-light tracking-wide transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

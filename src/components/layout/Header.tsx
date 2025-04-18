import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ['inicio', 'nosotros', 'galeria', 'servicios', 'contacto'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-opacity duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('inicio')}>
            <Heart className="text-[#1860ff] transition-transform group-hover:scale-110" />
            <span className={`font-bold text-xl ${
              scrolled ? 'text-gray-800' : 'text-white'
            } group-hover:text-[#1860ff] transition-colors`}>
              Un Nuevo Día
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['inicio', 'nosotros', 'galeria', 'servicios', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative px-2 py-1 capitalize transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-[#1860ff]`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1860ff] transform origin-left transition-transform duration-300 ${
                  activeSection === item ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled 
                ? 'text-gray-800 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${
          isOpen ? 'top-[57px] opacity-100' : '-top-96 opacity-0'
        }`}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {['inicio', 'nosotros', 'galeria', 'servicios', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`p-3 text-left capitalize rounded-lg transition-all ${
                  activeSection === item
                    ? 'bg-[#1860ff]/10 text-[#1860ff] font-medium'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
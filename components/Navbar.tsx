import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page, id?: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    
    if (page === 'home' && id) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getLinkClass = (page: Page) => {
    const baseClass = "transition-colors text-sm font-medium uppercase tracking-wider cursor-pointer";
    if (currentPage === page) {
      return `${baseClass} text-white font-bold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary`;
    }
    return `${baseClass} text-gray-300 hover:text-primary`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-black/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-500 rounded flex items-center justify-center">
              <i className="ph-fill ph-cube text-white text-xl"></i>
            </div>
            <span className="font-display font-bold text-white text-xl tracking-wide uppercase">
              Pearl Gold Hub
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a onClick={() => handleNavClick('home')} className={getLinkClass('home')}>
              Home
            </a>
            <a onClick={() => handleNavClick('about')} className={getLinkClass('about')}>
              About Us
            </a>
            <a onClick={() => handleNavClick('services')} className={getLinkClass('services')}>
              Services
            </a>
            <a onClick={() => handleNavClick('contact')} className={getLinkClass('contact')}>
              Contact us
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <i className="ph ph-sun text-xl"></i>
              ) : (
                <i className="ph ph-moon text-xl"></i>
              )}
            </button>
            <a
              onClick={() => handleNavClick('contact')}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded font-medium transition-colors flex items-center gap-2 cursor-pointer"
            >
              Get In Touch <i className="ph ph-arrow-up-right"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white p-2 mr-2"
            >
              {darkMode ? <i className="ph ph-sun"></i> : <i className="ph ph-moon"></i>}
            </button>
            <button
              className="text-white hover:text-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a onClick={() => handleNavClick('home')} className="block text-white hover:text-primary py-2 font-medium uppercase tracking-wider cursor-pointer">Home</a>
            <a onClick={() => handleNavClick('about')} className="block text-gray-300 hover:text-primary py-2 font-medium uppercase tracking-wider cursor-pointer">About Us</a>
            <a onClick={() => handleNavClick('services')} className="block text-gray-300 hover:text-primary py-2 font-medium uppercase tracking-wider cursor-pointer">Services</a>
            <a onClick={() => handleNavClick('contact')} className="block text-gray-300 hover:text-primary py-2 font-medium uppercase tracking-wider cursor-pointer">Contact</a>
            <div className="pt-4 mt-4 border-t border-white/10">
              <a onClick={() => handleNavClick('contact')} className="block w-full text-center bg-primary text-white py-3 rounded font-bold uppercase cursor-pointer">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

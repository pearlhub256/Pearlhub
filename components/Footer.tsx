import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, page: Page, id?: string) => {
    e.preventDefault();
    onNavigate(page);
    if (page === 'home' && id) {
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getHref = (page: Page) => page === 'home' ? '/' : `/?page=${page}`;

  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 pb-20 mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-4xl leading-tight">
            Partner with trust. <br/> Trade with confidence.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <i className="ph-fill ph-cube text-white text-xs"></i>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-wide uppercase">
                Pearl Gold Hub
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We offer all our products and services at international standards. <br />
              <a href="tel:+256772653789" className="hover:text-primary transition-colors">+256 772 653 789</a> <br />
              <a href="mailto:info@pearlgoldhub.com" className="hover:text-primary transition-colors">info@pearlgoldhub.com</a>
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/pearlgoldhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter"><i className="ph-fill ph-x-logo text-lg"></i></a>
              <a href="https://instagram.com/pearlgoldhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram"><i className="ph-fill ph-instagram-logo text-lg"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href={getHref('home')} onClick={(e) => handleNavClick(e, 'home')} className="hover:text-primary transition-colors cursor-pointer">Home</a></li>
              <li><a href={getHref('about')} onClick={(e) => handleNavClick(e, 'about')} className="hover:text-primary transition-colors cursor-pointer">About Us</a></li>
              <li><a href={getHref('services')} onClick={(e) => handleNavClick(e, 'services')} className="hover:text-primary transition-colors cursor-pointer">Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href={getHref('projects')} onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-primary transition-colors cursor-pointer">Projects</a></li>
              <li><a href={getHref('contact')} onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</a></li>
              <li><a href={getHref('privacy')} onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© Copyright 2025 Pearl Gold Hub. All Rights Reserved.</p>
          <a 
            href="https://wa.me/256772653789?text=Hello%20Pearl%20Gold%20Hub%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 flex gap-4 cursor-pointer hover:opacity-80 transition-opacity items-center group"
          >
            <div className="bg-white text-black px-3 py-1 rounded text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">Chat with us</div>
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <i className="ph-fill ph-whatsapp-logo text-lg"></i>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background-light dark:bg-background-dark overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">What We Do</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-light dark:text-white mb-6 leading-tight">
              Get Premium Gold <br /> Services
            </h2>
            <p className="text-muted-light dark:text-muted-dark mb-10 leading-relaxed">
              Pearl Gold Hub is a specialized gold trading and mining company, connecting buyers to high-quality, responsibly sourced gold across Africa. Our focus on integrity, efficiency, and professionalism has established us as a trusted leader.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="group">
                <div className="mb-4 text-primary text-4xl group-hover:scale-110 transition-transform duration-300">
                  <i className="ph-duotone ph-briefcase"></i>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">A Full Services</h3>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                  We provide a range of gold trading and mining services to clients across the globe.
                </p>
              </div>
              <div className="group">
                <div className="mb-4 text-primary text-4xl group-hover:scale-110 transition-transform duration-300">
                  <i className="ph-duotone ph-wrench"></i>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Maintenance</h3>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                  We are proud to serve our clients with trusted gold trading and mining solutions.
                </p>
              </div>
            </div>
            <a 
              href="/?page=contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 font-bold text-text-light dark:text-white group hover:text-primary transition-colors cursor-pointer"
            >
              Contact Us
              <span className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <i className="ph-bold ph-arrow-up-right"></i>
              </span>
            </a>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-3/4 h-3/4 bg-primary rounded-tr-[5rem] -z-10"></div>
            <div className="relative h-[500px] w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx8dbWM9ByCGQgvH2OcD5N8TVH7vy0jvZVK2Nlt-hTaIwkC2Fm0Xn21tY804XM7Ub2NhgX4deiT07p78liXjBVhZIud0EEK4erelApnjt1vgQeKIgAUllI-jnc62RPmD_WvZ5LZvGbddJ2TJNwR1oHKtqRQm6Ji9VE7GuyuCjC1GAL3Un-7EGqXE0XVDb94gCbvoKkIXW5yHD33Nb9Rg3kj64XQQ32RSVrPW6UHarHlHDyVnFyD3jhBmt2N5aRsBgoCkx2dUhjVZNO"
                alt="Miner displaying raw gold nugget"
                className="w-full h-full object-cover rounded shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
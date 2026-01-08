import React from 'react';
import { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-surface-light dark:bg-surface-dark relative overflow-hidden transition-colors duration-300">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
        <i className="ph ph-buildings text-[40rem] text-primary"></i>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Fy4gJXrNbhJt2skWGbafW_KGP3IIOcIHWsQ6cht-uw-mtCun2RFMZ7f9xt9rR22JWV-YlX5zOtedSZPJMVVIf8IX-8TWCAnZ1eQp3ZWlc7hrw3xwPO50H0rJhXUo-ATSlfvKhVdiBSvofETuPiqFOoqkK-jyvOugbg8e-qmHdDFILcGmQX6-Iqb6G9hDM-1FC_63JZbmujy0DMydL7sgh4Hrhdlg9uiFxdqzKJ4IrhCrOm_xc0fgO66xcmbvMmxuC8QQFlXcrEGg"
                alt="Industrial Worker"
                className="w-full h-[600px] object-cover object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute top-1/2 -right-6 lg:-right-12 transform -translate-y-1/2 bg-primary text-white p-8 rounded shadow-xl max-w-[200px]">
              <i className="ph-fill ph-seal-check text-4xl mb-2 text-white/90"></i>
              <div className="text-5xl font-display font-bold mb-1">28+</div>
              <div className="text-sm font-medium leading-snug text-white/90">Year's of experience</div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">About Pearl Gold Hub</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-light dark:text-white mb-8 leading-tight">
              Leaders in gold <br /> trading services.
            </h2>
            <div className="space-y-6 text-muted-light dark:text-muted-dark leading-relaxed">
              <p>
                Welcome to Pearl Gold Hub, a premier gold trading platform with a strong legacy of trust and excellence.
              </p>
              <p>
                Pearl Gold Hub is a specialized gold trading company, connecting international buyers with responsibly sourced gold across Africa. Our commitment to transparency, reliability, and professionalism has positioned us as a trusted leader in the industry.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Experienced Workers",
                "Take Care Clients Satisfaction",
                "Globally Stable Partner"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl"></i>
                  <span className="font-medium text-text-light dark:text-text-dark">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a 
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 font-bold text-text-light dark:text-white group hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
              >
                More about us
                <span className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <i className="ph-bold ph-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
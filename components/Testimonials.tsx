import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden transition-colors duration-300">
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Partners</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-light dark:text-white mb-6">Trusted by Industry Leaders</h2>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              We have built long-standing relationships with key players in the global gold market, ensuring stability and mutual growth for Pearl Gold Hub partners.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              "ph-framer-logo",
              "ph-google-logo",
              "ph-microsoft-logo",
              "ph-amazon-logo",
              "ph-spotify-logo",
              "ph-apple-logo"
            ].map((icon, index) => (
              <div key={index} className="flex items-center justify-center p-4 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <i className={`ph-fill ${icon} text-4xl text-text-light dark:text-white`}></i>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background-light dark:bg-background-dark p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 relative hover:border-primary/20 transition-colors">
            <i className="ph-fill ph-quotes text-6xl text-primary/20 absolute top-6 right-8"></i>
            <div className="flex items-center gap-1 text-yellow-500 mb-6">
              {[...Array(5)].map((_, i) => <i key={i} className="ph-fill ph-star"></i>)}
            </div>
            <p className="text-text-light dark:text-gray-300 text-lg mb-8 italic">
              "Pearl Gold Hub has consistently delivered exceptional quality and transparency in all our dealings. Their commitment to ethical sourcing sets them apart in the African market."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-gray-500">JD</div>
              <div>
                <h4 className="font-bold text-text-light dark:text-white">James Dalton</h4>
                <p className="text-xs text-primary font-medium uppercase tracking-wide">Director, Aureus Global</p>
              </div>
            </div>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 relative hover:border-primary/20 transition-colors">
            <i className="ph-fill ph-quotes text-6xl text-primary/20 absolute top-6 right-8"></i>
            <div className="flex items-center gap-1 text-yellow-500 mb-6">
              {[...Array(5)].map((_, i) => <i key={i} className="ph-fill ph-star"></i>)}
            </div>
            <p className="text-text-light dark:text-gray-300 text-lg mb-8 italic">
              "Reliability is everything in gold trading. This team understands the logistics and security required to move high-value assets efficiently across borders."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-gray-500">SM</div>
              <div>
                <h4 className="font-bold text-text-light dark:text-white">Sarah Mbeki</h4>
                <p className="text-xs text-primary font-medium uppercase tracking-wide">CEO, African Metals Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
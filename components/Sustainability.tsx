import React from 'react';

const Sustainability: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Sustainability & CSR</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-light dark:text-white mb-6">Commitment to Responsible Mining</h2>
          <p className="text-muted-light dark:text-muted-dark leading-relaxed">
            We believe that gold mining can be a catalyst for positive change. Pearl Gold Hub prioritizes environmental stewardship, social responsibility, and ethical governance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="ph-fill ph-plant text-8xl text-primary"></i>
            </div>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <i className="ph-fill ph-leaf text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-text-light dark:text-white mb-4">Environmental Care</h3>
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              Minimizing our ecological footprint through land rehabilitation, water conservation, and renewable energy adoption in our mining operations.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="ph-fill ph-users-three text-8xl text-primary"></i>
            </div>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <i className="ph-fill ph-hand-heart text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-text-light dark:text-white mb-4">Community Development</h3>
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              Empowering local communities by investing in education, healthcare infrastructure, and creating sustainable livelihood opportunities.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="ph-fill ph-shield-check text-8xl text-primary"></i>
            </div>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <i className="ph-fill ph-scales text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-text-light dark:text-white mb-4">Ethical Governance</h3>
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              Adhering to strict international standards for transparency and conflict-free sourcing, ensuring trust in every ounce of gold we trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

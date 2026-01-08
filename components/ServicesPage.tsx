import React from 'react';
import { Page } from '../types';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <>
      <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Molten Gold" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU7ondVvKrFGO6WYQaheewY_MwQiy-JRHbBJkFfea---FaJJehlQz3WF5ktj7GsjzidELvu_B5pUCMg2sLyFTIVb8KiuniRWyvVZQ32902LmKLBxu5KPnfqp1uCttmchSfJi46MMNiL-_Fudw_PaZADR_LB98bbTgQ7qxDU0qwoo-sBoPgfGq7k3MKFbimFSi7aL5X2j2qqM8IAZeXRqILaAA1NoHtBHcx-1iXrK62nATMcenm25zVWZw3o3H-az7wL5hyQx_Q1MyB"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="inline-block py-1 px-3 rounded bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Premium Gold <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Trading Services</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive end-to-end solutions. From ethical sourcing to secure global delivery, Pearl Gold Hub ensures transparency and excellence at every step.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Explore</span>
          <i className="ph ph-caret-down text-primary text-xl"></i>
        </div>
      </header>

      <section className="py-20 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Overview</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-light dark:text-white mt-2">What We Do</h2>
            <p className="mt-4 text-muted-light dark:text-muted-dark max-w-2xl mx-auto text-lg">Pearl Gold Hub is a premier gold trading company connecting African mines to the global market through integrity, transparency, and world-class logistics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-lg flex items-center justify-center mb-6">
                <i className="ph-fill ph-handshake text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-light dark:text-white font-display">Gold Trading</h3>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">Facilitating secure, high-value transactions between artisanal sellers and international buyers with complete market transparency.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-lg flex items-center justify-center mb-6">
                <i className="ph-fill ph-pickaxe text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-light dark:text-white font-display">Mining Partnerships</h3>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">Empowering local mining communities with equipment, safety protocols, and fair trade practices to ensure sustainable output.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-lg flex items-center justify-center mb-6">
                <i className="ph-fill ph-shield-check text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-light dark:text-white font-display">Consultancy & Audit</h3>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">Providing expert insights, supply chain auditing, and compliance verification for investors entering the precious metals market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-yellow-500 rounded-xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
                <img 
                  alt="Gold Sourcing" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZ_Kx7CJxrSz8mS5wcew_8ZNZ-ecwQ0lvWDR7vpuElGTV8L3crzvamTFj6XqTOXe_BHxBJvQb9Atet1pjkNAP4npaaELg-iEGii63IGYahN5h8UfkKM8nWI3p215cmgt_NUIlwivepJg3LSCNMfW2AY87EEqKFLNN8wyhrW8grGUIjTGvbk9uqdMGxZ7ZmaXnNKKyWu6hSxSorIWQX-h9j40KFC9jGcpdWeU_1OZdG37bkrD11_cuAbjCRQgeZD03aqAJxj2CHlO0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white dark:bg-black p-3 rounded shadow-lg">
                  <i className="ph-fill ph-globe-hemisphere-east text-3xl text-primary"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Step 01</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-light dark:text-white mb-6">
                Responsible & <span className="text-primary">Ethical Sourcing</span>
              </h2>
              <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed mb-6">
                Our foundation is built on ethical sourcing practices that prioritize human rights and environmental stewardship. We partner directly with artisanal and small-scale mining cooperatives across Africa to ensure that every ounce of gold we trade is conflict-free and responsibly extracted.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Direct partnerships with local mines to ensure fair trade wages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Strict adherence to environmental safety and rehabilitation standards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Full supply chain traceability from the mine to the refining facility.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Step 02</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-light dark:text-white mb-6">
                Quality Assurance & <span className="text-primary">Transparency</span>
              </h2>
              <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed mb-6">
                Trust is verified, not assumed. We maintain the highest standards of quality assurance using state-of-the-art assaying technology to guarantee the purity and weight of our gold. Transparency is key to our process, providing clients with verifiable data at every stage.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Advanced XRF and fire assay testing methods for precise purity analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Certification by independent, internationally recognized laboratories.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Complete transparency in reporting purity levels (up to 99.99%).</span>
                </li>
              </ul>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary to-yellow-500 rounded-xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
                <img 
                  alt="Testing & Verification" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6WlfkCLHVqj7TAV2Mr8QrHXoZ_EQy9fhY2HtrXfpApOr8yIH_W_kdqKmJooprHqjKP0tEw_XCncUupRS7iLRd6fRzrI5mLiqvV7JsSD7UDDcci7_WqGXaYvaNdz48MBYYVG28OK4zN2KYb8R_esIXGZJQhlqQ_QyukR39nH2RdE82CCwc1QBkXbiFa019gr621Ho6Ius7LNZBGY9MAaMnGYizTJ8X-y7Lew3OiEw77p2wxgzAy50ogs5kaJGCDPA_tG3adkqfyyEA"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-black p-3 rounded shadow-lg">
                  <i className="ph-fill ph-flask text-3xl text-primary"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-yellow-500 rounded-xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
                <img 
                  alt="Trading & Documentation" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src="https://i0.wp.com/panafricagoldhub.com/wp-content/uploads/2025/09/bg2.jpg?resize=1536%2C778&ssl=1"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white dark:bg-black p-3 rounded shadow-lg">
                  <i className="ph-fill ph-files text-3xl text-primary"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Step 03</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-light dark:text-white mb-6">
                Trading & <span className="text-primary">Documentation</span>
              </h2>
              <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed mb-6">
                Navigating international gold trade requires expertise. We handle the complex landscape of export permits, customs clearance, and compliance. We pride ourselves on providing <strong>accurate documentation</strong> for every shipment, ensuring a seamless transaction process for buyers and sellers without administrative delays.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Full compliance with international trade laws and OECD guidelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Comprehensive and <strong>accurate documentation</strong> packages for swift customs clearance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Secure financial transaction frameworks.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Step 04</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-light dark:text-white mb-6">
                Global Logistics & <span className="text-primary">Delivery</span>
              </h2>
              <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed mb-6">
                Your assets are precious, and their safety is our priority. We offer <strong>reliable and efficient global shipping services</strong>, utilizing top-tier secure logistics partners to deliver your gold to any major destination worldwide. Every shipment is fully insured and tracked in real-time.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Partnerships with Brinks, Malca-Amit, and other secure carriers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark"><strong>Reliable and efficient global shipping services</strong> with CIF options available.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-muted-light dark:text-muted-dark">Real-time tracking and dedicated support until handover.</span>
                </li>
              </ul>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary to-yellow-500 rounded-xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
                <img 
                  alt="Secure Delivery" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src="https://i0.wp.com/panafricagoldhub.com/wp-content/uploads/2025/09/imgi_6_goooo-m5KL1R1L7BSQGEo1-1.jpg?w=750&ssl=1"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-black p-3 rounded shadow-lg">
                  <i className="ph-fill ph-airplane-takeoff text-3xl text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Global Presence</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-text-light dark:text-white mb-8">Our Market Reach</h3>
              <p className="text-muted-light dark:text-muted-dark text-lg mb-8 leading-relaxed">
                Pearl Gold Hub has established a robust network connecting African mining regions with the world's leading gold hubs. Our logistics and trade capabilities allow us to seamlessly serve clients across key international markets.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white dark:bg-black p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                    <i className="ph-fill ph-buildings text-blue-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light dark:text-white">Dubai, UAE</h4>
                    <span className="text-xs text-muted-light">Major Trading Hub</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white dark:bg-black p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                    <i className="ph-fill ph-bank text-indigo-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light dark:text-white">Europe</h4>
                    <span className="text-xs text-muted-light">Refining & Sales</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white dark:bg-black p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <i className="ph-fill ph-trend-up text-red-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light dark:text-white">Asia</h4>
                    <span className="text-xs text-muted-light">Growing Market</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white dark:bg-black p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <i className="ph-fill ph-map-pin text-emerald-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light dark:text-white">North America</h4>
                    <span className="text-xs text-muted-light">Strategic Partners</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block relative z-10">Our Values</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">Our Trade Philosophy</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <i className="ph-fill ph-scales text-primary text-2xl mt-1"></i>
                  <div>
                    <h4 className="text-white font-bold text-lg">Integrity First</h4>
                    <p className="text-gray-400 text-sm mt-1">We believe in honest dealings, transparent pricing, and upholding our promises to both miners and buyers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ph-fill ph-shield-check text-primary text-2xl mt-1"></i>
                  <div>
                    <h4 className="text-white font-bold text-lg">Excellence in Compliance</h4>
                    <p className="text-gray-400 text-sm mt-1">Navigating the complexities of the gold trade with rigorous adherence to international laws and ethical standards.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ph-fill ph-users-three text-primary text-2xl mt-1"></i>
                  <div>
                    <h4 className="text-white font-bold text-lg">Shared Prosperity</h4>
                    <p className="text-gray-400 text-sm mt-1">Creating value that benefits the entire supply chain, from the local communities to global investors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5 dark:bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-light dark:text-white mb-6">
            Ready to start <span className="text-primary">trading?</span>
          </h2>
          <p className="text-muted-light dark:text-muted-dark text-lg mb-10 max-w-2xl mx-auto">
            Contact Pearl Gold Hub today to discuss your requirements. Our team of experts is ready to provide you with a customized quote and guide you through our process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              onClick={() => onNavigate('contact')}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded font-bold transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 cursor-pointer"
            >
              Get a Quote <i className="ph-bold ph-arrow-right"></i>
            </a>
            <a 
              onClick={() => onNavigate('contact')}
              className="bg-white dark:bg-surface-dark text-text-light dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary px-8 py-4 rounded font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
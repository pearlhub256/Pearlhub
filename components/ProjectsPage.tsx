import React from 'react';
import { Page } from '../types';

interface ProjectsPageProps {
  onNavigate: (page: Page) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const projects = [
    {
      id: 1,
      title: "Karamoja Extraction Site",
      category: "Mining Operation",
      location: "Northern Region, Uganda",
      description: "A large-scale artisanal partnership project focused on sustainable extraction techniques. We implemented water recycling systems and safety protocols, increasing yield by 40% while reducing environmental impact.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo67cqetQ9Sqrk0u-4i-EZXFD62OESEM70_j0On1YpwSLTTkFBi2qvrih3Fdv3ITt58SpadM92_LXJ3djHD-Q_gfgAHEPNPyKYm-6h-y9OtQRrPCDjAf5PzvgakV5pgKV4Ps97pwl0Iv7H83j2sDe1JdgVhIsVfPYvOU8EzySRPmWPnzzK5KTf7Kf7Gu05WP9ypuZNBaiGliBQCIQDZ9e1KBa-kWBD6cc2Jy5kW9K_12splk3RoIDKvcl55-N4ZPeiYX4Dighn0wc",
      stats: ["150+ Local Workers", "40% Yield Increase", "Zero Mercury Use"]
    },
    {
      id: 2,
      title: "Entebbe Secure Logistics Hub",
      category: "Logistics & Storage",
      location: "Entebbe, Uganda",
      description: "Our state-of-the-art holding facility designed for rapid export processing. Features biometric security, 24/7 surveillance, and direct tarmac access for secure carriers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVFTfobQE2hZ0duB0I771N0_K1C3MccZ_J1IOIqMaB40JXP25UWIZXgYTd6u2VJuGUxP6XHIp5igTyic0ozpF2zmKlfFYgKLAkIKQG44JI5AveJtcPgHppy9HE_XBVX6M0249O4-33qpuPSh07E-KF7e1yV6EBmHrryTnL_jevleP0LOVI5Ju_WVC3N8J4d5c-09J-EzOoaZjjCO3YUjvWs9nawn9EkNB8qxEh0xjm6VbiDrUdkjNFybuqMHp_Zhk6YCdAvxr4L3s",
      stats: ["Level 5 Security", "2hr Custom Clearance", "Direct Export"]
    },
    {
      id: 3,
      title: "Mubende Community Refinery",
      category: "Processing",
      location: "Mubende District",
      description: "A joint venture to establish pre-export processing capabilities. This facility allows for accurate assaying on-site, ensuring fair value payments to local miners before transport.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApami1OYz9FKTULFik7Yl16js8G6dTCM7c3yMeC4BSEyytRNrCqrBxCCEpmAod_zldVGnIspU96bYtLSMj2ns4kalzOC_TxL47MTa6dbj-tQa4ctGIn6Nd-dDrKEIJKAB81fuhVbgnimC0ADTv-6ze_cXap37jecFY0w0v-AWx9zABUXCaZOv_-YFXiSUv1MrKAeyS3xSPyM7J5YaNDhD3Md4vp4ZNwvdXRAergIRv4mB1YV-kg4RMzKiZajXJR00q6wGCE9fv3gI",
      stats: ["ISO 9001 Certified", "Real-time Assaying", "Community Owned"]
    }
  ];

  return (
    <>
      <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-background-dark">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Aerial view of Pearl Gold Hub sustainable mining operations in Uganda" 
            className="w-full h-full object-cover opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBxVRdtHaZd29R-2z0UmB1dJ5Ca06c-J4fpgFuIE7fIKOyNJkwgM0JKrMLc0Zv04ykqHeuSshTw8gdZJGFGp_j5O6YdgD5ob4ngymKxNspOLwDgUId1yky9oCn-SIzmeN-HkTBQHpBinVu7gJHlxm7tvaX0iJO6uMHP1BEle9ZXDMjg6CfPWBpWVrXoaaLxNJ-mb0KTpPA31EKZA9njcNcoLra7nol5I0eqIvzgmaDgHoUrCG9Xkyzs-JAizEdfKASLfbbyoiTOEs"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our active operations across extraction, refining, and logistics that define our commitment to excellence.
          </p>
        </div>
      </header>

      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light dark:text-white mb-4">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-light dark:text-muted-dark mb-6 text-sm">
                    <i className="ph-fill ph-map-pin text-primary"></i>
                    {project.location}
                  </div>
                  <p className="text-muted-light dark:text-muted-dark leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 p-4 rounded-lg text-center shadow-sm">
                        <i className="ph-fill ph-check-circle text-primary text-xl mb-2"></i>
                        <span className="block text-xs font-bold text-text-light dark:text-white uppercase tracking-wide">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-text-light dark:text-white mb-6">Have a project in mind?</h2>
          <p className="text-muted-light dark:text-muted-dark mb-8">
            We are always looking for new investment opportunities and partnerships in the mining sector.
          </p>
          <a 
            href="/?page=contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all cursor-pointer"
          >
            Discuss Partnership <i className="ph-bold ph-arrow-right"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Molten gold processing at Pearl Gold Hub refinery" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Fy4gJXrNbhJt2skWGbafW_KGP3IIOcIHWsQ6cht-uw-mtCun2RFMZ7f9xt9rR22JWV-YlX5zOtedSZPJMVVIf8IX-8TWCAnZ1eQp3ZWlc7hrw3xwPO50H0rJhXUo-ATSlfvKhVdiBSvofETuPiqFOoqkK-jyvOugbg8e-qmHdDFILcGmQX6-Iqb6G9hDM-1FC_63JZbmujy0DMydL7sgh4Hrhdlg9uiFxdqzKJ4IrhCrOm_xc0fgO66xcmbvMmxuC8QQFlXcrEGg"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center text-center justify-center">
          <div className="w-full md:w-3/4">
            <span className="inline-block py-1 px-3 rounded bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
              Our Story & Values
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Pearl Gold Hub</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              We are dedicated to revolutionizing the gold industry through transparency, ethical sourcing, and operational excellence across Africa and the globe.
            </p>
          </div>
        </div>
      </header>

      <section id="about" className="py-20 lg:py-32 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <i className="ph ph-scroll text-[40rem] text-primary"></i>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative order-2 lg:order-1 top-0 lg:sticky lg:top-32">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  alt="Gold mining professional inspecting site" 
                  className="w-full h-[600px] object-cover object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyNTGtY4jb-Rh9zXVfnWZa1Mgn9sa9chOLde8r3p6LNtpSUGcwIUIqtFSzg35aXaRjsI8zJpZ_Cn_EyIdTvd7y04yyim0wkSC0iQ-kuaZsXFwptYM1Uwu9KNwFTsP6tAb0UFCZXk2M8eTRLTkXtinTc0GBXdrSGdKsXQu8W_Fo4FJjnqFP2nnzTRLrOPOJEpTS5gxDkgdJAEarar1-JrOwS-N4fgDTCrU1U9IdXO0C-u7CF3Zv8YQpr-c4MNGl2acX_DfdyIBLD04x"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white dark:bg-surface-dark p-8 rounded shadow-xl border border-gray-100 dark:border-gray-800 max-w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <i className="ph-fill ph-trophy text-2xl"></i>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-text-light dark:text-white">#1</div>
                    <div className="text-xs font-bold text-muted-light dark:text-muted-dark uppercase tracking-wider">Gold Trading Hub</div>
                  </div>
                </div>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-snug">
                  Recognized for excellence in supply chain management and ethical sourcing.
                </p>
              </div>
            </div>
            <div className="lg:pl-8 order-1 lg:order-2">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">About Pearl Gold Hub Limited</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-light dark:text-white mb-6 leading-tight">
                  Setting the standard for excellence in the African gold sector.
                </h2>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed text-lg">
                  Pearl Gold Hub Limited stands at the forefront of the gold industry, dedicated to redefining the standards of trading and mining. As a fully licensed and compliant entity, we operate with a mandate to streamline the gold supply chain, ensuring that every ounce of gold we handle is sourced with integrity and delivered with efficiency. Our operations are rooted in a deep understanding of the geological and economic landscapes of East Africa, allowing us to navigate complex markets with precision.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl font-display font-bold text-text-light dark:text-white mb-4">Who We Are</h3>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed text-lg">
                  We are more than just traders; we are strategic partners in wealth creation. Our team comprises industry veterans, geologists, and logistics experts who share a common goal: to empower mining communities while providing international investors with secure, high-value assets. By combining traditional mining wisdom with modern technology, we have established a robust ecosystem that supports sustainable growth and ethical practices across the board.
                </p>
              </div>
              <div className="mt-10 flex gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary font-display">25+</span>
                  <span className="text-sm text-text-light dark:text-text-dark font-medium">Global Partners</span>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary font-display">100%</span>
                  <span className="text-sm text-text-light dark:text-text-dark font-medium">Ethically Sourced</span>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary font-display">24/7</span>
                  <span className="text-sm text-text-light dark:text-text-dark font-medium">Client Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Our Core Principles</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-light dark:text-white">Our Strategic Direction</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
            <div className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <i className="ph-fill ph-target text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">Our Purpose</h3>
                  <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                    Our purpose is to create a transparent and equitable gold market. We strive to eliminate the opaque practices that have historically plagued the industry, replacing them with verifiable processes and fair trade principles. We believe that gold should be a catalyst for development, not conflict, and every transaction we facilitate is a step towards a more responsible global market.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <i className="ph-fill ph-eye text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">Our Long-Term Vision</h3>
                  <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                    We envision a future where African gold is synonymous with world-class quality and ethical provenance. Our long-term vision involves expanding our footprint to include refining capabilities and downstream jewelry manufacturing, creating a vertically integrated powerhouse that retains value within the continent while serving the global elite.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <h3 className="text-3xl font-display font-bold text-text-light dark:text-white mb-4">Commitment to <br/> <span className="text-primary">Partnerships</span></h3>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-muted-light dark:text-muted-dark leading-relaxed text-lg">
                  Partnership is the cornerstone of our success. We view every stakeholder—from the artisanal miner in the field to the institutional buyer in Dubai—as a vital member of our community. We are committed to fostering long-term relationships built on mutual respect, shared value, and unwavering reliability. Our collaborative approach ensures that we grow together, navigating market fluctuations with the strength of unity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-20 lg:py-32 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Our History</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-light dark:text-white">A Golden Journey</h2>
            <p className="text-muted-light dark:text-muted-dark mt-4 max-w-2xl mx-auto">
              From a local initiative to a global trading powerhouse, our path has been paved with integrity and innovation.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative">
              {[
                { year: "2018", title: "The Inception", desc: "Founded in Kampala with a mission to organize the fragmented artisanal mining sector and provide fair market access." },
                { year: "2020", title: "Strategic Alliances", desc: "Formed key alliances with ISO-certified refineries in the region to ensure 99.99% purity standards.", marginTop: true },
                { year: "2022", title: "Global Expansion", desc: "Opened our international trading desk in DMCC, facilitating direct access to Asian and European markets." },
                { year: "2024", title: "Digital Tracking", desc: "Launched our proprietary tracking system, offering clients transparency on the provenance of gold.", marginTop: true },
              ].map((item, index) => (
                <div key={index} className={`relative z-10 flex-1 group ${item.marginTop ? 'md:mt-16' : ''}`}>
                  <div className="flex items-center md:justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center font-bold font-display text-sm shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300 z-10">
                      {item.year}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative group-hover:-translate-y-1">
                    <div className="absolute -top-2 left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-black border-t border-l border-gray-100 dark:border-gray-800 transform rotate-45 group-hover:border-primary/30 transition-colors"></div>
                    <h3 className="text-lg font-bold text-text-light dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Expertise</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-light dark:text-white mb-6 leading-tight">
                We define the standard <br/> for Gold Trading.
              </h2>
              <p className="text-muted-light dark:text-muted-dark mb-8 leading-relaxed">
                At Pearl Gold Hub, we don't just trade gold; we curate trust. Our rigorous verification processes and deep market knowledge ensure that our clients receive only the best.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "ph-shield-check", title: "Guaranteed Security", desc: "State-of-the-art security measures for storage and transport of all assets." },
                  { icon: "ph-globe", title: "Global Logistics", desc: "Seamless export documentation and international delivery partnerships." },
                  { icon: "ph-handshake", title: "Transparent Pricing", desc: "Real-time market rates with no hidden fees or ambiguous charges." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg text-primary border border-gray-100 dark:border-gray-800">
                      <i className={`ph-fill ${item.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-primary/20 transform rotate-3 rounded-lg z-0"></div>
              <img 
                alt="Worker holding raw gold sample" 
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG6ZyGQ3sG-tzO40GKjycOxL3ZoybG_9KGaYLRHxj2WBwQU8KcrVozZwUcjBh501dDm5IF4VOK_hkGSlSgAoEMvVd_0icnvKLA4_jw2GcufI2T3UF7VyKo3s2VfiBW204xyuL8EevgqTW94hbATlfPBvw35WJtZ_IO9TqsyXhScp6mt_SIiDHXhmpg9f3OF8da9rOLs801u79M6VyvfPIrM-bT-QGkfVSLLATLSplSx-gcD7s4UAZn0g-RxjBgIFZIz3vYTHVPyzHg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Client Stories</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-light dark:text-white">Trusted by Investors</h2>
            <p className="text-muted-light dark:text-muted-dark mt-4 max-w-2xl mx-auto">
              Hear from our partners across the globe who have experienced the Pearl Gold Hub difference in security and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                text: "Pearl Gold Hub has completely transformed how we source gold from East Africa. Their transparency regarding provenance and their secure logistics chain is unmatched in the region.",
                name: "Jonathan Wei",
                role: "Investment Director, Singapore",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB8Ekzg5iuGib4kX_sbA4etVqPM5LM9GHZ36g112jbYoY8eK4MUTkD3pwzjvgV1w_a-GrQmjZGFys8jS5Z3Hmfdfan9zcUjwMxD5XdcZ_V6gem9TJi8BoSTzYyqdL93qvAbnmQXV4NhqKJHYS3y6Jk0ozbISt0syFiJ18rpt9BpDh3cS1lmUOGngT16wWcLqgouId7XNvX5KnwnqK8csM3ikR3scupmJLw6_yFxM-GT_6kgcVu-WYGuA00hRCIOypiI1a_TUwAEHE"
              },
              {
                rating: 4.5,
                text: "As a jewelry manufacturer, consistency and purity are non-negotiable. The team at Pearl Gold Hub delivers high-quality refined gold with documentation that makes customs a breeze.",
                name: "Elena Rossi",
                role: "CEO, Rossi Fine Jewelry",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYril6Yc2cMkkGp8Kt_DnGQq5Wy6gJ-dvPPVm9eX6dfKlbMiKZON8E4HVNusgAjwcrm-oDcqzq3pvcMEmFmCaPQVplW2S2XSvgi4OiObWclkxNLzo5zByUh6IORl-xMNJ_fxi80Jb-q0B4cwHjfc81_BwMxsWZ9L6iD7si6dk9izVvG5Yo5eeBG8LUei-Q-JXUj_Ag2gAQy927TPyX7vpSr7AAqzoNjEBmzNjr5TTNxCFnw-HHFxo4_4TrzXtJB23x4_rMXZubRfQ"
              },
              {
                rating: 5,
                text: "Professionalism from start to finish. I was skeptical about remote trading initially, but their real-time updates and dedicated account manager gave me complete peace of mind.",
                name: "Marcus Thorn",
                role: "Commodities Trader, UK",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ihpVablujDLnVtjP3EK0JH9v9g5TdsCaytoHDoVd4I_dicdiuUiMQJIU6fqIRzA-lktrZdShlmrDQe_g1SWqUaMiwHSjdY59W4P0RvVLeY_iICPwFk5wXaanOzNq0CGazvhf2MqcUisD4p6b_XhMX05R37_N2lpihBW7BdTuVIe81L4pHfJhVzAm3SZznm-czpBAPt5A7JwQ30-w5uodr6TjWCs4Mh0Bp_OC8_ub9N0LKUDvM6AQJTEZ1Jn1i3s4g--3K5o7jyA"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl relative group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                <i className="ph-fill ph-quotes text-6xl text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors"></i>
                <div className="flex items-center gap-1 text-yellow-500 mb-6">
                  {[...Array(Math.floor(item.rating))].map((_, i) => <i key={i} className="ph-fill ph-star"></i>)}
                  {item.rating % 1 !== 0 && <i className="ph-fill ph-star-half"></i>}
                </div>
                <p className="text-muted-light dark:text-muted-dark mb-8 leading-relaxed italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      alt="Client" 
                      className="w-full h-full object-cover" 
                      src={item.img}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light dark:text-white font-display">{item.name}</h4>
                    <p className="text-xs text-primary uppercase font-bold tracking-wide">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/3 h-full opacity-5 pointer-events-none">
          <i className="ph ph-question text-[40rem] text-primary"></i>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-light dark:text-white">Frequently Asked Questions</h2>
            <p className="text-muted-light dark:text-muted-dark mt-4">
              Everything you need to know about our operations, compliance, and trading procedures.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does Pearl Gold Hub ensure ethical sourcing?", a: "We maintain a strict chain of custody from mine to market. Our compliance team conducts rigorous due diligence on all artisanal and small-scale mining partners to ensure no child labor, conflict financing, or environmental negligence is involved. Every shipment is accompanied by full provenance documentation." },
              { q: "What is the minimum quantity for gold purchase?", a: "We primarily serve institutional investors, jewelers, and refineries. Our standard minimum order quantity (MOQ) for international export starts at 1 kilogram. However, we can discuss tailored solutions for long-term partners and specific investment requirements." },
              { q: "Do you handle logistics and customs clearance?", a: "Absolutely. We offer a full-service logistics solution. Our team manages export documentation, taxes, insurance (CIT), and secure air freight via reputable carriers like Brinks or G4S to your designated destination or refinery." },
              { q: "Can verified investors visit the mining sites?", a: "Yes, we believe in transparency. We welcome serious investors to visit our operational hubs and partner mines in East Africa. These visits must be scheduled in advance and are subject to security clearance protocols to ensure the safety of all parties." },
              { q: "What are your payment terms?", a: "To comply with international Anti-Money Laundering (AML) laws, we only accept payments via bank wire transfers (SWIFT). We do not accept cash. Letters of Credit (LC) and SBLC may be considered for large-scale, recurring contracts." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-background-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 open:shadow-lg open:border-primary/30">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-text-light dark:text-white font-bold text-lg select-none">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <i className="ph-bold ph-caret-down text-primary"></i>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-light dark:text-muted-dark leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
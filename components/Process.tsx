import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Sourcing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXZ_Kx7CJxrSz8mS5wcew_8ZNZ-ecwQ0lvWDR7vpuElGTV8L3crzvamTFj6XqTOXe_BHxBJvQb9Atet1pjkNAP4npaaELg-iEGii63IGYahN5h8UfkKM8nWI3p215cmgt_NUIlwivepJg3LSCNMfW2AY87EEqKFLNN8wyhrW8grGUIjTGvbk9uqdMGxZ7ZmaXnNKKyWu6hSxSorIWQX-h9j40KFC9jGcpdWeU_1OZdG37bkrD11_cuAbjCRQgeZD03aqAJxj2CHlO0"
    },
    {
      id: "02",
      title: "Testing & Verification",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6WlfkCLHVqj7TAV2Mr8QrHXoZ_EQy9fhY2HtrXfpApOr8yIH_W_kdqKmJooprHqjKP0tEw_XCncUupRS7iLRd6fRzrI5mLiqvV7JsSD7UDDcci7_WqGXaYvaNdz48MBYYVG28OK4zN2KYb8R_esIXGZJQhlqQ_QyukR39nH2RdE82CCwc1QBkXbiFa019gr621Ho6Ius7LNZBGY9MAaMnGYizTJ8X-y7Lew3OiEw77p2wxgzAy50ogs5kaJGCDPA_tG3adkqfyyEA"
    },
    {
      id: "03",
      title: "Trading & Documentation",
      image: "https://i0.wp.com/panafricagoldhub.com/wp-content/uploads/2025/09/bg2.jpg?resize=1536%2C778&ssl=1"
    },
    {
      id: "04",
      title: "Delivery",
      image: "https://i0.wp.com/panafricagoldhub.com/wp-content/uploads/2025/09/imgi_6_goooo-m5KL1R1L7BSQGEo1-1.jpg?w=750&ssl=1"
    }
  ];

  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Working Style</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-light dark:text-white leading-tight">
              Our Business <br /> Working Process
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-light dark:text-muted-dark text-sm leading-relaxed">
              We are one of the leading companies in manufacturing & petro chemical products. We make long-term investments goal industrial solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[400px]">
        {steps.map((step, idx) => (
          <div key={step.id} className={`group relative h-[300px] lg:h-full overflow-hidden ${idx !== steps.length - 1 ? 'border-r border-white/10' : ''}`}>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10"></div>
            <img
              src={step.image}
              alt={step.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
              <div className="absolute top-8 right-8 text-white/20 text-xs font-bold rotated-text tracking-widest uppercase">{step.id} Step</div>
              <div className="text-outline text-5xl font-display font-bold mb-2">{step.id}</div>
              <h3 className="text-white text-xl font-bold">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
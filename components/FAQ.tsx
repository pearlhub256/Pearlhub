import React, { useState } from 'react';
import { Page } from '../types';

interface FAQProps {
  onNavigate: (page: Page) => void;
}

const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const questions = [
    {
      question: "What Is Your Business Plan?",
      answer: "Pearl Gold Hub is a specialized gold trading and mining company, delivering reliable services and connecting global buyers with responsibly sourced African gold."
    },
    {
      question: "How To Get Your Projects Success?",
      answer: "We ensure project success through rigorous planning, expert execution, and maintaining high standards of quality control and risk management throughout the supply chain."
    },
    {
      question: "Meet Our Professionals?",
      answer: "Our team consists of industry veterans with decades of experience in geology, mining engineering, international trade finance, and logistics."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6WlfkCLHVqj7TAV2Mr8QrHXoZ_EQy9fhY2HtrXfpApOr8yIH_W_kdqKmJooprHqjKP0tEw_XCncUupRS7iLRd6fRzrI5mLiqvV7JsSD7UDDcci7_WqGXaYvaNdz48MBYYVG28OK4zN2KYb8R_esIXGZJQhlqQ_QyukR39nH2RdE82CCwc1QBkXbiFa019gr621Ho6Ius7LNZBGY9MAaMnGYizTJ8X-y7Lew3OiEw77p2wxgzAy50ogs5kaJGCDPA_tG3adkqfyyEA"
              alt="Lab Scale for gold weighing and testing"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Asked Questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-light dark:text-white mb-10 leading-tight">
              Building for <br /> the best.
            </h2>
            <div className="space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="flex items-center gap-4 text-left w-full group"
                  >
                    {activeIndex === index ? (
                      <i className="ph ph-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                    ) : (
                      <i className="ph ph-arrow-up-right text-gray-400 group-hover:text-primary group-hover:rotate-45 transition-all"></i>
                    )}
                    <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-text-light dark:text-white' : 'text-text-light dark:text-white group-hover:text-primary'}`}>
                      {item.question}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeIndex === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-8 text-muted-light dark:text-muted-dark text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a 
                href="/?page=services"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('services');
                }}
                className="inline-flex items-center gap-2 font-bold text-text-light dark:text-white group hover:text-primary transition-colors text-sm uppercase tracking-wide cursor-pointer"
              >
                View all Services
                <span className="w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-xs">
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

export default FAQ;
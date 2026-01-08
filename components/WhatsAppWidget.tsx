import React from 'react';

const WhatsAppWidget: React.FC = () => {
  return (
    <a
      href="https://wa.me/256772653789?text=Hello%20Pearl%20Gold%20Hub%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-white dark:bg-zinc-800 text-text-light dark:text-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden md:block border border-gray-100 dark:border-zinc-700">
        Chat with us
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white dark:bg-zinc-800 transform -translate-y-1/2 rotate-45 border-t border-r border-gray-100 dark:border-zinc-700"></div>
      </div>
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <i className="ph-fill ph-whatsapp-logo text-3xl"></i>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
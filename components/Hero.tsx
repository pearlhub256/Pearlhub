import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_fBVxmSbwcZrvjplWkBg0H67846rO3LifniLmxJeS-yaxKxwef9Z0WLlzEUQ-xVjrF4FbSfPHpqlFMMZD6bWY4A6w2VZ4qF-GSUJIUSf5TIRgrd9vq9fC3tvw3xVDQ7wcBvPIdDwJrB9pz8sBM33NI5WxBus_p6sFKsPhRK82E4itoRhQmgwRaCAsAzcr6yVc4of367JZrwiMYZk8AXXfqt617phrH2i_3j2gUm3P4NobfpXnIBiDqRdDAF2Zp-xWgINqec5GmN_M"
          alt="Molten Gold"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <span className="inline-block py-1 px-3 rounded bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm animate-fade-in-up">
            Premium Mining Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Trusted Gold <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Supplier
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
            Providing value to our clients through ongoing products & innovation. We source and refine the highest quality gold across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              onClick={handleScrollToAbout}
              className="bg-white text-black hover:bg-gray-100 px-8 py-3.5 rounded font-bold flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 cursor-pointer"
            >
              Explore More <i className="ph ph-arrow-up-right"></i>
            </a>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 pl-4 pr-6 rounded border border-white/10 hover:bg-white/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <i className="ph-fill ph-phone-call text-xl"></i>
              </div>
              <a href="tel:+256772653789">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us 24/7</p>
                <p className="text-white font-bold tracking-wide hover:text-primary transition-colors">+256 772 653 789</p>
              </a>
            </div>
          </div>
        </div>

        {/* Social Vertical Bar */}
        <div className="absolute right-8 bottom-1/2 transform translate-y-1/2 hidden lg:flex flex-col gap-8 items-center z-20">
          <div className="h-24 w-px bg-white/20"></div>
          {[
            { name: 'Twitter', url: 'https://twitter.com' },
            { name: 'Pinterest', url: 'https://pinterest.com' },
            { name: 'Facebook', url: 'https://facebook.com' },
            { name: 'Instagram', url: 'https://instagram.com' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors rotated-text text-xs tracking-widest uppercase font-medium"
            >
              {social.name}
            </a>
          ))}
          <div className="h-24 w-px bg-white/20"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={handleScrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <i className="ph ph-caret-down text-primary text-xl"></i>
      </div>
    </header>
  );
};

export default Hero;
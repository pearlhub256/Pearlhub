import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    'first-name': '',
    'last-name': '',
    'company': '',
    'email': '',
    'phone': '',
    'subject': 'General Inquiry',
    'message': ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error(error);
        setFormStatus('error');
      });
  };

  return (
    <>
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-dark">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Molten Gold Background" 
            className="w-full h-full object-cover opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx8dbWM9ByCGQgvH2OcD5N8TVH7vy0jvZVK2Nlt-hTaIwkC2Fm0Xn21tY804XM7Ub2NhgX4deiT07p78liXjBVhZIud0EEK4erelApnjt1vgQeKIgAUllI-jnc62RPmD_WvZ5LZvGbddJ2TJNwR1oHKtqRQm6Ji9VE7GuyuCjC1GAL3Un-7EGqXE0XVDb94gCbvoKkIXW5yHD33Nb9Rg3kj64XQQ32RSVrPW6UHarHlHDyVnFyD3jhBmt2N5aRsBgoCkx2dUhjVZNO"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Get in Touch</span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to source premium gold or have questions about our mining operations, our team is here to assist you 24/7.
          </p>
        </div>
      </header>

      <section className="py-20 bg-surface-light dark:bg-surface-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-text-light dark:text-white mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed mb-8">
                  Pearl Gold Hub is dedicated to providing transparent and efficient gold trading services. Reach out to us through any of the channels below.
                </p>
              </div>
              
              <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-md border-l-4 border-primary group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <i className="ph-fill ph-map-pin text-primary text-xl group-hover:text-white transition-colors"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-light dark:text-white mb-1">Headquarters</h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                      Plot 45, Mining District,<br/>
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-md border-l-4 border-primary group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <i className="ph-fill ph-phone-call text-primary text-xl group-hover:text-white transition-colors"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-light dark:text-white mb-1">Phone Support</h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed mb-2">
                      Mon-Fri from 8am to 6pm.
                    </p>
                    <a className="text-text-light dark:text-white font-bold hover:text-primary transition-colors" href="tel:+256772653789">
                      +256 772 653 789
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-md border-l-4 border-primary group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <i className="ph-fill ph-envelope-simple text-primary text-xl group-hover:text-white transition-colors"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-light dark:text-white mb-1">Email Us</h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed mb-2">
                      We reply within 24 hours.
                    </p>
                    <a className="text-text-light dark:text-white font-bold hover:text-primary transition-colors break-all" href="mailto:info@pearlgoldhub.com">
                      info@pearlgoldhub.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-light dark:text-muted-dark mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: "ph-facebook-logo", url: "https://facebook.com" },
                    { icon: "ph-twitter-logo", url: "https://twitter.com" },
                    { icon: "ph-linkedin-logo", url: "https://linkedin.com" },
                    { icon: "ph-instagram-logo", url: "https://instagram.com" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-text-light dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all"
                    >
                      <i className={`ph-fill ${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-background-dark p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-text-light dark:text-white mb-8">Send a Message</h3>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ph-fill ph-check text-3xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h4>
                    <p className="text-green-700 dark:text-green-400">Thank you for contacting Pearl Gold Hub. Our team will get back to you within 24 hours.</p>
                    <button 
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({
                          'first-name': '',
                          'last-name': '',
                          'company': '',
                          'email': '',
                          'phone': '',
                          'subject': 'General Inquiry',
                          'message': ''
                        });
                      }}
                      className="mt-6 text-green-700 dark:text-green-400 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form 
                    className="space-y-6" 
                    onSubmit={handleSubmit} 
                    name="contact" 
                    method="post" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-semibold text-text-light dark:text-gray-300">First Name <span className="text-primary">*</span></label>
                        <input 
                          id="first-name"
                          name="first-name"
                          value={formData['first-name']}
                          onChange={handleChange}
                          required 
                          className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600" 
                          placeholder="Enter your first name" 
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-semibold text-text-light dark:text-gray-300">Last Name <span className="text-primary">*</span></label>
                        <input 
                          id="last-name"
                          name="last-name"
                          value={formData['last-name']}
                          onChange={handleChange}
                          required 
                          className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600" 
                          placeholder="Enter your last name" 
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                       <label htmlFor="company" className="text-sm font-semibold text-text-light dark:text-gray-300">Company Name</label>
                       <input 
                         id="company"
                         name="company"
                         value={formData['company']}
                         onChange={handleChange}
                         className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600" 
                         placeholder="Your company or organization (Optional)" 
                         type="text"
                       />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-text-light dark:text-gray-300">Email Address <span className="text-primary">*</span></label>
                        <input 
                          id="email"
                          name="email"
                          value={formData['email']}
                          onChange={handleChange}
                          required 
                          className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600" 
                          placeholder="name@example.com" 
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-text-light dark:text-gray-300">Phone Number</label>
                        <input 
                          id="phone"
                          name="phone"
                          value={formData['phone']}
                          onChange={handleChange}
                          className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600" 
                          placeholder="+1 (555) 000-0000" 
                          type="tel"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-text-light dark:text-gray-300">Subject</label>
                      <div className="relative">
                        <select 
                          id="subject"
                          name="subject"
                          value={formData['subject']}
                          onChange={handleChange}
                          className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-200 dark:text-white appearance-none cursor-pointer"
                        >
                          <option>General Inquiry</option>
                          <option>Gold Purchasing</option>
                          <option>Mining Services</option>
                          <option>Partnership Proposal</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                          <i className="ph-bold ph-caret-down"></i>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-text-light dark:text-gray-300">Your Message <span className="text-primary">*</span></label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData['message']}
                        onChange={handleChange}
                        required 
                        className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 resize-none min-h-[150px]" 
                        placeholder="How can we help you?" 
                        rows={5}
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        disabled={formStatus === 'sending'}
                        className={`w-full md:w-auto px-10 py-4 rounded-lg font-bold uppercase tracking-wide transition-all transform shadow-lg flex items-center justify-center gap-2 ${formStatus === 'sending' ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-primary hover:bg-primary-dark text-white hover:-translate-y-1 shadow-primary/30'}`} 
                        type="submit"
                      >
                        {formStatus === 'sending' ? (
                          <>Sending <i className="ph-bold ph-spinner animate-spin"></i></>
                        ) : (
                          <>Send Message <i className="ph-bold ph-paper-plane-right"></i></>
                        )}
                      </button>
                    </div>
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again later.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[450px] bg-gray-200 relative">
        <div className="absolute inset-0 filter grayscale contrast-125">
          <iframe 
            allowFullScreen 
            height="100%" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.30296452248!2d32.4283897451381!3d0.31302868449962375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb79c3b0151f%3A0x67396f483c66f7f0!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1709928374823!5m2!1sen!2sus" 
            style={{ border: 0 }} 
            width="100%"
            title="Pearl Gold Hub Location"
          ></iframe>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0 bg-white dark:bg-black p-6 rounded shadow-xl max-w-sm w-[90%] md:w-auto z-10 border-t-4 border-primary">
          <h4 className="font-bold text-lg dark:text-white mb-2">Visit Pearl Gold Hub</h4>
          <p className="text-sm text-gray-500 mb-4">Located in the heart of the business district.</p>
          <a className="text-primary text-sm font-bold flex items-center gap-2 hover:underline" href="https://maps.google.com" target="_blank" rel="noreferrer">
            Get Directions <i className="ph-bold ph-arrow-right"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
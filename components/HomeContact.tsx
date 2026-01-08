import React, { useState } from 'react';

const HomeContact: React.FC = () => {
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
    <section className="py-20 lg:py-24 bg-surface-light dark:bg-surface-dark relative border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Text & Info */}
            <div className="lg:sticky lg:top-32">
                 <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">Contact Us</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-light dark:text-white mb-6 leading-tight">
                  Get in touch <br/>with us.
                </h2>
                <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed mb-10">
                  Whether you're looking to source premium gold or have questions about our mining operations, our team is here to assist you.
                </p>
                
                <div className="space-y-8">
                    {/* Phone */}
                    <div className="flex items-start gap-5 group">
                         <div className="w-14 h-14 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors shadow-sm">
                             <i className="ph-fill ph-phone-call text-primary text-2xl"></i>
                         </div>
                         <div>
                             <h3 className="text-lg font-bold text-text-light dark:text-white mb-1">Phone</h3>
                             <a href="tel:+256772653789" className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors block leading-relaxed">+256 772 653 789</a>
                         </div>
                    </div>
                     {/* Email */}
                    <div className="flex items-start gap-5 group">
                         <div className="w-14 h-14 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors shadow-sm">
                             <i className="ph-fill ph-envelope-simple text-primary text-2xl"></i>
                         </div>
                         <div>
                             <h3 className="text-lg font-bold text-text-light dark:text-white mb-1">Email</h3>
                             <a href="mailto:info@pearlgoldhub.com" className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors block leading-relaxed">info@pearlgoldhub.com</a>
                         </div>
                    </div>
                     {/* Location */}
                    <div className="flex items-start gap-5 group">
                         <div className="w-14 h-14 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors shadow-sm">
                             <i className="ph-fill ph-map-pin text-primary text-2xl"></i>
                         </div>
                         <div>
                             <h3 className="text-lg font-bold text-text-light dark:text-white mb-1">Location</h3>
                             <p className="text-muted-light dark:text-muted-dark leading-relaxed">Plot 45, Mining District, Kampala, Uganda</p>
                         </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white dark:bg-background-dark p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                
                {formStatus === 'success' ? (
                   <div className="text-center py-12">
                     <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <i className="ph-fill ph-check text-4xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-text-light dark:text-white mb-3">Message Sent!</h3>
                      <p className="text-muted-light dark:text-muted-dark mb-8">Thank you for contacting Pearl Gold Hub. We'll get back to you shortly.</p>
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
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
                      >
                        Send another message
                      </button>
                   </div>
                ) : (
                    <>
                    <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6 relative z-10">Send us a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <div className="grid grid-cols-2 gap-5">
                             <div className="space-y-1.5">
                                <label htmlFor="first-name" className="text-sm font-semibold text-text-light dark:text-gray-300">First Name</label>
                                <input 
                                  id="first-name"
                                  name="first-name" 
                                  value={formData['first-name']} 
                                  onChange={handleChange} 
                                  required 
                                  type="text" 
                                  placeholder="John"
                                  className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder-gray-400" 
                                />
                             </div>
                             <div className="space-y-1.5">
                                <label htmlFor="last-name" className="text-sm font-semibold text-text-light dark:text-gray-300">Last Name</label>
                                <input 
                                  id="last-name"
                                  name="last-name" 
                                  value={formData['last-name']} 
                                  onChange={handleChange} 
                                  required 
                                  type="text" 
                                  placeholder="Doe"
                                  className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder-gray-400" 
                                />
                             </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="company" className="text-sm font-semibold text-text-light dark:text-gray-300">Company Name</label>
                            <input 
                              id="company"
                              name="company" 
                              value={formData.company} 
                              onChange={handleChange} 
                              type="text" 
                              placeholder="Your company (Optional)"
                              className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder-gray-400" 
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-sm font-semibold text-text-light dark:text-gray-300">Email Address</label>
                                <input 
                                  id="email"
                                  name="email" 
                                  value={formData.email} 
                                  onChange={handleChange} 
                                  required 
                                  type="email" 
                                  placeholder="john@example.com"
                                  className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder-gray-400" 
                                />
                            </div>
                             <div className="space-y-1.5">
                                <label htmlFor="phone" className="text-sm font-semibold text-text-light dark:text-gray-300">Phone (Optional)</label>
                                <input 
                                  id="phone"
                                  name="phone" 
                                  value={formData.phone} 
                                  onChange={handleChange} 
                                  type="tel" 
                                  placeholder="+1 (555) 000-0000"
                                  className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder-gray-400" 
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-sm font-semibold text-text-light dark:text-gray-300">Subject</label>
                            <div className="relative">
                                <select 
                                  id="subject"
                                  name="subject" 
                                  value={formData.subject} 
                                  onChange={handleChange} 
                                  className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all appearance-none cursor-pointer"
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

                        <div className="space-y-1.5">
                             <label htmlFor="message" className="text-sm font-semibold text-text-light dark:text-gray-300">Message</label>
                             <textarea 
                                id="message"
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                                rows={4} 
                                placeholder="How can we help you?"
                                className="w-full bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder-gray-400 resize-none"
                             ></textarea>
                        </div>
                        <button 
                            disabled={formStatus === 'sending'}
                            type="submit" 
                            className={`w-full py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-white flex items-center justify-center gap-2 ${formStatus === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark shadow-lg hover:shadow-primary/30 hover:-translate-y-1'}`}
                        >
                            {formStatus === 'sending' ? (
                              <>Sending <i className="ph-bold ph-spinner animate-spin"></i></>
                            ) : (
                              <>Send Message <i className="ph-bold ph-paper-plane-right"></i></>
                            )}
                        </button>
                    </form>
                    </>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
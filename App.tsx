import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import SEO from './components/SEO';
import { Page } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Initialize page state from URL query parameter
  const getPageFromUrl = (): Page => {
    if (typeof window === 'undefined') return 'home';
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (['about', 'services', 'contact', 'projects', 'privacy'].includes(page || '')) {
      return page as Page;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromUrl);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Define SEO data for each page
  const seoData: Record<Page, { title: string; description: string }> = {
    home: {
      title: "Pearl Gold Hub | Premier Gold Trading & Mining Solutions Africa",
      description: "Pearl Gold Hub connects international buyers with responsibly sourced gold from Africa. Trusted gold trading, refining services, and secure global logistics."
    },
    about: {
      title: "About Us | Pearl Gold Hub - Ethical Sourcing Leaders",
      description: "Learn about Pearl Gold Hub's mission to revolutionize the African gold industry through transparency, ethical mining partnerships, and operational excellence."
    },
    services: {
      title: "Services | Gold Trading, Refining & Logistics",
      description: "Explore our end-to-end gold services: secure trading, assaying, refining, mining consultancy, and insured global export logistics."
    },
    contact: {
      title: "Contact Us | Pearl Gold Hub - 24/7 Support",
      description: "Get in touch with Pearl Gold Hub for quotes, partnership inquiries, or support. Located in Kampala, serving clients worldwide. Call +256 772 653 789."
    },
    projects: {
      title: "Our Projects | Portfolio of Mining & Logistics Operations",
      description: "View our active mining projects, community refineries, and logistics hubs across East Africa. Sustainable extraction and secure holding facilities."
    },
    privacy: {
      title: "Privacy Policy | Pearl Gold Hub",
      description: "Our commitment to protecting your personal data and ensuring privacy in all our trading and digital interactions."
    }
  };

  // Generate Page Specific Schema
  const getPageSchema = (page: Page) => {
    const baseUrl = 'https://pearlgoldhub.com';
    
    // 1. BreadcrumbList Schema (Standard for all pages)
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        }
      ]
    };
    
    if (page !== 'home') {
      breadcrumb.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": page.charAt(0).toUpperCase() + page.slice(1),
        "item": `${baseUrl}?page=${page}`
      });
    }

    const schemas: any[] = [breadcrumb];

    // 2. FAQ Schema for Home
    if (page === 'home') {
       schemas.push({
         "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [
           {
             "@type": "Question",
             "name": "What Is Your Business Plan?",
             "acceptedAnswer": { "@type": "Answer", "text": "Pearl Gold Hub is a specialized gold trading and mining company, delivering reliable services and connecting global buyers with responsibly sourced African gold." }
           },
           {
             "@type": "Question",
             "name": "How To Get Your Projects Success?",
             "acceptedAnswer": { "@type": "Answer", "text": "We ensure project success through rigorous planning, expert execution, and maintaining high standards of quality control and risk management throughout the supply chain." }
           },
           {
             "@type": "Question",
             "name": "Meet Our Professionals?",
             "acceptedAnswer": { "@type": "Answer", "text": "Our team consists of industry veterans with decades of experience in geology, mining engineering, international trade finance, and logistics." }
           }
         ]
       });
    }

    // 3. FAQ Schema for About
    if (page === 'about') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                 { "@type": "Question", "name": "How does Pearl Gold Hub ensure ethical sourcing?", "acceptedAnswer": { "@type": "Answer", "text": "We maintain a strict chain of custody from mine to market. Our compliance team conducts rigorous due diligence on all artisanal and small-scale mining partners." } },
                 { "@type": "Question", "name": "What is the minimum quantity for gold purchase?", "acceptedAnswer": { "@type": "Answer", "text": "Our standard minimum order quantity (MOQ) for international export starts at 1 kilogram. However, we can discuss tailored solutions for long-term partners." } },
                 { "@type": "Question", "name": "Do you handle logistics and customs clearance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer full-service logistics including export documentation, taxes, insurance, and secure air freight via reputable carriers." } },
                 { "@type": "Question", "name": "Can verified investors visit the mining sites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we welcome serious investors to visit our operational hubs and partner mines, subject to scheduling and security protocols." } },
                 { "@type": "Question", "name": "What are your payment terms?", "acceptedAnswer": { "@type": "Answer", "text": "We only accept payments via bank wire transfers (SWIFT) to comply with international Anti-Money Laundering (AML) laws." } }
            ]
        });
    }

    // 4. Service Schema for Services Page
    if (page === 'services') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Gold Trading & Mining",
            "provider": { "@type": "Corporation", "name": "Pearl Gold Hub" },
            "areaServed": "Global",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Gold Services",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gold Trading" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mining Partnerships" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultancy & Audit" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Global Logistics" } }
                ]
            }
        });
    }
    
    // 5. Contact Page Schema
    if (page === 'contact') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "description": "Contact Pearl Gold Hub for gold trading inquiries.",
            "mainEntity": {
                 "@type": "Corporation",
                 "name": "Pearl Gold Hub",
                 "telephone": "+256-772-653-789",
                 "email": "info@pearlgoldhub.com",
                 "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kampala",
                    "addressRegion": "Central Region",
                    "addressCountry": "UG"
                 }
            }
        });
    }

    return schemas;
  };

  const currentSEO = seoData[currentPage];

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL and state when navigating
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    try {
      const url = new URL(window.location.href);
      if (page === 'home') {
        url.searchParams.delete('page');
      } else {
        url.searchParams.set('page', page);
      }
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.warn('Navigation history update failed:', error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUsPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-body min-h-screen flex flex-col">
      <SEO 
        title={currentSEO.title} 
        description={currentSEO.description}
        schema={getPageSchema(currentPage)}
      />
      
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <WhatsAppWidget />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
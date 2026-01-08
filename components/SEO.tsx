import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  schema
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update link tags
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta
    updateMeta('description', description);
    if (canonical) {
        updateLink('canonical', canonical);
    }

    // Open Graph / Facebook / WhatsApp
    updateMeta('og:type', type, 'property');
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    if (canonical) {
        updateMeta('og:url', canonical, 'property');
    }
    updateMeta('og:site_name', 'Pearl Gold Hub', 'property');
    updateMeta('og:image', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcDqWjxpXr6SgYOkz1HmKqVHn9KtduTTokuKt3jgm6mFMWqCNWTR9AFrIK2AO8kAb1n5w5I_fyuKxL7PjhWRdLRQdawy8rotlouLwRDgwruORtQfPsoJGP7cG1ufH9GGWXfYssY8rSPOFO45yxDTvCP4JoXnrcESUhxo1tDponoYH2CC_uatyx98FN4zRNYP7f7S0lAYAR1GbDlK4liwpIQakHBYa9QK2DfIQqlD2cJW3t1h5M6R44GrWyA6wkNuiJLp59ti3yLdI', 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcDqWjxpXr6SgYOkz1HmKqVHn9KtduTTokuKt3jgm6mFMWqCNWTR9AFrIK2AO8kAb1n5w5I_fyuKxL7PjhWRdLRQdawy8rotlouLwRDgwruORtQfPsoJGP7cG1ufH9GGWXfYssY8rSPOFO45yxDTvCP4JoXnrcESUhxo1tDponoYH2CC_uatyx98FN4zRNYP7f7S0lAYAR1GbDlK4liwpIQakHBYa9QK2DfIQqlD2cJW3t1h5M6R44GrWyA6wkNuiJLp59ti3yLdI');

  }, [title, description, canonical, type]);

  // Base Structured Data (JSON-LD) for Local Business/Corporation
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Pearl Gold Hub",
    "url": "https://pearlgoldhub.com",
    "logo": "https://lh3.googleusercontent.com/aida-public/AB6AXuDcDqWjxpXr6SgYOkz1HmKqVHn9KtduTTokuKt3jgm6mFMWqCNWTR9AFrIK2AO8kAb1n5w5I_fyuKxL7PjhWRdLRQdawy8rotlouLwRDgwruORtQfPsoJGP7cG1ufH9GGWXfYssY8rSPOFO45yxDTvCP4JoXnrcESUhxo1tDponoYH2CC_uatyx98FN4zRNYP7f7S0lAYAR1GbDlK4liwpIQakHBYa9QK2DfIQqlD2cJW3t1h5M6R44GrWyA6wkNuiJLp59ti3yLdI",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256-772-653-789",
      "contactType": "customer service",
      "areaServed": ["UG", "AE", "US", "EU"],
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://facebook.com/pearlgoldhub",
      "https://twitter.com/pearlgoldhub",
      "https://instagram.com/pearlgoldhub"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "description": "Pearl Gold Hub is a premier gold trading company connecting African mines to the global market through integrity, transparency, and world-class logistics."
  };

  // Combine base schema with page-specific schema
  // Explicitly typing this array as Record<string, any>[] solves the inference error
  let schemaList: Record<string, any>[] = [baseSchema];
  
  if (schema) {
    if (Array.isArray(schema)) {
      schemaList = [...schemaList, ...schema];
    } else {
      schemaList.push(schema);
    }
  }

  return (
    <>
      {schemaList.map((s, i) => (
        <script 
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
};

export default SEO;
export interface NavLink {
  name: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  iconClass: string;
  title: string;
  description: string;
}

export interface StepItem {
  id: string;
  number: string;
  title: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Page = 'home' | 'about' | 'services' | 'contact' | 'projects' | 'privacy';
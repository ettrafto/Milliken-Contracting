export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  images: string[];
  imageAlt?: string;
  scopeOfWork: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  roleOrLocation?: string;
  photo?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  yearsInBusiness: number;
  description: string;
  story?: string;
  specializations: string[];
  certifications?: string[];
  values?: string[];
  serviceAreas: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl?: string;
}

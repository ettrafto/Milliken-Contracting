import type { CompanyInfo } from '../types';
import { siteContent } from '../content/siteContent';

export const companyInfo: CompanyInfo = {
  name: siteContent.company.name,
  tagline: siteContent.company.tagline,
  yearsInBusiness: siteContent.company.yearsInBusiness,
  description: siteContent.company.description,
  story: siteContent.company.story,
  specializations: [...siteContent.company.specializations],
  certifications: [...siteContent.company.certifications],
  values: [...siteContent.company.values],
  serviceAreas: [...siteContent.company.serviceAreas],
};

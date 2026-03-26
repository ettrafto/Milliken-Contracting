import type { ContactInfo } from '../types';
import { business } from '../content/business';

export const contactInfo: ContactInfo = {
  phone: business.contact.phoneFormatted,
  email: business.contact.email,
  //address: business.contact.address ?? '',
  //mapEmbedUrl: business.contact.mapEmbedUrl ?? undefined,
};

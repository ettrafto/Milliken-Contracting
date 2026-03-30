import { Helmet } from 'react-helmet-async';
import { siteContent } from '../../content/siteContent';
import { business } from '../../content/business';
import { getSiteUrl } from '../../seo/siteUrl';

/** LocalBusiness / Contractor JSON-LD for sitewide use */
export function JsonLdLocalBusiness() {
  const url = getSiteUrl();
  const phoneDigits = business.contact.phone.replace(/\D/g, '');
  const addr = business.contact.address?.trim();

  const payload: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteContent.company.name,
    url,
    email: business.contact.email,
    areaServed: siteContent.company.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  };

  if (phoneDigits.length >= 10) {
    payload.telephone = `+1${phoneDigits.slice(0, 10)}`;
  }
  if (addr) {
    payload.address = {
      '@type': 'PostalAddress',
      streetAddress: addr,
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(payload)}</script>
    </Helmet>
  );
}

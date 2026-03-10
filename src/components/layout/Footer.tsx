import { Link } from 'react-router-dom';
import { navigation, contactInfo, companyInfo } from '../../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              Service Areas
            </h3>
            <p className="text-white/80 text-sm">
              {companyInfo.serviceAreas.join(', ')}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          &copy; {currentYear} {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

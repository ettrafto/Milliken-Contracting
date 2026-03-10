import { contactInfo, companyInfo } from '../../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-metallic-blue)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 md:gap-16 lg:gap-20">
          {/* Company */}
          <div className="space-y-4 text-center">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[var(--tracking-tight)]">
              {companyInfo.name}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm mx-auto">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[var(--tracking-tight)]">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
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
              {contactInfo.address && (
                <li>{contactInfo.address}</li>
              )}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4 text-center">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[var(--tracking-tight)]">
              Service Areas
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {companyInfo.serviceAreas.join(', ')}
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          &copy; {currentYear} {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import type { ContactInfo as ContactInfoType } from '../../types';

interface ContactInfoProps {
  contact: ContactInfoType;
}

export function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text)]">
        Get in Touch
      </h3>
      <ul className="space-y-4">
        <li>
          <span className="block text-sm text-[var(--color-text-muted)] mb-1">Phone</span>
          <a
            href={`tel:${contact.phone.replace(/\D/g, '')}`}
            className="text-[var(--color-text)] hover:text-[var(--color-terracotta)] transition-colors"
          >
            {contact.phone}
          </a>
        </li>
        <li>
          <span className="block text-sm text-[var(--color-text-muted)] mb-1">Email</span>
          <a
            href={`mailto:${contact.email}`}
            className="text-[var(--color-text)] hover:text-[var(--color-terracotta)] transition-colors"
          >
            {contact.email}
          </a>
        </li>
        <li>
          <span className="block text-sm text-[var(--color-text-muted)] mb-1">Address</span>
          <p className="text-[var(--color-text)]">{contact.address}</p>
        </li>
      </ul>
    </div>
  );
}

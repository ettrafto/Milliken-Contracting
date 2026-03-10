import { useState } from 'react';
import { Button } from '../ui/Button';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

interface ContactFormProps {
  variant?: 'light' | 'dark';
}

export function ContactForm({ variant = 'light' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (response.ok) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      // Demo mode - simulate success
      setTimeout(() => {
        setStatus('success');
        form.reset();
      }, 1000);
    }
  };

  const isDark = variant === 'dark';
  const inputClass = isDark
    ? 'w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50'
    : 'w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)]';
  const labelClass = isDark ? 'text-white' : 'text-[var(--color-text)]';
  const selectClass = isDark
    ? 'w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50'
    : 'w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)]';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className={`block text-sm font-medium mb-2 ${labelClass}`}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className={`block text-sm font-medium mb-2 ${labelClass}`}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${labelClass}`}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={inputClass}
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="project-type" className={`block text-sm font-medium mb-2 ${labelClass}`}>
          Project Type
        </label>
        <select id="project-type" name="project-type" className={selectClass}>
          <option value="">Select a service</option>
          <option value="kitchen">Kitchen Remodeling</option>
          <option value="bathroom">Bathroom Remodeling</option>
          <option value="addition">Home Addition</option>
          <option value="renovation">Full Renovation</option>
          <option value="outdoor">Outdoor Project</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className={`block text-sm font-medium mb-2 ${labelClass}`}>
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>

      {status === 'success' && (
        <p className="text-green-600 text-sm">Thank you! We&apos;ll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <Button type="submit" variant="primary" className={`w-full ${isDark ? '!bg-white !text-[var(--color-metallic-blue)] hover:!bg-white/90' : ''}`}>
        {status === 'submitting' ? 'Sending...' : 'Submit Request'}
      </Button>
    </form>
  );
}

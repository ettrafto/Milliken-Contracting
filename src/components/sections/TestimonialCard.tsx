import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="bg-white p-6 md:p-8 rounded-sm shadow-md h-full flex flex-col">
      <p className="text-[var(--color-text)] leading-relaxed mb-6 flex-1 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer>
        <cite className="not-italic font-semibold text-[var(--color-metallic-blue)] tracking-[var(--tracking-tight)]">
          {testimonial.author}
        </cite>
        {testimonial.roleOrLocation && (
          <span className="block text-sm text-[var(--color-text-muted)]">
            {testimonial.roleOrLocation}
          </span>
        )}
      </footer>
    </blockquote>
  );
}

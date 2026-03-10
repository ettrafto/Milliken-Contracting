import { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  label,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      {label && (
        <p className="text-sm font-medium text-[var(--color-text-muted)]">{label}</p>
      )}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-[var(--color-warm-gray)]">
        {/* After image (full, behind) */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        {/* Before image (clipped to left portion) */}
        <div
          className="absolute left-0 top-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="absolute left-0 top-0 h-full object-cover object-left-top"
            style={{ width: `${position > 0 ? 10000 / position : 100}%` }}
            loading="lazy"
          />
        </div>
        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-md"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/90 shadow-md" />
        </div>
        {/* Range input (invisible, for interaction) */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-20 w-full cursor-ew-resize opacity-0"
          aria-label="Compare before and after images"
        />
      </div>
    </div>
  );
}

interface MapEmbedProps {
  embedUrl?: string;
}

export function MapEmbed({ embedUrl }: MapEmbedProps) {
  if (!embedUrl) {
    return (
      <div className="aspect-[16/9] bg-[var(--color-warm-gray)] rounded-lg flex items-center justify-center text-[var(--color-text-muted)]">
        Placeholder for map. Add your Google Maps embed URL to the contact data.
      </div>
    );
  }

  return (
    <div className="aspect-[16/9] rounded-lg overflow-hidden">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office location"
        className="w-full h-full"
      />
    </div>
  );
}

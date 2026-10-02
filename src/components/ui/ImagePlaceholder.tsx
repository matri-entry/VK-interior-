interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
  note?: string;
}

/**
 * Warm-toned placeholder for sections awaiting real project photography.
 * Never presented as actual VK Interior content.
 */
export function ImagePlaceholder({
  label,
  aspectRatio = "aspect-[4/3]",
  className = "",
  note,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder relative overflow-hidden ${aspectRatio} ${className}`}
      role="img"
      aria-label={label ? `Image placeholder: ${label}` : "Image coming soon"}
    >
      {/* Subtle texture pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(92,64,51,0.08) 20px,
            rgba(92,64,51,0.08) 21px
          )`,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-8 h-8 border border-charcoal/20 rounded-full flex items-center justify-center mb-3">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-charcoal/30"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21,15 16,10 5,21" />
          </svg>
        </div>
        {label && (
          <p className="font-display text-base text-charcoal/30 font-400 italic">
            {label}
          </p>
        )}
        {note && (
          <p className="font-body text-[10px] text-charcoal/25 mt-1 tracking-wide uppercase">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

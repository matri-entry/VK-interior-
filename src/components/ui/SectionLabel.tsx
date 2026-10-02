interface SectionLabelProps {
  number?: string;
  text: string;
  light?: boolean;
  className?: string;
}

export function SectionLabel({
  number,
  text,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label={`Section: ${text}`}
    >
      {number && (
        <span
          className={`font-body text-[10px] font-500 tabular-nums ${
            light ? "text-ivory/40" : "text-charcoal/40"
          }`}
        >
          {number}
        </span>
      )}
      <div
        className={`h-px w-8 ${light ? "bg-ivory/30" : "bg-charcoal/25"}`}
        aria-hidden="true"
      />
      <span
        className={`font-body text-[10px] font-500 tracking-[0.2em] uppercase ${
          light ? "text-ivory/60" : "text-charcoal/60"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

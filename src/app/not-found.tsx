import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="font-body text-[10px] font-500 tracking-[0.25em] uppercase text-charcoal/40 mb-6">
          404 — Not Found
        </p>
        <h1 className="font-display text-display-lg text-charcoal mb-5 italic font-300">
          Page not found.
        </h1>
        <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-4 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

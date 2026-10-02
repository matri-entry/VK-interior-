"use client";

import { whatsappUrl, callUrl } from "@/data/seo";
import { MessageCircle, Phone, FileText } from "lucide-react";
import Link from "next/link";

export function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      role="complementary"
      aria-label="Quick contact actions"
    >
      {/* Safe area spacer */}
      <div className="bg-charcoal/95 backdrop-blur-sm border-t border-white/10">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {/* WhatsApp */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-body font-500 tracking-wide uppercase">
              WhatsApp
            </span>
          </a>

          {/* Call */}
          <a
            href={callUrl}
            className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
            aria-label="Call VK Interior"
          >
            <Phone size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-body font-500 tracking-wide uppercase">
              Call
            </span>
          </a>

          {/* Estimate */}
          <Link
            href="/contact#estimation"
            className="flex flex-col items-center justify-center gap-1 py-3 text-walnut-light hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
            aria-label="Get free estimation"
          >
            <FileText size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-body font-500 tracking-wide uppercase">
              Estimate
            </span>
          </Link>
        </div>
        {/* iOS safe area */}
        <div className="h-safe-area-bottom bg-charcoal/95" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
      </div>
    </div>
  );
}

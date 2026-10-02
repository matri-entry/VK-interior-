"use client";

import { whatsappUrl } from "@/data/seo";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "pill" | "icon" | "full";
  className?: string;
}

export function WhatsAppButton({
  message,
  label = "WhatsApp Us",
  variant = "pill",
  className = "",
}: WhatsAppButtonProps) {
  const href = whatsappUrl(message);

  if (variant === "icon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#1da851] transition-colors duration-200 shadow-md ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} strokeWidth={1.5} />
      </a>
    );
  }

  if (variant === "full") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#25D366] text-white font-body font-500 text-sm tracking-wide rounded-sm hover:bg-[#1da851] transition-colors duration-200 ${className}`}
        aria-label={label}
      >
        <MessageCircle size={16} strokeWidth={1.5} />
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-body font-500 text-sm tracking-wide rounded-sm hover:bg-[#1da851] transition-colors duration-200 ${className}`}
      aria-label={label}
    >
      <MessageCircle size={15} strokeWidth={1.5} />
      {label}
    </a>
  );
}

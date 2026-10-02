import { forwardRef } from "react";
import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-charcoal text-ivory hover:bg-walnut border border-charcoal hover:border-walnut",
  secondary:
    "bg-ivory text-charcoal hover:bg-stone border border-ivory hover:border-stone",
  ghost:
    "bg-transparent text-charcoal hover:bg-stone/60 border border-charcoal/30 hover:border-charcoal/60",
  outline:
    "bg-transparent text-ivory hover:bg-white/10 border border-white/40 hover:border-white/70",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1da851] border border-[#25D366] hover:border-[#1da851]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.12em]",
  md: "px-6 py-3 text-sm tracking-[0.1em]",
  lg: "px-8 py-4 text-sm tracking-[0.12em]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const classes = `
      inline-flex items-center justify-center gap-2
      font-body font-500 uppercase rounded-sm
      transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `
      .trim()
      .replace(/\s+/g, " ");

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
